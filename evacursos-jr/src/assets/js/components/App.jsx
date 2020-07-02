import React, { useCallback, useState } from 'react';
import postService from '../services/posts';
import { hot } from 'react-hot-loader';

export default function App() {

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();
  const [user, setUser] = useState('');
  const [token, setToken] = useState();
  const [password, setPassword] = useState('');

  const [code, setCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [department, setDepartment] = useState('');
  const [campus, setCampus] = useState('');

  const [courses, setCourses] = useState();

  const fetchAuth = useCallback(async () => {
    setLoading(true);
    console.log("user: " + user);
    console.log("password: " + password);
    const user_token = await postService.getToken(user, password).catch(error => console.error('Error cool:', error));
    setToken(user_token);
    setLoading(false);
  });

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    console.log("code: " + code);
    console.log("course name: " + courseName);
    console.log("department: " + department);
    console.log("campus: " + campus);
    const coursesList = await postService.getCourses(token, code, courseName, department, campus).catch(error => console.error('Error cool:', error));
    console.log("courses list: ");
    console.log(coursesList);
    setCourses(coursesList);
    console.log("courses var: ");
    console.log(courses);
    setLoading(false);

  });

  if (loading) return <p> Loading ...</p>;
  if (!token) {
    return (
      <div>
        <p>Usuario: </p>
        <div className="field">
          <input type="text" name="user" onChange={event => setUser(event.target.value)} />
        </div>
  
        <p>Contraseña Evacursos Jr: </p>
        <div className="field">
          <input type="text" onChange={event => setPassword(event.target.value)} />
        </div>
  
        <button type="button" onClick={fetchAuth}> Ingresar </button>
        { post && (
          <>
            <h3>{post.token}</h3>
          </>
        )}
      </div>
    );
  }

  if (token && !courses){
    return (
      <div>
        <p>Código: </p>
        <div className="field">
          <input type="text" onChange={event => setCode(event.target.value)}  />
        </div>

        <p>Nombre del curso</p>
        <div className="field">
          <input type="text" onChange={event => setCourseName(event.target.value)} />
        </div>

        <p>Facultad: </p>
        <div className="field">
          <input type="text" onChange={event => setDepartment(event.target.value)}  />
        </div>

        <p>Campus: </p>
        <div className="field">
          <input type="text" onChange={event => setCampus(event.target.value)}  />
        </div>

        <button type="button" onClick={fetchCourses}> Buscar </button>

      </div>

    )
  }

  if (token && courses){
    return (
      <div>
        <p>Código: </p>
        <div className="field">
          <input type="text" onChange={event => setCode(event.target.value)}  />
        </div>

        <p>Nombre del curso</p>
        <div className="field">
          <input type="text" onChange={event => setCourseName(event.target.value)} />
        </div>

        <p>Facultad: </p>
        <div className="field">
          <input type="text" onChange={event => setDepartment(event.target.value)}  />
        </div>

        <p>Campus: </p>
        <div className="field">
          <input type="text" onChange={event => setCampus(event.target.value)}  />
        </div>

        <button type="button" onClick={fetchCourses}> Buscar </button>
        
        <div>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Facultad</th>
                <th>Campus</th>
                <th>Descripción</th>
                <th>Interés</th>
                <th>Dificultad</th>
                <th>Tiempo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{ courses[1].data.attributes.code }</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>

    )
  }
  


}

import React, { useCallback, useState } from 'react';
import postService from '../services/posts';
import { hot } from 'react-hot-loader';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const fetchNewPost = useCallback(async () => {
    setLoading(true);
    console.log("user: " + user);
    console.log("password: " + password);
    const newPost = await postService.getSearchedCourses(user, password).catch(error => console.error('Error cool:', error));
    setPost(newPost);
    setLoading(false);
  });

  if (loading) return <p> Loading ...</p>;
  return (
    <div>
      <p>Usuario: </p>
      <div className="field">
        <input type="text" name="user" onChange={event => setUser(event.target.value)} value={user} noValidate />
      </div>

      <p>Contraseña Evacursos Jr: </p>
      <div className="field">
        <input type="text" name="password" onChange={event => setPassword(event.target.value)} noValidate />
      </div>

      <button type="button" onClick={fetchNewPost}> Login and Search!</button>
      { post && (
        <>
          <h3>{post.token}</h3>
        </>
      )}
    </div>
  );

}

/*
function App() {
  return <div>Hello React World!</div>;
}
*/

//export default hot(module)(App);

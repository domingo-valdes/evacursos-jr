async function getSearchedCourses(email, password) {
  
  let url = 'https://evacursos.herokuapp.com/api/auth';
  let data = { email, password };
  // let data = {email: 'dvaldes3@uc.cl', password: '123456' };
  
  let ans = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
    },
  });

  return ans.json();

}

export default {
  getSearchedCourses,
}
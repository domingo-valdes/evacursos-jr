async function getToken(email, password) {
  
  let url = 'https://evacursos.herokuapp.com/api/auth';
  let data = { email, password };
  
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

async function getCourses(token, code, name, faculty, campus) {
  
  let url = 'https://evacursos.herokuapp.com/api/courses/search';
  let data = { code, name, faculty, campus };
  const bearedToken = ('Bearer ' + token.token);
  console.log(bearedToken);
  
  let ans = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'Authorization' : bearedToken,
    },
  });

  return ans.json();

}

export default {
  getToken,
  getCourses,
}
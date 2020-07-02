async function getSearchedCourses() {
  
  let url = 'https://evacursos.herokuapp.com/api/auth';
  let data = {email: 'dvaldes3@uc.cl', password: '123456' };
  
  let ans  = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
    }
  })

  
  //.then(res => res.json())
  //.catch(error => console.error('Error:', error))
  //.then(response => console.log('Success:', response));

  //mode: 'no-cors',

  //const post = await fetch('https://jsonplaceholder.typicode.com/posts/2');


  return ans.json();

  //return res;
  
 //const post = await fetch('https://jsonplaceholder.typicode.com/posts/2');
 //return post.json();
}

export default {
  getSearchedCourses,
}
async function getRandomPost() {
  const post = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  return post.json();
}

export default {
  getRandomPost,
}
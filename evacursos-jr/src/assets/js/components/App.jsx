import React, { useCallback, useState } from 'react';
import postService from '../services/posts';
import { hot } from 'react-hot-loader';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState();
  const fetchNewPost = useCallback(async () => {
    setLoading(true);
    const newPost = await postService.getRandomPost();
    setPost(newPost);
    setLoading(false);
  });

  if (loading) return <p> Loading ...</p>;
  return (
    <div>
      <button type="button" onClick={fetchNewPost}> Load Post</button>
      { post && (
        <>
          <h3>{post.title}</h3>
          <h3>{post.body}</h3>
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

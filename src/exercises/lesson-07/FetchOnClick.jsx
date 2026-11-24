import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleGetPost() {
    setIsLoading(true);
    setError('');
    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClicke={handleGetPost}>
        Get post
      </button>
      <div className="content">
        {isLoading && <p>Loading post...</p>}
        {error && <p>Error: {error}</p>}
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}

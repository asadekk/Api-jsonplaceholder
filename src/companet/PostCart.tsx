import React from 'react'
import DataTable from './DataTable';
interface PostCartProps {
  post: {
    title: string;
    body: string;
  };
}
function PostCart(props: PostCartProps) {
    const {post} = props;
    
  return (
    <div>
      <h1>PostCart</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  )
}

export default PostCart

// destructuring
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
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
      <h2 style={{fontFamily: "  sans-serif"}}>{post?.title}</h2>
      <p style={{fontSize:"22px", color: "green",fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}>{post?.body}</p>
    </div>
    </div>
  )
}

export default PostCart

// destructuring
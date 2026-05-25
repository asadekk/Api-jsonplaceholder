import React from 'react'
interface PostCart {
  id:number;
    title: string;
    body: string;
    userId:number
}

interface Props{
  post: PostCart[]
}



function PostCart({post}: Props) {

  
    
  return (
    <div>
      <h1>PostCart</h1>
      {
        post?.map((post)=>{
          return <>
          <h1>{post?.title}</h1>
          <i>{post?.body}</i>
          </>
        })
      }
    </div>
  )
}

export default PostCart

// destructuring
import React from 'react'
interface CommentList{
    id:number
    name:string,
    email:string,
    body:string
}

interface Props{
    comment: CommentList[]
}
function Comment({comment}:Props) {
    console.log(comment);
    
  return (
    <div>
        {
            comment?.map((comment)=>{
                return <>
                <div key={comment.id}>
                    <h1>{comment.name}</h1>
                    <h2>{comment.email}</h2>
                    <h2>{comment.body}</h2>
                </div>
                </>
            })
        }
    </div>
  )
}

export default Comment
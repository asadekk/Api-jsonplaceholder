import React, { useEffect, useState } from 'react'
import { getComment } from '../services/userService'
import Comment from '../companet/Comment';
function Comments() {
    const [ comment, setComment] = useState(null)

    async function fechtComment() {
        let res = getComment();
        setComment(res.data)
    }

    useEffect(()=>{
        fechtComment();
    })
    console.log(comment);
    
  return (
    <div>
        <Comment comment={comment} />
    </div>
  )
}

export default Comments
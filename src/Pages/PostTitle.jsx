import React from 'react'
import { useEffect, useState } from 'react';
import { getPost } from '../services/userService';
import PostCart from '../companet/PostCart';

function PostTitle() {
  const [post, setPost] = useState(null);

async function fetchData() {
  let res = await getPost();
  setPost(res.data);
}

useEffect(() => {
  fetchData();
}, [])

  return (
    <div>
      <h2>FOUR</h2>
      <PostCart post={post} />
    </div>
  )
}

export default PostTitle
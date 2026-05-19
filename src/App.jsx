import { useEffect, useState } from 'react';
import { getPost } from './services/userService';
import PostCart from './companet/PostCart';

function App() {
 const [posts, setPosts] = useState([]);

async function fechtdata() {
  let res = await getPost();
  setPosts(res.data);
}


useEffect(() => {
  fechtdata();
}, [])

console.log(posts);


  return <>
 <button title='Submit' type='delete'></button>
 <PostCart  title="My Post" body="This is the post body."/>
 {
  posts?.map((post)=>{
    return <div>
      <PostCart post={post}/>
    </div>
  })
 }
  {/* {
    posts.map((post)=>{
      return <div style={{display:"flex"}}>
        <ol  key={post.id} >
          <li>{post.title}</li>
          <li>{post.body}</li>
        </ol>
      </div>
    })
  } */}
  </>
}

export default App;
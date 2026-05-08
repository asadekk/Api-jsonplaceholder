import { useEffect, useState } from 'react';
import { getPost } from './services/userService';

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
  {
    posts.map((post)=>{
      return <div>
        <ol key={post.id} style={{ listStyleType: 'none',  border: "1px solid black", padding: "10px", margin: "10px" }}>
          <li>{post.title}</li>
          <li>{post.body}</li>
        </ol>
      </div>
    })
  }
  </>
}

export default App;
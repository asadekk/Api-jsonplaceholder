import { useEffect, useState } from 'react';
import { getPost, getUsers } from './services/userService';


function App() {
 const [posts, setPosts] = useState([]);
 const [users, setUsers] = useState([])

async function fechtdata() {
  let res = await getPost();
  setPosts(res.data);
}
async function fechtUsers(){
  let res = await getUsers();
  setUsers(res.data)
}

useEffect(() => {
  fechtdata();
  fechtUsers()
}, [])

console.log(posts);

  return <>
  {/* {
    posts.map((post)=>{
      return <div style={{display:"flex"}}>
        <ol  key={post.id} >
          <li>{post.title}</li>
          <li>{post.body}</li>
        </ol>
      </div>
    })
  }, */}
  {
    users.map((user)=>{
      return <div key={user.id} style={{ textAlign:"center", height:"200px",width:"300px",borderRadius:"30px",border:"1px solid red", marginBottom:'10px'}}>
        <h1 style={{fontFamily:"cursive"}}>{user.name}</h1>
        <h2 style={{fontFamily:"cursive"}}>{user.username}</h2>
        <h2 style={{fontFamily:"cursive"}}>{user.amail}</h2>
      </div>
    })
  }
  </>
}

export default App;
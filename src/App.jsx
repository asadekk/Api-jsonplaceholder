import { useEffect, useState } from 'react';
import { getPost } from './services/userService';
import PostCart from './companet/PostCart';
import DataTable from './companet/DataTable';

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

const columns = [
  { name: 'Ism',    key: 'name'   },
  { name: 'Rol',    key: 'role'   },
  { name: 'Maosh',  key: 'salary' },
]

const data = [
  { id: 1, name: 'Aria Chen',   role: 'Engineering Lead', salary: '$155,000' },
  { id: 2, name: 'Marcus Webb', role: 'Product Manager',  salary: '$132,000' },
  { id: 3, name: 'Sara Johnson',role: 'Designer',         salary: '$98,000'  },
]
  return <>

 <DataTable columns={columns} data={data} />

 {
  posts?.map((post)=>{
    return <div>
      <PostCart post={post}/>
    </div>
  })
 }
  {/* {
    posts.map((post)=>
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
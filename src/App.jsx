import { useEffect, useState } from 'react';
import { getPost } from './services/userService';
import PostCart from './companet/PostCart';
import DataTable from './companet/DataTable';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';


function App() {
 const [posts, setPosts] = useState([]);

async function fetchData() {
  let res = await getPost();
  setPosts(res.data);
}


useEffect(() => {
  fetchData();
}, [])

console.log(posts);

const columns = [
  { name: 'Ism',    key: 'name'   },
  { name: 'Rol',    key: 'role'   },
  { name: 'Oylik',  key: 'salary' },
]

const data = [
  { id: 1, name: 'Aria Chen',   role: 'Engineering Lead', salary: '$155,000' },
  { id: 2, name: 'Marcus Webb', role: 'Product Manager',  salary: '$132,000' },
  { id: 3, name: 'Sara Johnson',role: 'Designer',         salary: '$98,000'  },
]

  return <>
  <div>
    <Routes>
      <Route path='' element={<Layout></Layout>} />
      <Route path='/DataTable' element={<DataTable columns={columns} data={data}></DataTable>} />
      <Route path='/PostCart' element={<PostCart></PostCart>} />
    </Routes>
  </div>
  </>
}

export default App;
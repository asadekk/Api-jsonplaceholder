
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

import DataUsers from './Pages/DataUsers';
import PostTitle from './Pages/PostTitle';
import Todos from './Pages/Todos';
import Comments from './Pages/Comments';
import User from './Pages/User';
import Photos from './Pages/Photos';

function App() {
  return <>
  <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='DataUsers' element={<DataUsers></DataUsers>} />
        <Route path='PostTitle' element={<PostTitle></PostTitle>} />
        <Route path='TodoList' element={<Todos></Todos>} />
        <Route path='Comments' element={<Comments></Comments>} />
        <Route path='Users' element={<User></User>} />
        <Route path='Photos' element={<Photos></Photos>} />
      </Route>
    </Routes>
  </div>
  </>
}

export default App;
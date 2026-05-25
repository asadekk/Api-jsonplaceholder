import React from 'react'
import { Link, Outlet } from "react-router-dom"
function Layout() {
  return (
   <div>
     <div>
        <ul>
            <li><Link to="/DataUsers">DataUsers</Link></li>
            <li><Link to="/PostTitle">PostCart</Link></li>
            <li><Link to="/TodoList">TodoList</Link></li>
            <li><Link to="/Comments">Comments</Link></li>
            <li><Link to="/Users">Users</Link></li>
            <li><Link to="/Photos">Photos</Link></li>
        </ul>
    </div>
    <main>
        <Outlet></Outlet>
    </main>
   </div>
  )
}

export default Layout
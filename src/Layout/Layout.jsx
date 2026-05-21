import React from 'react'
import { Link, Outlet } from "react-router-dom"
function Layout() {
  return (
   <div>
     <div>
        <ul>
            <li><Link to="/DataTable">DataTable</Link></li>
            <li><Link to="/PostCart">PostCart</Link></li>
        </ul>
    </div>
    <main>
        <Outlet></Outlet>
    </main>
   </div>
  )
}

export default Layout
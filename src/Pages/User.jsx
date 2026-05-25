import React, { useEffect, useState } from 'react'
import { getUser } from '../services/userService'
import Users from '../companet/Users'

function User() {
    const [user,setUser] = useState(null)

    async function fechtUsers(){
        let res = await getUser();
        setUser(res.data)
    }

    useEffect(()=>{
        fechtUsers()
    })
  return (
    <div>
        <Users user={user}/>
    </div>
  )
}

export default User
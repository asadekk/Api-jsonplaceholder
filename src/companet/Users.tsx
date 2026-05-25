import React from 'react'

interface UsersPost{
    id:number,
    name:string,
    username:string,
    email:string,
    phone:number,
    website:string
    company:{
      bs:string,
      catchPhrase:string,
      name:string
    }
    address:{
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo:{
          lat:number,
          lng:number
        }
    }
}
interface Props{
  user: UsersPost[]
}

function Users({user}:Props) {
  console.log(user);
  
  return (
    <div>
       {
        user?.map((user)=>{
            return <>
                 <ol key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>{user.address.street}</li>
                    <li>{user.address.suite}</li>
                    <li>{user.address.city}</li>
                    <li>{user.address.zipcode}</li>
                 </ol>
            </>
        })
       }
    </div>
  )
}

export default Users
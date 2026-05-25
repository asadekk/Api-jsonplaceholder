import React, { useEffect, useState } from 'react'
import { getTodo } from '../services/userService'
import TodoList from '../companet/TodoList';
function Todos() {
    const [todo,setTodo] = useState(null)

    async function fechtTodo() {
        let res = await getTodo();
        setTodo(res.data)
    }

    useEffect(()=>{
        fechtTodo();
    },[])
  return (
    <div>
        <h1>Todo list</h1>
        <TodoList todo={todo}/>
    </div>
  )
}

export default Todos
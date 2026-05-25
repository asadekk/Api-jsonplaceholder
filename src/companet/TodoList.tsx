import React from 'react'

interface Todoslist{
    id:number
    title:string,
    completed:boolean,
    userId:number
}

interface Props{
    todo: Todoslist[]
}

function TodoList({todo}:Props) {
    console.log(todo);
    
  return (
    <div>
        {
            todo?.map((todo)=>{
                return <>
                <em>{todo.title}</em>
                <h2>{todo.completed}</h2>
                </>
            })
        }
    </div>
  )
}

export default TodoList
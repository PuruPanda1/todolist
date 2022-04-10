import React from 'react'
import TodoItem from './TodoItem'
export default function TodoList(props) {
  return (
    <div className="container">
        <h1 className='text-center my-3'>To-do list</h1>
        {props.todoArray.length===0 ?<h6 className='text-center my-3 text-primary'>Empty Todo List</h6>
        :<TodoItem todoArray={props.todoArray} onDelete={props.onDelete}/>
        }
    </div>
  )
}

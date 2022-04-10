import React from "react";

export default function TodoItem(props) {
  return (
    <div className="each_todo">
      <ol className="list-group list-group-numbered">
        {props.todoArray.map(todo=>(
        <li key={todo.sn} className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{todo.title}</div>
            {todo.description}
          </div>
          <span><button className="btn btn-sm btn-primary" onClick={()=>{props.onDelete(todo)}}>Delete</button></span>
        </li>
        ))}
      </ol>
    </div>
  );
}

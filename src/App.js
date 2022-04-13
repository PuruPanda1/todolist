import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import TodoList from "./components/TodoList";
import AddToDo from "./components/AddToDo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
function App() {
  let initTodo;
  if (localStorage.getItem("todoArray") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todoArray"));
  }
  // ! Delete function
  const onDelete = (todo) => {
    // Deleting the todo
    settodoArray(
      todoArray.filter((e) => {
        return e !== todo;
      })
    );
  };
  // * add function
  const addtodo = (title, desc, setTitle, setDesc, num) => {
    let sn;
    if (todoArray.length === 0) {
      sn = 1;
    } else {
      sn = todoArray[todoArray.length - 1].sn + 1;
    }
    const mytodo = {
      sn: sn,
      title: title,
      description: desc,
    };
    setTitle("");
    setDesc("");
    settodoArray([...todoArray, mytodo]);
  };
  // !not working as of now ... on edit function for edit button
  const onEdit = (todo) => {
    let t = todo["title"];
    let d = todo["description"];
    console.log(t + " " + d);
    onDelete(todo);
  };
  // * todoArray use state variable
  const [todoArray, settodoArray] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <Router>
      <Navbar title="Todo List" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddToDo addtodo={addtodo} />
              <TodoList
                todoArray={todoArray}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

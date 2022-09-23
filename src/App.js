import logo from "./logo.svg";
import "./App.css";
import CreateTodo from "./CreateTodo";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <CreateTodo list={list} setList={setList} todo={todo} setTodo={setTodo} />
      <TodoList list={list} />
    </div>
  );
}

export default App;

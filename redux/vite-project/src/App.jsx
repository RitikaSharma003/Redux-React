import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Todos from "./components/Todos";
import "./App.css";
import Addtodo from "./components/Addtodo";

function App() {
  return (
    <div>
      <h1>Task Manager</h1>
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;

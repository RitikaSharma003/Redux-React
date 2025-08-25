import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/task/todoSlice";
const Addtodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit ">Add</button>
    </form>
  );
};

export default Addtodo;

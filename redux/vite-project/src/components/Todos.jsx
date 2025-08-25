import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/task/todoSlice";
// if we need any action then we have to dispatch that action
const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </>
  );
};

export default Todos;

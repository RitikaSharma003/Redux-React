import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Count";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/countSlice";
function App() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Increment</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <Counter />
      <h1>Decrement</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;

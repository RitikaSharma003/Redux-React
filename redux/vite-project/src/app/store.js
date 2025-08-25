import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/task/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
});

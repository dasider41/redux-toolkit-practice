import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware :[],
});

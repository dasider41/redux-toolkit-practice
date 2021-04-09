import React from "react";
import { Counter } from "./features/counter/Counter";
import { TodoApp } from "./features/todos/Todos";
import "./App.css";

const App = () => {
  return (
    <>
      <Counter />
      <TodoApp />
    </>
  );
};

export default App;

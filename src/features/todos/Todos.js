import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo, selectTasks } from "./todosSlice";
import TodoInsert from "../../components/TodoInsert";
import TodoList from "../../components/TodoList";

export function TodoApp() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const onInsert = (text) => {
    dispatch(addTodo({text}));
  };

  const onToggle = (id) => {
    dispatch(toggleTodo({ id }));
  };

  const onRemove = (id) => {
    dispatch(removeTodo({ id }));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList tasks={tasks} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

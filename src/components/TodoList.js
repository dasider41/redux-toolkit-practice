import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onToggle, onRemove }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No todo list</p>
      ) : (
        <ul>
          {tasks.map((task, i) => (
            <TodoItem
              key={i}
              task={task}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

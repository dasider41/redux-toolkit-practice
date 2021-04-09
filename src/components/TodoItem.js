import React from "react";

const TodoItem = ({ task, onToggle, onRemove }) => {
  const textStyle = {
    textDecoration: task.completed ? "line-through" : "none",
  };

  const handleOnToggle = () => {
    onToggle(task.id);
  };

  const handleOnRemove = () => {
    onRemove(task.id);
  };

  return (
    <li>
      <span style={textStyle} onClick={handleOnToggle}>
        {task.text}
      </span>
      <button style={textStyle} onClick={handleOnRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;

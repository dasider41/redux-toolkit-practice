import React, { useState } from "react";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} placeholder="Enter text here" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoInsert;

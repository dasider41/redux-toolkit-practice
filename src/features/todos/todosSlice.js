import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
let nextId = 0;

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextId++,
        text: action.payload.text,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      task.completed = !task.completed;
    },
    removeTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export const selectTasks = (state) => state.todos;

export default todosSlice.reducer;

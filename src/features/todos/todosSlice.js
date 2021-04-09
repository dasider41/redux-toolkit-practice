import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => ({
        payload: {
          id: nextId++,
          text: text,
          completed: false,
          timestamp: Date.now(),
        },
      }),
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

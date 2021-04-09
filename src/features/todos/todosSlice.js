import { nanoid, createSlice } from "@reduxjs/toolkit";

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
          id: nanoid(),
          text: text,
          completed: false,
          timestamp: new Date().toLocaleDateString(),
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

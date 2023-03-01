import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateToDo, Todo, TodosState } from '../models';

const initialState: TodosState = {
  list: [],
  modalActive: false,
  modalTodo: { id: 0, title: '', description: '', completed: false },
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<CreateToDo>) {
      state.list.push({
        id: state.list.length + 1,
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<number>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
        state.modalTodo = toggledTodo;
      }
    },
    toggleModal(state, action: PayloadAction<boolean>) {
      state.modalActive = action.payload;
    },
    setTodoToModal(state, action: PayloadAction<Todo>) {
      state.modalTodo = action.payload;
    },
  },
});

export const { addTodo, toggleComplete, toggleModal, setTodoToModal } =
  todoSlice.actions;

export default todoSlice.reducer;

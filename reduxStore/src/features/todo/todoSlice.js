import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo:(state,action)=>{
      const todo={ 
       id :nanoid(),
       text: action.payload
   }

   state.push(todo)
},
    removeTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo(state, action) {
      const { id, text } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    }
  }
});

export const { addTodo, removeTodo, toggleTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

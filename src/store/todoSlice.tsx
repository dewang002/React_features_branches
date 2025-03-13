import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        data:[]
    },
    reducers:{
        addTodo: (state, action) => {
            state.data.push(action.payload)
        },
        toggleTodo: (state, action) => {
            let todo = state.data.find(item => item.id === action.payload)
            if(todo){
                todo.done = !todo.done
            }
        },
        editTodo: (state, action) => {
            const {id, editValue, editDescription} = action.payload
            if(id){
                const todo = state.data.find(item => item.id==id)
                todo.value = editValue;
                todo.description = editDescription;
            }
        },
        deleteTodo: (state, action) => {
            const filtered = state.data.filter(item => item.id !== action.payload)
            state.data = filtered;
        }
    }
})

export const {addTodo, toggleTodo, editTodo, deleteTodo} = todoSlice.actions; 
export default todoSlice.reducer;
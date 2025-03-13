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
            const {id, value, description} = action.payload
            const todoIndex = state.data.findIndex(item => item.id === id)
            if(todoIndex !== -1){
                state.data[todoIndex] = {
                    ...state.data[todoIndex],
                    value,
                    description
                }
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
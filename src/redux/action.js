import { Add_Todo, Inc_counter, Update_a,Delete_todo } from "./actionTypes.js";

export const update_a = (payload) =>({type:Update_a, payload})


export const increment = () => ({type:Inc_counter})

export const addtodo = (payload) =>({type:Add_Todo,payload});

export const deletetodo = (payload) =>({type:Delete_todo,payload});
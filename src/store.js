import { legacy_createStore } from "redux";
import {Inc_counter, Dec_counter,Add_Todo, Update_a, Delete_todo} from "./redux/actionTypes.js"

// store
let initialState  = {
    a:1,
    counter:0,
    todo:[]
}

// reducer function
const reducerFunction = (state=initialState, action) =>{
    const {type,payload}= action;
    switch(type){
        case Update_a:{
            return{
                ...state,
                a:payload,
            };
        }
        case Inc_counter:{
            return{
                ...state,
                counter:state.counter+1,
            }
        }
        case Dec_counter:{
            return{
                ...state,
                counter:state.counter-1,
            }
        }
        case Add_Todo:{
            return{
                ...state,
                todo:[...state.todo,payload],
            }
        }
        case Delete_todo:{
          const filterTodo  = state.todo.filter(todo => todo != payload);
          return{
            ...state,
            todo: filterTodo,
          }
        }
        default:{
            return state;
        }
    }
};
// action  & types


 export const store = legacy_createStore(reducerFunction)
 
//  export const  state = store.getState();
//  export const dispatch = store.dispatch();
import {store } from "./store.js";
import { func2 } from "./2.js";
import { Add_Todo, Dec_counter, Delete_todo, Inc_counter } from "./redux/actionTypes.js";
import { addtodo, increment , deletetodo} from "./redux/action.js";

const func1 = () =>{
    let state = store.getState().a
    console.log(state.a);
    console.log(state.counter);
    store.dispatch({type:"update", payload:state.a+5});
    console.log(state);
};

const increDec = ()=>{
    let state = store.getState()
    console.log(state.counter);
    
    store.dispatch(increment());    

    console.log(state.counter);

   store.dispatch({type:Dec_counter})
   
    console.log(state.counter);
    store.dispatch(addtodo("hello 1"))
    store.dispatch(addtodo("hello 2"))
    store.dispatch(addtodo("hello 2"))
    store.dispatch(addtodo("hello 4"))
    store.dispatch(addtodo("hello 5"))

    // console.log(state().todo);

    store.dispatch(deletetodo("shy")) ;
    console.log(state.todo);

}
func1();
func2();
increDec();
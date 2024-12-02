import {store } from "./store.js";


const func2 = () =>{
    store.dispatch({type:"update", payload:12});
    console.log(store.getState());
};

export {func2};
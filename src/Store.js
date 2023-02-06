import { createStore } from "redux";
import Reducer from "./Reducer";

const store = createStore(Reducer);

store.subscribe(()=>{
    console.log("store Changed", store.getState());
})

store.dispatch({
    type: "bugAdded",
    payload: {
        description:"bug1"
    }
});
store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
})

export default store;
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import HaydayReducer from "./Reducers/HaydayReducer";


const reducers = combineReducers({
    hayday : HaydayReducer
});

const store = createStore(reducers,applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()))
export default store;
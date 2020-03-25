import { combineReducers } from "redux";
import { ListReducer } from "./todolist-reducer";
import UserReducer from "./user-reducer";

const rootReducer = combineReducers({
    list: ListReducer,
    user: UserReducer
})

export default rootReducer
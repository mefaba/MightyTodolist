import rootReducer from "./root-reducer";
import { createStore } from "redux";


export const store = createStore(rootReducer)

export default store
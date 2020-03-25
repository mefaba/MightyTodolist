/* IMPORT */
import { createAction } from "@reduxjs/toolkit"
/* END IMPORT */


/* ACTİON */
export const addItem = createAction("ADD_ITEM")
export const removeItem = createAction("REMOVE_ITEM")
export const clearList = createAction("CLEAR_LIST")
/* END ACTİON */


/* REDUCER */
const initial_List = {
  todolist: [
    {text: "Herşey ilk adımla başlar.", id: 12345},
  ],
}
export const ListReducer = (state = initial_List, action) => {
    switch(action.type){
        case addItem.type:
          const newtodoItem = {
            text: action.payload,
            id: Math.random()
          }
          return { ...state, todolist: [...state.todolist,newtodoItem] }
        case removeItem.type:
          /* action.payload = id coming from Todo-Item.unit.js deleteItem(id) */
          const listAfterRemove = state.todolist.filter(function(todo){
            return todo.id !== action.payload
          })
          return {...state, todolist: listAfterRemove}
        case clearList.type:
          return {...state, todolist: [{text: "Herşey ilk adımla başlar.", id: 12345}]}
        default:
            return state
            
    }
  }


export default ListReducer
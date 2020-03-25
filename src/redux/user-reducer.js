/* IMPORT */
import { createAction } from "@reduxjs/toolkit"
/* END IMPORT */

/* ACTİON */
export const signInUser = createAction("SIGN_IN_USER")
export const signOutUser = createAction("SIGN_OUT_USER")
export const setUserEmail = createAction("SET_USER_EMAIL")
/* END ACTİON */


/* REDUCER */
const initial_status = {
    isSignedIn: false,
    userEmail: ""
  }
export const UserReducer = (state = initial_status, action) => {
    switch(action.type){
        case signInUser.type:
            return {...state, isSignedIn: true}
        case signOutUser.type:
            return {...state, isSignedIn: false, userEmail: ""}
        case setUserEmail.type:
            return{...state, userEmail: action.payload}
        default:
            return state

    }
}

export default UserReducer
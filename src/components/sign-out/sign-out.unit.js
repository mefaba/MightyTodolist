import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '../../redux/user-reducer';
import { clearList } from '../../redux/todolist-reducer';

const SignOut = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.user.userEmail)
    const todolist = useSelector(state => state.list.todolist)
    const sending_todolist = todolist.map(x => x.text)

    const putData = async (url = 'http://localhost:3000/user_todolist', data = {}) => {
        const response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(data), 
          headers: {  'Content-Type': 'application/json'} 
        });
        return await response.json();
    }

    function HandleSubmit(){
        putData(undefined,{email:email, todolist: sending_todolist})
        dispatch(signOutUser())
        dispatch(clearList())
    }

    return(
        <div><button onClick={()=>HandleSubmit()}>{`Save & Sign Out`}</button></div>
    )
}


export default SignOut
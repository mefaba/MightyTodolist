import React,{useState} from 'react';
import "./sign-in.css"
import { signInUser, setUserEmail } from '../../redux/user-reducer';
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/todolist-reducer';

function SignIn (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();


    const handleChange = (event) => {
        /* const {value,name} = event.target */
        if(event.target.name ==="email"){setEmail(event.target.value)} /* if email */
        else if(event.target.name === "password"){setPassword(event.target.value)} /* if password */
       
    }

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // GET, POST, PUT, DELETE, etc.
          body: JSON.stringify(data), // body data type must match "Content-Type" header
          headers: {  'Content-Type': 'application/json'}  // 'Content-Type': 'application/x-www-form-urlencoded',
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    const handleSubmit = () => {
        postData('http://localhost:3000/signin', { email: email, password: password})
        /* .then((server_answer) => server_answer?console.log("Sign In Success"):null ); */
        /* .then((server_answer) => server_answer?dispatch(signInUser()):null );  */
        .then((server_answer) => {
            if(server_answer.status===true){
                /* SIGN IN USER */
                dispatch(signInUser())
                /* SET EMAİL */
                dispatch(setUserEmail(email))
                /* GET USER TODOLİST DATA FROM DATABASE */
                postData('http://localhost:3000/user_todolist',{ email: email}).then(db_todolist=> {
                    console.log("in promise", db_todolist[0].todolist)
                    const actual_db_todolist = db_todolist[0].todolist
                    actual_db_todolist.forEach(x => {
                        dispatch(addItem(x))
                    });
                        
                })
            }
        });
        // JSON data parsed by `response.json()` call
        /* ıf server answer true sign in user */
    }

    return(
      
        <div className="sign-in">
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={handleChange}></input>

            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange}></input>

            <button onClick={handleSubmit}>Sign In</button>
        </div>
        
    )
}

export default SignIn



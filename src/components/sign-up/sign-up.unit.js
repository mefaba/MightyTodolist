import React,{useState} from 'react';
import "./sign-up.css"

function SignUp (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nickname, setNickname] = useState("")
    const [status,setStatus] = useState(false)

    const handleChange = (event) => {
        /* const {value,name} = event.target */
        if(event.target.name ==="email"){setEmail(event.target.value)} /* if email */
        else if(event.target.name === "password"){setPassword(event.target.value)} /* if password */
        else if(event.target.name === "nickname"){setNickname(event.target.value)} /* if nickname */
    }
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          body: JSON.stringify(data), // body data type must match "Content-Type" header
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    
    const handleSubmit = () => {
        postData('https://nameless-plateau-49737.herokuapp.com/signup', { email: email, password: password, name: nickname })
        .then((data) => {
        if(data==='success'){
            setStatus(true)
        }
        
     });
    }


    return status?(<div className="signup-message">Sign up is succesfull.<br></br> Welcome, now you can sign in</div>)
     :  (
        <div className="sign-up">

            <label>Nick Name</label>
            <input type="text" name="nickname" value={nickname} onChange={handleChange}></input>

            <label>Email</label>
            <input type="email" name="email" value={email} onChange={handleChange}></input>

            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} 
                   onKeyPress = {(event)=>(event.charCode === 13)?handleSubmit():null}></input>

            <button onClick={handleSubmit}>Sign Up</button>
        </div>
        )
}

export default SignUp
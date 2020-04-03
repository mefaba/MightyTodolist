import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import "./sign-up.css"


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function SignUp (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nickname, setNickname] = useState("")
    const [status,setStatus] = useState(false)

    const classes = useStyles();

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
            <Container component="div" maxWidth="xs">
            
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nick Name"
                    name="nickname"
                    autoComplete="name"
                    autoFocus
                />

                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    onChange={handleChange}
                    error = {password.length>5?false:true}
                    helperText="Password must be of minimum 6 characters"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <Button
                    onClick={handleSubmit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>

            </div>
        </Container >
        )
}

export default SignUp


/* <div className="sign-up">

<label>Nick Name</label>
<input type="text" name="nickname" value={nickname} onChange={handleChange}></input>

<label>Email</label>
<input type="email" name="email" value={email} onChange={handleChange}></input>

<label>Password</label>
<input type="password" name="password" value={password} onChange={handleChange} 
       onKeyPress = {(event)=>(event.charCode === 13)?handleSubmit():null}></input>

<button onClick={handleSubmit}>Sign Up</button>
</div> */
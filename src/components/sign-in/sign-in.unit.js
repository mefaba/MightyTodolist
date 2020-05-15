import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import "./sign-in.css"
import { signInUser, setUserEmail } from '../../redux/user-reducer';
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/todolist-reducer';


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

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = (event) => {
        /* const {value,name} = event.target */
        if (event.target.name === "email") { setEmail(event.target.value) } /* if email */
        else if (event.target.name === "password") { setPassword(event.target.value) } /* if password */

    }

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(data), // body data type must match "Content-Type" header
            headers: { 'Content-Type': 'application/json' }  // 'Content-Type': 'application/x-www-form-urlencoded',
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    const handleSubmit = () => {
        console.log("handle submit, sent")
        postData('https://nameless-plateau-49737.herokuapp.com/signin', { email: email, password: password })
            /* .then((server_answer) => server_answer?console.log("Sign In Success"):null ); */
            /* .then((server_answer) => server_answer?dispatch(signInUser()):null );  */
            .then((server_answer) => {
                if (server_answer.status === true) {
                    /* SIGN IN USER */
                    dispatch(signInUser())
                    /* SET EMAİL */
                    dispatch(setUserEmail(email))
                    /* GET USER TODOLİST DATA FROM DATABASE */
                    postData('https://nameless-plateau-49737.herokuapp.com/user_todolist', { email: email }).then(db_todolist => {
                        /* console.log("in promise", db_todolist[0].todolist) */
                        const actual_db_todolist = db_todolist[0].todolist
                        if (actual_db_todolist !== null) {
                            actual_db_todolist.forEach(x => {
                                dispatch(addItem(x))
                            });
                        }

                    })
                }
            });
        // JSON data parsed by `response.json()` call
        /* ıf server answer true sign in user */
    }

    return (
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
                    error={email.length?false:true}
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
                    onKeyPress={(event) => (event.charCode === 13) ? handleSubmit() : null}
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

export default SignIn


/* OLD CODE BEFORE MATERİAL UI */

/* <div className="sign-in">
    <label>Email</label>
    <input type="email" name="email" value={email} onChange={handleChange}></input>

    <label>Password</label>
    <input type="password" name="password" value={password} onChange={handleChange}
        onKeyPress={(event) => (event.charCode === 13) ? handleSubmit() : null}></input>

    <button onClick={handleSubmit}>Sign In</button>
</div> */
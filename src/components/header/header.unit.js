import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"


import SignOut from '../sign-out/sign-out.unit';




const HeaderUnit = (props) => {
    
    const { isSignedIn } = props
    /* console.log(props) */
    return(
        <div className="header-unit">
            <div><h1><Link to="/">To Do List</Link></h1></div>
            {isSignedIn
            ?<SignOut />
            :<div className="header-options">
                <div><Link to="/signin">Sign In</Link></div>
                <div><Link to="/signup">Sign Up</Link></div>
             </div>
            }
        </div>
    )
}

export default HeaderUnit

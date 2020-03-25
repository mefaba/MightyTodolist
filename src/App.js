import React from 'react';
import './App.css';

import TodoList from "./components/todo-list/Todo-List.unit"
import TodoInput from './components/todo-input/todo-input.unit';
import HeaderUnit from './components/header/header.unit';

import {Switch,Route} from "react-router-dom";
import { withRouter, Redirect } from "react-router-dom"

import SignIn from './components/sign-in/sign-in.unit';
import SignUp from './components/sign-up/sign-up.unit';

import { connect } from "react-redux" 
import { signInUser, signOutUser } from './redux/user-reducer';

const mapStateToProps = (state,ownProps) => {
  return {
      isSignedIn: state.user.isSignedIn,
      ownProps
  }
}

const mapDispatchToProps = dispatch => {
  return {
      signInUser: () => dispatch(signInUser),
      signOutUser: () => dispatch(signOutUser)
    }
}


class App extends React.Component{
    render(){
      /* const { location } = this.props.ownProps
      console.log(this.props.ownProps)
      console.log(location.pathname) */
      return (
          <div className="App">
              <HeaderUnit isSignedIn = {this.props.isSignedIn}/>
              <Route exact path="/">
                <TodoInput />
                <TodoList/>
              </Route>
              <Switch>
                <Route path="/signin">
                  {this.props.isSignedIn ? <Redirect to="/" /> : <SignIn />}
              </Route>
                <Route path="/signup" component={SignUp}/>
              </Switch>
          </div>
      );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
/* export default App */


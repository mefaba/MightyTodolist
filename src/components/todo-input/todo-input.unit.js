import React from 'react';
import { addItem } from '../../redux/todolist-reducer';
import { connect } from 'react-redux';

import "./todo-input.css"

/* const mapStateToProps = state => {
    return {
        todolist: state.list.todolist,
        isSignedIn: state.user.isSignedIn,
        userEmail: state.user.userEmail
    }
  } */

const mapDispatchToProps = dispatch => {
  return {
      addItem: (text) => text.length ? dispatch(addItem(text)) : null
    }
}


class TodoInput extends React.Component{
    constructor() {
        super();
        this.state = { 
          text: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    handleSubmit = () => {
        this.props.addItem(this.state.text)
        this.setState({text: ""})
    }
        
        
    render(){
        return(
            <div className="todo-input">
                <input
                    type="text"
                    placeholder="Enter your desires" 
                    onChange = {this.handleChange}
                    value = {this.state.text}
                    onKeyPress = {(event)=>(event.charCode === 13)?this.handleSubmit():null}
                    >
                </input>
                <button onClick= {this.handleSubmit}>Enter</button>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(TodoInput);
/* export default TodoInput */
import React from 'react';
import TodoItem from '../todo-item/Todo-Item.unit';
import { connect } from 'react-redux';

import "./todo-list.css"

const mapStateToProps = state => {
  return {
      todolist: state.list.todolist,
      /* isSignedIn: state.user.isSignedIn,
      userEmail: state.user.userEmail */
  }
}

class TodoList extends React.Component{
    constructor(){
        super()
    
        this.state = {
            
        }
    }

    
    render(){
        const { todolist } = this.props

        return(
            <div className="todo-list">
                {
                  todolist.map((todoitemX,index) => {
                            return <TodoItem key = {todoitemX.id} todoitem = {todoitemX.text} id = {todoitemX.id}/>
                        }
                    )
                }
                
            </div>
        )
    }
}


export default connect(mapStateToProps,null)(TodoList);


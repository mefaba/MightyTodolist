import React from 'react';
import { connect} from "react-redux"
import { removeItem } from '../../redux/todolist-reducer';

import "./todo-item.css" /* STYLE */


const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => dispatch(removeItem(id))
      }
  }
  
  
  class TodoItem extends React.Component{
  
      render(){
          const {deleteItem} = this.props
          const {todoitem, id} = this.props
          return(
              <div className="todo-item">
                  <p>{todoitem}</p>
                  <button onClick={() => deleteItem(id)}>Delete</button>
              </div>
          )
      }
  }
  
  export default connect(null,mapDispatchToProps)(TodoItem);


/* const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => dispatch(removeItem(id))
      }
  }
  
  
  class TodoItem extends React.Component{
  
      render(){
          const {deleteItem} = this.props
          const {todoitem, id} = this.props
          return(
              <div className="todo-item">
                  <p>{todoitem}</p>
                  <button onClick={() => deleteItem(id)}>Delete</button>
              </div>
          )
      }
  }
  
  export default connect(null,mapDispatchToProps)(TodoItem); */
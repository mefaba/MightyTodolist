import React, { useEffect, useState } from "react";
import TodoItem from "../todo-item/Todo-Item.unit";
import { useSelector } from "react-redux";
import "./todo-list.css";
import { List, arrayMove, arrayRemove } from "baseui/dnd-list";

const TodoList = () => {
	const todolist = useSelector((state) => state.list.todolist);
	const [items, setItems] = useState([]);

	useEffect(()=>{
        setItems(todolist)
    },[todolist])


	return (
        <div /* className="todo-list" */>
		<List
			items={ items.map((todoitemX, index) => <TodoItem todoitem={todoitemX.text} id={todoitemX.id} />) }
			
			onChange={({ oldIndex, newIndex }) =>
				setItems(
                    newIndex === -1 
                    ? arrayRemove(items, oldIndex) 
                    : arrayMove(items, oldIndex, newIndex)
				)
			}
		/>
        </div>
	);
};
export default TodoList;

/* export default connect(mapStateToProps,null)(TodoList); */

/* const mapStateToProps = state => {
    return {
        todolist: state.list.todolist,
        isSignedIn: state.user.isSignedIn,
        userEmail: state.user.userEmail
    }
  } */

//STABLE

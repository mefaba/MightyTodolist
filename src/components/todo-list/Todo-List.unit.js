import React from "react";
import TodoItem from "../todo-item/Todo-Item.unit";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./todo-list.css";

const TodoList = () => {
	const todolist = useSelector((state) => state.list.todolist);
    const constraintsRef = useRef(null);
    console.log(todolist)
    //oldindex
    //newindex
    const todolist_test = ["Erdem","Fatih", "Murat", "Aytu"]
	//TODOLİST WİLL BE CONTSTRAİNT AREA
    //TODO İTEMS WİLL BE DRAGGABLE
    const HandleChange = (e)=> {
        console.log(e)
    }
	return (
		<div className="todo-list" ref={constraintsRef}>
			{todolist.map((todoitemX, index) => {
				return (
                    <motion.div 
                    key={todoitemX.id} 
                    drag="y"
                    onChange={(e)=>HandleChange()}
                    dragConstraints={constraintsRef}>
						<TodoItem  todoitem={todoitemX.text} id={todoitemX.id} />
					</motion.div>
				);
			})}
        </div>
    )
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

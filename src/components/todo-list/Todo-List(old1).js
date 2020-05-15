import React from "react";
import TodoItem from "../todo-item/Todo-Item.unit";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { motion} from "framer-motion";
import "./todo-list.css";

const TodoList = () => {
	const todolist = useSelector((state) => state.list.todolist);
    const constraintsRef = useRef(null);
    //oldindex
    //newindex
	//TODOLİST WİLL BE CONTSTRAİNT AREA
    //TODO İTEMS WİLL BE DRAGGABLE

    return (
        <div className="todo-list" ref={constraintsRef}>
            {todolist.map((todoitemX, index) => {
                return (
                    <motion.div 
                    key={todoitemX.id} 
                    drag="y"
                    dragConstraints={{top:0, bottom:0}}
                    dragElastic={0.05}
                    >
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

//STABLE

import React, { useEffect, useState, useRef } from "react";
import TodoItem from "../todo-item/Todo-Item.unit";
import { useSelector } from "react-redux";
import { motion, useMotionValue } from "framer-motion";
import "./todo-list.css";

import { findIndex } from "./find-index";
import {arrayMove as move} from "./find-index";


const Item = ({ todoitemX, setPosition, moveItem, i }) => {
    const [isDragging, setDragging] = useState(false);
    const ref = useRef(null);
    const dragOriginY = useMotionValue(0);
    useEffect(() => {
      setPosition(i, {
        height: ref.current.offsetHeight,
        top: ref.current.offsetTop
      });
    });
  
    return (
      <motion.div
        ref={ref}
        initial={false}
        drag="y"
        dragOriginY={dragOriginY}
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onDrag={(event, info) => moveItem(i, info.point.y)}
        positionTransition={({ delta }) => {
          if (isDragging) {
            dragOriginY.set(dragOriginY.get() + delta.y);
          }
          return !isDragging;
        }}
    >
        {/* //CHILDREN COMPONENT */}
        <TodoItem todoitem={todoitemX.text} id={todoitemX.id} />
    
    </motion.div>
    );
  };

const Example = () => {
    const todolist = useSelector((state) => state.list.todolist);
    const [itemlar, setItemlar] = useState(["Fatih", "Murat", "Erdem", "Aytu"]);
    //["Fatih", "Murat", "Erdem", "Aytu"]
    useEffect(()=>{
        setItemlar(todolist)
    },[todolist])

    /* useEffect(()=>{
        setItemlar(todolist.map(todoitemX=>{
            return (<TodoItem todoitem={todoitemX.text} id={todoitemX.id} />)
        }))
    },[todolist]) */

    const positions = useRef([]).current;
    const setPosition = (i, offset) => (positions[i] = offset);
  
    const moveItem = (i, dragOffset) => {
      const targetIndex = findIndex(i, dragOffset, positions);
      if (targetIndex !== i) setItemlar(move(itemlar, i, targetIndex));
    };
  
    return (
      <div className="todo-list">
        {itemlar.map((item, i) => (
          <Item
            key={item.id}
            i={i}
            todoitemX={item}
            setPosition={setPosition}
            moveItem={moveItem}
          />
        ))}
      </div>
    );
  };
  
export default Example


//export default TodoList;

/* export default connect(mapStateToProps,null)(TodoList); */

/* const mapStateToProps = state => {
    return {
        todolist: state.list.todolist,
        isSignedIn: state.user.isSignedIn,
        userEmail: state.user.userEmail
    }
  } */

//STABLE

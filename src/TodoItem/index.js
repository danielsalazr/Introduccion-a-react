import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import './TodoItem.css'

function TodoItem (props){
    /*
    const onComplete = () => {
        alert('Completaste la tarea' + props.text);
    }

    const onDelete = () => {
        alert('Borraste la tarea' + props.text);
    }
    */
   /*<span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
    onClick={props.onComplete}>
        √
    </span>
    <span className="Icon Icon-delete" 
    onClick={props.onDelete}>
        X
    </span>    
            */
    return(
        <li className="TodoItem">
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <DeleteIcon 
                onDelete={props.onDelete}
            />
        </li>
    )
    
}

export {TodoItem};
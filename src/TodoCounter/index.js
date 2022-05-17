import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter(){
//function TodoCounter({total, completed}){
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return(
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos}  Todo</h2>
        // <h2 className='TodoCounter'>Has completado {completed} de {total}  Todo</h2>
    )
}

export { TodoCounter };
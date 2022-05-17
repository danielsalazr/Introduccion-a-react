import React from 'react';
import { EmptyTodos } from '../EmptyTodos';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoContext } from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton/';
import { Modal } from '../Modal';


function AppUi (){

    const {error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal}= React.useContext(TodoContext);

        /*{error && <p>Desesperate, hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}*/

    return (
        <React.Fragment>
            <TodoCounter  /> 
            <TodoSearch /> 
                <TodoList>

                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos /> }

                

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed} 
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                    /> 
                
                    ))}
                </TodoList> 
                {!!openModal && <Modal >
                    <TodoForm >

                    </TodoForm>
                </Modal>}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            /> 
        </React.Fragment>
    );
}

export {AppUi};
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]); // Aqui llamamos al hook
      //const [todos, SaveName] = useLocalStorage('NombreUltraImportante',[]);
      const[searchValue, setSearchValue] = React.useState('');
      const [openModal,setOpenModal] = React.useState(false);
    
      const completedTodos= todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1){
        searchedTodos =todos
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
        
      }
    
      
    
      const completeTodo = (text) => {
        const todoIndex =  todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];  //aqui inyectamos en un nuevo array todos los todos ya existentes
        newTodos[todoIndex].completed = true;
        //setTodos(newTodos);  //aqui ocurre el rerender
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos =  [...todos]
        newTodos.push({
          completed: false,
          text,
        })
        //setTodos(newTodos);  //aqui ocurre el rerender
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex =  todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];  //aqui inyectamos en un nuevo array todos los todos ya existentes
        newTodos.splice(todoIndex,1);
        //setTodos(newTodos);  //aqui ocurre el rerender
        saveTodos(newTodos);
      };
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

{/* <Todocontext.Consumer></Todocontext.Consumer> */}

export{TodoContext, TodoProvider};
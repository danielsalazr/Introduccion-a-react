import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUi';

//import './App.css';

// const defaultTodos= [
//   { text: 'Cortar cebolla', completed:true},
//   { text: 'Hacer curso de React', completed:false},
//   { text: 'Llorar con la llorona', completed:false},
// ]



function App() {
  

  return (
    <TodoProvider >
      <AppUi 
        
      />
    </TodoProvider>
  );
}

export default App;

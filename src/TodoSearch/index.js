import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch (){

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onsearchValuechange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return [
        <input className="TodoSearch" 
        placeholder="Cebolla"
        value={searchValue} // esto es una convencion
        onChange={onsearchValuechange} />,
        //onChange={onsearchValuechange} />,

        <p>{searchValue}</p>
    ]
        
    
}

export {TodoSearch};
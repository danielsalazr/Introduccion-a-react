import React from 'react';
import {ReactComponent as NombredeMiIcono} from './play-button.png';
import {ReactComponent as Completo} from './check.svg';
import {ReactComponent as Deletear} from './delete.svg';
import './TodoIcon.css'

const iconTypes = {
    "check": color => (
        (<Completo className="Icon-svg Icon-svg--check" fill={color} />)
    )
    ,
    "delete": color => (
        (<Deletear className="Icon-svg Icon-svg--delete" fill={color} />)
    ),
}

function TodoIcon ({type, color = 'gray', onClick}) {
    return (
        <span className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        > 
        {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };
import React, {Component} from 'react';
import './Form.css';

const Input = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <input  value={props.value}/>
        </div>
    )
}
export default Input;
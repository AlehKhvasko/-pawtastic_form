import React, {Component} from 'react';
import './Form.css';

export default class App extends Component {
    render() {
        return(
    <div>
        <div className='static'>
            <div className= 'radioButtons'>
                <span>Human profile</span>
                <span>Pet basics</span>
                <span>Pet details</span>
                <span>Confirm</span>
            </div>
        </div>
    </div>
        )
    }
}
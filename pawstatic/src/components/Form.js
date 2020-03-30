import React, {Component} from 'react';
import './Form.css';
import Input from './Input'

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
                <span>Save and Exit</span>
            </div>
            <div className='dog_form'>
                <div className="dog_form__main">
                    <div><h1>Yay,we love dogs! Give us <br/> the basics about your pup.</h1></div>
                    <div className="dog_form__left">
                        <Input name="Name" type="text" value="Pet's name"></Input>
                        <Input name="Breed" type="text" value="Pet's breed"></Input>
                        <Input name="Gender" type="radio" value="Female Male"></Input>
                    </div>
                    <div className="dog_form__right">
                        <div className="image_load">
                            <div className="image_load"></div>
                            <p>Upload a photo</p>
                        </div>
                        <Input name="Breed" type="text" value="Pet's breed"></Input>
                        <Input name="Birthday" type="text" value="MM/DD/YYYY"></Input>
                    </div>
                </div>
                <div className="dog_form__main">
                    <button>Back</button>
                    <button>Next</button>
                </div>  
            </div>
        </div>
    </div>
        )
    }
}
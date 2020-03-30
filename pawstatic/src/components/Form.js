import React, {Component} from 'react';
import './Form.css';
import Input from './Input'

export default class App extends Component {
    render() {
        return(
    <div>
        <div className='pawstatic'>
            <div className= 'radioButtons'>
                <div className='radioButtons_icon'>Pawstatic</div>
                <div className='radioButtons_btn'>
                <span>
                    <input type="checkbox" id="toggle" class="checkbox" />
                    <label for="toggle" class="switch">
                    </label>Human profile</span><div className="vertical"></div> 
                    <span><input type="checkbox" id="toggle" class="checkbox" />
                    <label for="toggle" class="switch">
                    </label>Pet basics</span><div className="vertical"></div>  
                    <span><input type="checkbox" id="toggle" class="checkbox" />
                    <label for="toggle" class="switch">
                    </label>Pet details</span><div className="vertical"></div> 
                    <span><input type="checkbox" id="toggle" class="checkbox" />
                    <label for="toggle" class="switch">
                    </label>Confirm</span>
                </div>
                <div className='radioButtons_image'>
                     <span>Save and Exit<hr/></span>
                     
                </div>
            </div>
            <div className='dog_form'>
                <div><h1>Yay,we love dogs! Give us <br/> the basics about your pup.</h1></div>
                <div className="dog_form__main">
                    <div className="dog_form__top">
                        <Input name="Name" type="text" value="Pet's name"></Input>
                        <div className="image_load">
                            <p>Upload a photo</p>
                        </div>
                    </div>
                    <div className="dog_form__center">
                        <Input name="Breed" type="text" value="Pet's breed"></Input>
                        <Input name="Birthday" type="text" value="MM/DD/YYYY"></Input>
                    </div>
                    <div className="dog_form__bottom">
                        <Input name="Gender" type="radio" value="Female Male"></Input>
                        <Input name="Breed" type="text" value="Pet's breed"></Input>
                    </div>
                    <div className="dog_form__weight">
                        <Input name="Weight" type="radio" value="0-25"></Input>
                    </div>
                </div>
                <div className="dog_form__footer">
                    <button>Back</button>
                    <button>Next</button>
                </div>  
            </div>
        </div>
    </div>
        )
    }
}
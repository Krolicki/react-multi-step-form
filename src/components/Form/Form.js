import './Form.css'
import {Progress} from './'

export const Form = () => {
    return(
        <div className='form-container'>
            <Progress currentStep={2}/>
        </div>
    )
}
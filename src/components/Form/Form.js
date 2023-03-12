import './Form.css'
import {Progress} from './'
import { useState } from 'react'
import { Step1 } from './Steps/Step1'
import { Step2 } from './Steps/Step2'
import { Step3 } from './Steps/Step3'

export const Form = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [data, setData] = useState({
        account:{
            email: "",
            password: "",
            confirmPassword: ""
        },
        personal:{
            nickname: "",
            name: "",
            lastname: "",
            birth: null
        },
        agreements:{
            terms: false,
            personalData: false,
            marketing: false
        }

    })

    const currentStepPage = () => {
        if(currentStep === 1)
            return (
                <Step1 
                    data={data}
                    setData={setData}
                />
            )
        else if(currentStep === 2)
            return (
                <Step2 
                    data={data}
                    setData={setData}
                />
            )
        else if(currentStep === 3)
            return (
                <Step3 
                    data={data}
                    setData={setData}
                />
            )
        else
            return (
                <Step1 
                    data={data}
                    setData={setData}
                />
            )
    }

    return(
        <div className='form-container'>
            <Progress currentStep={currentStep}/>
            <div className='step-container'>
                {currentStepPage()}
                <img src="https://source.unsplash.com/random/600x600?landscape" alt="random"/>
            </div>
        </div>
    )
}
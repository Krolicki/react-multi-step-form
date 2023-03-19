import './Form.css'
import {ChangeLanguage, Progress} from './'
import { useState } from 'react'
import { Step1, Step2, Step3, Summary } from './Steps'

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
            birthDay: "",
            birthMonth: "",
            birthYear: ""
        },
        agreements:{
            terms: false,
            personalData: false,
            marketing: false
        }

    })

    const currentStepPage = () => {
        switch(currentStep){
            case 1:
                return (
                    <Step1 
                        data={data}
                        setData={setData}
                        setCurrentStep={setCurrentStep}
                    />
                )
            case 2:
                return (
                    <Step2
                        data={data}
                        setData={setData}
                        setCurrentStep={setCurrentStep}
                    />
                )
            case 3:
                return (
                    <Step3 
                        data={data}
                        setData={setData}
                        setCurrentStep={setCurrentStep}
                    />
                )
            case 4:
                return (
                    <Summary 
                        data={data}
                    />
                )
            default:
                return (
                    <Step1 
                        data={data}
                        setData={setData}
                        setCurrentStep={setCurrentStep}
                    />
                )
        }
    }

    return(
        <div className='form-container'>
            <ChangeLanguage />
            <Progress currentStep={currentStep}/>
            <div className='step-container'>
                {currentStepPage()}
                <img src="https://source.unsplash.com/random/600x600?landscape" alt="random"/>
            </div>
        </div>
    )
}
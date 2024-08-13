import './Form.css'
import { ChangeLanguage, Progress } from '.'
import { useState } from 'react'
import { Step1, Step2, Step3, Summary } from './Steps'

export type FormDataType = {
    account: {
        email: string
        password: string
        confirmPassword: string
    },
    personal: {
        nickname: string
        name: string
        lastname: string
        birthDay: any
        birthMonth: any
        birthYear: any
    },
    agreements: {
        terms: boolean
        personalData: boolean
        marketing: boolean
    }
}

export type StepProps = {
    data: FormDataType
    setData: React.Dispatch<React.SetStateAction<FormDataType>>
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export const Form = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [data, setData] = useState<FormDataType>({
        account: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        personal: {
            nickname: "",
            name: "",
            lastname: "",
            birthDay: "",
            birthMonth: "",
            birthYear: ""
        },
        agreements: {
            terms: false,
            personalData: false,
            marketing: false
        }
    })

    const currentStepPage = () => {
        switch (currentStep) {
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

    return (
        <div className='form-container'>
            <ChangeLanguage />
            <Progress currentStep={currentStep} />
            <div className='step-container'>
                {currentStepPage()}
                <img src="https://picsum.photos/600/600?nature&blue" alt="random image from picsum" />
            </div>
        </div>
    )
}
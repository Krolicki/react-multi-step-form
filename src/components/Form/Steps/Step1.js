import { useEffect, useRef, useState } from 'react'
import './Step.css'
import { useTranslation } from 'react-i18next';

export const Step1 = ({data, setData, setCurrentStep}) => {
    const [validEmail, setValidEmail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [validConfirmPassword, setValidConfirmPassword] = useState(false)

    const emailRef = useRef()

    const EMAILREGEX = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    const PASSREGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/;

    const { t } = useTranslation()

    useEffect(()=>{
        emailRef.current.focus()
    },[])

    useEffect(()=>{
        const res = EMAILREGEX.test(data.account.email)
        setValidEmail(res)
    },[data.account.email])

    useEffect(()=>{
        const res = PASSREGEX.test(data.account.password)
        setValidPassword(res)
    },[data.account.password])

    useEffect(()=>{
        if(data.account.confirmPassword !== data.account.password)
            setValidConfirmPassword(false)
        else
            setValidConfirmPassword(true)
    },[data.account.confirmPassword, data.account.password])


    return(
        <div className='step'>
            <span className='step-title'>{t('step1.title')}</span>
            <input
                type='email'
                name='mail'
                ref={emailRef}
                placeholder=' '
                required={true}
                value={data.account.email}
                className={data.account.email !== "" ? (!validEmail ? "invalid-input" : "valid-input") : ""}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, account: {...prevData.account, email: e.target.value}}})
                }}
            />
            <label htmlFor="mail">{t('step1.mail-label')}</label>
            <input
                type='password'
                name='password'
                placeholder=' '
                required={true}
                value={data.account.password}
                className={data.account.password !== "" ? (!validPassword ? "invalid-input" : "valid-input") : ""}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, account: {...prevData.account, password: e.target.value}}})
                }}
            />
            <label htmlFor="password">{t('step1.password-label')}</label>
            <input
                type='password'
                name='confirmPass'
                placeholder=' '
                required={true}
                value={data.account.confirmPassword}
                className={data.account.confirmPassword !== "" ? (!validConfirmPassword ? "invalid-input" : "valid-input") : ""}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, account: {...prevData.account, confirmPassword: e.target.value}}})
                }}
            />
            <label htmlFor="confirmPass">{t('step1.confirm-password-label')}</label>
            <span className='step-buttons'>
                <button 
                    type="button" 
                    onClick={()=>setCurrentStep((prevStep)=> {return prevStep+1})} 
                    disabled={!validEmail || !validPassword || !validConfirmPassword ? true : false}
                >
                    {t('buttons.next-step')}
                </button>
            </span>
        </div>
    )
}
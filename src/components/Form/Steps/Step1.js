import { useEffect, useRef } from 'react'
import './Step.css'

export const Step1 = ({data, setData, setCurrentStep}) => {

    const emailRef = useRef()

    useEffect(()=>{
        emailRef.current.focus()            
    },[])

    return(
        <div className='step'>
            <span className='step-title'>Account setup</span>
            <input
                type='email'
                name='mail'
                ref={emailRef}
                placeholder=' '
                value={data.account.email}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, account: {...prevData.account, email: e.target.value}}})
                }}
            />
            <label htmlFor="mail">Email Address</label>
            <input
                type='password'
                name='password'
                placeholder=' '
                value={data.account.password}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, account: {...prevData.account, password: e.target.value}}})
                }}
            />
            <label htmlFor="password">Password</label>
            <input
                type='password'
                name='confirmPass'
                placeholder=' '
                value={data.account.confirmPassword}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, account: {...prevData.account, confirmPassword: e.target.value}}})
                }}
            />
            <label htmlFor="confirmPass">Confirm Password</label>
            <span className='step-buttons'>
                <button type="button" onClick={()=>setCurrentStep(2)}>Next step</button>
            </span>
        </div>
    )
}
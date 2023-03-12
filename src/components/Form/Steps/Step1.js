import { useEffect, useRef } from 'react'
import './Step.css'

export const Step1 = ({data,setData}) => {

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
            />
            <label htmlFor="password">Password</label>
            <input
                type='password'
                name='confirmPass'
                placeholder=' '
            />
            <label htmlFor="confirmPass">Confirm Password</label>
            <span className='step-buttons'>
                <button type="button" >Next step</button>
            </span>
        </div>
    )
}
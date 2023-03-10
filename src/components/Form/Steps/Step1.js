import { useEffect, useRef } from 'react'
import './Step.css'

export const Step1 = () => {

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
            />
            <label for="mail">Email Address</label>
            <input
                type='password'
                name='password'
                placeholder=' '
            />
            <label for="password">Password</label>
            <input
                type='password'
                name='confirmPass'
                placeholder=' '
            />
            <label for="confirmPass">Confirm Password</label>
            <span className='step-buttons'>
                <button type="button" >Next step</button>
            </span>
        </div>
    )
}
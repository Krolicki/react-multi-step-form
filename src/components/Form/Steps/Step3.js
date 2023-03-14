import { useEffect, useRef } from 'react'
import './Step.css'

export const Step3 = ({data, setData, setCurrentStep}) => {
    const termsRef = useRef()

    useEffect(()=>{
        termsRef.current.focus()
    },[])

    return(
        <div className='step'>
            <span className='step-title'>Agreements</span>
            <span className='step-checkbox'>
                <input
                    type='checkbox'
                    name='terms-consent'
                    ref={termsRef}
                    checked={data.agreements.terms}
                    onChange={(e)=>{ 
                        setData((prevData) =>  { 
                            return {...prevData, agreements: {...prevData.agreements, terms: e.target.checked}}
                        }) 
                    }}
                />
                <label htmlFor='terms-consent'>I have read and accept the terms of service</label>
            </span>
            <span className='step-checkbox'>
                <input
                    type='checkbox'
                    name='data-consent'
                    checked={data.agreements.personalData}
                    onChange={(e)=>{ 
                        setData((prevData) =>  { 
                            return {...prevData, agreements: {...prevData.agreements, personalData: e.target.checked}}
                        }) 
                    }}
                />
                <label htmlFor='data-consent'>I consent to the processing of my personal data necessary for registration</label>
            </span>
            <span className='step-checkbox'>
                <input
                    type='checkbox'
                    name='marketing-consent'
                    checked={data.agreements.marketing}
                    onChange={(e)=>{ 
                        setData((prevData) =>  { 
                            return {...prevData, agreements: {...prevData.agreements, marketing: e.target.checked}}
                        }) 
                    }}
                />
                <label htmlFor='marketing-consent'>(optional) I consent to the processing of my personal data for marketing purposes</label>
            </span>
            <span className='step-buttons'>
                    <button type="button" onClick={()=>setCurrentStep(2)} className="step-previous-button">Previous step</button>
                    <button 
                        type="button" 
                        disabled={!data.agreements.personalData || !data.agreements.terms ? true : false}
                    >
                        Submit
                    </button>
            </span>
        </div>
    )
}
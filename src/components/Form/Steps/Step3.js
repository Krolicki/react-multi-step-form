import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './Step.css'

export const Step3 = ({data, setData, setCurrentStep}) => {
    const stepRef = useRef()
    const termsRef = useRef()

    const { t } = useTranslation()

    useEffect(()=>{
        stepRef.current.classList.add('show-step')
        termsRef.current.focus()
    },[])

    return(
        <div className='step' ref={stepRef}>
            <span className='step-title'>{t('step3.title')}</span>
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
                <label htmlFor='terms-consent'>{t('step3.terms')}</label>
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
                <label htmlFor='data-consent'>{t('step3.personalData')}</label>
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
                <label htmlFor='marketing-consent'>{t('step3.marketing')}</label>
            </span>
            <span className='step-buttons'>
                    <button type="button" 
                        onClick={()=>{
                            stepRef.current.classList.remove('show-step')
                            setTimeout(()=>{
                                setCurrentStep((prevStep)=> {return prevStep-1})
                            },300)
                        }} 
                        className="step-previous-button"
                    >
                        {t('buttons.previous-step')}
                    </button>
                    <button 
                        type="button" 
                        disabled={!data.agreements.personalData || 
                                  !data.agreements.terms || 
                                  Object.values(data.personal).some((el) => { return el === ""}) ||
                                  Object.values(data.account).some((el) => { return el === ""})
                                  ? true : false
                                 }
                        onClick={()=>{
                            stepRef.current.classList.remove('show-step')
                            setTimeout(()=>{
                                setCurrentStep((prevStep)=> {return prevStep+1})
                            },300)
                        }}
                    >
                        {t('buttons.submit')}
                    </button>
            </span>
        </div>
    )
}
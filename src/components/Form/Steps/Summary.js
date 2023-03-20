import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import './Step.css'

export const Summary = ({data}) => {
    const stepRef = useRef()
    const { t } = useTranslation()

    useEffect(()=>{
        stepRef.current.classList.add('show-step')
    },[])

    return (
        <div className='step' ref={stepRef}>
            <span className='step-title'>{t('summary.title')}, {data.personal.nickname}.</span>
            <p className='step-summary-text'>{t('summary.info')}</p>
            <span className='step-buttons'>
                <button type="button" >
                    {t('buttons.log-in')}
                </button>
            </span>
        </div>
    )
}
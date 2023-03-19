import { useTranslation } from 'react-i18next'
import './Progress.css'

export const Progress = ({currentStep}) => {
    const {t} = useTranslation()

    return(
        <div className='progress'>
            <div className={`progress-item ${currentStep > 1 ? "completed" : currentStep === 1 ? "active" : ""}`} >
                <span className="progress-number" item-text={t('step1.title')}>
                    {currentStep > 1 ? "✓" : 1}
                </span>
            </div>
            <div className={`progress-item ${currentStep > 2 ? "completed" : currentStep === 2 ? "active" : ""}`} >
                <span className="progress-number" item-text={t('step2.title')}>
                    {currentStep > 2 ? "✓" : 2}
                </span>
            </div>
            <div className={`progress-item ${currentStep > 3 ? "completed" : currentStep === 3 ? "active" : ""}`} >
                <span className="progress-number" item-text={t('step3.title')}>
                    {currentStep > 3 ? "✓" : 3}
                </span>
            </div>
        </div>
    )
}
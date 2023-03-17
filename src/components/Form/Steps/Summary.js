import { useTranslation } from 'react-i18next'
import './Step.css'

export const Summary = ({data}) => {
    const { t } = useTranslation()

    return (
        <div className='step'>
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
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './ChangeLanguage.css'

export const ChangeLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const {i18n} = useTranslation()    

    const handleChangeLanguage = (lang) => {
        if(lang !== currentLanguage){
            i18n.changeLanguage(lang)
            setCurrentLanguage(lang)
        }
    }

    useEffect(()=>{
        setCurrentLanguage(i18n.resolvedLanguage)
    },[])

    return(
        <div className='change-language'>
            <span 
                className={currentLanguage === "en" ? 'active-language' : ""}
                onClick={()=> handleChangeLanguage("en")}
            >
                EN
            </span>
            <span 
                className={currentLanguage === "pl" ? 'active-language' : ""}
                onClick={()=> handleChangeLanguage("pl")}
            >
                PL
            </span>
        </div>
    )
}
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Step.css'

export const Step2 = ({data, setData, setCurrentStep}) => {
    const [validNick, setValidNick] = useState(false)
    const [validYear, setValidYear] = useState(false)
    const [validDate, setValidDate] = useState(false)

    const nicknameRef = useRef()

    const { t } = useTranslation()

    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate()
    }

    useEffect(()=>{
        nicknameRef.current.focus()
    },[])

    useEffect(()=>{
        const day = data.personal.birthDay
        const month = data.personal.birthMonth
        const year = data.personal.birthYear
        const currentDate = new Date()
        let maxDays
        if(!isNaN(day) && !isNaN(month) && !isNaN(year)){
            if(currentDate > new Date(year, month - 1, day))
                setValidDate(true)
            else
                setValidDate(false)
        }
        if(day === null || day === ""){
            return
        }
        if(day.length > 2){
            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthDay: ""}}})
            return
        }
        if(day < 1){
            if(!day.length === 1){
                setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthDay: 1}}})
                return
            }
        }
        if(month !== "" && month !== null){
            if(year !== "" && year !== null){
                maxDays = getDays(year, month)
            }
            else{
                maxDays = getDays(currentDate.getFullYear(), month)
            }
        }
        else if(year !== "" && year !== null){
            maxDays = getDays(year, currentDate.getMonth() + 1)
        }
        else{
            maxDays = getDays(currentDate.getFullYear(), currentDate.getMonth() + 1)
        }
        if(day > maxDays){
            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthDay: maxDays}}})
            return
        }
    },[data.personal.birthDay, data.personal.birthMonth, data.personal.birthYear])
    
    useEffect(()=>{
        let month = data.personal.birthMonth
        if(month === null || month === ""){
            return
        }    
        if(month.length > 2){
            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthMonth: ""}}})
            return
        }
        if(month < 1){
            if(!month.length === 1){
                setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthMonth: 1}}})
                return
            }
        }
        if(month > 12){
            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthMonth: 12}}})
            return
        }
    },[data.personal.birthMonth])

    useEffect(()=>{
        const year = data.personal.birthYear
        const currentYear = new Date().getFullYear()
        if(year <  (currentYear - 123))
            setValidYear(false)
        else
            setValidYear(true)
        if(year === null || year === ""){
            return
        }  
        if(year.length > 4){
            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthYear: ""}}})
            return
        }
        
        if(year < 1 || year >= currentYear){
            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthYear: currentYear}}})
            return
        }
    },[data.personal.birthYear])

    useEffect(()=>{
        //check if this nick is available
        if(data.personal.nickname.length >= 4)
            setValidNick(true)
        else
            setValidNick(false)
    },[data.personal.nickname])

    return(
        <div className='step'>
            <span className='step-title'>{t('step2.title')}</span>
            <input
                type='text'
                name='nickname'
                placeholder=' '
                ref={nicknameRef}
                required={true}
                className={data.personal.nickname !== "" ? (!validNick ? "invalid-input" : "valid-input") : ""}
                value={data.personal.nickname}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, personal: {...prevData.personal, nickname: e.target.value}}})
                }}
            />
            <label htmlFor="nickname">{t('step2.nickname-label')}</label>
            <input
                type='text'
                name='name'
                placeholder=' '
                required={true}
                className={data.personal.name !== "" ? "valid-input" : ""}
                value={data.personal.name}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, personal: {...prevData.personal, name: e.target.value}}})
                }}
            />
            <label htmlFor="name">{t('step2.name-label')}</label>
            <input
                type='text'
                name='lastname'
                placeholder=' '
                required={true}
                className={data.personal.lastname !== "" ? "valid-input" : ""}
                value={data.personal.lastname}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, personal: {...prevData.personal, lastname: e.target.value}}})
                }}
            />
            <label htmlFor="lastname">{t('step2.lastname-label')}</label>
            <span className='step-birth-date'>
                <p>{t('step2.birth-date-title')}</p>
                <span>
                    <input
                        type='number'
                        name='day'
                        min='1'
                        max='31'
                        placeholder=' '
                        required={true}
                        className={data.personal.birthDay !== "" ? (!validDate ? "invalid-input" : "valid-input") : ""}
                        value={data.personal.birthDay}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault()
                        }}
                        onChange={(e)=>{
                            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthDay: e.target.value}}})
                        }}
                        onBlur={(e)=>{
                            if(e.target.value === "0")
                                setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthDay: ""}}})
                        }}
                    />
                    <label htmlFor="day">{t('step2.day-label')}</label>
                    <input
                        type='number'
                        name='month'
                        min='1'
                        max='12'
                        placeholder=' '
                        required={true}
                        className={data.personal.birthMonth !== "" ? (!validDate ? "invalid-input" : "valid-input") : ""}
                        value={data.personal.birthMonth}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault() 
                        }}
                        onChange={(e)=>{
                            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthMonth: e.target.value}}})
                        }}
                        onBlur={(e)=>{
                            if(e.target.value === "0")
                                setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthMonth: ""}}})
                        }}
                    />
                    <label htmlFor="month">{t('step2.month-label')}</label>
                    <input
                        type='number'
                        name='year'
                        placeholder=' '
                        required={true}
                        value={data.personal.birthYear}
                        className={data.personal.birthYear !== "" ? (!validYear || !validDate ? "invalid-input" : "valid-input") : ""}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault()    
                        }}
                        onChange={(e)=>{
                            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthYear: e.target.value}}})
                        }}
                    />
                    <label htmlFor="year">{t('step2.year-label')}</label>
                </span>
            </span>
            <span className='step-buttons'>
                <button type="button" 
                    onClick={()=>setCurrentStep((prevStep)=> {return prevStep-1})} 
                    className="step-previous-button"
                >
                    {t('buttons.previous-step')}
                </button>
                <button 
                    type="button" 
                    disabled={(Object.values(data.personal).some((el) => { return el === ""}) || !validNick || !validYear || !validDate) 
                        ? true : false
                    }
                    onClick={()=>setCurrentStep((prevStep)=> {return prevStep+1})}
                >
                    {t('buttons.next-step')}
                </button>
            </span>
        </div>
    )
}
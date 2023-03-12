import { useEffect, useState } from 'react'
import './Step.css'

export const Step2 = () => {
    const [day, setDay] = useState(null)
    const [month, setMonth] = useState(null)
    const [year, setYear] = useState(null)

    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate()
    }

    useEffect(()=>{
        if(day === null || day === "")
            return
        if(day.length > 2){
            setDay(null)
            return
        }
        if(day < 1){
            if(!day.length === 1){
                setDay(1)
                return
            }
        }
        let maxDays
        if(month !== "" && month !== null){
            if(year !== "" && year !== null){
                maxDays = getDays(year, month)
            }
            else{
                maxDays = getDays(new Date().getFullYear(), month)
            }
        }
        else if(year !== "" && year !== null){
            maxDays = getDays(year, new Date().getMonth() + 1)
        }
        else{
            maxDays = getDays(new Date().getFullYear(), new Date().getMonth() + 1)
        }
        if(day > maxDays){
            setDay(maxDays)
            return
        }
        
    },[day, month, year])
    
    useEffect(()=>{
        if(month === null || month === "")
            return
        if(month.length > 2){
            setMonth(null)
            return
        }
        if(month < 1){
            if(!month.length === 1){
                setMonth(1)
                return
            }
        }
        if(month > 12){
            setMonth(12)
            return
        }

        if(isNaN(month)){
            setMonth(null)
            return
        }
    },[month])

    useEffect(()=>{
        if(year === null || year === "")
            return
        if(year.length > 4){
            setYear(null)
            return
        }
        if(year < 1){
            setYear(1)
            return
        }
        let currentYear = new Date().getFullYear()
        if(year >= currentYear){
            setYear(currentYear)
        }

    },[year])

    return(
        <div className='step'>
            <span className='step-title'>Personal informations</span>
            <input
                type='text'
                name='nickname'
                placeholder=' '
            />
            <label htmlFor="nickname">Nickname</label>
            <input
                type='text'
                name='name'
                placeholder=' '
            />
            <label htmlFor="name">Name</label>
            <input
                type='text'
                name='lastname'
                placeholder=' '
            />
            <label htmlFor="lastname">Lastname</label>
            <span className='step-birth-date'>
                <p>Birth date</p>
                <span>
                    <input
                        type='number'
                        name='day'
                        min='1'
                        max='31'
                        placeholder=' '
                        value={day || ""}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault()
                        }}
                        onChange={(e)=>{setDay(e.target.value)}}
                    />
                    <label htmlFor="day">DD</label>
                    <input
                        type='number'
                        name='month'
                        min='1'
                        max='12'
                        placeholder=' '
                        value={month || ""}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault() 
                        }}
                        onChange={(e)=> setMonth(e.target.value)}
                    />
                    <label htmlFor="month">MM</label>
                    <input
                        type='number'
                        name='year'
                        placeholder=' '
                        value={year || ""}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault()    
                        }}
                        onChange={(e)=>setYear(e.target.value)}
                    />
                    <label htmlFor="year">YYYY</label>
                </span>
            </span>
            <span className='step-buttons'>
                <button type="button" >Previous step</button>
                <button type="button" >Next step</button>
            </span>
        </div>
    )
}
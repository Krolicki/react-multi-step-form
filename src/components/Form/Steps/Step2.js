import { useEffect, useRef } from 'react'
import './Step.css'

export const Step2 = ({data, setData, setCurrentStep}) => {
    const nicknameRef = useRef()

    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate()
    }

    useEffect(()=>{
        nicknameRef.current.focus()
    },[])

    useEffect(()=>{
        let day = data.personal.birthDay
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
        let maxDays
        let month = data.personal.birthMonth
        let year = data.personal.birthYear
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
        let year = data.personal.birthYear
        if(year === null || year === ""){
            return
        }  
        if(year.length > 4){
            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthYear: ""}}})
            return
        }
        let currentYear = new Date().getFullYear()
        if(year < 1 || year >= currentYear){
            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthYear: currentYear}}})
            return
        }
    },[data.personal.birthYear])

    return(
        <div className='step'>
            <span className='step-title'>Personal informations</span>
            <input
                type='text'
                name='nickname'
                placeholder=' '
                ref={nicknameRef}
                value={data.personal.nickname}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, personal: {...prevData.personal, nickname: e.target.value}}})
                }}
            />
            <label htmlFor="nickname">Nickname</label>
            <input
                type='text'
                name='name'
                placeholder=' '
                value={data.personal.name}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, personal: {...prevData.personal, name: e.target.value}}})
                }}
            />
            <label htmlFor="name">Name</label>
            <input
                type='text'
                name='lastname'
                placeholder=' '
                value={data.personal.lastname}
                onChange={(e)=>{
                    setData((prevData)=> {return{...prevData, personal: {...prevData.personal, lastname: e.target.value}}})
                }}
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
                        value={data.personal.birthDay}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault()
                        }}
                        onChange={(e)=>{
                            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthDay: e.target.value}}})
                        }}
                    />
                    <label htmlFor="day">DD</label>
                    <input
                        type='number'
                        name='month'
                        min='1'
                        max='12'
                        placeholder=' '
                        value={data.personal.birthMonth}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault() 
                        }}
                        onChange={(e)=>{
                            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthMonth: e.target.value}}})
                        }}
                    />
                    <label htmlFor="month">MM</label>
                    <input
                        type='number'
                        name='year'
                        placeholder=' '
                        value={data.personal.birthYear}
                        onKeyDown={(e)=>{
                            if((isNaN(Number(e.key)) || e.code ==='Space') && !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(e.code) )
                                e.preventDefault()    
                        }}
                        onChange={(e)=>{
                            setData((prevData)=> {return{...prevData, personal: {...prevData.personal, birthYear: e.target.value}}})
                        }}
                    />
                    <label htmlFor="year">YYYY</label>
                </span>
            </span>
            <span className='step-buttons'>
                <button type="button" onClick={()=>setCurrentStep(1)}>Previous step</button>
                <button type="button" onClick={()=>setCurrentStep(3)}>Next step</button>
            </span>
        </div>
    )
}
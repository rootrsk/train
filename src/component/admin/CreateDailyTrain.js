import { Button } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';

function CreateDailyTrain() {
    const currentDate = new Date()
    const day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()
    const month = currentDate.getMonth() <10 ? `0${currentDate.getMonth()+1}` : currentDate.getMonth()+1
    
    const [date,setDate] = useState(`${currentDate.getFullYear()}-${month}-${day}`)
    const [trains,setTrains] = useState([])
    const [id,setId] = useState('')
    const [date_train,setTrianDate] = useState([])
    const getTrains = async() =>{
        const response = await axios({
            url:'/admin/trains',
            method:'GET',
        })
        console.log(response.data)
        console.log(date)
        if (response.data.message === 'success') {
            setTrains(response.data.data)
            console.log(response.data.data)
        }
    }
    const getTrainsByDate = async() =>{
        const response = await axios({
            url: '/admin/train-by-date',
            method: 'POST',
            data:{
                date
            }
        })
        if(response.data.message==='success'){
            console.log(response.data.data)
            setTrianDate(response.data.data)
        }
        console.log(response.data)
    }
    const createTrain = async() =>{
        const response = await axios({
            url: '/admin/date-train',
            method: 'POST',
            data: {
                date,
                train_id: id
            }
        })
        console.log(response)
        if(response.data.message==='success'){
            setTrianDate(response.data.trains)
        }
        
    }
    
    useEffect(()=>{
        getTrains()
        console.log(date)
    },[])
    return (
        <div>
            <div><h1>Train on Date</h1></div>
            <div style={{width:'300px',margin:'auto'}}>
                {/* <Calendar
                    onChange={setDate}
                    value={date}
                /> */}
                <input
                    id='date' 
                    type="date"
                    value={date}
                    min={`${currentDate.getFullYear()}-${month}-${day}`}
                    onChange={(e)=>setDate(e.target.value)}
                />
                {trains.map((train)=>{
                    return(
                        <div>
                            <p>{train._id} - {train.train_name}</p> <Button onClick={()=>setId(train._id)}>{id===train._id?'selected':'Select'}</Button>
                        </div>
                    )
                })}
                {id && <Button onClick={createTrain}>Create</Button>}
                <Button onClick={getTrainsByDate}>Find Trains</Button>
                

            </div>
            {date_train.map((train)=>{
                console.log(train)
                    return(
                        <div>
                            <h3>{train.train_id.train_name}</h3>
                            <h4>{Date(train.date)}</h4>
                        </div>
                    )
                })}
        </div>
    )
}

export default CreateDailyTrain
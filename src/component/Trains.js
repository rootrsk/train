import { Button } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Header from './user/Header';
function Trains(props) {
    // Setting for Today's Date
    const currentDate = new Date()
    const day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()
    const month = currentDate.getMonth() < 10 ? `0${currentDate.getMonth()+1}` : currentDate.getMonth() + 1
    // const [date, setDate] = useState(`${currentDate.getFullYear()}-${month}-${day}`)
    const [date, setDate] = useState(`2021-03-18`)
    // Trains Of The Days
    const [trains, setTrains] = useState([])
    const [id, setId] = useState('')
    const [date_train, setTrianDate] = useState([])
    const [start_station,setStartStation] = useState('gaya')
    const [end_station, setEndStation] = useState('kolkata')
    const [filtered_trains,setFilteredTrains] = useState([])
    // console.log(props)
    const getTrainsByDate = async (date) => {
        setDate(date)
        const response = await axios({
            url: '/user/train-by-date',
            method: 'POST',
            data: {
                date, filterStation:[start_station,end_station]
            }
        })
        console.log(response.data)
        if (response.data.message === 'success') {
            setTrianDate(response.data.data)
            setStateTrains(response.data.data)
            filter({trains:response.data.data,startStation:start_station,endStation: end_station})
        }
        
    }
    const setStateTrains = (trains) =>{
        props.dispatch({
            type:'SET_TRAINS',
            trains: trains
        })
    }
    const filter =({trains, startStation, endStation}) =>{
        setStartStation(startStation)
        setEndStation(endStation)
        props.dispatch({
            type: 'SET_STATION_FILTER',
            trains: trains || date_train,
            start_station: startStation ,
            end_station: endStation 
        })
    }
    useEffect(() => {
        getTrainsByDate(date)
        return
        
    }, [])
    if(!date){
        return(
            <div style={{display:'grid',placeItems:'center',height:'100vh'}}>
                <div style={{background:'white',width:'500px'}}>
                    <Calendar
                        onChange={setDate}
                        value={date}
                    />
                </div>
                
            </div>
        )
    }
    
    return (
        <div>
            <div className="train_nav">
                <div className="station_container">
                   from: 
                    <input 
                        onChange={(e)=>setStartStation(e.target.value.toLowerCase())}
                        value={start_station} 
                        type='text'  
                    /> to 
                    <input 
                        onChange={(e)=>setEndStation(e.target.value.toLowerCase())} 
                        type='text' 
                        value={end_station}
                    />
                   <Button onClick={()=>getTrainsByDate(date)}>Filter</Button>
                </div>
                <div className="date_container">
                    <input 
                        type='date' 
                        value={date}
                        min={'2021-03-18'}
                        onChange={(e)=>{getTrainsByDate(e.target.value)}}
                    />
                    {/* <Button onClick={getTrainsByDate}>Find</Button> */}
                </div>
            </div>
            <div>
                
                {props.filter.map((train)=> <TrainTemplateCard {...train} key={train._id} start_station={start_station} end_station={end_station}/>)}
                {/* <Button onClick={getTrainsByDate}>Find</Button>
                <Button onClick={setStateTrains}> SEt</Button>
                <Button onClick={()=>console.log(props)}>Get Trains</Button>
                <Button onClick={filter} >Filter</Button> */}
            </div>
        </div>
    )
}

const TrainTemplateCard = (props) =>{
    console.log(props)
    const history = useHistory()
    let seats = 0;
    props.classes.class_ac.forEach((seat)=>seat?null:seats++)
    props.classes.class_sleeper.forEach(seat=>seat?null:seats++)
    props.classes.class_general.forEach(seat=>seat?null:seats++)

    return(
        <div className='train-template-card'>
            <div className='train-template-card_header'>
                <h2>{props.train.train_name}</h2>
                <h2>{props.train.train_no}</h2>
            </div>
            <div>
                <p>Distance : {props.distance} Km</p>
                <p>Time: {props.arrival_time}</p>
                <p>Avallible seat: {seats} </p>
            </div>
            <div className="train-template-card_footer">
                <Button onClick={()=>{
                    history.push(`/train?${props._id}`,
                        {
                            start_station: props.start_station,
                            end_station: props.end_station,
                            distance: props.distance,
                            arrival_time:props.arrival_time,
                            departure_time:props.departure_time
                        })
                }}>View Details</Button>
                <Link to ='/'>Home</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return state
}

export default connect(mapStateToProps) (Trains)

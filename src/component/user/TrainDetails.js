import { Button, Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReceiptIcon from '@material-ui/icons/Receipt';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';

function TrainDetails(props) {
    const state = props.location.state
    const [passangers,setPassangers] = useState([])
    const [train,setTrain] = useState('')
    const [start_station,setStartStation] = useState()
    const [end_station,setEndSttion] = useState()
    const [distance,setDistance] = useState()
    const [arrival_time,setArriavlTime] = useState()
    const [departure_time,setDepartureTime] = useState()
    const [error,setError] = useState('')
    const getTrain = async()=>{
        console.log(props)
        const response = await axios({
            url: `/train`,
            method:'post',
            data: {id : props.location.search.split('?')[1]}
        })
        if(response.data.message==='success'){
            setTrain(response.data.train)
        }
        console.log(response.data)
    }
    const seatSelector = (index,selectedClass) =>{
        const isSeatSelected = !passangers.every((passanger) => (passanger.seat === index + 1 && passanger.class === selectedClass)?false : true)
        if (!isSeatSelected) {
            setPassangers(passangers.concat({
                name: '',
                age: '',
                seat: index+1,
                class: selectedClass
            }))
        }
        console.log(index,selectedClass,isSeatSelected)
    }
    const createReservation = async()=>{
        const isOkay = passangers.every((passanger) => (passanger.name && passanger.age && passanger.seat && passanger.class)?true:false)
        // if(!isOkay) {
        //     return setError('Some Fields are missing')
        // }
        setError('')
        const response = await axios({
            url: `/user/reservation`,
            method:'post',
            data: {
                train_id: props.location.search.split('?')[1],
                passengers:passangers,
                start_station,
                end_station
            }
        })
        console.log(response.data)
    }
    const removeHandler = (seat) =>{
        const filter = passangers.filter((passanger)=> passanger.seat !== seat)
        setPassangers(filter)
    }
    useEffect(()=>{
        if (!props.location.state) {
            return props.history.push('/trains')
        }
        setStartStation(props.location.state.start_station)
        setEndSttion(props.location.state.end_station)
        setDistance(props.location.state.distance)
        setArriavlTime(props.location.state.arrival_time)
        setDepartureTime(props.location.state.departure_time)
        getTrain()
    },[])
    if(!train) {
        return(
            <div>
                NO Train
            </div>
        )
    }
    return (
        <div className='train_deatails'>
            <div className='train_header_details'>
                <Typography variant='h4'>{train.train_id.train_name}</Typography>
                <Typography variant='h4'>{train.train_id.train_no}</Typography>
            </div>
            <div className="train_header_details">
                <p>{start_station.toUpperCase()}</p>
                <p>{distance} Kms</p>
                <p>{end_station.toUpperCase()}</p>
            </div>
            <div className="train_header_details">
                <p>{departure_time.toUpperCase()} Hours</p>
                <p>{arrival_time-departure_time} Hours</p>
                <p>{arrival_time.toUpperCase()} Hours</p>
            </div>
            <>
                <Seats seats = {train.classes.class_ac} title='Ac Class' class={'class_ac'} select={seatSelector}/>
                <Seats seats = {train.classes.class_sleeper} title='Sleeper Class' class={'class_sleeper'} select={seatSelector}/>
                <Seats seats = {train.classes.class_general} title='General Class' class={'class_general'} select={seatSelector}/>
            </>
            <div>
                {passangers.map((passanger)=>{
                    return(
                        <div style={{padding:'5px'}} className='seat-preview' > 
                            <span>Seat No : {passanger.seat} </span>
                            <span> {passanger.class} </span>
                            <input 
                                type='text'
                                placeholder='Enter Name'
                            />
                            <input
                                type='number'
                                placeholder='Enter age'
                            />
                            {/* <Button
                                style={{background:'#0e6d5f',color:'white'}}
                                >Save</Button> */}
                            <Button 
                                variant='contained' 
                                style={{background:'#0e6d5f',color:'white'}} 
                                onClick={()=>removeHandler(passanger.seat)}>Remove
                            </Button>
                        </div>
                    )
                })}
            </div>
            {error}
            <div style={{width:'100px',margin:'auto'}}>
                <Button variant='contained' onClick={createReservation}>Confirm</Button>
                {/* <Button variant='contained'>Proceed To Payment</Button> */}
            </div>
        </div>
    )
}
const classes = {
    occupid:{
        width:'50px',
        height:'50px',
        background:'blue',
        margin:'10px',
        display:'grid',
        placeItems:'center',
        color:'white'
    },
    empty:{
        width:'50px',
        height:'50px',
        background:'green',
        margin:'10px',
        display:'grid',
        placeItems:'center',
        color:'white',
        fontSize:'30px'
    }
}
const Seats = (props) =>{
    console.log(props)
    return(
        <div className='classes'>
            <h2>{props.title}</h2>
            <div className='classes_seats'>
                {props.seats.map((seat ,index)=><SingleSeat status={seat} index={index} select={props.select} class={props.class}/>)}
            </div>
        </div>
    )
}
const SingleSeat = (props) =>{
    console.log(props)
    
    return(
        <div  className='single_seat'>
            {props.status?<AirlineSeatReclineNormalIcon />: <ReceiptIcon onClick={()=>props.select(props.index,props.class)}/>}
        </div>
    )
}


export default TrainDetails

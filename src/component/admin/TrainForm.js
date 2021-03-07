import { Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useRef, useState } from 'react'

function TrainForm(props) {
    const [train_name,setTrainName] = useState(props.train_name || null)
    const [train_no, setTrainNo] = useState(props.train_no || null)
    const [train_id,setTrainId] = useState(props.train_id || null)
    const [class_ac,setClassAc] = useState(props.class_ac || null)
    const [class_sleeper, setClassSleeper] = useState(props.class_sleeper || null)
    const [class_general,setClassGeneral] = useState(props.class_general || null)
    const [route,setRouter] = useState([])
    const [routerForm,setRouterForm] = useState(false)
    const [edit,setEdit] = useState(null)
    const addButtonRef = useRef(null)
    const addToRoute = (routeDetails) =>{
        console.log(routeDetails)
        if(routeDetails.edit){
            console.log('editing')
            route[routeDetails.index] = routeDetails 
            setRouter([...route])
            return 
        }
        console.log('adding new')
        setRouter(route.concat(routeDetails))
        setRouterForm(false)
    }
    const removeRoute = (station_name) =>{
        setRouter(route.filter((item) => item.station_name !== station_name))
    }
    const createNewTrain = async()=>{
        const data = {
            train_name,
            train_no,
            train_id,
            class_ac,
            class_sleeper,
            class_general,
            route
        }
         console.log(data)
        const response = await axios({
            url: `/admin/trains`,
            method: 'POST',
            data
        })
        console.log(response.data)
    }
    return (
        <div>
            <h1>Create New Train</h1>
            <form>
                <div>
                    <TextField
                        className='input'
                        placeholder='Train Name'
                        value={train_name}
                        onChange={(e)=>setTrainName(e.target.value)}
                        
                    />
                    <TextField 
                        className='input'
                        label='Train No'
                        value={train_no}
                        onChange={(e)=> setTrainNo(e.target.value)}
                    />
                    <TextField 
                        className='input'
                        label='Train Id'
                        value={train_id}
                        onChange={(e)=> setTrainId(e.target.value)}
                    />
                    <TextField 
                        className='input'
                        label='AC Sets'
                        type='number'
                        value={class_ac}
                        onChange={(e)=> setClassAc(e.target.value)}
                        
                    />
                    <TextField 
                        className='input'
                        label='Sleeper sets'
                        value={class_sleeper}
                        type='number'
                        onChange={(e)=> setClassSleeper(e.target.value)}
                    />
                    <TextField 
                        className='input'
                        label='Sleeper sets'
                        value={class_general}
                        type='number'
                        onChange={(e)=> setClassGeneral(e.target.value)}
                    />
                    {
                        route.map((item,index)=><RoutePreview {...item} key={index} remove={removeRoute} index={index} addToRoute={addToRoute}/>)
                    }
                    {
                        console.log(route)
                    }
                    <Button variant='contained' onClick={(e)=>setRouterForm(!routerForm)} ref={addButtonRef}>+</Button>
                    {routerForm && <RouteForm addToRoute={addToRoute}/>}

                    <Button className='' onClick={createNewTrain}>Create New Train</Button>
                </div>
            </form>
        </div>
    )
}
const RouteForm = (props) =>{
    const [station_name, setStationName] = useState(props.station_name || '')
    const [station_code, setStationCode] = useState(props.station_code || '')
    const [arriving_time,setArrivingTime] = useState(props.arriving_time || '')
    const [departure_time,setDepartureTime] = useState(props.departure_time || '')
    const [day,setDay] = useState(props.day || '')
    const [distance,setDistance] = useState(props.distance || '')
    const [error,setError] = useState('')
    const addRouteHandler = () =>{
        
        setError('')
        // if(!station_name) return setError('Station Name Cannot be Empty.')
        // if(!station_code) return setError('Station Code Cannot be Empty.')
        // if(!arriving_time) return setError('Arriving Time is Required.')
        // if(!departure_time) return setError('Departure TIme is Required.')
        // if(!day) return setError('Please Fill Day.')
        // if(!distance) return setError('Distace is Required.')
        if (props.edit) {
            props.edit(false)
            props.addToRoute({
                station_name,
                station_code,
                arriving_time,
                departure_time,
                day,
                distance,
                edit: true,
                index: props.index
            })
            return
        }
        props.addToRoute({
            station_name, station_code, arriving_time, departure_time, day, distance
        })
        
    }
    return(
        <div>
            <>
                <div>
                    <TextField 
                        label='Station Name'
                        value={station_name}
                        type='text'
                        onChange={(e)=> setStationName(e.target.value)}
                    />
                    <TextField 
                        label='Station Code'
                        value={station_code}
                        type='text'
                        onChange={(e)=> setStationCode(e.target.value)}
                    />
                    <TextField 
                        label='Arriving Time'
                        value={arriving_time}
                        type='text'
                        onChange={(e)=> setArrivingTime(e.target.value)}
                    />
                    <TextField 
                        label='Departure Time'
                        value={departure_time}
                        type='text'
                        onChange={(e)=> setDepartureTime(e.target.value)}
                    />
                    <TextField 
                        label='Day'
                        value={day}
                        type='number'
                        onChange={(e)=> setDay(e.target.value)}
                    />
                    <TextField 
                        label='Distace'
                        value={distance}
                        type='number'
                        onChange={(e)=> setDistance(e.target.value)}
                    />
                    {error && <p>{error}</p>}
                    <Button variant='contained' onClick={addRouteHandler}>Save</Button>
                    <div>

                    </div>
                </div>
            </>
        </div>
    )
}
// Preview of Added Routes
const RoutePreview = (props) =>{
    const [edit ,setEdit] = useState(false)
    const [station_name] = useState(props.station_name)
    const remove = () =>{
        props.remove(station_name)
    }
    console.log(props)
    return(
        <div>
            <p>Station Name: {props.station_name}</p>
            <p>Station Code: {props.station_code}</p>
            <p>Arriving Time: {props.arriving_time}</p>
            <p>Departure Time:{props.departure_time}</p>
            <p>Day: {props.day}</p>
            <p>Distance:{props.distance}</p>
            <Button onClick={remove}>Remove</Button>
            <Button onClick={()=>setEdit(true)}>Edit</Button>
            {edit && <RouteForm {...props} edit={setEdit} {...props.addToRoute}/>}
        </div>
    )
}
export default TrainForm

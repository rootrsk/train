import { act } from 'react-dom/test-utils';
import { combineReducers, createStore } from 'redux';

const userInitialState = {
    inAuthenticated: false,
    type:'Guest'
}


const trainReducer = (state=[],action) =>{
    switch (action.type) {
        case 'SET_TRAINS':
            return action.trains
            break;
        case 'GET_TRAINS':
            return action.trains
            break;
        default:
            return action
            break;
    }
}
const filterInitialState = {

}
const filterTrainsReducer = (state=[],action)=>{
    switch (action.type) {
        case 'SET_STATION_FILTER':
            console.log(action)
            let filtered_trains = []
            action.trains.map((train)=>{
                let start_station = train.train.route.findIndex(route=> route.station_name == action.start_station)
                let end_station = train.train.route.findIndex(route=> route.station_name == action.end_station)
                let distance = train.train.route[end_station].distance - train.train.route[start_station].distance
                let departure_time = train.train.route[start_station].arriving_time
                let arrival_time = train.train.route[end_station].arriving_time
                console.log(distance)
                if(distance >=0){
                    filtered_trains.push({...train,distance,arrival_time,departure_time})
                }
            })
            return filtered_trains
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        trains: trainReducer,
        filter: filterTrainsReducer
    })
)

export default store
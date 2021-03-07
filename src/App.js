import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import AdminRouter from './component/admin/AdminRouter'
import Homepage from './component/Homepage'
import Trains from './component/Trains'
import Auth from './component/user/Auth'
import UserRouter from './component/user/UserRouter'
import Footer from './component/Footer'
import TrainDetails from './component/user/TrainDetails'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Homepage} exact/>
                    <Route path='/footer' component = {Footer} />
                    <Route path='/auth' component ={Auth} />
                    <Route path='/my' component={UserRouter} />
                    <Route path='/admin' component={AdminRouter} />
                    <Route path='/train' component={TrainDetails} exact/>
                    <Route paht='/trains' component={Trains} />
                    
                </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default App

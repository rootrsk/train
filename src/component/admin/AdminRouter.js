import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateDailyTrain from './CreateDailyTrain'
import Nav from './Nav'
import TrainForm from './TrainForm'

function AdminRouter() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path='/admin/create-train' component={TrainForm} />
                <Route path='/admin/create-dateTrain' component={CreateDailyTrain} />
                
            </Switch>
        </div>
    )
}

export default AdminRouter

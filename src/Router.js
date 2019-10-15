import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Login from './login/Login'
import App from './main/App'
import Quatrocentos from './404/404'

export default props =>
    <Switch>
        <div className="main">
            <Route exact path="/login" component ={Login}/>
            <Route path="/app" component={App} />
            <Route path="/404" component={Quatrocentos} />
        </div>
    </Switch>
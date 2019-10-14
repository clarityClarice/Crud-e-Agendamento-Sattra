import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import listarCadastros from '../components/listarCadastros/listarCadastros'
import UserCrud from '../components/user/UserCrud'
import Agenda from '../components/agenda/Agenda'
import Agendar from '../components/agendar/Agendar'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cadastros' component={listarCadastros} />
        <Route path="/novo" component={UserCrud} />
        <Route exact path='/agenda' component={Agenda} />
        <Route exact path='/agendar' component={Agendar} />
        <Redirect from='*' to='/' />
    </Switch>

import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import Home from '../components/home/Home'
import listarCadastros from '../components/listarCadastros/listarCadastros'
import UserCrud from '../components/user/UserCrud'
import Agenda from '../components/agenda/Agenda'
import Agendar from '../components/agendar/Agendar'
import NovoAgendamento from '../components/novoAgendamento/NovoAgendamento'

export default props =>
    <Switch>
        <Route exact path='/app/home' component={Home} />
        <Route exact path='/app/cadastros' component={listarCadastros} />
        <Route exact path="/app/novo" component={UserCrud} />
        <Route exact path="/app/editar/:id" component={UserCrud} />
        <Route exact path='/app/agenda' component={Agenda} />
        <Route exact path='/app/agendar' component={Agendar} />
        <Route exact path='/app/novoagendamento/:id' component={NovoAgendamento} />

        <Redirect from='*' to='/404' />
    </Switch>

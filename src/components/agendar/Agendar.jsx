import React from 'react'
import Main from '../template/Main'


const initialState = {
    user: {name: '', cpf: '', horaInicial:'', horaFinal:''},
    list: []
}


class Agendar extends React.Component {
    state = { ...initialState}

    renderSearch(){
        return (
            <span>a</span>
        )
    }

    renderAgendar(){
        return(
            <span>b</span>
        )
    }

    render (){
        return(
            <Main icon="calendar" title="Agenda" subtitle="Novo agendamento">
                {this.user? this.renderAgendar() : this.renderSearch()}
            </Main>
        )
    }
}

export default Agendar



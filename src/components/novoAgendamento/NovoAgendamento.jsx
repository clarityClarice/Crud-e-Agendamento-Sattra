import React from 'react'
import Main from '../template/Main'

import './NovoAgendamento.css'

class NovoAgendamento extends React.Component{
    state = {
        pessoa: '',
        data_inicial: '',
        data_final: '',
        pessoa_fisica_id: 0,
        observacao: '',
        setor_responsavel: 1
    }

    
    render(){
        return(
            
            <Main icon="calendar" title="Agenda" subtitle="Novo Agendamento">
                {/* "data_inicial":"A Escolher formato",
                    "data_final":"A Escolher formato",
                    "pessoa_fisica_id": 1,
                    "observacao": "Obs...",
                    "setor_responsavel": 2*/
                }
            </Main>
        )
    }
}

export default NovoAgendamento
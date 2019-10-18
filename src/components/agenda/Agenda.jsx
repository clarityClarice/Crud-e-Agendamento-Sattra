import React from 'react'
import Main from '../template/Main'

import './Agenda.css'

const initialState = {
    user: {name: '', cpf: '', horaInicial: '', horaFinal: '', status: ''},
    list: []
}


export default class Home extends React.Component {
    state = { ...initialState}
    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Hora inicial</th>
                        <th>Hora Final</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    

    renderRows(){
            return this.state.list.map( user => {
                return (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.cpf}</td>
                        <td>{user.horaInicial}</td>
                        <td>{user.horaFinal} </td>
                        <td>{user.status}</td>
                        <td>Botões</td>
                    </tr>
                )
            })
    }
    render(){
        return(
            <Main icon="calendar" title="Agenda" subtitle="Visualizar, editar, adicionar e excluir agendamentos">
                
                <div className="content">
                    <div className="mastergroup">
                        <div className="group" >
                            <div className="title lead text-muted">
                                <span>Selecionar Data Inicial</span>
                            </div> 

                            <div className="datePicker ">
                                <input type="date"></input>
                            </div>  
                        </div>
                        
                        <div className="group">
                            <div className="title lead text-muted">
                                <span>Selecionar Data Final</span>
                            </div> 

                            <div className="datePicker ">
                                <input type="date"></input>
                            </div>  
                        </div>
                    </div>
                    
                    

                    <a className="float" href="/#/app/agendar">
                        <i className="fa fa-plus my-float"></i>
                    </a>    

                    {this.renderTable()}
                </div>

            </Main>
        )
    }
}
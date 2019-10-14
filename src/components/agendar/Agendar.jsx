import React from 'react'
import Main from '../template/Main'

import './Agendar.css'

const initialState = {
    user: {name: '', cpf: '', horaInicial:'', horaFinal:''},
    date: {day: '', month: '', year: ''},
    list: []
}


class Agendar extends React.Component {
    state = { ...initialState}

    renderSearch(){
        return (
            <div className="content">
                <span className="labelCPF">CPF do usuário:</span>
                <input className="userCPF" />
                <button className="buscarBtn">Buscar <i class="fa fa-search"></i></button>

                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr >
                        <td>name</td>
                        <td>cpf</td>
                        <td>
                            ações
                        </td>
                    </tr>
                    </tbody>
                </table>


            </div>
        )
    }

    renderAgendar(){
        return(
            <div className="content">
                <p className="lead text-muted">
                    nome do cara
                </p>
                <div className="inputs">
                    <div className="form-group">
                        <label>Hora Inicial</label>
                        <input type="time" />
                    </div>
                    <div className="form-group">
                        <label>Hora Final</label>
                        <input type="time" />
                    </div>
                    <div className="form-group">
                        <label>Setor responsável:</label>
                        <input type="text" />
                    </div>
                </div>
                <button className="btn btn-primary" >Agendar <i class="fa fa-save"></i></button>
                
            </div>
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



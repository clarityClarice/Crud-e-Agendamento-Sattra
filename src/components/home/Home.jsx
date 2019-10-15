import React from 'react'
import Main from '../template/Main'



const initialState = {
    user: {name: '', cpf: '', horaInicial:'', horaFinal:''},
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
                    <th>Hora final</th>
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
        return (
            this.state.list.map( user => {
                return (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.cpf}</td>
                        <td>{user.horaInicial}</td>
                        <td>{user.horaFinal}</td>
                    </tr>
                )
            })
        )
    }

    render() {
        return(
            <Main icon="home" title="Início" subtitle="Dashboard" >
                <div className='display-4'> Bem-vindo!</div>
                <hr/>
                <p className="mb-0"> Agendamentos do dia</p>
                {this.renderTable()}
            </Main>
        )
    }
}
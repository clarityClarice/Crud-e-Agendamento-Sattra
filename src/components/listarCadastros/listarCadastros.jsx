import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

import './listarCadastros.css'

import Main from '../template/Main'

const initialState = {
    user: {name: '', cpf: ''},
    list: []
}

class listarCadastros extends React.Component {
    state = { ...initialState}
    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Cargo</th>
                        <th>Passaporte</th>
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
                    <td>{user.cargo}</td>
                    <td>{user.passaporte}</td>
                    <td>{user.status}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>

                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return (
            <Main icon="users" title="Cadastros" subtitle="Listagem de cadastros">
                {this.renderTable()}


                <a className="float" href="/#/novo">
                    <i className="fa fa-plus my-float"></i>
                </a>
            </Main>
        )
    }
}

export default listarCadastros
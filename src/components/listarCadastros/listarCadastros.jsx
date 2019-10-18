import React, { Component } from 'react'
import api from '../../services/api'

import './listarCadastros.css'

import Main from '../template/Main'

class listarCadastros extends Component {
 
    state = { 
        pessoa: {},
        pessoas: []
    }

    componentDidMount(){
        this.listarPessoas()
    }

   listarPessoas = async () =>{
        const response = await api.get('/ws/pessoas', {
            params: {
                "empresa": 20180000001
            }
        })
        console.log(response);
       this.setState({pessoas: response.data})
    }
    
    renderTable = () =>{
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

    renderRows = () =>{
        return this.state.pessoas.map( pessoa => {
            return (
                <tr key={pessoa.id}>
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.cpf}</td>
                    <td>{pessoa.cargo}</td>
                    <td>{pessoa.passaporte}</td>
                    <td>{pessoa.status}</td>
                    <td>
                        <button className="btn" onClick={() => this.load(pessoa.id)}>
                            <i className="fa fa-pencil"></i>
                        </button>

                        <button className="btn" onClick={() => this.remove(pessoa)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    load = (id) =>{
        window.location.href = `/#/app/editar/${id}`
    }

    remove = () => {

    }
    render(){
        return (
            <Main icon="users" title="Cadastros" subtitle="Listagem de cadastros">
                {this.renderTable()}


                <a className="float" href="/#/app/novo">
                    <i className="fa fa-plus my-float"></i>
                </a>
            </Main>
        )
    }
}

export default listarCadastros
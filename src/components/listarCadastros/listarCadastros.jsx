import React from 'react'
import api from '../../services/api'

import './listarCadastros.css'

import Main from '../template/Main'

class listarCadastros extends React.Component {
 
    state = { 
        pessoa: {},
        pessoas: []
    }

    componentDidMount(){
       async function listarPessoas(){
            const response = await api.get('/ws/pessoas', {
                data: {
                    "empresa_id": 20180000001
                }
            })
           // this.setState({pessoas: response.data})
           console.log(response.data)
        }
        listarPessoas()
    }
    
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
        return this.state.pessoas.map( pessoa => {
            return (
                <tr key={pessoa.id}>
                    <td>{pessoa.name}</td>
                    <td>{pessoa.cpf}</td>
                    <td>{pessoa.cargo}</td>
                    <td>{pessoa.passaporte}</td>
                    <td>{pessoa.status}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(pessoa)}>
                            <i className="fa fa-pencil"></i>
                        </button>

                        <button className="btn btn-danger ml-2" onClick={() => this.remove(pessoa)}>
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
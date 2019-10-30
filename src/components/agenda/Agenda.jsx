import React from 'react'
import Main from '../template/Main'

import api from '../../services/api'

import './Agenda.css'

const initialState = {
    user: {nome: '', cpf: '', data_inicial: '', data_final: '', status: ''},
    list: [],
    data_inicial: '',
    data_final: ''
}


export default class Home extends React.Component {
    state = { ...initialState}

    componentDidMount(){
        const today = new Date()
        var { data_inicial, data_final } = this.state
        var month = '0'
        if ((today.getMonth() + 1) < 10){
            month += `${today.getMonth() + 1}`
        } else {
            month = `${today.getMonth() + 1}`
        }
        data_inicial = `${today.getFullYear()}-${month}-${today.getDate()}`
        data_final = `${today.getFullYear()}-${month}-${today.getDate()}`
        this.setState({
            data_inicial,
            data_final
        })
    }

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
    
    dateStyle(date){
        var options = { dateStyle: 'long', timeStyle: 'short'}
        var newData = new Date(date)
        
        return newData.toLocaleDateString('pt-BR', options)
    }

    renderRows(){
            return this.state.list.map( user => {
                return (
                    <tr key={user.id}>
                        <td>{user.nome}</td>
                        <td>{user.cpf}</td>
                        <td>{this.dateStyle(user.data_inicial)}</td>
                        <td>{this.dateStyle(user.data_final)} </td>
                        <td>{user.status}</td>
                        <td>Botões</td>
                    </tr>
                )
            })
    }

    updateDataInicial(event){
        var { data_inicial } = this.state
        data_inicial = event.target.value 
        this.setState({ data_inicial })
    }

    updateDataFinal(event){
        var { data_final } = this.state
        data_final = event.target.value 
        this.setState({ data_final })
    }

    async load(){
        const { data_inicial, data_final } = this.state
        const response = await api.get('/ws/agendamentos', {
            params: {
                empresa: 20180000001,
                data_inicial,
                data_final
            }
        })

        console.log(response.data)
        if(response.data){
            this.setState({list: response.data})
        }
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
                                <input type="date" value={this.state.data_inicial} name="data_inicial" onChange={e => this.updateDataInicial(e)}></input>
                            </div>  
                        </div>
                        
                        <div className="group">
                            <div className="title lead text-muted">
                                <span>Selecionar Data Final</span>
                            </div> 

                            <div className="datePicker ">
                                <input type="date" value={this.state.data_final} onChange={e => this.updateDataFinal(e)}></input>
                            </div>  
                        </div>

                        <button type="button" onClick={() => this.load()}>
                            <i className="fa fa-search"></i>
                        </button>
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
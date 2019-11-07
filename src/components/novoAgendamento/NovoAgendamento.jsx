import React from 'react'
import Main from '../template/Main'

import api from '../../services/api'
import { Link } from 'react-router-dom'

import './NovoAgendamento.css'

class NovoAgendamento extends React.Component{
    state = {
        data_inicial: '',
        data_final: '',
        pessoa_fisica_id: 0,
        observacao: '',
        setor_responsavel: 1,
        pessoa: {}
    }

    async componentDidMount(){
        var urlArray = window.location.href.split('/')
        const idFromUrl = urlArray[urlArray.length -1]? urlArray[urlArray.length -1] : 0
        if(idFromUrl != 0){
           this.setState({pessoa_fisica_id: idFromUrl})

           const response = await api.get(`/ws/pessoa/${idFromUrl}`)
           this.setState({pessoa: response.data})

            this.setState({ setor_responsavel: this.state.pessoa.responsavel_id})
        }
        
    }

    handleSalvar = () => {
        api.post('/ws/agendamentos',{
            data_inicial: this.state.data_inicial,
            data_final: this.state.data_final,
            pessoa_fisica_id: this.state.pessoa_fisica_id,
            setor_responsavel: this.state.setor_responsavel,
            observacao: this.state.observacao
        })

        window.location.href = `/#/app/agenda`
    }

    updateField(event){
        const state = {...this.state}
        state[event.target.name] = event.target.value
        this.setState({
            data_inicial: state.data_inicial,
            data_final: state.data_final,
            observacao: state.observacao
        })
    }

    render(){
        return(
            
            <Main icon="calendar" title="Agenda" subtitle="Novo Agendamento">
                <div className='form'>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Nome:</label> {this.state.pessoa.nome}
                                <br />
                                <label>Setor Responsavel:</label> {this.state.setor_responsavel}
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label> Data Inicial </label>
                                <input type="text"
                                    name="data_inicial"
                                    className="form-control"
                                    onChange={e => this.updateField(e)}
                                    placeholder=" dd-mm-aaaa"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label> Data Final </label>
                                <input type="text"
                                    name="data_final"
                                    className="form-control"
                                    onChange={e => this.updateField(e)}
                                    placeholder=" dd-mm-aaaa"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label> Observação</label>
                                <input type="text"
                                    name="observacao"
                                    className="form-control"
                                    onChange={e => this.updateField(e)}
                                    placeholder=" Observações"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-12 d-flex justify-content-end'>
                            <button className="btn btn-primary" onClick={ e => this.handleSalvar(e)}>
                                Salvar
                            </button>

                            <Link to="/app/cadastros" >
                                <button className="btn btn secondary ml-2">
                                    Cancelar
                                </button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </Main>
        )
    }
}

export default NovoAgendamento
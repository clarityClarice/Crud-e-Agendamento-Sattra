import React, { Component } from 'react'
import Main from '../template/Main'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import Axios from 'axios'


export default class UserCrud extends Component {
    state = {
        pessoa: {id: '', nome: '', data_nascimento: '01-01-2020', email: '', telefone_principal: '', cpf: '', passaporte:'',
                cnh:'', validade_cnh: '01-01-2020', cargo: '', observacao: '', responsavel_id: 1},
        setores: [{id: 0, nome: ''}]
    }

    async componentDidMount(){
        const response = await api.get('/ws/setores')
        this.setState({setores: response.data})
        this.setState({
            setor: this.state.setores[0],
            pessoa: {
                ...this.state.pessoa,
                responsavel_id: this.state.setores[0].id
            }
        })
        var urlArray = window.location.href.split('/')
        const idFromUrl = urlArray[6]? urlArray[6] : 0
        if(idFromUrl != 0){
            this.setState({pessoa: {
                id: idFromUrl
            }})

           const response = await api.get(`/ws/pessoa/${idFromUrl}`)
           this.setState({pessoa: response.data})

            this.setState({ setor: {
                id: response.data.responsavel_id
            }})

           var DateCnh = new Date(response.data.validadecnh)
           var validadeCnh = ''
           var monthCnh = DateCnh.getUTCMonth() + 1
            validadeCnh= DateCnh.getUTCDate()  + '/'
            validadeCnh+= monthCnh + '/'
            validadeCnh+= DateCnh.getUTCFullYear()
            this.setState({pessoa: { ...response.data,
                validade_cnh: validadeCnh}})


            var BornDate = new Date(response.data.data_nascimento)
            var dataDeNasc = ''
            dataDeNasc = BornDate.getUTCDate() + '/'
            dataDeNasc +=( BornDate.getUTCMonth() + 1) + '/'
            dataDeNasc += BornDate.getUTCFullYear()
            this.setState({pessoa: {...response.data , data_nascimento: dataDeNasc}})
        }

    }


    save(){
        const method = this.state.pessoa.id ? 'put' : 'post'
        console.log(method)
        if(method == 'put'){
            Axios[method](`http://192.168.25.13:8089/ws/pessoa/${this.state.pessoa.id}`, this.state.pessoa)
            .then(resp => {
                this.setState({ pessoa: this.state.pessoa})
            })
        
            window.location.href = `/#/app/cadastros`
        } else{
            Axios[method](`http://192.168.25.13:8089/ws/pessoa`, this.state.pessoa)
            .then(resp => {
                this.setState({ pessoa: this.state.pessoa})
            })
        
            window.location.href = `/#/app/cadastros`
        }
       
    }


    updateField(event){
        const pessoa = {...this.state.pessoa}
        pessoa[event.target.name] = event.target.value 
        this.setState({ pessoa })

    }

    updateSectorField(event){
        const pessoa = {...this.state.pessoa}
        pessoa[event.target.name] = event.target.value.split(' ')[0]

        this.setState({
            pessoa: {
                ...this.state.pessoa,
                responsavel_id: pessoa.responsavel_id
            }
        })
    }


    renderForm(){
        return (
            <div className='form'>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Nome </label>
                            <input type="text"
                                name="nome"
                                className="form-control"
                                value={this.state.pessoa.nome}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome do usuário"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Data de nascimento </label>
                            <input type="text"
                                name="data_nascimento"
                                className="form-control"
                                value={this.state.pessoa.data_nascimento}
                                onChange={e => this.updateField(e)}
                                placeholder=" dd-mm-aaaa"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> CPF </label>
                            <input type="text"
                                name="cpf"
                                className="form-control"
                                value={this.state.pessoa.cpf}
                                onChange={e => this.updateField(e)}
                                placeholder="000.000.000-00" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> Passaporte </label>
                            <input type="text"
                                name="passaporte"
                                className="form-control"
                                value={this.state.pessoa.passaporte}
                                onChange={e => this.updateField(e)}
                                placeholder="Insira o passaporte" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> CNH </label>
                            <input type="text"
                                name="cnh"
                                className="form-control"
                                value={this.state.pessoa.cnh}
                                onChange={e => this.updateField(e)}
                                placeholder="Número da CNH" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> Validade CNH </label>
                            <input type="text"
                                name="validade_cnh"
                                className="form-control"
                                value={this.state.pessoa.validade_cnh}
                                onChange={e => this.updateField(e)}
                                placeholder=" dd-mm-aaaa"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> E-mail </label>
                            <input type="text"
                                name="email"
                                className="form-control"
                                value={this.state.pessoa.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o E-mail" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> Telefone </label>
                            <input type="phone"
                                name="telefone_principal"
                                className="form-control"
                                value={this.state.pessoa.telefone_principal}
                                onChange={e => this.updateField(e)}
                                placeholder="+00 0000-0000" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> Cargo </label>
                            <input type="text"
                                name="cargo"
                                className="form-control"
                                value={this.state.pessoa.cargo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o cargo" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> Observações </label>
                            <input type="text"
                                name="observacao"
                                className="form-control"
                                value={this.state.pessoa.observacao}
                                onChange={e => this.updateField(e)}
                                placeholder="Adicionar observações (opcional)" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Setor Responsável</label>
                            <select name="responsavel_id" onChange={ e=> this.updateSectorField(e)} value={this.state.pessoa.responsavel_id}>
                                {this.state.setores.map (setor => <option key={setor.id}>{setor.id}</option>)}
                            </select>
                        </div>
                        <ul>
                            {this.state.setores.map (setor => <li key={setor.id}>{setor.id} -> {setor.nome}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 d-flex justify-content-end'>
                        <button className="btn btn-primary" onClick={ e => this.save(e)}>
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
        )
    }

   

    render () {
        
        return (
            <Main icon="user" title="Cadastro" subtitle="Novo Cadastro" >
                {this.renderForm()}
            </Main>
        )
    }
}
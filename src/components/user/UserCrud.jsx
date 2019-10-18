import React, { Component } from 'react'
import Main from '../template/Main'
import Axios from 'axios'


const baseUrl = 'http://192.168.25.13:8089/ws/pessoas'
const initialState = {
    pessoa: {id: '', nome: '', dataNasc:'', email: '', telefone: '', cpf: '', passaporte:'',
            cnh:'', cnhValidade:'', cargo: '', observacoes: ''},
}

const url = "document/a"
var urlArray= []
urlArray = url.split('/')
var id = 0;
export default class UserCrud extends Component {
    state = { ...initialState}

    componentDidMount(){
        this.setState({pessoa: {
            id: urlArray[urlArray.length() -1]
        }})
    }

    clear() {
        this.setState({pessoa: initialState.pessoa})
    }

    save(){
        const pessoa = this.state.pessoa
        const method = pessoa.id ? 'put' : 'post'
        Axios[method](url, pessoa)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ pessoa: initialState.pessoa, list})
            })
    }

    getUpdatedList(pessoa){
        const list = this.state.list.filter(u => u.id !== pessoa.id)
        list.unshift(pessoa)
        return list
    }

    updateField(event){
        const pessoa = {...this.state.pessoa}
        pessoa[event.target.name] = event.target.value 
        this.setState({ pessoa })

    }

    renderForm(){
        return (
            <div className='form'>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Nome </label>
                            <input type="text"
                                name="name"
                                className="form-control"
                                value={this.state.pessoa.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome do usuário"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label> Data de nascimento </label>
                            <input type="date"
                                name="dataNascimento"
                                className="form-control"
                                value={this.state.pessoa.dataNasc}
                                onChange={e => this.updateField(e)}
                                placeholder=" dd/mm/aaaa"
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
                            <input type="date"
                                name="passaporte"
                                className="form-control"
                                value={this.state.pessoa.cnhValidade}
                                onChange={e => this.updateField(e)}/>
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
                            <input type="number"
                                name="telefone"
                                className="form-control"
                                value={this.state.pessoa.telefone}
                                onChange={e => this.updateField(e)}
                                placeholder="+00 0000-0000" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> Cargo </label>
                            <input type="text"
                                name="Cargo"
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
                                name="observacoes"
                                className="form-control"
                                value={this.state.pessoa.observacoes}
                                onChange={e => this.updateField(e)}
                                placeholder="Adicionar observações (opcional)" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 d-flex justify-content-end'>
                        <button className="btn btn-primary" onClick={ e => this.save(e)}>
                            Salvar
                        </button>

                        <button onClick={ e => this.clear(e)} className="btn btn secondary ml-2">
                            Cancelar
                        </button>
                    </div>
                </div>
                
            </div>
        )
    }

    load(pessoa) {
        this.setState({ pessoa })
    }

    remove(pessoa) {
        Axios.delete(`${baseUrl}/${pessoa.id}`).then(resp => {
            const list = this.state.list.filter( u=> u!==pessoa)
            this.setState({ list })
        })
    }

   

    render () {
        
        return (
            <Main icon="user" title="Cadastro" subtitle="Novo Cadastro" >
                {this.renderForm()}
            </Main>
        )
    }
}
import React, { Component } from 'react'
import Main from '../template/Main'
import Axios from 'axios'


const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {name: '', dataNasc:'', email: '', telefone: '', cpf: '', passaporte:'',
            cnh:'', cnhValidade:'', cargo: '', observacoes: ''},
    list: []
}

export default class UserCrud extends Component {
    state = { ...initialState}

    componentWillMount(){
        Axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })

    }

    clear() {
        this.setState({user: initialState.user})
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        Axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list})
            })
    }

    getUpdatedList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value 
        this.setState({ user })

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
                                value={this.state.user.name}
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
                                value={this.state.user.dataNasc}
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
                                value={this.state.user.cpf}
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
                                value={this.state.user.passaporte}
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
                                value={this.state.user.cnh}
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
                                value={this.state.user.cnhValidade}
                                onChange={e => this.updateField(e)}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group" >
                            <label> E-mail </label>
                            <input type="text"
                                name="email"
                                className="form-control"
                                value={this.state.user.email}
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
                                value={this.state.user.telefone}
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
                                value={this.state.user.cargo}
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
                                value={this.state.user.observacoes}
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

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        Axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.state.list.filter( u=> u!==user)
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
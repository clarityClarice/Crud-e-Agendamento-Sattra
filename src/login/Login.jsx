import React from 'react'
import "./Login.css"

class Login extends React.Component {
    render(){
        return(
            <div className="contentLogin">
                <div className="loginForm">

                    <div className="form-group">
                        <label>Usuário</label>
                        <input type="text"/>
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type="password"/>
                    </div>
                    <button className="Entrar">Entrar</button>
                </div>
            </div>

        )
    }
}

export default Login
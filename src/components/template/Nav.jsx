import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i>  Dashboard
            </Link>
            <Link to="/cadastros">
                <i className="fa fa-users"></i> Cadastros
            </Link>
            <Link to="/agenda">
                <i class="fa fa-calendar"></i> Agenda
            </Link>
        </nav>
    </aside>
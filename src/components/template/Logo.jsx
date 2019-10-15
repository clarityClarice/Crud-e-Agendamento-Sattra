import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../Assets/images/Logo.png'

export default props =>
    <aside className="logo">
        <Link to="/app/home" className="logo">
            <img src={Logo} alt="Porto de Itajaí" />
        </Link>
    </aside>
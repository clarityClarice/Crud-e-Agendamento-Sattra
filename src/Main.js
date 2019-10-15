import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'

import Router from './Router'

export default props =>
    <HashRouter>
        <div className="main">
            <Router/> 
        </div>
    </HashRouter>
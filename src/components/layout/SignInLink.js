import React from 'react'
import {NavLink} from 'react-router-dom'

const SignInLink = () =>{
    return(
        <ul className ="right">
            <li><NavLink to='/search'>Search Location</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className = 'btn btn-floating red lighten -1'>NV</NavLink></li>
        </ul>
    )
}

export default SignInLink
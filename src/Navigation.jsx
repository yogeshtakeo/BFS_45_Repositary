import React from 'react'
import { Link } from 'react-router-dom'
import './styles/nav.css'

function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link exact to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
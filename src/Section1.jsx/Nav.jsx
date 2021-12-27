import { logDOM } from '@testing-library/dom'
import React from 'react'

const Nav = () => {
    return (
        <div id="nav">
            <img src="logo.png" alt="logo"/>
            <div className="btn">
            <button className="lan">English</button>
            <button className="sign">Sign in</button>
            </div>
        </div>
    )
}

export default Nav

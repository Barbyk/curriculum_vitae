import React, { Component } from 'react'
import logo from "../assets/hexagon.png"
import "../components/Header.css"

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar">
             <img className="logobarby" src={logo}  alt=""></img>
             <h2>Développeuse Front-end Junior</h2>
            </nav>
        )
    }
}

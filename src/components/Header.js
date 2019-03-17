import React, { Component } from 'react'
import logo from "../assets/hexagon.png"
import "../components/Header.scss"

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar fixed-top">
                <img className="logobarby" src={logo}  alt=""></img>
                <h2>Développeuse Front-end Junior</h2>
                </nav>
                <header />
            </React.Fragment>
        )
    }
}
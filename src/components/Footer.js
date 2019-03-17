import React, { Component } from 'react'
import "../components/Footer.scss"

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="copyright">
        Copyright © {(new Date().getFullYear())} Barbara
        </div>
      </footer>
    )
  }
}
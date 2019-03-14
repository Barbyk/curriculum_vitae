import React, { Component } from 'react';
import Header from "./components/Header";
import Projects from "./components/Projects";
import Person from "./components/Person"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Person />
        <Projects />

      </div>
    );
  }
}

export default App;

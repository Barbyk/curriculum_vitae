import React, { Component } from 'react';
// import Header from "./components/Header";
// import Projects from "./components/Projects";
// import Person from "./components/Person";
// import Profil from "./components/Profil"
import './App.css';
import Experiences from './components/Experiences';
// import Skill from "./components/Skills";
// import Interests from "./components/Interests";
// import Educations from "./components/Educations";



class App extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Person />
        <Projects />
        <Profil /> */}
        <Experiences />
        {/* <Skill />
        <Interests />
        <Educations /> */}
      </div>
    );
  }
}

export default App;

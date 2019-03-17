import React, { Component } from 'react';
import axios from "axios";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Person from "./components/Person";
import Profil from "./components/Profil"
import Experiences from './components/Experiences';
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Educations from "./components/Educations";
import Footer from "./components/Footer"

import './App.scss';

class App extends Component {

  state = {
    information: {}
  };

  componentDidMount() {
    axios
      .get('db.json')
      .then(res => this.setState({ information: res.data }));
  }

  render() {
    const { information } = this.state;
    return (
      <div>
        <Header />
        <div className="person">
          <Person {...information.person} />
          <Profil  {...information.profil} />
          <Skills  skills={ information.skills } />
        </div>
        <div className="formation">
          <Educations educations={ information.educations } />
          <Experiences experiences={ information.experiences } />
        </div>
        <div className="solo">
          <Projects  projects={ information.projects } />
          <Interests  interests={ information.interests } />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

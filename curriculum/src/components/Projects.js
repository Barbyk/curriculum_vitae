import React, { Component } from 'react';
import axios from "axios";

export default class Projects extends Component {
  state = {
    isLoading: true,
    projects: [],
    error: null
  };

  componentDidMount() {
    this.getProjects()
  }

  getProjects() {
    axios
      .get('http://localhost:3001/projects')
      .then(res => {
        this.setState({
          projects: res.data.project,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }))
  }
  render() {
    const { isLoading, projects } = this.state;
    return (
      <React.Fragment>
      <h2>Projets</h2>
      <div>
        {!isLoading ? (
          projects.map(project => {
            const { id, title, skills } = project;
            return (
              <div key={id}>
                <h3>{title}</h3>
                <p>{skills}</p>
              </div>
            );
          })
        ) : (
            <p>Loading...</p>
          )}
      </div>
      </React.Fragment>
      );
  }
}

import React, { Component } from 'react'
import axios from 'axios';

export default class Experiences extends Component {
  state = {
    experiences: [],
    project:[],
    isLoading: true,
    error: null
  }

  getExperiences() {
    axios
      .get('http://localhost:3001/experiences')
      .then(res => {
        this.setState({
          experiences: res.data.experience,
          isLoading: false
        })
        console.log(res.data.experience);
        
      })
      .catch(error => this.setState({ error, isLoading: false }))
  }

  componentDidMount() {
    this.getExperiences()
  }
  render() {
    const { isLoading, experiences } = this.state;
    return (
      <React.Fragment>
        <h2>Expériences</h2>
        <div>
          {!isLoading ? (
            experiences.map(exp => {
              const { id, title, enterprise, period, missions } = exp;
              const { project }= this.state;
              return (
                <div key={id}>
                  <h3>{title}</h3>
                  <h4>{enterprise} {period}</h4>
                  <p>{missions}</p>
                  <p>{project.map(pro => {
                    const { id, title, description, skills } = pro;
                    return (
                      <div key={id}>
                        <h5>{title}</h5>
                        <p>{description}</p>
                        <p>{skills}</p>
                      </div>
                    )
                  })}
                  </p>
                </div>
              )
            })) : (<p>Loading...</p>)}
        </div>
      </React.Fragment>
    )
  }
}

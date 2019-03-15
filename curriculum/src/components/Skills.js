import React, { Component } from 'react'
import axios from 'axios';

export default class Skills extends Component {
    state = {
        skills: [],
        isLoading: true,
        errors: null
    }

    getSkills() {
        axios
            .get('http://localhost:3001/skills')
            .then(res => {
                this.setState({
                    skills: res.data.skill,
                    isLoading: false
                })
                console.log(res.data.skill);
                
            })
            .catch(error => this.setState({ error, isLoading: false }))
    }

    componentDidMount() {
        this.getSkills();
    }

    render() {
        const { isLoading, skills } = this.state;
        return (
            <React.Fragment>
                <h2>Outils</h2>
                <div>
                    {!isLoading ? (
            skills.map((skill, i) => {
            return (
                <div key={i}>
                    <p>{skill}</p>
                </div>
            )
            })
        ) : (<p>Loading...</p>)}
                </div>
            </React.Fragment>
        )
    }
}

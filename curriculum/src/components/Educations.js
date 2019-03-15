import React, { Component } from 'react';
import axios from "axios";

export default class Educations extends Component {
    state = {
        isLoading: true,
        educations: [],
        error: null
    };

    componentDidMount() {
        this.getEducations()
    }

    getEducations() {
        axios
            .get('http://localhost:3001/educations')
            .then(res => {
                this.setState({
                    educations: res.data.education,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }))
    }
    render() {
        const { isLoading, educations } = this.state;
        return (
            <React.Fragment>
                <h2>FORMATIONS</h2>
                <div>
                    {!isLoading ? (
                        educations.map(project => {
                            const { id, title, school, city, year, more } = project;
                            return (
                                <div key={id}>
                                    <h3>{title}</h3>
                                    <p>{school} {city} {year}</p>
                                    <p>{more}</p>
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

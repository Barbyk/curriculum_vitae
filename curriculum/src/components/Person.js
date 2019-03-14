import React, { Component } from 'react'
import axios from 'axios';

export default class Person extends Component {
    state = {
        person: [],
        isLoading: true,
        error: null
    }

    getPerson() {
        axios
        .get('http://localhost:3001/person')
        .then(response => {
            this.setState({
                person: response.data,
                isLoading:false
            })
        })
        .catch(error => this.setState({ error, isLoading: false }))
    }
    componentDidMount() {
        this.getPerson()
    }

    render() {
        const { isLoading, person } = this.state;
        return (
            <React.Fragment>
            <h2>Coordonnées</h2>
            <div>
                {!isLoading ? (
                            <div>
                                <p>{person.name}</p>
                                <p>{person.mobile}</p>
                                <p>{person.email}</p>
                                <p>{person.github}</p>
                                <p>{person.adress}</p>
                            </div>
                        ) : ( <p>Loading...</p>)}
            </div>
            </React.Fragment>
        )
    }
}

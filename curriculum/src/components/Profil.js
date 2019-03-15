import React, { Component } from 'react'
import axios from 'axios';

export default class Experiences extends Component {
    state = {
        profil: [],
        isLoading: true,
        error: null
    }

    getExperiences() {
        axios
            .get('http://localhost:3001/profil')
            .then(res => {
                this.setState({
                    profil: res.data,
                    isLoading: false
                })
            })
            .catch(error => this.setState({ error, isLoading: false }))
    }

    componentDidMount() {
        this.getExperiences()
    }
    render() {
        return (
            <React.Fragment>
                <h2>Résumé</h2>
                <div>
                    {!isLoading ? (
                        <div>
                            <p>{resume}</p>
                        </div>
                    ) : (<p>Loading...</p>)}
                </div>
            </React.Fragment>
        )
    }
}

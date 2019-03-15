import React, { Component } from 'react'
import axios from 'axios';

export default class Profil extends Component {
    state = {
        profil: [],
        isLoading: true,
        error: null
    }

    getProfil() {
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
        this.getProfil()
    }
    render() {
        const { isLoading, profil } = this.state;
        return (
            <React.Fragment>
                <h2>Résumé</h2>
                <div>
                    {!isLoading ? (
                        <div>
                            <p>{profil.resume}</p>
                        </div>
                    ) : (<p>Loading...</p>)}
                </div>
            </React.Fragment>
        )
    }
}

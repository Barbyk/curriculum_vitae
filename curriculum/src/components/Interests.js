import React, { Component } from 'react'
import axios from 'axios';

export default class Interests extends Component {
    state = {
        interests: [],
        isLoading: true,
        errors: null
    }

    getInterests() {
        axios
            .get('http://localhost:3001/interests')
            .then(res => {
                this.setState({
                    interests: res.data.interest,
                    isLoading: false
                })
                console.log(res.data.interest);
                
            })
            .catch(error => this.setState({ error, isLoading: false }))
    }

    componentDidMount() {
        this.getInterests();
    }

    render() {
        const { isLoading, interests } = this.state;
        return (
            <React.Fragment>
                <h2>Intérêts</h2>
                <div>
                    {!isLoading ? (
            interests.map((interest, i) => {
            return (
                <div key={i}>
                    <p>{interest}</p>
                </div>
            )
            })
        ) : (<p>Loading...</p>)}
                </div>
            </React.Fragment>
        )
    }
}

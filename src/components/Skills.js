import React from 'react'
import PropTypes from 'prop-types';
import "./Skills.scss"

const Skills = ({ skills }) => (
    <React.Fragment>
        <div className="card container-fluid border-secondary mb-3 m-3">
            <div className="card-body">
                <h2 className="card-title">OUTILS</h2>
                <div>
                    <p>{skills.join(', ')}</p>
                </div>
            </div>
        </div>
    </React.Fragment>
)

Skills.propTypes = {
    skills: PropTypes.array,
}

Skills.defaultProps = {
    skills: [],
}

export default Skills;

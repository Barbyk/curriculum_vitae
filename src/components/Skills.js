import React from 'react'
import PropTypes from 'prop-types';
import "./Skills.css"

const Skills = ({ skills }) => (
    <React.Fragment>
        <div className="card container-fluid border-secondary mb-3">
            <div className="card-body">
                <h2 className="card-title">OUTILS</h2>
                <div>
                    {
                        skills.map(((skill, i)=> (
                            <div key={i} className="skills">
                                <p className="space">{skill}</p>
                            </div>
                        )))}
                </div>
            </div>
        </div>
    </React.Fragment>
)

Skills.propTypes = {
    skills: PropTypes.array
}

Skills.defaultProps = {
    skills: []
}

export default Skills

import React from 'react'
import PropTypes from 'prop-types'
import "./Experiences.scss"

const Experiences = ({ experiences }) => (
  <React.Fragment>

    <div className="card container-fluid border-secondary mb-3 m-3">
      <div className="card-body">
        <h2 className="card-title">EXPÉRIENCES</h2>
        <div>
          {
            experiences.map(exp => (
              <div key={exp.id} className="experience">
                <h3 className="title_exp">{exp.title}</h3>
                <h4 className="ent">{exp.enterprise} {exp.period}</h4>
                {exp.missions.map((mission, i) => <p className="mission" key={i}>{mission}</p>)}
                <div>{
                  exp.projects.map(({ id, title, description, skills }) => (
                    <div key={id}>
                      <h5 className="title_pro">{title}</h5>
                      <div className="description">
                        <p>{description}</p>
                        <p>{skills.join(', ')}</p>
                      </div>
                    </div>
                  ))
                }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </React.Fragment>
)


Experiences.propTypes = {
  experiences: PropTypes.array,
}

Experiences.defaultProps = {
  experiences: [],
}

export default Experiences;

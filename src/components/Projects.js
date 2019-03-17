import React from 'react'
import PropTypes from 'prop-types';
import "../components/Projects.css"


const Projects = ({ projects }) => (
  <React.Fragment>
    <div className="card container-fluid border-secondary mb-3">
      <div className="card-body">
        <h2 className="card-title">PROJETS</h2>
        <div>
          {
            projects.map(({ id, title, skills })=> (
                <div key={id}>
                  <h3>{title}</h3>
                  <p>{skills.join(', ')}</p>
                </div>
            )
            )}
        </div>
      </div>
    </div>
  </React.Fragment>
)

Projects.propTypes = {
  projects: PropTypes.array,
}

Projects.defaultProps = {
  projects: [],
}

export default Projects

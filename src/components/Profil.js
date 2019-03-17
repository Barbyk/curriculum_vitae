import React from 'react'
import PropTypes from 'prop-types'

const Profil = ({resume}) => (
    <React.Fragment>
                <div className="card container-fluid border-secondary mb-3">
                    <div className="card-body">
                        <h2 className="card-title">RESUME</h2>
                        <div>
                                    <p>{resume}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
)

Profil.propTypes = {
    resume: PropTypes.string,
}

Profil.defaultProps = {
    resume: '',
}

export default Profil;

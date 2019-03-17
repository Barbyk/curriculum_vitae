import React from 'react'
import PropTypes from 'prop-types';
import "./Interests.scss"


const Interests = ({ interests }) =>(
<React.Fragment>
                <div className="card container-fluid border-secondary mb-3 m-3">
                    <div className="card-body">
                        <h2 className="card-title">INTÉRÊTS</h2>
                        <div>
                        <p className="space_2">{interests.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
)

Interests.propTypes = {
    interests: PropTypes.array
}
Interests.defaultProps = {
    interests: []
}


export default Interests;

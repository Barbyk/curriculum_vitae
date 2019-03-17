import React from 'react'
import PropTypes from 'prop-types';
import "./Interests.css"


const Interests = ({interests}) =>(
<React.Fragment>
                <div className="card container-fluid border-secondary mb-3">
                    <div className="card-body">
                        <h2 className="card-title">INTERETS</h2>
                        <div>
                            {
                                interests.map((interest, i) =>(
                                        <div key={i} className="int">
                                            <p className="space_2">{interest}</p>
                                        </div>
                                ))}
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


export default Interests

import React from 'react'
import PropTypes from 'prop-types';
import "./Educations.css"


const Educations = ({ educations }) =>(
    <React.Fragment>
        <div className="card container-fluid border-secondary mb-3 m-3">
            <div className="card-body">
                <h2 className="card-title">FORMATIONS</h2>
                <div>
                    {
                        educations.map(({ id, title, school, city, year, more }) => (
                                <div key={id}>
                                    <h3 className="title_ed">{title}</h3>
                                    <p className="scy">{school} {city} {year}</p>
                                    <p>{more}</p>
                                </div>
                            ))

                    }
                </div>
            </div>
        </div>
    </React.Fragment>
)

Educations.propTypes = {
    educations: PropTypes.array
}

Educations.defaultProps = {
    educations: []
}

export default Educations

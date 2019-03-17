import React from 'react';
import PropTypes from 'prop-types';
import "./Person.css";

const Person = ({ name, mobile, email, github, address }) => (
    <div>
        <React.Fragment>
            <div className="card container-fluid border-secondary mb-3">
                <div className="card-body">
                    <h2 className="card-title">COORDONNEES</h2>
                    <div>
                        <div>
                            <p className="bold">{name}</p>
                            <p>{mobile}</p>
                            <p>{email}</p>
                            <a href="https://github.com/Barbyk">{github}</a>
                            <p>{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    </div>
);

Person.propTypes = {
    name: PropTypes.string,
    mobile: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.string,
    address: PropTypes.string,
};

Person.defaultProps = {
    name: '',
    mobile: '',
    email: '',
    github: '',
    address: '',
};

export default Person;
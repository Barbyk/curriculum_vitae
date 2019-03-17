import React from 'react';
import PropTypes from 'prop-types';
import "./Person.css";

const Person = ({ name, mobile, email, github, address }) => (
    <div>
        <React.Fragment>
            <div className="card container-fluid border-secondary m-3">
                <div className="card-body">
                    <h2 className="card-title">COORDONNÉES</h2>
                    <div>
                        <div>
                            <p className="bold"><i className="fa fa-user" aria-hidden="true"></i>{name}</p>
                            <p><i className="fa fa-phone" aria-hidden="true"></i>{mobile}</p>
                            <p><i className="fa fa-envelope" aria-hidden="true"></i>{email}</p>
                            <a href="https://github.com/Barbyk"><i className="fa fa-github" aria-hidden="true"></i>{github}</a>
                            <p><i className="fa fa-home" aria-hidden="true"></i>{address}</p>
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
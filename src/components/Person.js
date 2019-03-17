import React from 'react';
import PropTypes from 'prop-types';
import "./Person.scss";

const Person = ({ name, mobile, email, github, address }) => (

    <React.Fragment>
        <div className="card container-fluid border-secondary mb-3 m-3">
            <div className="card-body">
                <h2 className="card-title">COORDONNÉES</h2>
                <div>
                    <p className="bold"><i className="fa fa-user" aria-hidden="true"></i>{name}</p>
                    <p><i className="fa fa-phone" aria-hidden="true"></i>{mobile}</p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i>{email}</p>
                    <p>
                        <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" height="20" />
                        <a className="github" href="https://github.com/Barbyk">{github}</a>
                    </p>
                    <p><i className="fa fa-home" aria-hidden="true"></i>{address}</p>
                </div>
            </div>
        </div>
    </React.Fragment>
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
import React from 'react';
import { NavLink} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                <h3>Oops this page does not exist !</h3>
                <NavLink exat to = "/">
                    <i className='fas fa-home'></i>
                    <span>Home</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;
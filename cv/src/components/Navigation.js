import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            
            <div className='id'>
                <div className='idContent'>
                    <img src='./media/profil_cv.jpg' alt='profile_picture'/>
                    <h3>Tony Carlos</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to = "/" activeClassName='navActive'>
                            <i className='fas fa-home'></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to = "/skills" activeClassName='navActive'>
                            <i className='fas fa-mountain'></i>
                            <span>Skills</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to = "/portfolio" activeClassName='navActive'>
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to = "/contact" activeClassName='navActive'>
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://www.twitter.com/tonyht23" target="_blank" rel= "noopener noreferrer">
                            <i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/tonyv23_" target="_blank" rel= "noopener noreferrer">
                            <i className="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.fr/tonyv23_" target="_blank" rel= "noopener noreferrer">
                            <i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://www.github.com/tonyv23_" target="_blank" rel= "noopener noreferrer">
                            <i className="fab fa-github"></i></a>
                    </li>
                </ul>
            </div>

            <div className='signature'>
                <p>Viper23 - 2022</p>
            </div>
        
        </div>
    );
};

export default Navigation;
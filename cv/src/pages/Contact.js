import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className='contactContent'>
            <div className='header'></div>
            <div className='contactBox'>
                <h1>Contact me</h1>
                <ul>
                    <li>
                        <i className='fas fa-map-marker-alt'></i>
                        <span>Bujumbura-Burundi</span>
                    </li>
                    <li>
                        <i className='fas fa-mobile-alt'></i>
                        <CopyToClipboard text='+257 61 09 95 12'>
                            <span className='clickInput' 
                            onClick={()=> {alert('Phone number copied !')}}>+257 61 09 95 12</span>
                        </CopyToClipboard>
                    </li>
                    <li>
                        <i className='far fa-envelope'></i>
                        <CopyToClipboard text='tcarlin107@gmail.com'>
                            <span className='clickInput' 
                            onClick={()=> {alert('Mail address copied !')}}>tcarlin107@gmail.com</span>
                        </CopyToClipboard>
                    </li>
                </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <a href="https://www.twitter.com/tonyht23" target="_blank" rel= "noopener noreferrer">
                        <h4>Twitter</h4><i className="fab fa-twitter"></i></a>
                    
                    <a href="https://www.instagram.com/tonyv23_" target="_blank" rel= "noopener noreferrer">
                        <h4>Instagram</h4><i className="fab fa-instagram"></i></a>
                    
                    <a href="https://www.linkedin.fr/tonyv23_" target="_blank" rel= "noopener noreferrer">
                        <h4>Linkedin</h4><i className="fab fa-linkedin"></i></a>
                    
                    <a href="https://www.github.com/tonyv23_" target="_blank" rel= "noopener noreferrer">
                        <h4>Github</h4><i className="fab fa-github"></i></a>
                </ul>
            </div>
        </div>
    </div>
);
};

export default Contact;
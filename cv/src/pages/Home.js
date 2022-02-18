import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
            <div className='homeContent'>
                <div className='content'>
                    <h1>Tony Carlos</h1>
                    <h2>Web Developer</h2>
                    <div className='pdf'>
                        <a href='./media/CV.pdf' target="_blank">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
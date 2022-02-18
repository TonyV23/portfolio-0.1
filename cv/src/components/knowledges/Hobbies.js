import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Interests</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Musculation</span>
                </li>    
            </ul>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-hiking'></i>
                    <span>hikes</span>
                </li>    
            </ul> 
            <ul>
                <li className='hobby'>
                    <i className='fab fa-bitcoin'></i>
                    <span>Cryptocurrency</span>
                </li>    
            </ul>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-seedling'></i>
                    <span>Permaculture</span>
                </li>    
            </ul>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-rocket'></i>
                    <span>Espace</span>
                </li>    
            </ul>
        </div>
    );
};

export default Hobbies;
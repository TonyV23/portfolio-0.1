import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Interests</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-runnig'></i>
                    <span>Musculation</span>
                </li>    
            </ul>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-rapping'></i>
                    <span>French Rap</span>
                </li>    
            </ul> 
            <ul>
                <li className='hobby'>
                    <i className='fas fa-bitcoin'></i>
                    <span>Cryptocurrency</span>
                </li>    
            </ul>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-hacking'></i>
                    <span>Hacking</span>
                </li>    
            </ul>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-programming'></i>
                    <span>Programming</span>
                </li>    
            </ul>
        </div>
    );
};

export default Hobbies;
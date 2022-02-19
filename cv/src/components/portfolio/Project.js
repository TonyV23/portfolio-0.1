import React, { Component } from 'react';

class Project extends Component {
    render() {
        let {name, languagesIcons, source, info, picture} = this.props.item;

        return (
            <div className='project'>
                <div className='icons'>
                    {languagesIcons.map(icon => {
                        <i className={icon} key={icon}></i>
                    })}
                </div> 
                <h3>{name}</h3>
                <img src={picture} alt='projects images'/>
                <span className='infos'>
                    <i className="fas fa-plus-circle"></i>
                </span>   
            </div>
        );
    }
}

export default Project;
import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {

    state = { projects : portfolioData };

    render() {
        let { projects } = this.state; //le desturing

        return (
            <div className='portfolioContent'>
                <ul className='radioDisplay'>

                </ul>
                <div className='projects'>
                    {
                        projects.map((item) =>{
                            return(
                                <Project key= {item.id} item ={item}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;
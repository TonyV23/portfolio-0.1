import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    
    state = {
        languages:[
            {id :1, value: "JavaScript", xp:0.3},
            {id :2, value: "Java", xp:0.6},
            {id :3, value: "Python", xp:0.5},
            {id :4, value: "Html", xp:0.3},
            {id :5, value: "Css", xp:0.3}
        ],
        
        frameworks:[
            {id :1, value:"Swing", xp: 0.4},
            {id :2, value:"Sass", xp: 0.4},
            {id :3, value:"Django", xp: 0.4},
            {id :4, value:"React", xp: 0.3}
        ]
    }
    render() {

        let { languages, frameworks } = this.state;
    
        return (
            <div className='languagesFrameworks'>
               <ProgressBar languages = { languages } className ='languagesDisplay' title = 'languages'/> 
               <ProgressBar languages = { frameworks } className = 'frameworksDisplay' title = 'frameworks & library'/> 
            </div>
        );
    }
}

export default Languages;
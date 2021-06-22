import React, { Component } from 'react';
import projects from './projectList'
import dayPlanner from 

class Projects extends Component
{
    render()
    {
        
        return(
            <div className="container">
                <ul>
                    {projects.map((project, index) => 
                    {
                        return(
                            <li>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="title">{project.title}</h3>
                                    </div>
                                    <div className="card-footer text-center">
                                        <button id="cardButton" className="btn btn-theme" style={{ color: '#fff', backgroundColor: '#7577fa', height: '30px', position: 'absolute'}} >Check it out!</button>
                                    </div>
                                </div>
                            </li>

                        )
                        
                    })}
                </ul>
            </div>
        )
    }
}




export default Projects;
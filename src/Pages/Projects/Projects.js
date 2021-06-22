import React, { Component } from 'react';
import dayPlanner from '../../images/dayPlanner.png'
import myMediaMate from '../../images/myMediaMate.png'
import weatherDashboard from '../../images/weatherDashboard.png'
import noteTaker from '../../images/noteTaker.png'
import fitnessTracker from '../../images/fitnessTracker.png'
import passwordGenerator from '../../images/passwordGenerator.png'
import '../Projects/Projects.css'

class Projects extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h3 className="title">My Media Mate</h3>
                        <img src={myMediaMate}/>
                    </div>
                    <div className="card-btn text-center">
                        <a href="https://whispering-ridge-05864.herokuapp.com/"><button className="btn">Check It Out!</button></a>                    
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="title">Note Taker</h3>
                        <img src={noteTaker}/>
                    </div>
                    <div className="card-btn text-center">
                        <a href="https://gentle-plains-08788.herokuapp.com"><button className="btn">Check It Out!</button></a>                
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="title">Weather Dashboard</h3>
                        <img src={weatherDashboard}/>
                    </div>
                    <div className="card-btn text-center">
                        <a href="https://moagermo.github.io/Weather-Dashboard"><button className="btn">Check It Out!</button></a>                
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="title">Work Day Scheduler</h3>
                        <img src={dayPlanner}/>
                    </div>
                    <div className="card-btn text-center">
                        <a href="https://moagermo.github.io/The-Today-Scheduler"><button className="btn">Check It Out!</button></a>                
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="title">Fitness Tracker</h3>
                        <img src={fitnessTracker}/>
                    </div>
                    <div className="card-btn text-center">
                        <a href="https://fitnesstrackerspectacular.herokuapp.com"><button className="btn">Check It Out!</button></a>                
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="title">Password Generator</h3>
                        <img src={passwordGenerator}/>
                    </div>
                    <div className="card-btn text-center">
                        <a href="https://moagermo.github.io/Password-Generator"><button className="btn">Check It Out!</button></a>                </div>
                    </div>
                </div>
                
        )
    }
           
}




export default Projects;
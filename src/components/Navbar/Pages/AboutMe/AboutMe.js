import './AboutMe.css'
import React from 'react';
import Mo from './mo.png'

function AboutMe()
{
    
        return(
            <div className="wrapper">
                
                <div className="profile">
                    <div className="profile_img_info">         
                        <div className="img">
                            <img src={Mo} alt="profile_pic"/>     
                        </div>
                        <div className="info">
                            <p className="name">Available in:</p>
                            <ul>
                                <li>
                                    <p className="place"><span><i className="fas fa-map-marker-alt"></i></span>Columbus </p>
                                    <p className="place"><span><i className="fas fa-map-marker-alt"></i></span>Remote </p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="profile_skills">
                        <div className="skills">
                            <p>Skills</p>
                            <ul>
                                <li><span className="icon"><i className="fab fa-html5"></i></span>
                                <span className="abtitle">HTML5</span>
                            </li>
                                <li><span className="icon"><i className="fab fa-css3-alt"></i></span>
                                <span className="abtitle">CSS5</span></li>
                                <li><span className="icon"><i className="fab fa-js-square"></i></span>
                                <span className="abtitle">JS</span></li>  
                            </ul>
                        </div>
                        <div className="tags_wrap">
                            <span className="tag">Web Development</span>
                        <span className="tag">Web Design</span>
                        <span className="tag">UI/UX</span>
                        <span className="tag">Backend Development</span>
                        </div>
                    </div>
                </div>
                <div className="profile_counts">
                    <div className="profile_counts_wrap">
                        <div className="item">
                            <div className="icon">
                                <i className="fas fa-eye">
                                </i>
                            </div>
                            <div className="abtitle">
                                View Projects
                            </div>
                        </div>
                    </div>
                    <div className="profile_counts_wrap">
                        <div className="item">
                            <div className="icon">
                                <i className="fas fa-eye">
                                </i>
                            </div>
                            <div className="abtitle">
                                View Resume
                            </div>
                        </div>
                    </div>
                    <div className="profile_counts_wrap">
                        <div className="item">
                            <div className="icon">
                                <i className="fas fa-comment">
                                </i>
                            </div>
                            <div className="abtitle">
                                Contact
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}


export default AboutMe;
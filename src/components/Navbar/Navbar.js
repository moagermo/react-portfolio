import React, { Component } from 'react';
import {MenuItems} from './MenuItems'
import { Button } from '../Button'
import './Navbar.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AboutMe from '../../Pages/AboutMe/AboutMe'
import ContactMe from '../../Pages/ContactMe/ContactMe';
import Projects from '../../Pages/Projects/Projects'
import Resume from '../../Pages/Resume/Resume'



class Navbar extends Component
{
    
    state = { clicked:false }

    handleClick=()=>
    {
        this.setState({ clicked: !this.state.clicked})
    }
    
    render()
    {
        
        
        return(

            
            <Router>
                
                <nav className="NavbarItems">
                    <div>
                        <h1 className="name">Mo Ager</h1>
                    </div>
                   <div className = "menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fa fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index)=> {
                            return(
                                <li key={index}>
                                    <Link to={item.name} className={item.cName} href={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })} 
                    </ul>
                    <Button><Link to="/contact" className="btn--medium">contact</Link></Button>
                </nav> 

                
                <Switch>
                    
                    <Route path="/react-portfolio" exact>
                        <AboutMe />
                    </Route>
                    <Route path="/react-portfolio/contact"exact>
                        <ContactMe />
                    </Route>
                    <Route path="/react-portfolio/projects"exact>
                        <Projects />
                    </Route>
                    <Route path="/react-portfolio/resume" exact>
                        <Resume />
                    </Route>
                </Switch>

            </Router>

                   
        )}     
        
    }


export default Navbar

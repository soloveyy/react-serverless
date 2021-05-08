import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Home from '../pages/Home'

export default function Navbar() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <Switch>
                <Route path="/project">
                    <Project />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </div>
        </Router>
    )
}
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Game from '../pages/Game';
import Home from '../pages/Home'
import {StyledNavbar, StyledNavbarItems, StyledNavbarItem, StyledLink} from '../styled/StyledNavbar'

export default function Navbar() {
    return (
        <Router>
            <StyledNavbar>
                <StyledNavbarItems>
                    <StyledNavbarItem><StyledLink to="/">Home</StyledLink></StyledNavbarItem>
                    <StyledNavbarItem><StyledLink to="/project">Project</StyledLink></StyledNavbarItem>
                    <StyledNavbarItem><StyledLink to="/contact">Contact</StyledLink></StyledNavbarItem>
                </StyledNavbarItems>
            </StyledNavbar>
                <Switch>
                <Route path="/game">
                    <Game />
                </Route>
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
        </Router>
    )
}
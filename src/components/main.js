import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import Aboutme from './aboutme';
import Mycv from './mycv';
import Projects from './projects';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/mycv" component={Mycv} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
)

export default Main;
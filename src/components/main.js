import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import About from './about';
import Careers from './careers';
import Privacy from './privacy';
import Tos from './tos';

const Main = () => (
    <Switch>
        <Route exact path="/" component = {Landing} />
        <Route path="/about" component = {About} />
        <Route path="/careers" component = {Careers} />
        <Route path="/privacy" component = {Privacy} />
        <Route path="/termsofservice" component = {Tos} />
    </Switch>
)

export default Main;
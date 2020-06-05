import React from 'react';
import { BrowserRouter  as Router, Switch, Route } from 'react-router-dom';

import NotFound from './pages/notFound/not-found';
import Home from './pages/home/home';
import Dashboards from './pages/dashboards/dashboards';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/dashboards" exact component={Dashboards}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}

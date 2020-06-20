import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from './pages/notFound/not-found';
import Home from './pages/home/home';
import Dashboards from './pages/dashboards';
import Profile from './pages/Profile';
import AlunosProcesso from './pages/alunosProcesso';

export default function Routes() {
    return(
        <BrowserRouter basename="/">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/dashboards" component={Dashboards}/>
                <Route path="/alunosProcesso" component={AlunosProcesso}/>
                <Route path="/profile" component={Profile}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

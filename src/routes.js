import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Main from './pages/Main';
import Login from './pages/Login/login';
import Administrar from './pages/Administrar/administrar';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/administrar" component = {Administrar} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
import React from 'react';
import { Router,Route} from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';

import AppLayout from './App.layout';

import LoginContainer from  '../components/Login/LoginContainer.component';

const browserHistory = new createBrowserHistory();

const AppRouter = () => (
    <Router history={browserHistory}>
        <Route path="/" component= {LoginContainer}/>
    </Router>

);

export default AppRouter;
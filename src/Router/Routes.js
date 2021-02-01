import react from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Dashboard from '../Pages/Dasboard/Dashboard'

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </div>
    );
}
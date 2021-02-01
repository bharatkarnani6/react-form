import react from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Dashboard from '../Pages/Dasboard/Dashboard'
import SecuredRoutes from './SecuredRoutes';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <SecuredRoutes exact path="/dashboard" component={Dashboard}>
                </SecuredRoutes>

            </Switch>
        </div>
    );
}
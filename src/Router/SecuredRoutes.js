import react from 'react';
import { Redirect, Route } from 'react-router-dom';


export default function SecuredRoutes({ component: Cmp, ...resetData }) {
    return (
        <Route
            {...resetData}
            render={(props) => (
                localStorage.getItem('login') ? (
                    <Cmp {...props} />
                ) :
                    <Redirect exact to="/" />
            )}
        />
    );
}
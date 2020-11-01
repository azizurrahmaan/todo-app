import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from "react-router-dom";
import Home from '../containers/Home'
import SignUp from '../containers/SignUp'
import SignIn from '../containers/SignIn'
import Snackbar from '../components/Snackbar'
import Backdrop from '../components/Backdrop'
import FourOFour from '../containers/FourOFour'
import IfAuth from '../components/IfAuth'
import IfNotAuth from '../components/IfNotAuth'
import AuthRequest from '../requests/AuthRequest'
import AuthToken from '../services/AuthToken'
import {getDateOnly} from '../services/DateTime'
import SelectedDate from '../services/SelectedDate'
import TaskRequest from '../requests/TaskRequest'

function Routes(props) {
 
    React.useEffect(() => {
        const initTaskApp = () => {
            AuthRequest.user()
            SelectedDate.setDate(new Date())
            TaskRequest.fetch(getDateOnly(new Date))
        }
        if(AuthToken.has()){
            initTaskApp()
        }
    },[])

    return (
        <Router>
            <Snackbar/>
            <Backdrop/>
            <IfNotAuth otherwise={<Redirect to="/home" />}>
                <Route path="/signin">
                    <SignIn/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
            </IfNotAuth>

            <Switch>
                
                <IfAuth otherwise={<Redirect to="/signin" />} >
                    <Route path="/home">
                        <Home/>
                    </Route>
                </IfAuth>

                { /* Catch all route */ }
                <Route path="*" component={FourOFour} status={404} />
            </Switch>
        </Router>
    );
}

export default Routes;
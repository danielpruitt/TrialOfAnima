import React from "react";
import Auth from './utils/Auth';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages/Main";
import Game from "./pages/Game";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Logout from "./components/Logout";
import SignUp from "./pages/SignUp";
import "./App.css"

const PrivateRoute = ({ component: Component, ...rest }) => (
  
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <PrivateRoute exact path="/home" component={Main} />
        <PrivateRoute exact path="/users" component={Game} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;

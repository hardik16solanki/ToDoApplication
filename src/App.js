import React from 'react';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/UserManagment/Landing'
import Register from './components/UserManagment/Register'
import Login from './components/UserManagment/Login'
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import jwt_decode from "jwt-decode";
import { logout } from "./actions/securityActions";
import SecuredRoute from "./securityUtils/SecureRoute";

 const jwtToken = localStorage.jwtToken;

    if (jwtToken) {
      setJWTToken(jwtToken);
      const decoded_jwtToken = jwt_decode(jwtToken);
      store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
      });

      const currentTime = Date.now() / 1000;
      if (decoded_jwtToken.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/";
      }
    }

class App extends React.Component {
 

  render(){
    return (
    <Provider store={store}>
      <Router>
        <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />

          <Switch>
              <SecuredRoute exact path="/home" component={Home} />
              <SecuredRoute exact path="/about" component={About} />
            </Switch>
        </div>
      </Router>
    </Provider>
  );
  }
  
}

export default App;

import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

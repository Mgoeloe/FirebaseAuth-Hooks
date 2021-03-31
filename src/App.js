import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import {AuthProvider} from './Components/Auth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App


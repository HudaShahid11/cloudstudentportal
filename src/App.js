import React, { Component } from 'react';
import Home from './components/Home';
import Courses from './components/Courses';
import Login from './components/Login';
import Signup from './components/Signup';

import Dashboard from './dashboard_components/Dashboard';
import Assignment from './dashboard_components/Assignment';
import Quiz from './dashboard_components/Quiz';
import Profile from './dashboard_components/Profile';
import Cmaterial from './dashboard_components/Cmaterial';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './Footer';

class App extends Component{
  
  
    render(){
      
      return (
        <>
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/courses" component={Courses}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/assignment" component={Assignment}/>
            <Route exact path="/quiz" component={Quiz}/>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/cmaterial" component={Cmaterial} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </>
      );
    }

}

export default App;

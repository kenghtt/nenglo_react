import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
        <div className="App">
            <Nav/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
        </div>
        </Router>
    );

}

export default App;



import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>

        </div>
      </Router>
    </div>
  );
}

export default App;

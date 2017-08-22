import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <div className="App-header">
              <div>
                <a href="http://wallpapercave.com/w/pBcuEih"><img src="http://wallpapercave.com/wp/pBcuEih.jpg" width="700" height="120" /></a>
              </div>
              <h2>Harmon Software Solutions</h2>
            </div>
        </div>

        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <h2>Harmon Software Solutions</h2>
          <div className="App-header">
            <div>
              <a href="http://wallpapercave.com/w/pBcuEih">
                <img src="http://wallpapercave.com/wp/pBcuEih.jpg" width="700" height="120" alt="cave"/>
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div>
            <section>
              <p>This is where the about section goes</p> 
            </section>
            <section>
              <p>This is where skills goes</p>
            </section>
            <section>
              <p>This is where contact information goes</p>
            </section>
          </div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;

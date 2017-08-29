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
          <div className="container-fluid">
            <div>
              <a>
                
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div>
            <section>
              <p>Amazon Web Services</p> 
            </section>
            <section>

              <p>Microservices</p>
            </section>
            <section>
              <p>React / Node</p>
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

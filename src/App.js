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
          <div>
            <section>
            <div className="">
              <div className="sectiontitle grid-item">Amazon Web Services</div>
              
              <div className="sectiondescription grid-item">description</div> 
            </div>
            </section>

            <section>
              <div className="sectiontitle grid-item">Microservices</div>
              <div className="sectiondescription grid-item">description</div>
            </section>

            <section>
              <div className="sectiontitle grid-item">React / Node</div>
              <div className="sectiondescription grid-item">description</div>
            </section>

          </div>
          <nav>
            <Link to="/">Contact</Link>
          </nav>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;

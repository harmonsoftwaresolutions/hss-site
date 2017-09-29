import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <div>
      <div className="App">
        <h2>Harmon Software Solutions</h2>
        <div>
          <section>
            <div className="">
              <div className="sectiontitle grid-item">Who We Are</div>
              <div className="sectiondescription grid-item">
                <p>
                  A group of software engineers joining together to advance our
                  careers through collaborative learning. Our combined skillsets
                  range from full stack, dev ops, hardware, to consulting
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="sectiontitle grid-item">What We Do</div>
            <div className="sectiondescription grid-item">
              <ol>
                <li>Daily standups on Slack</li>
                <li>Mentoring</li>
                <li>Paired Collaborative Coding</li>
                <li>Encourage and Empower</li>
              </ol>
            </div>
          </section>

          <section>
            <div className="sectiontitle grid-item">Our Interests</div>
            <div className="sectiondescription grid-item">
              <ol>
                <li>Amazon Web Services / Cloud Architecting</li>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Microservices & Distributed Systems Architecture</li>
                <li>Embedded Software</li>
              </ol>
            </div>
          </section>
        </div>
        <nav>
          <Link to="/">Contact</Link>
        </nav>
      </div>
    </div>
  </Router>
);

export default App;

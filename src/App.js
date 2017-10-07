import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './Footer';

const App = () => (
  <Router>
    <div>
      <div className="App">
        <h2>Harmon Software Solutions</h2>
        <div>
          <section>
            <div className="">
              <div className="sectiontitle grid-item section1-text">
                Who We Are
              </div>
              <div className="sectiondescription grid-item">
                <ul>
                  <li className="list-text2">
                    A group of software engineers joining together to advance
                    our careers through collaborative learning. Our combined
                    skillsets range from full stack, dev ops, hardware, to
                    consulting
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="sectiontitle grid-item section2-text">
              What We Do
            </div>
            <div className="sectiondescription grid-item">
              <ol>
                <li className="list-text">Daily standups on Slack</li>
                <li className="list-text">Mentoring</li>
                <li className="list-text">Paired Collaborative Coding</li>
                <li className="list-text">Encourage and Empower</li>
              </ol>
            </div>
          </section>

          <section>
            <div className="sectiontitle grid-item section1-text">
              Our Interests
            </div>
            <div className="sectiondescription grid-item">
              <ol>
                <li className="list-text2">Amazon Web Services</li>
                <li className="list-text2">Machine Learning</li>
                <li className="list-text2">NodeJS & Go Microservices</li>
                <li className="list-text2">Distributed Systems Architecture</li>
                <li className="list-text2">Embedded Software</li>
              </ol>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  </Router>
);

export default App;

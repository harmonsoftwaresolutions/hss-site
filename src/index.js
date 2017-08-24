import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
=======
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> clear all files and restart with a new create-react-app

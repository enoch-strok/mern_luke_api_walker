import './App.css';
import React, {useState} from 'react';
import {Router} from '@reach/router';

import MasterRouter from './components/MasterRouter.jsx';




function App() {

  const [state, setState] = useState([]);

  return (
    <div className="App">
      {/* <h1>This is App.js</h1> */}
      <Router>
          <MasterRouter state={state} setState={setState} path="/:category/:id" />
      </Router>
    </div>
  );
}

export default App;
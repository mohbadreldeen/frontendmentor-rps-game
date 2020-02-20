import React from 'react';
import './App.css';

import Score from './components/score/score.component';
import Button from './components/button/button.component';
import Pentagon from './components/pentagon/index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Score score="12" />
        <Pentagon />
        
       
        
      </header>
    </div>
  );
}

export default App;

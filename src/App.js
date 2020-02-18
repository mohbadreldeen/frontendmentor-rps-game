import React from 'react';
import './App.css';

import Score from './components/score.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Score score="12" />
        
      </header>
    </div>
  );
}

export default App;

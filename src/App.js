import React from 'react';
import './App.css';

import Score from './components/score/score.component';
import Button from './components/button/button.component';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Score score="12" />
        
        <Button button-type="scissors"/>
        <Button button-type="paper"/>
        <Button button-type="rock"/>
        <Button button-type="lizard"/>
        <Button button-type="spock"/>
        
      </header>
    </div>
  );
}

export default App;

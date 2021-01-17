import React from 'react';
import './App.css';
import Character from './Character'
import Canvas from './Canvas'

function App() {
  var charLength = 40;
  return (
    <div class="contents">
      <Canvas charLength = {charLength}/>
    </div>
  );
}

export default App;

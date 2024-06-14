import React from 'react';
import './App.css';
import ParticlesContainer from './ParticlesContainer';
import Home from './Task/home';
// import ParticlesContainer from './ParticlesContainer';

function App() {
  return (
    <div className="App">
       <ParticlesContainer />
      <header className="App-header">
         <Home/>
      </header>
    </div>
  );
}

export default App;

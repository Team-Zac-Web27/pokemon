import React from 'react';
import PokemonCard from './components/pokemon-card';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonCard />
    </div>
  );
}

export default App;

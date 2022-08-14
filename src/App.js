import React from 'react';
import Header from './components/Header';
import {Main} from './components/Main'
import data from './data/data.json'
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main data={data}/>
    </div>
  );
}

export default App;

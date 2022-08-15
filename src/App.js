import React from 'react';
import data from './data/data.json'
import './App.css';
import { Layout } from './components';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Contact, NotFound } from './pages';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<Home data = {data} />}/>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

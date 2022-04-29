import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Item from './components/Item';
import UpperMenu from './components/UpperMenu';

// mover tudo para home.js, até imports exceto o import do react e app.css
const App = () => {
  return (
    <div>
      <UpperMenu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </div>
  );
};
  
export default App;


import React from 'react';
import './App.css';
import Home from './pages/Homepage';
import LoginPage from './pages/Loginpage';
import Searchpage from './pages/Searchpage.js';
import Sellerform from './pages/Sellerform';

function App() {
  return (
    <div className="App">
      <Home/>
      <Searchpage/>
      <Sellerform/>
    </div>
  );
}
//////////
export default App;

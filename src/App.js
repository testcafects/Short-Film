import React from 'react';
import './App.css';
import CheckoutBox from './molecules/CheckoutBox/CheckoutBox.js'
import Headers from './molecules/header/header.js'
function App() {
  return (
    <div className="App">
    <Headers />
      <CheckoutBox />
      
    </div>
  );
}

export default App;
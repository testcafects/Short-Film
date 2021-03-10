import React from 'react';
import './App.css';
import CheckoutBox from './molecules/CheckoutBox/CheckoutBox.js'
import Headers from './molecules/header/header.js'
import Cards from  './molecules/Cards/Cards.js'
function App() {
  return (
    <div className="App">
    <Headers />
      <CheckoutBox />
      <div className="card-list">
                      
                      {
                        [1, 2, 3, 4,5].map((det) => <Cards key={det}/>)
                       }
                      
                        
     </div>
      
    </div>
  );
}

export default App;
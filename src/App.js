import React from 'react';
import './App.css';
import Header from './molecules/header/header';
import HomePageMain from './pages/HomePageMain/HomePageMain';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePageMain/>
    </div>
  );
}

export default App;
import Loader from 'react-loader-spinner';
import react, { Suspense } from 'react';
import AboutUs from './components/AboutUs';
import Packages from './components/Packages';

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
      <Suspense fallback={<Loader 
            type="Bars" 
            color="#FF00FF" 
            height={200} 
            width={200} 
            style={{margin: "0 auto"}}/>}>
          <AboutUs />
          <Packages />
        </Suspense>
      </div>
    </div>
  );
}

export default App;



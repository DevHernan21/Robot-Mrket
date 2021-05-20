import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';


const App = () => {

  

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      
      <Products />

    </div>
  );
}

export default App;

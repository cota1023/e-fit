import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  
  const handleAdd = () => {
    console.log('se ejecutó handleAdd')
  }
  
  
  
  return (
    <div className="App">


    <Navbar/>
    <ItemListContainer greeting="Bienvenidos a e-Fit"/>
    {/* <Counter initial={0} stock={30} onAdd={handleAdd}/> */}

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
//import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailCointainer/ItemDetailContainer';

function App() {
  
  const handleAdd = () => {
    console.log('se ejecutó handleAdd')
  }
  
  
  
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a e-Fit"/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>

    
    {/* <Counter initial={0} stock={30} onAdd={handleAdd}/> */}

    </div>
  );
}

export default App;

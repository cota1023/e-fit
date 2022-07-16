import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailCointainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartToOrder from './components/CartToOrder/CartToOrder';
import {CustomerProvider} from './context/CustomerContext'

function App() {
    
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
       <Navbar/>
       <CustomerProvider>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a e-Fit"/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartToOrder/>} />
        </Routes>
        </CustomerProvider>
      </BrowserRouter>
      </CartProvider>

    
    {/* <Counter initial={0} stock={30} onAdd={handleAdd}/> */}

    </div>
  );
}

export default App;

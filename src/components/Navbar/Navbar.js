
import '../Navbar/Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import React from 'react'

const Navbar = () => {
return<>

<div class="navbar">
  <a href="">Inicio</a>
  <a href="">Novedades</a>
  <div className="dropdown">
    <button className="dropbtn">Productos</button>
    <div className="dropdown-content">
      <a href="">Barras</a>
      <a href="">Máquinas</a>
      <a href="">Otros Elementos..</a>
    </div>
  </div>
  <a style={{float:'right', fontWeight:'bold'}}>Carrito  <CardWidget/></a>
</div>
<h2>E-Fit Commerce</h2>
</>



}

export default Navbar
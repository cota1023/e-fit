
import '../Navbar/Navbar.css'
import CardWidget from '../CardWidget/CardWidget'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
return<>

<div class="navbar">
  <NavLink to='/'>Inicio</NavLink>
  <NavLink to='/'>Novedades</NavLink>
  <div className="dropdown">
    <button className="dropbtn">Productos</button>
    <div className="dropdown-content">
      <NavLink to='/category/barras'>Barras</NavLink>
      <NavLink to='/category/discos'>Discos</NavLink>
      <NavLink to='/'>Otros elementos</NavLink>
    </div>
  </div>
  <a style={{float:'right', fontWeight:'bold'}}>Carrito  <CardWidget/></a>
</div>
<h2>E-Fit Commerce</h2>
</>



}

export default Navbar
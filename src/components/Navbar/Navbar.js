

import CardWidget from '../CardWidget/CardWidget'
import React from 'react'
import '../Navbar/NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return <>

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand brand-title" href="#">E-Fit</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className="nav-link active" aria-current="page">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/' className="nav-link active" aria-current="page">Novedades</NavLink>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink to='/category/barras' className="dropdown-item">Barras</NavLink></li>
                <li><NavLink to='/category/discos' className="dropdown-item">Discos</NavLink></li>
                <li><NavLink to='/' className="dropdown-item">Otros..</NavLink></li>
              </ul>
            </li>
          </ul>
          <div className="nav-link active div-carrito">
          <Link to="/cart" className='carrito'>Carrito</Link>
          <CardWidget />
        </div>
        </div>

      </div>
    </nav>



  </>



}

export default Navbar
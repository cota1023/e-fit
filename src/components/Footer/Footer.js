import React from 'react'
import { FaFacebookSquare,FaTwitterSquare,FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <footer className="text-center text-white mt-5" style={{backgroundColor: "#f1f1f1",}}>
      <div class="container pt-4">
       <section class="mb-4">
         <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FaFacebookSquare/></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FaTwitterSquare/></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FaInstagramSquare/></a>


    </section>

  </div>

  <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",}}>
    © 2022 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">CoderHouse - Comisión 31865</a>
  </div>
</footer>
  )
}

export default Footer
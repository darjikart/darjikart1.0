import React from 'react'

function Navbar() {

  return (
 
    <section id="header">
    <a href="/"> <img src="img/logo3.png" alt="" /> </a>
    <div >
        <ul id="navbar">
            <li><a className="active" href="/home">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <a href="#" id="close"><i className="fa fa-close"></i></a>
        </ul>
    </div>
    <div id="mobile">
        <i id="bar" className="fas fa-outdent"></i>
    </div>
</section>

  )
  }


export default Navbar
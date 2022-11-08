import React from 'react'

function Footer() {
  return (
    <footer className="section-p1">
        <div className="col">
            <img className="logo" src="img/logo3.png" alt=""/>
            <h4>Contact</h4>
            <p> <strong>Address:</strong> Lorem ipsum dolor sit amet consectetur.</p>
            <p> <strong>Phone:</strong> 888888888</p>
            <p> <strong>Hours:</strong> MON - SAT</p>

            <div className="follow">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>

        <div className="col">
            <h4>USEFUL LINKS</h4>
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#">Terms of Services</a>
        </div>

        <div className="col">
            <h4>SERVICES</h4>
            <a href="#">Formal Shirt & Pant</a>
            <a href="#">Formal Shoes</a>
            <a href="#">Custom Design T-shirt</a>
        </div>

        <div className="col">
            <h4>Get to Know Us</h4>
            <a href="#">About Us</a>
            <a href="#">Brand Stores</a>
            <a href="#">About the Brand</a>
            <a href="#">Carrers</a>
            <a href="#">Help</a>
        </div>
        <div className="row">
            <img src="img/pay/bg4.png" alt=""/>
        </div>

        <div className="copyright">
            <p>@darjiKart, copyright reserved 2022
            </p>
        </div>
    </footer>
  )
}

export default Footer
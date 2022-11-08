import React from 'react';
import Hero from './Hero';
import Formal from './Formal';
import Tshirt from './Tshirt';

function Home() {
  return (
    <>
     <Hero/>
    <section id="feature" className="section-p1">
      <div className="fe-box">
          <img src="img/features/F1.svg" alt=""/>
          <h6>Free Shipping</h6>
      </div>

      <div className="fe-box">
          <img src="img/features/F2.svg" alt=""/>
          <h6>Online Order</h6>
      </div>

      <div className="fe-box">
          <img src="img/features/F3.svg" alt=""/>
          <h6>Save Money</h6>
      </div>

      <div className="fe-box">
          <img src="img/features/F4.svg" alt=""/>
          <h6>Promotions</h6>
      </div>

      <div className="fe-box">
          <img src="img/features/F5.svg" alt=""/>
          <h6>Happy Sell</h6>
      </div>

      <div className="fe-box">
          <img src="img/features/F6.svg" alt=""/>
          <h6>Support</h6>
      </div>
  </section>

  <section id="product1" class="section-p1">
      <h2>Featured Products</h2>
      <p>Summer collection New Modern Design</p>
      <div class="pro-container">
          {Formal}
      </div>
  </section> 
  {/* Call to action  */}
   <section id="banner" className="section-m1">
      <h4>Alteration Services</h4>
      <h2>Free <span>Alteration</span>  On First Order</h2>
      <button className="normal">explore more</button>
  </section> 

  <section id="product1" class="section-p1">
      <h2>Featured Products</h2>
      <p>Summer collection New Modern Design</p>
      <div class="pro-container">
          {Tshirt}
      </div>
  </section>
  
  </>
  )
}

export default Home;
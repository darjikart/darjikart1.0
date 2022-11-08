import React from 'react'
import Formal from './Formal'
import tshirts from './Tshirt'


function Shop() {
  return (
    <>
    <section id="page-header"> 
        <h2>#stayhome</h2>
        <p>save more with coupons & upto 70% off</p>
    </section>
    <section id="product1" class="section-p1">
      <div class="pro-container">
         {Formal}
         {tshirts}
      </div>
    </section>
    </>
    
  )
}

export default Shop
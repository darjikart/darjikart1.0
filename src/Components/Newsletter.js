import React from 'react'

function Newsletter() {
  return (
    <section id="newsletter" className="section-p1 section-m1">
    <div className="newstext">
        <h4>Sign up for newsletter</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span> </p>
    </div>
    <div className="form">
        <input type="text" placeholder="Your email address"/>
        <button className="normal">Sign Up</button>
    </div>
</section>
  )
}

export default Newsletter
import React from 'react'
import '../../src/Order.css';


function Order() {
  return (
    <>
        <div className="container">
  <div className="title">
      <h2>Product Order Form</h2>
  </div>
<div className="d-flex">
  <form action="http://192.168.1.9:8000/place-order" method="post">
    <label>
      <span className="fname">First Name <span className="required">*</span></span>
      <input type="text" name="fname"/>
    </label>
    <label>
      <span className="lname">Last Name <span className="required">*</span></span>
      <input type="text" name="lname"/>
    </label>
    {/* <label>
      <span className="lname">Product Id <span className="required">*</span></span>
      <input type="text" name="lname"/>
    </label>
    <label>
      <span>Street Address <span className="required">*</span></span>
      <input type="text" name="houseadd" placeholder="House number and street name" required/>
    </label>
    <label>
      <span>&nbsp;</span>
      <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)"/>
    </label>
    <label>
      <span>Town / City <span className="required">*</span></span>
      <input type="text" name="city"/> 
    </label>
    <label>
      <span>State / County <span className="required">*</span></span>
      <input type="text" name="city"/> 
    </label>
    <label>
      <span>Postcode / ZIP <span className="required">*</span></span>
      <input type="text" name="city"/> 
    </label>
    <label>
      <span>Phone <span className="required">*</span></span>
      <input type="tel" name="city"/> 
    </label>
    <label>
      <span>Email Address <span className="required">*</span></span>
      <input type="email" name="city"/> 
    </label> */}
  <input type="submit" value="submit" />
  </form>
 </div>
 {/* <button type="button" className='button1'>Place Order</button> */}
</div>
    </>
  )
}

export default Order
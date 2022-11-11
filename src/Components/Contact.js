import React from 'react'

function Contact() {
  return (
    <>
      <section id='page-header' className='about-header'>
        <h2>#let's talk</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
      </section>

      <section id='contact-details' className='section-p1'>
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>visit one of our location or contact us now</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className='fa fa-map-marker'></i>
              <p>Chandigarh University, Kharar,Mohalli, Punjab India</p>
            </li>
            <li>
              <i className='far fa-envelope'></i>
              <p>info@darjikart.com</p>
            </li>
            <li>
              <i className='fas fa-phone-alt'></i>
              <p>99999999999</p>
            </li>
            <li>
              <i className='far fa-clock'></i>
              <p>Opens 24*7 </p>
            </li>
          </div>

          <div className='contactForm'>
          <label>Name:<input type="text" name="client-name" required/></label>
        <br/>
        <label>Email:<input type="text" name="client-email" required/></label>
        <br/>
        <label>Comment:<br/><textarea name="comment"></textarea></label>
        <br/>
        <input type="submit" value="Submit"/>
        </div>


          <div className="map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.205166210261!2d76.57242631497647!3d30.76882068162447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1663847438314!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
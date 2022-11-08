import React from 'react'

function About() {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </section>

      <section id='about-head' className='section-p1'>
        <img src="img/about/a6.jpg" alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae qui autem tempore saepe accusantium eum quidem est, harum, ipsum pariatur, sunt et? Velit, distinctio quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit corrupti tenetur?</p>
          <br /> <br />

          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, earum tempore. A, natus ut?</marquee>
        </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="img/features/F1.svg" alt="" />
          <h6>Free Shipping</h6>
        </div>

        <div className="fe-box">
          <img src="img/features/F2.svg" alt="" />
          <h6>Online Order</h6>
        </div>

        <div className="fe-box">
          <img src="img/features/F3.svg" alt="" />
          <h6>Save Money</h6>
        </div>

        <div className="fe-box">
          <img src="img/features/F4.svg" alt="" />
          <h6>Promotions</h6>
        </div>

        <div className="fe-box">
          <img src="img/features/F5.svg" alt="" />
          <h6>Happy Sell</h6>
        </div>

        <div className="fe-box">
          <img src="img/features/F6.svg" alt="" />
          <h6>Support</h6>
        </div>
      </section>

    </>
  )
}

export default About
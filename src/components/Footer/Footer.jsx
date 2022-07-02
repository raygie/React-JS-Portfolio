import React from 'react'
import './footer.css'


function Footer() {
  return (
    <section className='Footer' id='footer'>
      <hr className='mx-5'/>
      <div className='social mb-3'>
        <a className='media' target="_blank" href='https://www.facebook.com/paparaygie18/'><i class="ri-facebook-box-fill"></i></a>
        <a className='media' target="_blank" href='https://www.instagram.com/raygie_ramos/'><i class="ri-instagram-fill"></i></a>
        <a className='media' target="_blank" href='https://twitter.com/raygie_ramos'><i class="ri-twitter-fill"></i></a>
        <a className='media' target="_blank" href='https://github.com/raygie'><i class="ri-github-fill"></i></a>
        <a className='media' target="_blank" href='https://www.linkedin.com/in/raygie-ramos/'><i class="ri-linkedin-box-fill"></i></a>
      </div>
      <div className='credits'>
      © 2022. All rights reserved by Raygie Ramos
      </div>
    </section>
  )
}

export default Footer
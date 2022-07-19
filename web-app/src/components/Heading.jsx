import React from 'react'

function Heading() {
  return (
    <section id='about'>
      <div className='hero '>
        <nav className="navbar navbar-expand-lg navbar-light text-center">
          <div className="container-fluid">
          <h2 className='logo'>AROMA<span> MOCHA</span></h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-center'>
            <li className='nav-item'><a className='nav-link active' href="/">Home</a></li>
            <li className='nav-item'><a className='nav-link active' href="/about">About</a></li>
            <li className='nav-item'><a className='nav-link active' href="/menu">Menu</a></li>
            <li className='nav-item'><a className='nav-link active' href="/review">Reviews</a></li>
            <li className='nav-item'><a className='nav-link active' href="/contact">Contact</a></li>
          </ul>
          <button type='button'>RESERVE YOR TABLE</button> 
          </div>
        </div>       
      </nav>
    </div> 

    </section>
       

  )
}

export default Heading
import React from 'react'
import pic2 from '../images/photo2.jpg'
import pic3 from '../images/photo3.jpg'
import pic4 from '../images/photo4.jpg'
import pic5 from '../images/photo5.jpg'
import pic6 from '../images/photo6.jpg'
import pic7 from '../images/photo7.jpg'


function Menu(){
  return(
    <section id="gallery" class="py-5">
    <div class="container">
      <h1 class="text-center">| Our Menu |</h1>
      <p class="text-center">Check out some delicious food...</p>
      <div class="row mb-4">
        
        <div class="col-md-4 bg-light">
            <img src={pic3} alt="" class="img-fluid"/>
            <div class="card-body">
              <h5 class="card-title">Fries & Burger</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-danger">Order Now!</a>
            </div>
          
        </div>
        <div class="col-md-4 bg-light">
          <a href="https://source.unsplash.com/random/560x560" data-toggle="lightbox" data-gallery="img-gallery" data-height="560"
            data-width="560">
            <img src={pic2} alt="" class="img-fluid"/>
            <div class="card-body">
              <h5 class="card-title">French Fries</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-danger">Order Now!</a>
            </div>
          </a>
        </div>
        <div class="col-md-4 bg-light">
          <a href="https://source.unsplash.com/random/560x560" data-toggle="lightbox" data-gallery="img-gallery" data-height="560"
            data-width="560">
            <img src={pic4} alt="" class="img-fluid"/>
            <div class="card-body">
              <h5 class="card-title">Burger Combo</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-danger">Order Now!</a>
            </div>
          </a>
        </div>
        <div class="col-md-4 bg-light">
          <a href="https://source.unsplash.com/random/560x560" data-toggle="lightbox" data-gallery="img-gallery" data-height="560"
            data-width="560">
            <img src={pic5} alt="" class="img-fluid"/>
            <div class="card-body">
              <h5 class="card-title">Big Mac & Big Fries</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-danger">Order Now!</a>
            </div>
          </a>
        </div>
        <div class="col-md-4 bg-light">
          <a href="https://source.unsplash.com/random/560x560" data-toggle="lightbox" data-gallery="img-gallery" data-height="560"
            data-width="560">
            <img src={pic6} alt="" class="img-fluid"/>
            <div class="card-body">
              <h5 class="card-title">Family Meal</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-danger">Order Now!</a>
            </div>
          </a>
        </div>
        <div class="col-md-4 bg-light">
          <a href="https://source.unsplash.com/random/560x560" data-toggle="lightbox" data-gallery="img-gallery" data-height="560"
            data-width="560">
            <img src={pic7} alt="" class="img-fluid"/>
            <div class="card-body">
              <h5 class="card-title">Sandwich with Fries</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-danger">Order Now!</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Menu
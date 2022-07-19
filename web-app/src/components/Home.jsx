/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import pic2 from '../images/photo7.jpg'

function Home() {
  return (
    <section id="info" class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <h3 class="text-bold">Get Started..</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsam voluptas. Asperiores earum excepturi alias similique blanditiis porro soluta veritatis et, consequatur animi saepe quidem sint eum eaque est tenetur!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sunt velit inventore fugiat. Quasi, sint distinctio optio molestiae excepturi doloribus facilis, animi, enim quaerat pariatur ex neque sapiente fuga aut?
          </p>
          <a href="#" className="btn btn-outline-danger btn-lg">Learn More</a>
        </div>
        <div class="col-md-6">
          <img src={pic2} alt="" class="img-fluid"/>
        </div>
      </div>
    </div>
  </section> 
    )
}

export default Home
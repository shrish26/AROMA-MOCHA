import React from "react";
import pic1 from '../images/person1.jpg'
import pic2 from '../images/person2.jpg'
import pic3 from '../images/person3.jpg'
import pic4 from '../images/person4.jpg'


function Review(){
  return( 
  <section id="authors" className="my-5 text-center">
      <div className="container">
          <div className="row">
              <div className="col">
                  <div className="info-header mb-5">
                      <h1 className="text-primary pb-3">
                          Meet Our Foodies
                      </h1>
                      <p className="lead">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, facere ipsum mollitia corrupti sit unde!
                      </p>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-3 col-md-6">
                  <div className="card">
                      <div className="card-body">
                          <img src={pic1} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                          <h3>Susan Williamson</h3>
                          <h5 className="text-muted">Foodie</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias totam provident, deserunt similique cum.</p>
                          <div className="d-flex justify-content-center">
                                <div className="p-4 ">
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6">
                  <div className="card">
                      <div className="card-body">
                          <img src={pic4} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                          <h3>John Doe</h3>
                          <h5 className="text-muted">Foodie</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias totam provident, deserunt similique cum.</p>
                          <div className="d-flex justify-content-center">
                                <div className="p-4 ">
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="card">
                      <div className="card-body">
                          <img src={pic3} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                          <h3>Alisa</h3>
                          <h5 className="text-muted">Foodie</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias totam provident, deserunt similique cum.</p>
                          <div className="d-flex justify-content-center">
                                <div className="p-4 ">
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="card">
                      <div className="card-body">
                          <img src={pic2} alt="" className="img-fluid rounded-circle w-50 mb-3" />
                          <h3>Kevin Walker</h3>
                          <h5 className="text-muted">Foodie</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestias totam provident, deserunt similique cum.</p>
                          <div className="d-flex justify-content-center">
                                <div className="p-4 ">
                                    <a href="#">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Review
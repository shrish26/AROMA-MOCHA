import React from "react";
import pic1 from '../images/contact.jpg'

function Contact(){
  return(
    <section id="contact" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h3>Get In Touch</h3>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quasi!</p>
            <form>
              <div className="input-group input-group-lg  mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="Name" />
              </div>

              <div className="input-group input-group-lg  mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-envelope-open"></i>
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="Email" />
              </div>

              <div className="input-group input-group-lg  mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-pencil-alt"></i>
                  </span>
                </div>
                <textarea className="form-control" placeholder="Message"></textarea>
              </div>

              <input type="submit" value="submit" className="btn btn-danger btn-block btn-lg"/>
            </form>
          </div>
          <div className="col-lg-4 align-self-center">
            <img src={pic1} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>    
  )
}

export default Contact
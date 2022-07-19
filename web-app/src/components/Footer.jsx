import React from 'react'

function Footer() {
  return (
    <footer id="main-footer" className="text-center p-4 bg-dark">
    <div className="container">        
          <div className="col text-white">
            <p>Copyright &copy;
              <span id="year"></span> Aroma Mocha by Shreesh</p>
          </div>
          <div className="Social-menu">
            <ul>
{/* <!-- Facebook --> */}
<a className="btn btn-primary" style={{backgroundColor: "#3b5998"}} href="https://www.facebook.com/shreesh.nadgir.1" role="button" target="_blank"
  ><i className="fab fa-facebook-f"></i></a>
&nbsp;
{/* <!-- Twitter --> */}
<a className="btn btn-primary" style={{backgroundColor: "#55acee"}} href="https://twitter.com/ShreeshNadgir?t=w4gnmJN2DWg8CFly6YLm5g&s=08" role="button" target="_blank"
  ><i className="fab fa-twitter"></i></a>
&nbsp;
{/* <!-- Google --> */}
<a className="btn btn-primary" style={{backgroundColor: "#dd4b39"}} href="#!" role="button" target="_blank"
  ><i className="fab fa-google"></i></a>
&nbsp;
{/* <!-- Instagram --> */}
<a className="btn btn-primary" style={{backgroundColor: "#ac2bac"}} href="https://instagram.com/shreesh_g._n?utm_medium=copy_link" role="button" target="_blank"
  ><i className="fab fa-instagram"></i></a>
&nbsp;
{/* <!-- Linkedin --> */}
<a className="btn btn-primary" style={{backgroundColor: "#0082ca"}} href="https://www.linkedin.com/in/shrish-nadgir-887a4a16a" role="button"target="_blank">
  <i className="fab fa-linkedin-in"></i></a>
  &nbsp;
{/* <!-- Github --> */}
<a className="btn btn-primary" style={{backgroundColor: "#333333"}} href="https://github.com/shrish26/shrish26.git" target="_blank" role="button">
<i className="fab fa-github"></i></a>
&nbsp;
{/* <!-- Whatsapp --> */}
<a className="btn btn-primary" style={{backgroundColor:"#25d366"}} href="#" role="button">
  <i className="fab fa-whatsapp"></i>
  </a>
            </ul>
          </div>
    </div>
  </footer>
  )
}

export default Footer
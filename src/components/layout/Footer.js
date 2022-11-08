import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
    <div className="card">
        <div class="container">
        <footer class="text-center text-lg-start">
          <section class="">
            <div class="container text-center text-md-start mt-3">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto">
                  <h6 class="text-uppercase fw-bold">course</h6>
                    <hr class="mt-0 d-inline-block mx-auto" />
                      <p>
                        Join us to achieve your dream of joining big tech companies around the world as Software Development, Android Development and Website Development Engineer.
                      </p>
                </div>
         
                <div class="col-md-2 col-xl-2 mx-auto">
                  <h6 class="text-uppercase fw-bold">Services</h6>
                    <hr class="mt-0 d-inline-block mx-auto" />
                      <p>
                        <Link exact to="/courses" style={{ textDecoration: 'none' }}>Web Development</Link>
                      </p>
                      <p>
                        <Link exact to="/courses" style={{ textDecoration: 'none' }}>Android Development</Link>
                      </p>
                      <p>
                        <Link exact to="/courses" style={{ textDecoration: 'none' }}>Software Development</Link>
                      </p>
                      <p>
                        <Link exact to="/contact" style={{ textDecoration: 'none' }}>Chat us</Link>
                      </p>
                </div>
         
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto ">
                  <h6 class="text-uppercase fw-bold">Useful links</h6>
                    <hr class=" mt-0 d-inline-block mx-auto"/>
                      <p>
                        <Link exact to="/courses" style={{ textDecoration: 'none' }}>All Courses</Link>
                      </p>
                      <p>
                        <Link exact to="/blog" style={{ textDecoration: 'none' }}>Blogs</Link>
                      </p>
                      <p>
                        <Link exact to="/help" style={{ textDecoration: 'none' }}>Help</Link>
                      </p>
                </div>
         
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
                  <h6 class="text-uppercase fw-bold">Contact</h6>
                    <hr class="mt-0 d-inline-block mx-auto"/>
                      <p><i class="fas fa-home mr-3"></i> NIT Patna, Bihar 800005 </p>
                      <p><i class="fas fa-envelope mr-3"></i> sample@gmail.com</p>
                      <p><i class="fas fa-phone mr-3"></i> +91 9988776655</p>
                </div>        
              </div>       
            </div>
          </section>
          <div class="text-center">
            ©2022 copyright:
            <a class="" href="/about">course</a>
          </div>
        </footer>
      </div>
  </div>
  )
}

export default Footer;
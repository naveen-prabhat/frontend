import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item py-2 px-3">
                      <Link exact to="/" style={{ textDecoration: 'none' }}><img src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-color-glare-computer-free-map-image_1276302.jpg" style={{width:"27px"}} alt="logo"/></Link>
                      </li>

                      <li className="nav-item py-2 px-3">
                        <Link exact to="/" style={{ textDecoration: 'none' }}>Home</Link>
                      </li>

                      <li className="nav-item py-2 px-3">
                        <Link exact to="/about" style={{ textDecoration: 'none' }}>About</Link>
                      </li>

                      <li className="nav-item py-2 px-3">
                        <Link exact to="/courses" style={{ textDecoration: 'none' }}>Courses</Link>
                      </li>

                      <li className="nav-item py-2 px-3">
                        <Link exact to="/blog" style={{ textDecoration: 'none' }}>Blogs</Link>
                      </li>

                      <li className="nav-item py-2 px-3 justify-content-right ">
                        <Link exact to="/login" style={{ textDecoration: 'none' }}>Account</Link>
                      </li>
                      <li className="nav-item py-2 px-3 justify-content-right ">
                        <Link exact to="/account" style={{ textDecoration: 'none' }}>Dashboard</Link>
                      </li>
                      <li className="nav-item py-2 px-3 justify-content-right ">
                        <Link exact to="/admin" style={{ textDecoration: 'none' }}>Admin</Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
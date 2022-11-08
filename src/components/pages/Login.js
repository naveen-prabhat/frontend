import { React, useRef } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login=()=>{
 
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate();
  
  async function loginForm(event) {
      event.preventDefault();
      const data = 
      {
            email:email.current.value,
            password:password.current.value
      }
       
  axios.post(`http://localhost:5000/api/login`,  data )
  .then(res => {
    // console.log('Data from backend',res.data);
    localStorage.setItem("token",res.data.access_token);
    navigate("/account")  
    }).catch(error => {
          if (error.response) {
            alert(error.response.data.message);
            console.log(error.response);
          }
        })
  }  

  return(
        <div >
            <section class="vh-100" >
              <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" >
                      <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                          <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-3">Login</p>
                              <form class="mx-1 mx-md-4">
                                <div class="d-flex flex-row align-items-center mb-3">
                                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                      <label class="form-label">Your Email</label>
                                        <input type="email"ref={email} class="form-control" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-3">
                                 <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                  <div class="form-outline flex-fill mb-0">
                                    <label class="form-label">Password</label>
                                      <input type="password" ref={password} class="form-control" />
                                  </div>
                                </div>

                                <div class="form-check d-flex justify-content-center mb-3">
                                  <input class="form-check-input me-2" type="checkbox" value="" />
                                    <label class="form-check-label">
                                      Remember me.
                                  </label>
                                </div>

                                <div className="d-flex justify-content-center mb-4">
                                        <Link exact to='/account' onClick={loginForm}className="btn btn-primary"aria-pressed="false">Login</Link>
                                    </div>

                                <div class="d-flex flex-row  mb-3">
                                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                      <a class="form-label" href='/forget'>Forget password</a>
                                    </div>
                                </div>
                                
                                <div class="d-flex flex-row  mb-3">
                                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                      <a class="form-label" href='/register'>Register</a>
                                    </div>
                                </div>
                              </form>
                            </div>             
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </section>
        </div>
    )
}

export default Login;
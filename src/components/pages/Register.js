import { React, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register=()=>{
  
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const repeat_password = useRef()
  const checked = useRef()
  const navigate = useNavigate();

  async function submitForm(event) {
      event.preventDefault();
      if (checked.current.checked) {
        const data = 
        {
                name:name.current.value,
                email:email.current.value,
                password:password.current.value,
                repeat_password:repeat_password.current.value
        }
       
      axios.post(`http://localhost:5000/api/register`,  data ).then(res => {
            console.log('Data from backend',res.data);
            localStorage.setItem("token",res.data.access_token)
            navigate("/account")  
          }).catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                    console.log(error.response);
                }
          })
      }
    }

    return(
        <div>
            <section class="vh-100" >
              <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" >
                      <div class="card-body p-md-5">
                        <div class="row justify-content-center">
                          <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-3">Register/Sign up</p>

                            <form class="mx-1 mx-md-4">

                              <div class="d-flex flex-row align-items-center mb-3">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label class="form-label" for="form3Example1c">Your Name</label>
                                  <input type="text" id="form3Example1c" ref={name} class="form-control" />

                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-3">
                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label class="form-label" for="form3Example3c">Your Email</label>
                                  <input type="email" id="form3Example3c" ref={email} class="form-control" />

                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-3">
                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label class="form-label" for="form3Example4c">Password</label>
                                  <input type="password" id="form3Example4c" ref={password}class="form-control" />

                                </div>
                              </div>

                              <div class="d-flex flex-row align-items-center mb-3">
                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div class="form-outline flex-fill mb-0">
                                <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                  <input type="password" id="form3Example4cd" ref={repeat_password}class="form-control" />

                                </div>
                              </div>

                              <div class="form-check d-flex justify-content-center mb-3">
                                <input class="form-check-input me-2" ref={checked} type="checkbox" id="form2Example3c" />
                                <label class="form-check-label" for="form2Example3">
                                  I agree all statements in <a href="/">Terms of service</a>
                                </label>
                              </div>

                              <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="button" onClick={submitForm} class="btn btn-primary btn-lg">Register</button>
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

export default Register;
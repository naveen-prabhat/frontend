import { React, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const File=()=>{
  
  const name = useRef()
  const price = useRef()
  const category = useRef()
  const image = useRef()
//   const checked = useRef()
  const navigate = useNavigate();

  async function uploadForm(event) {
      event.preventDefault();
      
        const data = 
        {
                name:name.current.value,
                price:price.current.value,
                category:category.current.value,
                image:image.current.files[0]
        }
       
      axios.post(`http://localhost:5000/api/products`,  data ).then(res => {
            console.log('Data from backend',res.data);
            // localStorage.setItem("token",res.data.access_token)
            navigate("/products")  
          }).catch(error => {
                if (error.response) {
                    // alert(error.response.data.message)
                    console.log(error.response);
                }
          })
      
    }
return (
                <div>
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
                                      <label class="form-label">Course Name</label>
                                        <input type="email"ref={name} class="form-control" />
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-3">
                                 <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                  <div class="form-outline flex-fill mb-0">
                                    <label class="form-label">Course Price</label>
                                      <input type="password" ref={price} class="form-control" />
                                  </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-3">
                                 <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                  <div class="form-outline flex-fill mb-0">
                                    <label class="form-label">Course Category</label>
                                      <input type="password" ref={category} class="form-control" />
                                  </div>
                                </div>

                                <div class="mb-3">
                                    <label for="formFileSm" class="form-label">Course Image(In .jpg or .png format)</           label>
                                    <input class="form-control form-control-sm"ref={image} id="formFileSm" type="file"/>
                                </div>
                               

                                <div className="d-flex justify-content-center mb-4">
                                        <Link exact to='/' onClick={uploadForm} className="btn btn-primary"aria-pressed="false">Login</Link>
                                    </div>
                                    {/* onClick={loginForm} */}

                                
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

export default File;
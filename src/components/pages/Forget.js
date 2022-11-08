import React from "react";

const Forget=()=>{
    return(
        <div>
            <section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class=" col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-3">Forget Password</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-3">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="form3Example1c">Enter Registered Email</label>
                      <input type="text" id="form3Example1c" class="form-control" />
                      
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Send Mail</button>
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
export default Forget;
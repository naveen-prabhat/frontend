const User=(props)=>{
    const { user }=props;
    return(
        <div className="card mt-4 px-3">
            <section>
                 <div class="container py-5">
                   <div class="row">
                     <div class="col">
                       <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                         <ol class="breadcrumb mb-0">
                           <li class="breadcrumb-item"><a href="/">Home</a></li>
                           <li class="breadcrumb-item"><a href="/">User</a></li>
                           <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                         </ol>
                       </nav>
                     </div>
                   </div>
                    
                   <div class="row">
                     <div class="col-lg-4">
                       <div class="card mb-4">
                         <div class="card-body text-center">
                           <img src={user.name} alt="avatar"
                             class="rounded-circle img-fluid"  />
                           <h5 class="my-3">{user.name}</h5>
                           <p class="text-muted mb-1">Full Stack Developer</p>
                           <p class="text-muted mb-4">Bay Area, San Francisco, CA</p>
                           <div class="d-flex justify-content-center mb-2">
                             <button type="button" class="btn btn-primary">Follow</button>
                             <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                           </div>
                         </div>
                       </div>
                       
                     </div>
                     <div class="col-lg-8">
                       <div class="card mb-4">
                         <div class="card-body">
                           <div class="row">
                             <div class="col-sm-3">
                               <p class="mb-0">Full Name</p>
                             </div>
                             <div class="col-sm-9">
                               <p class="text-muted mb-0">{user.name}</p>
                             </div>
                           </div>
                           <hr />
                           <div class="row">
                             <div class="col-sm-3">
                               <p class="mb-0">Email</p>
                             </div>
                             <div class="col-sm-9">
                               <p class="text-muted mb-0">{user.email}</p>
                             </div>
                           </div>
                           <hr />
                           <div class="row">
                             <div class="col-sm-3">
                               <p class="mb-0">Age</p>
                             </div>
                             <div class="col-sm-9">
                               <p class="text-muted mb-0">{user.role}</p>
                             </div>
                           </div>
                           <hr />
                           <div class="row">
                             <div class="col-sm-3">
                               <p class="mb-0">Account Creation</p>
                             </div>
                             <div class="col-sm-9">
                               <p class="text-muted mb-0">{user.name}</p>
                             </div>
                           </div>
                           <hr />
                           <div class="row">
                             <div class="col-sm-3">
                               <p class="mb-0">Address</p>
                             </div>
                             <div class="col-sm-9">
                               <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div class="row">
                         <div class="col-md-6">
                           <div class="card mb-4 mb-md-0">
                             <div class="card-body">
                               <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                               </p>
                               <p class="mb-1" >Web Design</p>
                               <div class="progress rounded" >
                                 <div class="progress-bar" role="progressbar" aria-valuenow="80"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                               <p class="mt-4 mb-1">Website Markup</p>
                               <div class="progress rounded">
                                 <div class="progress-bar" role="progressbar" aria-valuenow="72"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                               <p class="mt-4 mb-1">One Page</p>
                               <div class="progress rounded">
                                 <div class="progress-bar" role="progressbar"  aria-valuenow="89"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                               <p class="mt-4 mb-1">Mobile Template</p>
                               <div class="progress rounded" >
                                 <div class="progress-bar" role="progressbar"aria-valuenow="55"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                               <p class="mt-4 mb-1" >Backend API</p>
                               <div class="progress rounded mb-2" >
                                 <div class="progress-bar" role="progressbar"  aria-valuenow="66"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                             </div>
                           </div>
                         </div>
                         <div class="col-md-6">
                           <div class="card mb-4 mb-md-0">
                             <div class="card-body">
                               <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                               </p>
                               <p class="mb-1">Web Design</p>
                               <div class="progress rounded" >
                                 <div class="progress-bar" role="progressbar" aria-valuenow="80"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                               <p class="mt-4 mb-1" >Website Markup</p>
                               <div class="progress rounded" >
                                 <div class="progress-bar" role="progressbar"  aria-valuenow="72"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                               <p class="mt-4 mb-1" >One Page</p>
                               <div class="progress rounded">
                                 <div class="progress-bar" role="progressbar" aria-valuenow="89"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                               <p class="mt-4 mb-1">Mobile Template</p>
                               <div class="progress rounded">
                                 <div class="progress-bar" role="progressbar" aria-valuenow="55"
                                   aria-valuemin="0" aria-valuemax="100"></div>
                               </div>
                               <p class="mt-4 mb-1">Backend API</p>
                               <div class="progress rounded mb-2" >
                  <div class="progress-bar" role="progressbar" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
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

export default User;
import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Product=()=>{
    const navigate = useNavigate();
    const { _id } = useParams()
        const [product, setProduct]=useState([]);
        useEffect(()=>{
            fetch('https://raw.githubusercontent.com/naveenprabhat/api/main/sample')
            .then(response=>response.json())
            .then(prods=>{
                prods.forEach(prod => {
                    if (prod._id === _id) {
                        setProduct(prod);
                    }
                });
            });
        },[])
    return(
        
        <div>
            <div className="py-5">
        <section>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
              <button  type="button" class="btn btn-outline-dark"onClick={() => navigate(-1)}>Go back</button>
               
              <h2 className="text-center"><b>Course Details</b></h2>
                  <div className="card text-black" >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                        

                        <div className="mb-3">
                            <div className="row ">
                              <div className="col-md-4 py-5 px-5">
                                <img src={product.image} className="card-img" alt={product.name}/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body py-5">
                                  <h5 className="card-title">{product.name}</h5>
                                    <div>
                                        <p>Price: <s className="text-danger">₹{product.price}</s> ₹{product.cprice}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Availability: <span>{product.available}</span></p>
                                    </div>
                                  <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                  <p className="card-text"><small className="text-muted">{product.createdAt}</small></p>
                                </div>
                               
                                </div>
                                <div className="d-flex justify-content-center py-2">
                                    <Link exact to="/courses" className="btn btn-primary">Enroll</Link>
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
        </div>              
    )   
}

export default Product;


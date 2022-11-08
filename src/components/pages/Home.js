import { useState, useEffect } from "react";
import Test from "./Test";
import { Link } from "react-router-dom";

const Home=()=>{
  const [products, setProducts]=useState([]);
  useEffect(()=>{
      fetch('https://raw.githubusercontent.com/naveenprabhat/api/main/sample')
      .then(response=>response.json())
      .then(products=>{
          setProducts(products);
      });
  },[])

    return(
      <div>
        <div>
        <div className="mb-3">
                            <div className="row px-5 py-5 ">
                              <div className="col-md-4 py-5 px-5">
                                <img src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-color-glare-computer-free-map-image_1276302.jpg"
                                 className="card-img rounded" alt="img"/>
                              </div>
                              <div className="col-md-8 py-5">
                                <div className="card-body py-5">
                                  <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                </div>
                                <div className="d-flex justify-content-center py-2">
                                    <Link exact to="/courses" className="btn btn-primary">Explore All Courses</Link>
                                </div>
                            </div>
                        </div>
        </div>
          <h3 className="mt-3 d-flex justify-content-center">
              <b>Featured Courses</b>
          </h3>
          <div className="row d-flex justify-content-center px-5">
          {
             products.map(product=>{
                return( 
                  <div className='col-md-3'>
                        <Test key={product._id} product={product}/>
                  </div>
                  )
                })
          }
          </div>
          <div className="d-flex justify-content-center py-4">
              <Link exact to="/courses" className="btn btn-primary">Explore All Courses</Link>
                                    </div>
      </div>
    )
};

export default Home;
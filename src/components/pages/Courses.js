import { useState, useEffect } from "react";
import Test from "./Test";
const Courses=()=>{
  const [products, setProducts]=useState([]);
  useEffect(()=>{
      fetch('https://raw.githubusercontent.com/naveenprabhat/api/main/sample')
      .then(response=>response.json())
      .then(products=>{
          setProducts(products);
      });
  },[])

    return(
      <div className="px-5 mb-4">
        
        <h3 className="mt-3 d-flex justify-content-center">

            
          <b>All Courses Offered</b>
        </h3>
      <div className="row d-flex justify-content-center">
        {
             products.map(product=>{
                return( 
                  <div class='col-md-4'>
                        <Test key={product._id} product={product}/>
                  </div>
                  )
                })
              }
      </div>

      </div>
    )
};

export default Courses;
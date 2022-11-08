import React from "react";
import { useEffect, useState } from "react";
import Test from "./Test";

const Blog=()=>{
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
        <h3 className="mt-3 d-flex justify-content-center">
          All Courses Offered
        </h3>
      <div className="row d-flex justify-content-center">
        {
             products.map(product=>{
                return( 
                  <div class='col-md-5'>
                        <Test key={product._id} product={product}/>
                  </div>
                  )
                })
              }
      </div>
      </div>
    )
}

export default Blog;
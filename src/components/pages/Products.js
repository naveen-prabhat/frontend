import { useEffect,useState } from "react";
import Test from "./Test";

const Products=()=>{
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/naveenprabhat/api/main/sample')
        .then(response=>response.json())
        .then(products=>{
            setProducts(products);
        });
    },[])
return (<div>
    <div></div>
    <div className='card-deck'> 
             {
              products.map(product=><Test key={product._id} product={product}/>)  
            } 
        </div> 
        </div>
)   
}
export default Products;
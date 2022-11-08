import { Link } from "react-router-dom";

const Test=(props)=>{
    const { product }=props;
    return(
                            <div className="card mt-4 px-3">
                                <br />
                                <img className="rounded" src={product.image}alt={product.category}/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p >{product.category}</p>
                                        <p><s className="text-danger">₹{product.price}</s></p>
                                    </div>

                                    <div className="d-flex justify-content-between mb-1">
                                        <h5 className="mb-0">{product.name}</h5>
                                        <h5 className="text-dark mb-0">₹ {product.cprice}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Availability: <span>{product.available}</span></p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link exact to={`/product/${product._id}`} className="btn btn-primary"aria-pressed="false">Explore Course</Link>
                                    </div>
                                    </div>
                            </div>                
    )   
}

export default Test;


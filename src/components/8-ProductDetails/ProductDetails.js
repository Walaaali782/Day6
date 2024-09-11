import {useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
import './productdetails.css';



function ProductDetails(props){


    // const api = 'https://api.themoviedb.org/3/movie/popular?api_key=f09fb963d3e394d1aed39bb062b0eaa2' ;
    const params =  useParams();
    console.log(params);

    const[product , setproducts] = useState([]);

    useEffect (()=> {

        fetch(`https://api.themoviedb.org/3/movie/${params.productId}?api_key=f09fb963d3e394d1aed39bb062b0eaa2`)
        .then(res=>res.json())
        .then(product=> setproducts(product));


    },[])





    return(
<>
<div className="carddetails" >
<div className="container" >
  <img src={`https://image.tmdb.org/t/p/w500${product.backdrop_path}`} className="card-img-top-details" alt={product.title} />
  <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} className="card-img-top-details" alt={product.title} />
  <div className="card-body-details">
    <h5 className="card-title-details">{product.title}</h5>
    <p className="card-text-details">{product.popularity}</p>
    <p className="card-text-details">{product.release_date}</p>
    <p className="card-text-price">{product.overview}</p>


 
  </div>
  </div>
</div>
</>

    )
}
export default ProductDetails;
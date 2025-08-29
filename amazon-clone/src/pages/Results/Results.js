import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoints";
import classes from './Results.module.css'
import ProductCard from "../../components/Product/ProductCard";
const Results = () => {
    const [result, setresult]=useState([])
    const {categoryName} =useParams()
    useEffect(() => {
      axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
          setresult(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [categoryName]);
   
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category</p>
        <hr/>
        <div className={classes.products_container}>
{result?.map((Product)=>(
<ProductCard key={Product.id} Product={Product}/>

))}
        </div>
      </section>
    </LayOut>
  );
};

export default Results;

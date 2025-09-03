import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/EndPoints";
import classes from "./Results.module.css";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";
const Results = () => {
  const [result, setresult] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setresult(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category</p>
          <hr />
          <div className={classes.products__container}>
            {result?.map((Product) => (
              <ProductCard
                key={Product.id}
                Product={Product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
};

export default Results;

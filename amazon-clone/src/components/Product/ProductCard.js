import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({ Product,flex,renderDesc }) => {
  if (!Product) return null;
  const { image, title, id, rating={}, price,description } = Product;
  return (
    <div className={`${classes.card__container} ${flex?classes.product__flexes:''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt=" " />
      </Link>
      <div>
        <h3>{title}</h3>
       {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
        <div className={classes.rating}>
          {/*rating */}
          <Rating value={rating.rate || 0} precision={0.1} readOnly />
          <small>{rating.count || 0}</small>
        </div>
        <div>
          {/*price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider.js/DataProvider";
import { Type } from "../../Utility/actiontype";
const ProductCard = ({ Product, flex, renderDesc, renderAdd }) => {
  const [state, dispatch] = useContext(DataContext);
  console.log(state);
  if (!Product) return null;
  const { image, title, id, rating = {}, price, description } = Product;

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexes : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt=" " />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/*rating */}
          <Rating value={rating.rate || 0} precision={0.1} readOnly />
          <small>{rating.count || 0}</small>
        </div>
        <div>
          {/*price */}
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

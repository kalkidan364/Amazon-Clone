import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";
const CategoryCard = ({ data }) => {
  return (
    <div className={classes.Category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.titel}</h2>
        </span>
        <img src={data?.imgLink} />
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;

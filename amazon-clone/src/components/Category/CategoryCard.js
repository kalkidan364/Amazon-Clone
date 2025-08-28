import React from "react";
import classes from "./Category.module.css";
const CategoryCard = ({ data }) => {
  return (
    <div className={classes.Category}>
      <a>
        <span>
          <h2>{data.titel}</h2>
        </span>
        <img src={data.imgLink} />
        <p>Shop now</p>
      </a>
    </div>
  );
};

export default CategoryCard;

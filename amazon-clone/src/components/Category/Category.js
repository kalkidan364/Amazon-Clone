import React from "react";
import { categoryinfo } from "./CategoryFullinfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <section className={classes.category__container}>
      {categoryinfo.map((info, index) => (
        <CategoryCard key={index} data={info} />
      ))}
    </section>
  );
};

export default Category;

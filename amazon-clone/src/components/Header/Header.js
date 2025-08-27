import React from "react";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
const Header = () => {
  return (
    <>
      <section>
        <section className={classes.header__container}>
          <div className={classes.logo__container}>
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </a>

            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" name="" />
            <BsSearch />
          </div>

          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>sign in</p>
              <span>account & lists</span>
            </a>
            <a>
              <p>returns</p>
              <span>& orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BiCart />
              <span>0</span>
            </a>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;

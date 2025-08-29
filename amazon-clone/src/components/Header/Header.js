import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </Link>

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
            <input type="text" name="" placeholder="Search Amazon" />
            <BsSearch />
          </div>

          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <p>sign in</p>
              <span>account & lists</span>
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart />
              <span>0</span>
            </Link>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;

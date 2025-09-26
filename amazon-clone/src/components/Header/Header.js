import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider.js/DataProvider";
import { auth } from "../../Utility/firebase";
const Header = () => {
  const [{user, basket }] = useContext(DataContext);
  
  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount+amount
  },0)
  return (
    <>
      <section className={classes.fixed}>
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
            <BsSearch  size={42.7} />
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
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello{user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, sign in</p>
                    <span>Account & List</span>
                  </>
                )}
              </div>

             
            </Link>
            <Link to="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart />
              <span>{totalItem}</span>
            </Link>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;

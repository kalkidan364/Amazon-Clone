import React, { useContext } from "react";
import LayOut from "../../components/LayOut/LayOut";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../components/DataProvider.js/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          <div className={classes.cart_img}>
            {basket?.length == 0 ? (
              <p>Oppps ! No item in your caer</p>
            ) : (
              basket?.map((item, i) => {
                return (
                  <ProductCard
                    key={i}
                    Product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                );
              })
            )}
          </div>
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>subtotal({basket?.length} item)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">continue to check out</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;

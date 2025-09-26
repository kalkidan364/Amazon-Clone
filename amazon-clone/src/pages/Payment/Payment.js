import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider.js/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { doc, setDoc, collection } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/actiontype";
const Payment = () => {
  const [{ user, basket },dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setcardError] = useState(null);
  const [Processing, setProcessing]= useState(false)
  
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate()
  const handelChange = (e) => {
   // console.log(e);
    e.error?.message ? setcardError(e.error?.message) : setcardError("");
  };
  const handelPayment = async (e) => {
    e.preventDefault();
    
    try {
      setProcessing(true);

      // 1. Create PaymentIntent from backend
        const response = await axiosInstance.post(
          `/payment/create?total=${total * 100}`
        );
 

      const clientSecret = response.data?.clientSecret;
      console.log("🔑 Client secret:", clientSecret);

      // 2. Confirm payment with Stripe
      const {paymentIntent, error} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          
        },
      });
      if(error){
        console.log("stripe error", error.message)
        setcardError(error.message);
        setProcessing(false);
        return;
      }
console.log("payment succeeded" ,paymentIntent)


await setDoc(
  doc(collection(db, "users", user.uid, "orders"), paymentIntent.id),
  {
    basket: basket,
    amount: paymentIntent.amount,
    created: paymentIntent.created,
  }
);
   //empty  the basket
   dispatch({type:Type.EMPTY_BASKET})



setProcessing(false);
navigate("/orders", {state:{msg:"you have placed new order"}})
      
    } catch (error) {
     console.log(error);
      setProcessing(false);
    }
    
  };
  return (
    <LayOut>
      {/*header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      {/*payment */}
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 react lane</div>
            <div>chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard Product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment_details}>
              <form onSubmit={handelPayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handelChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {Processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Payment;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtecteRoute from "./components/Protecte/ProtecteRoute";
const Routing = () => {
  const stripePromise = loadStripe(
    "pk_test_51S4i53JE5X0bPcJdwNufSlpqrd19GnXeskgFO17XWreqdqw56zLKdVPisy4LqObvEXzLLqZeDjNx2roshzTy66i800B9lfKxWq"
  );
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtecteRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtecteRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtecteRoute
              msg={"you must log in to acces your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtecteRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routing;

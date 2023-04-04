import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./style.css";
import CheckoutForm from "./checkoutForm";



const stripePromise = loadStripe("pk_test_51HEvaHLlNX7wORuBb9M0Xm4yYBaiBn6apMqpdxyUPAaFqFKcynJsWhxqsmwsuffuQzO97YY5928975nhugVoIWi600L0o043it");

export  const Stripe = () =>{

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(process.env.REACT_APP_BACKEND_API +"/payment/stripe-intent", {
          method: "POST",
          headers: {
             "Content-Type": "application/json" ,
             'Authorization':'Bearer '+ localStorage.getItem('token')
        }
        })
          .then((res) => {
            return res.json()
        })
          .then((data) => setClientSecret(data.clientSecret));
      }, []);
    
      const appearance = {
        theme: 'flat',
      };
      const options = {
        clientSecret,
        appearance,
      };



  return (
    <div className="str1">
    <div className="str2">
    {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
      )}
    </div>
</div>
    
    
  );
};
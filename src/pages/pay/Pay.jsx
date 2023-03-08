
import React, { useEffect, useState } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from './../../utils/newRequest.js';
import './Pay.scss'
import CheckoutForm from '../../components/checkoutForm/CheckoutForm.jsx';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe("pk_test_51MhQs0SIl6IkAnfQbw9diabgb9N7vKSg8MHUiUPxxTeyv9OpMjRd1YaPHN6BMI6sfQbLIcQ4LqCGBvtGnYZa585B00DVrxk4y5")

const Pay = () => {
 
  const [clientSecret, setClientSecret] = useState("");
  const {id} = useParams()

  useEffect(() => {
     const makeRequest = async () => {
         try {
            const res = await newRequest.post(`/orders/create-payment-intent/${id}`)
            setClientSecret(res.data.clientSecret) 
        } catch (err) {
            console.log(err);    
         }
     };
     makeRequest();
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };



  return (
     <div className="pay">
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
               <CheckoutForm />
            </Elements>
         )}
     </div>
  )
}

export default Pay;
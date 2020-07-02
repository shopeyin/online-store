import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H0NPsAM3XQGNiCW0P9gCKUPuqDOYen8kPH02ynIyG94WZxAR9XX6K7r0ys4dDbj0hywdKtMzJnFGzgoGEFc4fqf00g6XUUf09";

  const onToken = (token) => {
    console.log(token);
    alert("payment succesful");
  };

  return (
    <StripeCheckout
      label="pay now"
      name="crown clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price} `}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

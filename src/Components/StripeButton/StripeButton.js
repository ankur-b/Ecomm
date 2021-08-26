import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_qwduYzRdaR1aFqSKz5dMMUE500BFmJcXjq";
 
  const onToken = (token) => {
    alert("Payment Successful");
  };
  return (
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbV8SEj8B2xusmnZ3UenPIKbLrsgsTvXb4Q&usqp=CAU"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
  );
};
export default StripeCheckoutButton;

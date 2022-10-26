import { useState } from 'react';
import s from './Form.module.css';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51LvMA7AHfzMHwN7fNZFCPmy4PcvmW5nhu7QjW2Pm3C8y14Bne0iBXsQptMdRjNv8dI7Szsy1nFOEvjJByT8zuEzF00QgcJ0A5h',
    );
    // stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
  }
  return stripePromise;
};

const PaymentForm = () => {
  const [stripeError, setStripeError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1LvR8hAHfzMHwN7fQFGmeFmo',
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });

    console.log('Stripe checkout error', error);

    if (error) {
      setLoading(false);
      setStripeError(error);
    }
  };

  return (
    <>
      {stripeError && <p style={{ color: 'red' }}> {stripeError} </p>}
      <button
        role="link"
        onClick={handleClick}
        disabled={loading}
        className={s.button}
      >
        Сплатити замовлення
      </button>
    </>
  );
};
export default PaymentForm;

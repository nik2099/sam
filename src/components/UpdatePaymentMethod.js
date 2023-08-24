import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import app from "../../utils/axios";
import { useState } from "react";
import { toast } from "react-toastify";
import router, { useRouter } from "next/router";

const UpdatePaymentMethod = ({ planId, coupon }) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const subscribe = async (planId) => {
    try {
      const response = await app.get(
        `/create-subscription/${planId}${coupon != "" ? "/" + coupon : ""}`
      );
      toast.success("User subscribed!");
      router.push("/profile/subscriptions");
    } catch (error) {
      toast.error("Invalid Coupon Code! Please try again!");
      router.push("/profile/subscriptions");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: cardHolderName,
      },
    });

    if (error) {
      // Display "error.message" to the user...
      console.log(error);
    } else {
      // The card has been verified successfully...
      // console.log(paymentMethod);
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.post("/update-payment-method", {
          payment_method_id: paymentMethod.id,
        });
        console.log(response.data);
        toast.success("Card Saved");
        if (planId && planId != 0) {
          await subscribe(planId);
        } else {
          router.push("/profile/payment-method");
        }
      } catch (err) {}
    }
  };

  return (
    <>
      <form>
        <div className="col-6 mb-4">
          <input
            type="text"
            className="form-control rounded-0 "
            id="cardHolderName"
            placeholder="Card Holder Name"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
          />
        </div>
        {/* Stripe Elements Placeholder */}
        <CardElement className="col-6 mb-4 border-1 border-dark rounded-0" />
        <div className="mb-4">
          <div className="btn mb-2 mb-md-0 px-0">
            <button
              type="button"
              className="btn btn-primary px-4"
              disabled={!stripe}
              onClick={handleSubmit}
            >
              Speichern
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdatePaymentMethod;

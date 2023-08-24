import ProfileLayout from "../../components/ProfileLayout";
import UpdatePaymentMethod from "../../components/UpdatePaymentMethod";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import app from "../../../utils/axios";

const stripePromise = loadStripe(
  "pk_test_51JuxMKDn36U1hb8D1G2q8kh6CYQx4yHn0jtTzfe0z30dvMuc0t0zU47UGZ1AZ7U2WW5tsBzXevfXXPrRE9HUTnpf00BONUG0Bd"
);

const ProfileUpdatePaymentMethod = ({ planId, coupon }) => {
  const [clientSecret, setClientSecret] = useState();
  const getSetupIntent = async () => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.get("/create-setup-intent");
      const intent = response.data.intent;
      setClientSecret(intent.client_secret);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSetupIntent();
  }, []);

  return (
    <ProfileLayout>
      {clientSecret != null && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
          }}
        >
          <div
            className="tab-pane fade show active "
            id="paymentmethod"
            role="tabpane2"
            aria-labelledby="paymentmethod-tab"
          >
            <h5 className="pt-4 fw-bold">Ihre aktuelle Zahlungsmethode</h5>
            <UpdatePaymentMethod planId={planId} coupon={coupon} />
          </div>
        </Elements>
      )}
    </ProfileLayout>
  );
};

export default ProfileUpdatePaymentMethod;

export const getInitialProps = async (context) => {
  let { planId, coupon } = context.query;
  if(coupon == undefined || coupon == "undefined"){
    coupon = null
  }
  return {
    props: {
      planId: planId || 0,
      coupon,
    },
  };
};

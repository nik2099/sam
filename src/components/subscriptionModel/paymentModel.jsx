import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import app from "../../../utils/axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import CreatableSelect from "react-select/creatable";
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

const PaymentModel = (props) => {
 
  const [user, setUser] = useState();
  const [currentSubscription, setCurrentSubscription] = useState(0);
  const [cancelled, setCancelled] = useState(false);
  const [plans, setPlans] = useState([]);
  const [pmType, setPmType] = useState();
  const [planToSubscribe, setPlanToSubscribe] = useState();
  const [setPayPalPlan, setPayPalPlanToSubscribe] = useState();
  const [coupon, setCoupon] = useState("");
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState([]);
  const [payPalSubscriptionID, setPayPalSubscriptionID] = useState('');
  const [paypalResponses, SetPaypalResponse] = useState();
  const components = {
    DropdownIndicator: null,
  };



  const fetchUser = async () => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.get("/user");
      setUser(response.data);
      setCurrentSubscription(response.data.plan.id);
      setCancelled(response.data.cancelled);
      setPmType(response.data.pm_type);
  } catch (error) {
      if(error.response.status == 401){
        router.push("/login");
        // localStorage.clear();
      }else{
        toast.error('Kauf nicht möglich! Bitte kontaktieren Sie den Support!');
      }
 
  }
  };


  const createSubscription = (data, actions) => {

    if(user.paypal_subscription_id == null){
      console.log('create subscription')
      return actions.subscription.create({
        plan_id: setPayPalPlan
      });
    }else{
      console.log('revise subscription')
      return actions.subscription.revise(user.paypal_subscription_id,{
        plan_id: setPayPalPlan
      });
    }
  };

  const onApprove = (data, actions) => {
    console.log(data.subscriptionID)
    console.log(data)
    setPayPalSubscriptionID(data.subscriptionID);
    console.log(payPalSubscriptionID);
    paypalsubscribeTo(data.subscriptionID);
    
  
  };

  const onCancel = () => {
    toast.error('Payment has been cancelled!');
  };

  const paypalsubscribeTo = async (subscriptionID) => {
    console.log(subscriptionID);
    const planId = props.planToSubscribe;

      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        app.defaults.timeout = 100000;

        await app.post(
          `/create-paypal-subscription/${planId}`,{'subscription_id':subscriptionID}
        );
        
        toast.success("Plan changed!");
        // router.reload();
      } catch (error) {
        toast.error("Kauf nicht möglich! Bitte kontaktieren Sie den Support!");
      }
  
  };

  const fetchPaypalTransaction = async () => {
    try{
    app.defaults.headers.common['Authorization'] = `Bearer A21AAK7Iq9_lkX4elbI2q2rVCWpMv2YVl4iugBN7D0OIgTbiC9TMTsuxyPCbflvlpVRhYMDP3jktxEh2T5v_r_OyaNXT0OumQ`;
    const response = await app.get(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-1BA2MKHNT8BX/transactions?start_time=2022-01-21T07:50:20.940Z&end_time=2022-10-21T07:50:20.940Z`);
    // const responses = await app.get(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-1BA2MKHNT8BX`);
    // console.log(response.data);
    console.log(response.data);
    SetPaypalResponse(response.data);
    // PaypalResponse();
  } catch (error) {
   
  }
  }


  

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleChange = (value, actionMeta) => {
    setValue(value);
  };

  const createOption = (label) => ({
    label,
    value: label,
  });


  const handleKeyDown = (event) => {
    if (!inputValue) return;
    if (!validateEmail(inputValue)) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue([...value, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const inviteUsers = async (e) => {
    e.preventDefault();
    try {
    const emails = value.map((val) => val.value);
    const response = await app.post(
      "/sub-user/invite",
      JSON.stringify({ emails })
    );

    if(response.data.success == true){
      toast.success(response.data.successes[0]);
    }

  } catch (errors) {
    const errorsResponse = errors.response.data.errors;
    for (const error in errorsResponse) {
      toast.error(errorsResponse[error][0], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

 
  };



  const fetchPlans = async () => {
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.get("/plans");
    setPlans(response.data);
  };

  const subscribeTo = async () => {
    const planId = props.planToSubscribe;
    if (pmType) {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        app.defaults.timeout = 100000;
        await app.get(
          `/create-subscription/${planId}${coupon != "" ? "/" + coupon : ""}`
        );
        toast.success("Plan changed!");
        router.reload();
      } catch (error) {
        toast.error("Could not subscribe! Please contact support!");
      }
    } else {
      router.push({
        pathname: "/profile/update-payment-method",
        query: {
          planId,
          coupon,
        },
      });
    }
  };



  

  const cancelSubscription = async (e) => {
    e.preventDefault();
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.get("/cancel-subscription");
    toast.success("Subscription cancelled!");
    router.reload();
  };

  const resumeSubscription = async (e) => {
    e.preventDefault();
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.get("/resume-subscription");
    toast.success("Subscription resumed!");
    router.reload();
  };


  const deleteUser = async (e) => {
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    await app.delete("/delete-user");
    router.reload();
  };

  useEffect(() => {
    fetchUser();
    // fetchPaypalTransaction();
    fetchPlans();
  }, [setPayPalSubscriptionID]);


  return (
    <Modal isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
     
      <ModalBody className={props.bodyClass}>
      
           <div className="table-responsive">
           {plans.map((plan) => {
              if (plan.id == props.planToSubscribe) {
                return (
                  <div
                    key={`planModal${plan.id}`}
                    className=""
                  >

                    <ModalHeader toggle={props.toggler}>
                      Dein neuer Plan: <b>{plan.title}</b>
                    </ModalHeader>
                  
                    {/*table start*/}
                    <div className="table-responsive pt-3">
                      <table
                        id="exampleTable1"
                        className="table table-bordered border-dark data-table w-100"
                      >
                        <tbody>
                          <tr>
                            <td>Anzahl der angeschlossenen Endgeräte</td>
                            <td>{plan.no_of_device > 999 ? 'infinite' : plan.no_of_device}</td>
                          </tr>
                          <tr>
                            <td>Anzahl der auswählbaren App Templates</td>
                            <td>{plan.no_of_templates > 999 ? 'infinite' : plan.no_of_templates}</td>
                          </tr>
                          <tr>
                            <td>Anzahl der Kampagnen</td>
                            <td>{plan.no_of_campaigns > 999 ? 'infinite' : plan.no_of_campaigns}</td>
                          </tr>
                          <tr>
                            <td>Anzahl der Mitarbeiter</td>
                            <td>{plan.no_of_employees}</td>
                          </tr>
                          <tr>
                            <td>Tracking und Kampagnenergebnisse</td>
                            <td>
                              {plan.tracking == "no"
                                ? "Nein"
                                : plan.tracking == "except_export"
                                ? "Ja (eingeschränkte Exportfunktion)"
                                : "Ja"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    { props.userDelete == true ? (
                      <button className="btn btn-primary mt-3" onClick={deleteUser}>Abo kündigen</button>

                    ):(
                    <>
                
                    <p className="mt-2">
                      Ihr gewählte Zahlungsmethode:{" "}
                      <span className="fw-bold">Kreditkarte</span>
                    </p>
                    <p >
                      Neuer Preis (monatlich):{" "}
                      <span className="fw-bold">{plan.price / 100}€ *</span>
                    </p>
                    <div className="col-lg-6 col-12">
                      <div className="mb-3 mt-2">
                        <input
                          type="text"
                          className="form-control border-1 rounded-0 border-dark"
                          id="inputNumber"
                          placeholder="Code einlösen"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                        />
                      </div>
                      <button
                        style={{marginBottom: '14px'}}
                        type="registration"
                        className="btn btn-primary border-0 rounded-0 w-100 bg-dark"
                        onClick={() => {
                          subscribeTo();
                        }}
                      >
                        Stripe
                      </button>

                       {/* * stripe * */}

                       {/* paypal */}

                       {/* <PayPalScriptProvider
                        options={{
                          'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                          vault: true
                        }}>
                        <PayPalButtons
                          fundingSource={FUNDING.PAYPAL}
                          createSubscription={createSubscription}
                      
                          onApprove={onApprove}
                          onCancel={onCancel}
                        />
                      </PayPalScriptProvider> */}

                    </div>
                    </>
)}
                  </div>
                );
              }
            })}
            </div>
      </ModalBody>
    
    </Modal>
  );
};

export default PaymentModel;
import ProfileLayout from "../../components/ProfileLayout";
import app from "../../../utils/axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { timestampToDate } from "../../../utils/helpers";
import Link from "next/link";
import { Btn } from '../../components/AbstractElements';
import CreatableSelect from "react-select/creatable";
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';
import { LargeModal} from '../../Constant';
import UpgradeModel from '../../components/subscriptionModel/upgradeModel';
import Head from 'next/head';
import Loader from '../../components/Layout/Loader';

const ProfileSubscriptions = ({child}) => {
  const [Large, setLarge] = useState(false);
  const LargeModaltoggle = () => setLarge(!Large);
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
      // if (response.data.user_id) {
      //   router.push("/");
      // }
      setCurrentSubscription(response.data.plan.id);
      setCancelled(response.data.cancelled);
      setPmType(response.data.pm_type);
  } catch (error) {
      if(error.response.status == 401){
        router.push("/login");
        // localStorage.clear();
      }else{
        toast.error('Could not subscribe! Please contact support!');
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
    const planId = planToSubscribe;

      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        app.defaults.timeout = 100000;

        await app.post(
          `/create-paypal-subscription/${planId}`,{'subscription_id':subscriptionID}
        );
        
        toast.success("Plan changed!");
        // router.reload();
      } catch (error) {
        toast.error("Could not subscribe! Please contact support!");
      }
  
  };

 


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
    const planId = planToSubscribe;
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



  

  const cancelSubscription = async () => {

   
    try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get("/cancel-subscription");
        toast.success("Subscription cancelled!");
        // router.reload();
  } catch (error) {
         toast.error("Could not cancel subscription!");
  }
  };

  const resumeSubscription = async () => {
    try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get("/resume-subscription");
        toast.success(response.message);
     
    } catch (error) {
      toast.error("Could not cancel subscription!");
    }

   
  };

  const retrive_subscription = async (e) => {
    e.preventDefault();
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.get("/retrive_subscription");
    toast.success("retrive subscription!");
    router.reload();
  };

  useEffect(() => {
    fetchUser();
    fetchPaypalTransaction();
    fetchPlans();
  }, [setPayPalSubscriptionID]);

  return (
    <ProfileLayout>
       <Loader/>
        <Head>
          <title>Abo</title>
        </Head>


      <div className="container-fluid">
       
        <div className="row mt-5 mb-2">
        <h5 className="pt-4 fw-bold">Mein Abo</h5>
          <div className="col-md-6 col-12">
            <div>
              <p>
                <small>
                  Sie sind aktuell im{" "}
                  <span className="fw-bold">{user && user.plan.title}</span> von
                  smavio.
                </small>
              </p>
              <Btn attrBtn={{ color: "primary", onClick: LargeModaltoggle }}>Upgrade</Btn>

                                
                                <UpgradeModel isOpen={Large} title={LargeModal} toggler={LargeModaltoggle} size="xl">...</UpgradeModel>
            </div>
            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex={-1}
              data-bs-backdrop="false"
              aria-labelledby="exampleModal3Labe"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content rounded-0 border-1 border-dark">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close btn-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body m-lg-5 m-md-4 m-3">
                    <h6 className="text-start fw-bold">
                      Mehr Apps, mehr Kampagnen, mehr Geräte, mehr Mitarbeiter?
                      Wechseln Sie Ihr Abo.
                    </h6>
                    <div className="table-responsive">
                      <table
                        id="exampleTable1"
                        className="table table-bordered border-dark data-table w-100 mt-4"
                      >
                        <thead>
                          <tr>
                            <th>&nbsp;</th>
                            {plans.map((plan) => (
                              <th key={plan.id}>
                                <p className="text-center m-0">{plan.title}</p>
                                <p className="fw-light text-center m-0">
                                  <small>{plan.price / 100}€</small>
                                </p>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Anzahl der angeschlossenen Endgeräte</td>
                            {plans.map((plan) => (
                              <td key={`device${plan.id}`}>
                                {plan.no_of_device > 999 ? 'Infinite' : plan.no_of_device }
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td>Anzahl der auswählbaren App Templates</td>
                            {plans.map((plan) => (
                              <td key={`template${plan.id}`}>
                                {plan.no_of_templates > 999 ? 'Infinite' : plan.no_of_templates}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td>Anzahl der Kampagnen</td>
                            {plans.map((plan) => (
                              <td key={`campaign${plan.id}`}>
                                {plan.no_of_campaigns > 999 ? 'Infinite' : plan.no_of_campaigns}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td>Anzahl der Mitarbeiter</td>
                            {plans.map((plan) => (
                              <td key={`employee${plan.id}`}>
                                {plan.no_of_employees}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td>Tracking und Kampagnenergebnisse</td>
                            {plans.map((plan) => (
                              <td key={`report${plan.id}`}>
                                {plan.tracking == "no"
                                  ? "Nein"
                                  : plan.tracking == "except_export"
                                  ? "Ja (eingeschränkte Exportfunktion)"
                                  : "Ja"}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td>&nbsp;</td>
                            {plans.map((plan) =>
                              plan.title == "Free" ? (
                                <td key={`planSubButton${plan.id}`}></td>
                              ) : (
                                <td key={`planSubButton${plan.id}`}>
                                  <button
                                    className="btn btn-primary d-flex rounded-0 w-100 justify-content-center"
                                    href="#"
                                    disabled={currentSubscription == plan.id}
                                    data-bs-toggle="modal"
                                    data-bs-dismiss="modal"
                                    data-bs-target="#subscriptionConfirmation"
                                    onClick={() => {
                                      setPlanToSubscribe(plan.id);
                                      setPayPalPlanToSubscribe(plan.paypal_planid)
                                      console.log(plan.id);
                                      console.log(plan.paypal_planid);
                                    }}
                                  >
                                    {currentSubscription == plan.id
                                      ? "Aktuell"
                                      : "Abo wechseln"}
                                  </button>
                                </td>
                              )
                            )}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-responsive pt-5">
              <table
                id="exampleTable1"
                className="table table-bordered border-dark data-table w-100"
              >
                <tbody>
                  <tr>
                    <td>
                      <small>Anzahl der angeschlossenen Endgeräte</small>
                    </td>
                    <td>
                      <small>{user && user.plan.no_of_device > 999 ? 'Infinite' : user && user.plan.no_of_device}</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Anzahl der auswählbaren App Templates</small>
                    </td>
                    <td>
                      <small>{user && user.plan.no_of_templates > 999 ? 'Infinite' : user && user.plan.no_of_templates}</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Anzahl der Kampagnen</small>
                    </td>
                    <td>
                      <small>{user && user.plan.no_of_campaigns > 999 ? 'Infinite' : user && user.plan.no_of_campaigns}</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Anzahl der Mitarbeiter</small>
                    </td>
                    <td>
                      <small>{user && user.plan.no_of_employees}</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Tracking und Kampagnenergebnisse</small>
                    </td>
                    <td>
                      <small>
                        {user && user.plan.tracking == "no"
                          ? "Nein"
                          : user && user.plan.tracking == "except_export"
                          ? "Ja (eingeschränkte Exportfunktion)"
                          : "Ja"}
                      </small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {user && user.plan && user.plan.title != "Free" && (
              <>
                {!cancelled ? (
                  <div>
                    <p className="mt-3 mb-3">
                        Die nächste Zahlung von{" "}
                        <span className="fw-bold">
                          {user &&
                            user.upcoming_invoice &&
                            user.upcoming_invoice.total / 100}
                          €
                        </span>{" "}
                        ist am{" "}
                        <span className="fw-bold">
                          {user &&
                            user.upcoming_invoice &&
                            timestampToDate(
                              user.upcoming_invoice.next_payment_attempt
                            )}
                        </span>{" "}
                        fällig.
                    </p>
                    <Link href="/profile/update-payment-method">
                      <a className="btn btn-primary rounded-3 px-4">
                        Zahlungsmethode wechseln
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div className="pt-4">
                    <p>
                      <small>
                        Die nächste Zahlung von{" "}
                        <span className="fw-bold">149€</span> ist am{" "}
                        <span className="fw-bold">01.04.2021</span> fällig.
                      </small>
                    </p>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary rounded-3 px-4"
                      onClick={resumeSubscription}
                    >
                      Resume Subscription
                    </button>
                  </div>
                )}
                {!cancelled && (
                  <div className="pt-5">
                    <a
                      className="fw-bold"
                      data-bs-toggle="modal"
                      data-bs-target="#cancelSubscription"
                    >
                      Abo kündigen
                    </a>
                    <p>
                      Wenn Sie Ihr Abonnement kündigen, wird Ihr Account auf den{" "}
                      <span className="fw-bold">
                        {user && user.plan.title} plan
                      </span>{" "}
                      heruntergestuft. Dabei gehen Kampagnen, Apps und
                      angeschlossene Endgeräte verloren.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="col-md-6 col-12">
            <h6 className="fw-bold">Ein Monat Premium gratis?</h6>
            <p>
              <small>
                Laden Sie andere Freunde ein, smavio zu testen. Für jede
                erfolgreiche Anmeldung schenken wir Ihnen{" "}
                <span className="fw-bold">einen Monat Premium gratis.</span>
              </small>
            </p>
            <div className="input-group mb-3">

            <div className="input-group mb-3 pt-4">
              <CreatableSelect
                components={components}
                inputValue={inputValue}
     
                isMulti
                menuIsOpen={false}
                onChange={handleChange}
                onInputChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Geben Sie etwas ein und drücken Sie die Eingabetaste..."
                value={value}
                className="form-control"
              />
              <button
                className="btn btn-primary rounded-0 px-3"
                onClick={inviteUsers}
              >
                Freunde einladen
              </button>
            </div>

            <p>Notiz: Bitte drücken Sie nach dem Hinzufügen der E-Mail die Eingabetaste.</p>

            </div>


            {user && user.plan && user.plan.title != "Free" && (
              <>
                <div className="row">
                <div className="col-md-6"> <button className="btn btn-danger w-100" onClick={cancelSubscription}>Cancel Subscription</button></div>
                <div className="col-md-6"><button className="btn btn-primary w-100" onClick={resumeSubscription}>Resume Subscription</button></div>
                </div>
                </>
            )}
           
           
                       
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="subscriptionConfirmation"
        tabIndex={-1}
        aria-hidden="true"
        data-bs-backdrop="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content rounded-0 border-1 border-dark">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {plans.map((plan) => {
              if (plan.id == planToSubscribe) {
                return (
                  <div
                    key={`planModal${plan.id}`}
                    className="modal-body m-lg-5 m-md-4 m-3"
                  >
                    <h5>
                      Ihr neuer Plan:{" "}
                      <span className="fw-bold">{plan.title}</span>
                    </h5>
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
                    {/*table end*/}
                    <p>
                      Ihr gewählte Zahlungsmethode:{" "}
                      <span className="fw-bold">Kreditkarte</span>
                    </p>
                    <p>
                      Neuer Preis (monatlich):{" "}
                      <span className="fw-bold">{plan.price / 100}€ *</span>
                    </p>
                    <div className="col-lg-6 col-12">
                      <div className="mb-3">
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

                       <PayPalScriptProvider
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
                      </PayPalScriptProvider>

                    </div>

                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="cancelSubscription"
        tabIndex={-1}
        aria-hidden="true"
        data-bs-backdrop="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content rounded-0 border-1 border-dark">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body m-lg-5 m-md-4 m-3">
              <form>
                <h5>Sind Sie sicher, dass Sie Ihr Abo kündigen wollen?</h5>
                <p>
                  Wenn Sie Ihr Abo kündigen, wird Ihr Account auf den{" "}
                  <span className="fw-bold">Free Plan</span> heruntergestuft.
                  Das verlieren Sie:
                </p>
                <p>
                  <i
                    className="me-2"
                    data-feather="alert-circle"
                    width="18px"
                    height="18px"
                  />
                  <small>6 Kampagnen</small>
                </p>
                <p>
                  <i
                    className="me-2"
                    data-feather="alert-circle"
                    width="18px"
                    height="18px"
                  />
                  <small>6 Apps</small>
                </p>
                <p>
                  <i
                    className="me-2"
                    data-feather="alert-circle"
                    width="18px"
                    height="18px"
                  />
                  <small>8 Geräte</small>
                </p>
                <p>
                  <i
                    className="me-2"
                    data-feather="alert-circle"
                    width="18px"
                    height="18px"
                  />
                  <small>{user && user.sub_users.lenght-1} Mitarbeiter</small>
                </p>
                <p>
                  Es bleiben jeweils zuletzt hinzugefügte(s) Kampagne und Gerät
                  erhalten. Als App bleibt die Free Plan Basisapp erhalten.
                </p>
                <button
                  type="button"
                  className="btn btn-dark rounded-0 mt-3"
                  onClick={cancelSubscription}
                >
                  Abo kündigen
                </button>
                <button
                  type="button"
                  className="btn btn-secondary rounded-0 mt-3"
                  data-bs-dismiss="modal"
                >
                  Abbrechen
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileSubscriptions;

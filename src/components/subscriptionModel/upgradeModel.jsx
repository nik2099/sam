import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import app from "../../../utils/axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import PaymentModel from '../../components/subscriptionModel/paymentModel';
import { LargeModal} from '../../Constant';
const UpgradeModel = (props) => {

  const LargeModaltoggle = () => setLarge(!Large);
  const [Large, setLarge] = useState(false);
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
      // if(error.response.status == 401){
      //   router.push("/login");
      //   // localStorage.clear();
      // }else{
      //   toast.error('Could not subscribe! Please contact support!');
      // }
 
  }
  };



  const fetchPlans = async () => {
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.get("/plans");
    setPlans(response.data);
  };




  useEffect(() => {
    fetchUser();
    fetchPlans();
  }, []);


  return (
    <Modal isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
     
      <ModalBody className={props.bodyClass}>
      <ModalHeader toggle={props.toggler}>
         Mehr Apps, mehr Kampagnen, mehr Geräte, mehr Mitarbeiter? Jetzt Abo wechseln..
      </ModalHeader>
           <div className="mt-5 table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                            <th scope="col">&nbsp;</th>
                            {plans.map((plan) => (
                              <th  key={plan.id} className="text-center" scope="col">{plan.title}<br/> {plan.price / 100}€</th>
                            
                            ))}
                        </tr>
                      </thead>
                      <tbody>
                        
                        <tr>
                          <th scope="row">Anzahl der angeschlossenen Geräte</th>
                          {plans.map((plan) => (
                              <td key={`device${plan.id}`}>
                                {plan.no_of_device > 999 ? 'Infinite' : plan.no_of_device }
                              </td>
                            ))}
                        
                        </tr>
                        <tr>
                          <th scope="row">Anzahl der auswählbaren Apps</th>
                            {plans.map((plan) => (
                              <td key={`template${plan.id}`}>
                                {plan.no_of_templates > 999 ? 'Infinite' : plan.no_of_templates}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <th scope="row">Anzahl der Kampagnen</th>
                            {plans.map((plan) => (
                              <td key={`campaign${plan.id}`}>
                                {plan.no_of_campaigns > 999 ? 'Infinite' : plan.no_of_campaigns}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <th scope="row">Anzahl der Mitarbeiter</th>
                           {plans.map((plan) => (
                              <td key={`employee${plan.id}`}>
                                {plan.no_of_employees}
                              </td>
                            ))}
                        </tr>
                        <tr>
                          <th scope="row">Tracking &amp; Kampagnenergebnisse</th>
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
                        <tr className="no-bordered">
                          <th>&nbsp;</th>

                          {plans.map((plan) =>
                      
                                <td key={`planSubButton${plan.id}`}>

                               <button className="btn btn-primary"  disabled={currentSubscription == plan.id}
                               
                                     onClick={() => {
                                      LargeModaltoggle(plan.id);
                                      setPlanToSubscribe(plan.id);
                                      setPayPalPlanToSubscribe(plan.paypal_planid)
                                      console.log(plan.id);
                                      console.log(plan.paypal_planid);
                                    }}> {currentSubscription == plan.id
                                      ? <i className="icon-check">Aktuell</i> 
                                      : "Abo wechseln"}</button>
                              
                                <PaymentModel isOpen={Large} title={LargeModal} setPlanToSubscribe={plan.id} planToSubscribe={planToSubscribe} toggler={LargeModaltoggle} size="ml">...</PaymentModel>
                              
                                </td>
                              
                            )}
                       
	                        </tr>
						          </tbody>
					          </table>
            </div>
      </ModalBody>
    
    </Modal>
  );
};

export default UpgradeModel;
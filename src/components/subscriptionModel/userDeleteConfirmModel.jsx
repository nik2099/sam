import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import app from "../../../utils/axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import CreatableSelect from "react-select/creatable";
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

const UserDeleteConfirmModel = (props) => {
 
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





  const fetchPlans = async () => {
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.get("/plans");
    setPlans(response.data);
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
  }, []);


  return (
    <Modal isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
     
      <ModalBody className={props.bodyClass}>
          <div>
            <h1>Are you sure delete this user</h1>
            <tr>
                <td><button className="btn btn-primary">Ok</button></td>
                <td><button className="btn btn-danger">Cancel</button></td>
            </tr>
           
          </div>
           
           
      </ModalBody>
    
    </Modal>
  );
};

export default UserDeleteConfirmModel;
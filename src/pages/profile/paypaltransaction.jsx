import ProfileLayout from "../../components/ProfileLayout";
import { useState, useEffect } from "react";
import app from "../../../utils/axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { timestampToDate } from "../../../utils/helpers";
import {BiEuro} from 'react-icons/bi';
import Link from 'next/link';

  const paypaltransaction = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [plan, setPlan] = useState("");
  const [currency, setCurrency] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [excludingTax, setExcludingTax] = useState("");
  const [total, setTotal] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [paypalsubscriptionID, setPaypalId] = useState("");
 
  const fetchUser = async () => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.get("/user");
      const responseUser = response.data;
      setUser(responseUser);
      setName(responseUser.name || "");
      setPhone(responseUser.mobile || "");
      setStreet(responseUser.street || "");
      setHouseNo(responseUser.house_no || "");
      setCity(responseUser.city || "");
      setCountry(responseUser.country || "");
      setPostcode(responseUser.postcode || "");
      setPlan(responseUser.plan.title || "");
      setCurrency(responseUser.upcoming_invoice.currency || "");
      setSubtotal(responseUser.upcoming_invoice.subtotal || "");
      setExcludingTax(responseUser.upcoming_invoice.total_excluding_tax || "");
      setTotal(responseUser.upcoming_invoice.total || "");
      setPaypalId(responseUser.paypal_subscription_id || "");
    } catch (error) {
         if(error.response.status == 401){
          router.push("/login");
          localStorage.clear();
        }else{
          toast.error('Something went wrong');
        }
    }
  };


   
  const fetchPaypalTransaction = async () => {
    try{
    app.defaults.headers.common['Authorization'] = `Bearer A21AAKedvceqI5ydi7GKCSI0f3LckWSjL6rsG8y3hRk-AOLj95MEybQENso28Yt2xb1i32Z0g2Qd1E6m7jXB6KZOynsnSuGMw`;
    const response = await app.get(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-MNAE4R8J9AWU/transactions?start_time=2018-01-21T07:50:20.940Z&end_time=2022-12-21T07:50:20.940Z`);
    const responses = await app.get(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-MNAE4R8J9AWU`);
    console.log(responses.data);
    console.log(response.data);
    setInvoices(response.data.transactions);
    // PaypalResponse();
  } catch (error) {
   
  }
  }


  useEffect(() => {

    fetchUser();
    fetchPaypalTransaction();
  }, []);



  return (
    <ProfileLayout>

      <h4>Your Bills</h4>

      <table className="table table-secondary">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">ID</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
  
          {  invoices.map((ele) => {
           return (
            <tr key={ele.id}>
              <td>{ele.time}</td>
              <td>{ele.id}</td>
              <td>€ {ele.amount_with_breakdown.gross_amount.value}</td>
              <td>{ele.status}</td>
              <td>  
    
                    <Link href="">
                      
                        <a target="_blank" className="btn btn-dark btn-sm rounded-0">
                     
                              View
                        </a>
                    </Link>
              </td>
            </tr>
           )
           })
        }

        </tbody>
      </table>

    </ProfileLayout>
  );
};

export default paypaltransaction;

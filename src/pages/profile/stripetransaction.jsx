import ProfileLayout from "../../components/ProfileLayout";
import { useState, useEffect } from "react";
import app from "../../../utils/axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from 'next/link';
import Head from 'next/head';
import Loader from '../../components/Layout/Loader';

  const Transaction = ({ children }) => {
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
  console.log(invoices);

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
    } catch (error) {
         if(error.response.status == 401){
          router.push("/login");
          localStorage.clear();
        }else{
          toast.error('Something went wrong');
        }
    }
  };


  const fetchInvoive = async () => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.get("/user/invoices");
      setInvoices(response.data.invoices);
    } catch (error) {

         if(error.response.status == 401){
          router.push("/login");
          localStorage.clear();
        }else{
          toast.error('Something went wrong');
        }
    }
  };



 const download = async (invoice_id) => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get(`/retriveInvoice/${invoice_id}`);
        console.log(response)
        const url = response.data.URL;
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("target", "_blank");
        link.setAttribute("download", "file.pdf");
        document.body.appendChild(link);
        link.click();
    
      } catch (error) {

      }
 } 
  

  useEffect(() => {
    fetchUser();
    fetchInvoive();
  }, []);



  return (
    <ProfileLayout>
       <Loader/>
        <Head>
          <title>Rechnungen</title>
        </Head>

       <div className="container-fluid">
       <div className="row mt-5 mb-2">
							<div className="col-sm-12 col-xl-12 col-xxl-8 box-col-8 my-auto">
								<h6>Deine Rechnungen</h6>
								<div className="card col mt-2">
									<div className="table-responsive">
										<table className="table table-hover">
											<thead>
												<tr>
                            <th scope="col">Datum</th>
                            <th scope="col">Zahlungsmethode</th>
                            <th scope="col">Preis</th>
                            <th scope="col">Status</th>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                      </thead>
											<tbody>
                      {  invoices.map((ele) => {
                         return (
                          <tr key={ele.id}>
                            <td className="align-middle">{ele.created}</td>
                            <td className="align-middle">{ele.id}</td>
                            <td className="align-middle">€ {ele.amount}</td>
                            <td className="align-middle" >{ele.status}</td>
                          
                            <td className="text-right"> 
                             {/* use this code for invoie preview */}
                              {/* <Link href={{pathname: '/profile/invoice/'+ele.id+''}}>
                                      <a target="_blank" className="btn btn-primary">View</a>
                              </Link> */}

                              <a  className="btn btn-primary" onClick={() => download(ele.id)} >Download</a>
                           
                                  {/* <Link href={`${ele.hosted_url}`}>
                                    
                                      <a target="_blank" className="btn btn-primary">
                                      { ele.paid  ? (
                                          'View'
                                      ):(
                                            'Pay'
                                      )}
                                      </a>
                                  </Link> */}
                            </td>
                          </tr>
                              )
                            })
                            }
											
											</tbody>
                    </table>
                  </div>
								</div>
							</div>
						</div>
       </div>

  

    </ProfileLayout>
  );
};

export default Transaction;

import { useState, useEffect } from "react";
import app from "../../../../utils/axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { timestampToDate } from "../../../../utils/helpers";

  const Invoices = ({invoice_id}) => {
  const router = useRouter();
  const [invoice, setInvoiceData] = useState({});
  const [iteam, setInvoiceItem] = useState([]);


  const getInvoiceDetails = async () => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.get(`/retriveInvoice/${invoice_id}`);
      setInvoiceData(response.data.invoiceData);
      setInvoiceItem(response.data.invoiceData.lines.data);
    } catch (error) {

    }
  };



  useEffect(() => {
    getInvoiceDetails();
  }, []);



  return (
    
    <>
  
      <style jsx>{`
        .card {
          margin-bottom: 1.5rem;
      }
      
      .card {
          position: relative;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: column;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid #c8ced3;
          border-radius: .25rem;
      } 
      
      .card-header:first-child {
          border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
      }
      
      .card-header {
          padding: .75rem 1.25rem;
          margin-bottom: 0;
          background-color: #f0f3f5;
          border-bottom: 1px solid #c8ced3;
      }
      .ui-view{
        width: 80%;
        margin: auto;
        margin-top:20px;
      }
      `}</style>



      <div className="">
           <div id="ui-view" style={{width: '95%',margin:'auto',marginTop:'20px'}}><div>
              <div className="card">
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col">
                            <img style={{height: '68px'}} src="/assets/img/logo (2).png"/>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                          
                          <div>
                              <strong>{invoice.customer_name}</strong>
                          </div>
                          <div>{invoice.customer_address}</div>
                          <div>Email: {invoice.customer_email}</div>
                          <div>Telefon: {invoice.customer_phone}</div>
                        </div>

                        <div className="col">
                          <div>Rechnungsnummer :
                              <strong> {invoice.number}</strong>
                          </div>
                          <div>Quittungsnummer :
                              <strong> {invoice.receipt_number}</strong>
                          </div>
                          <div>{timestampToDate(invoice.created)}</div>
                          <div>Kontobezeichnung: {invoice.account_name}</div>
                        
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <strong>Rechnung {invoice.number}</strong>  
                            <div>Sehr geehrte Damen und Herren, <br/>
                                wir erlauben uns wie folgt Rechnung zu stellen:</div>
                        </div>   
                    </div>

                    <div className="table-responsive-sm">
                      <table className="table table-striped">
                          <thead>
                              <tr>
                                  <th className="center">#</th>
                                  <th>Beschreibung</th>
                                  <th className="center">Menge</th>
                                  <th className="right">Stückpreis</th>
                                  <th className="right">Menge</th>
                              </tr>
                          </thead>
                      <tbody>

                      {  iteam.map((ele) => {
                         return (
                            <tr  key={ele.id}>
                                <td className="center">1</td>
                                <td className="left">{ele.description}</td>
                                <td className="center">{ele.quantity}</td>
                                <td className="right">€ {ele.price.unit_amount/100}</td>
                                <td className="right">€{ele.amount/100}</td>
                            </tr>

                          )
                          })
                          }
                      <tr >
                              <td colSpan="3"></td>
                              <td>
                              <strong>Zwischensumme</strong>
                              </td>
                              <td className="right">€ {invoice.subtotal/100}</td>
                            </tr>
                        
                            <tr>
                            <td colSpan="3"></td>
                              <td className="left">
                              <strong>Gesamt</strong>
                              </td>
                              <td className="right">€ {invoice.total_excluding_tax/100}</td>
                            </tr>
                            <tr>
                            <td colSpan="3"></td>
                              <td className="left">
                              <strong>Bezahlter Betrag</strong>
                              </td>
                              <td className="right">
                              <strong>€ {invoice.total/100}</strong>
                              </td>
                            </tr>

                      </tbody>
                      </table>
                    </div>
              
                    <div className="row mb-4">
                        <div className="col ">Der Ort der Leistungserbringung war Deutschland, Zeitpunkt entspricht dem Rechnungsdatum.
                         Den Betrag überweisen Sie bitte in den nächsten 7 Tagen auf das unten genannte Konto, unter
                        Angabe der Rechnungsnummer.</div>
                    </div>
                    
                    <div clas="row mt-5">
                        <div className="col">
                           <div>
                              <strong>Begünstigter: </strong> Ingmar Hansen
                          </div>
                          <div><strong>Bankverbindung: </strong> Commerzbank Berlin</div>
                          <div><strong>IBAN: </strong> DE27 1204 0000 0026 3640 00</div>
                          <div><strong>BIC: </strong> COBADEFFXXX</div>
                          <div>Mit freundlichen Grüßen <br/> Ingmar Hansen</div>
                        </div>
                    </div>
                </div>
              </div>

              <hr></hr>

              <div className="row mb-4">
                  <div className="col">
                    <div>
                        <strong>Hansen World</strong>
                    </div>
                    <div>Dunckerstr. 12</div>
                    <div>10437 Berlin</div>
                    <div>Email: hallo@hansen-world.de</div>
                    <div>Phone: 03946 5199901</div>
                  </div>

                  <div className="col">
                    <div>USt-IdNr.: DE258547789</div>
                    <div>Steuernummer: 31/330/00979</div>
                  </div>

                  <div className="col">
                    <div>Ingmar Hansen</div>
                    <div>Commerzbank Filiale Berlin 2</div>
                    <div>IBAN: DE27 1204 0000 0026 3640 00</div>
                    <div>BIC: COBADEFFXX</div>
                    
                  </div>
              </div>
           </div>
      </div>
      </div>
    </>
     
  );
};

export default Invoices;


export const getServerSideProps = async (context) => {
  console.log(context.params);
    const { invoice_id } = context.params;
 
  return {
    props: {
      invoice_id,
    },
  };
};

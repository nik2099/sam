import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import {BsFillEyeFill} from 'react-icons/bs';
import Moment from 'moment';
import Link from 'next/link';
const MyApps = ({appsDetail}) => {
const time = Moment(appsDetail.created_at).format("DD-MM-YYYY h:mm:ss");

    return (
        <>

          <div className="card h-100 card-full">
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                      <tr>
                          <td colSpan="2" className="app-image-wrapper" id="app01">
                            <div className="dots-wrapper">
                              <div className="hw-tooltip-wrapper hw-tooltip-b1 hw-tooltip-l1 hidden">
                                <div className="hw-tooltip">Vorschau anzeigen</div>
                                <div className="hw-tooltip-arrow"></div>
                              </div>

                              <Link href={`/template/${appsDetail.name}/preview`}>
                              <a target="_blank" > 
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                              </a>
                            </Link>
                           
                            </div>


                            <div className="app-info-wrapper-outer">
                              <div className="app-info-trigger-wrapper"></div>
                              <div className="app-info-wrapper">
                                <h5>{appsDetail.details.title}</h5>
                                <ul className="mt-2">
                                {appsDetail.details.value.map((ele)=>
                                   <li key={ele.id} className="checked">{ele}</li>
                                   
                                )}
                             
                                </ul>
                              </div>
                              <div><img src={appsDetail.image} alt=""/></div>
                            </div>
                          </td>
                      </tr>
                      <tr>
                          <td className="align-middle">
                          <b>{appsDetail.name}</b><br/>
                          <small>{appsDetail.category.name}</small>
                          <div className="mt-2">
                            {appsDetail.details.tags.map((ele)=>
                                <div key={ele.id}  className="tag"><small>{ele}</small></div>
                            )}
                           
                        
                          </div>
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
          </div>

        
             
        </>
        );
    };
    
    export default MyApps;
    
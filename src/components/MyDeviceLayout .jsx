
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { useState, useEffect } from "react";
import {GrMore} from 'react-icons/gr';
import {BiMobileAlt} from 'react-icons/bi';
import {BsFillTabletLandscapeFill} from 'react-icons/bs';
import {HiLocationMarker} from 'react-icons/hi';
import app from '../../utils/axios';
import {results} from '../Constant';
import Link from 'next/link';
import { toast } from "react-toastify";

const MyDevice = ({deviceDetail, deviceId, setDeviceId}) => {
    
  const setDeviceLogout = async () => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.post(`/deviceLogout`,JSON.stringify({device_id:deviceDetail.id}));
      
      if (response.status == 200) {
        toast.success("Device logout successfuly!"); 
      }else{
        toast.error("Something went wrong!"); 
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };


    return (
        <>

          
              <div className="card">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td colSpan="2" className="app-image-wrapper">
                          <span className="dots-wrapper"><div className="page-item-header">
                              <div className="main-header-right row m-0">
                                <div className="nav-right col pull-right right-menu p-0">
                                  <ul className="nav-menus">
                                    <li className="onhover-dropdown">
                                      <i className="icon-more-alt"></i>
                                      <div className="bookmark-dropdown onhover-show-div big-width">
                                        <div className="mb-2"><b>{deviceDetail.name}</b> ist in <b>1 Kampagne(n)</b> aktiv, <a  onClick={() => {setDeviceLogout(deviceDetail.id)}} title="">Gerät abmelden</a> <br/>
                                        <Link href={`/result/${deviceDetail.id}`}>
                                            <a title="result">{results}</a>
                                        </Link>
                                        </div>
                                 
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </span>
                          <div className="d-flex align-items-center justify-content-center h-100" style={{minHeight:'250px',padding:'40px 0'}}>
                            <div className="flex-column">
                              <div className="icon-td-big">
                                    { deviceDetail.model == 'iPad' ? (
                                  <BsFillTabletLandscapeFill style={{fontSize:'67px'}}></BsFillTabletLandscapeFill>
                                ):(
                                  <BiMobileAlt style={{fontSize:'78px'}}></BiMobileAlt>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <b>{deviceDetail.name}</b> <small className="text-muted">({deviceDetail.user.name})</small><br/>
                          <i className="icon-location-pin"></i> <small>{deviceDetail.city},{deviceDetail.state},{deviceDetail.houseno}</small>
                        </td>
                        <td className="align-middle" style={{width: '20px'}}>
                          <div className="status-wrapper">
                            <div className="hw-tooltip-wrapper hw-tooltip-b0 hidden" style={{opacity: '0'}}>
                              <div className="hw-tooltip" style={{right: '65px'}}>Gerät ist in einer Kampagne aktiv</div>
                              <div className="hw-tooltip-arrow"></div>
                            </div>

                            { deviceDetail.status == 1 ? (
                                <div className="dot-green"></div>
                            ):(
                              <div className="dot-red"></div>
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
    
    export default MyDevice;
    
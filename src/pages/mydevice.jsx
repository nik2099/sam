import { useState,useEffect} from 'react';
import app from "../../utils/axios";
import { useRouter } from "next/router";
import React, { Fragment } from 'react';
import MyDeviceLayout from "../components/MyDeviceLayout ";
import { toast } from "react-toastify";
import Loader from '../components/Layout/Loader';
import { Btn } from '../components/AbstractElements';
import Head from 'next/head';
import { MyDiviceTitle} from '../Constant/seo';
import { LargeModal,MyDevices,AllDevice,Upgrade,Still,Available,Tablet,WindowsDesktop,IosDesktop,Mobile,deviceMsg} from '../Constant';
import UpgradeModel from '../components/subscriptionModel/upgradeModel';
import { useUser } from "../context/user";

const MyDevice = () => {
    const { user,setUser } = useUser({});
    const router = useRouter();
    const [devices, setDevices] = useState([]);
    const [deviceId, setDeviceId] = useState(null);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [Large, setLarge] = useState(false);
    const LargeModaltoggle = () => setLarge(!Large);

    const getDevices = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const deviceResponse = await app.get("/getDeviceList");
        
        setDevices(deviceResponse.data.devices);
        console.log(devices);
      
      } catch (error) {
      }
    };
  
    useEffect(() => {
      getDevices();
    },[]);

  return (
    <Fragment>
      <Loader />
        <Head>
           <title>{MyDiviceTitle}</title>
         </Head>
                <div className="container-fluid">
                  <div className="row mt-2 mb-2">
                    <div className="col-sm-12 col-md-8 col-xl-9 col-xxl-10 box-col-10 my-auto">
                      <ul className="nav-steps">

                    
                        <li><b>{MyDevices}</b>&nbsp;({Still} <b className="color-body-primary">{user && user.type == "user" && user.plan && user.plan.no_of_device-devices.length > 999 ? 'Infinite' : user.plan && user.plan.no_of_device-devices.length}</b> {Available})</li>

                        { user && user.type == "user" && user.plan && user.plan.no_of_device-devices.length > 0 && (
                          <li><Btn attrBtn={{ color: "primary", onClick: LargeModaltoggle }}>{Upgrade}</Btn></li>
                          
                        )}
                         <UpgradeModel isOpen={Large} title={LargeModal} toggler={LargeModaltoggle} size="xl">...</UpgradeModel>
                        
                               
                      </ul>
                    </div>
                    
                    <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-2 box-col-2 my-auto text-right">
                        <select className="form-select form-select-lg mb-3 float-end" onChange={(e) => { setFilterParam(e.target.value);}} aria-label=".form-select-lg example">
                          <option value="All">{AllDevice}</option>
                          <option value="ios">{Tablet}</option>
                          <option value="windows">{WindowsDesktop}</option>
                          <option value="ios">{IosDesktop}</option>
                          <option value="android">{Mobile}</option>
                        </select>
                    </div>
                  </div>
                </div>

                <div className="container-fluid">
                  <div className="row mt-5 mb-2">
                    { devices.length > 0 ? ( 
                        filterParam == 'All' ? (
                          
                          devices.map( (elm)=>{
                            return (<div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3" key={elm.id}><MyDeviceLayout deviceDetail = {elm} setDeviceId={setDeviceId}/></div>)
                          })
                      
                    
                      
                    ):(

                                    
                          devices
                          .filter(devices => devices.platform === filterParam)
                          .map( (elm)=>{
                            return (<div className="col-sm-12 col-md-6 col-xl-4 col-xxl-3" key={elm.id}><MyDeviceLayout deviceDetail = {elm} setDeviceId={setDeviceId}/></div>)
                          })
                                  
                                  
                    )
                    ):(
                      <div>{deviceMsg}</div>
                    )} 
              
                  </div>
                </div>
         
  </Fragment>
  );
};

export default MyDevice;

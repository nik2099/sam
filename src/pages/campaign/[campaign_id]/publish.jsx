import DeviceLayout from "../../../components/DeviceLayout";
import app from "../../../../utils/axios";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import React, { createRef, useState, useContext,Fragment, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loader from '../../../components/Layout/Loader';
import { toast } from "react-toastify";
import {pleaseWait} from '../../../Constant';

const Publish = ({campaign_id,template_detail}) => { 
    const [user, setUser] = useState({});
    const router = useRouter();
    const [deviceIds, setDeviceIds] = useState([]);
    const [devices, setDevices] = useState([]);
    const [isLoading, setLoading] = useState(false);


    const getDevices = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const deviceResponse = await app.get("/getDeviceList");
        
        setDevices(deviceResponse.data.devices);
     
      
      } catch (error) {
      }
    };
    
    const getAssignedDevices = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const deviceResponse = await app.get("/getAssignedDevices/"+campaign_id);
        
        setDeviceIds(deviceResponse.data.device_ids);
    
      } catch (error) {
      }
    };



    const Preview = dynamic(() => import(`./preview`), {
      loading: () => '',
    });

    const pageBack = async () =>{
      try {
          
        if(deviceIds === undefined || deviceIds == null || deviceIds.length < 1){
          toast.error('Bitte Gerät auswählen', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true, 
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
        }else{

            app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            const response = await app.post(`/assignCampaign`,
            JSON.stringify({
                campaign_id: campaign_id,
                device_ids: deviceIds,
              }));
              
            if (response.status == 200) {
              toast.success('Kampagnen Daten wurden gespeichert!');
              await router.push(`/campaign/${campaign_id}/editor`);

            }
        }

    } catch (error) {
        
    }
    
    }
    
    const publishAndClose = async () =>{
      setLoading(true);
      try {
          
        if(deviceIds === undefined || deviceIds == null || deviceIds.length < 1){
          setLoading(false);
          toast.error('Bitte Gerät auswählen', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true, 
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
        }else{

            app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            const response = await app.post(`/assignCampaign`,
            JSON.stringify({
                campaign_id: campaign_id,
                device_ids: deviceIds,
              }));
              
            if (response.status == 200) {
              setLoading(false);
              toast.success('Kampagne veröffentlichen');
              await router.push(`/campaigns`);

            }
        }

    } catch (error) {
      setLoading(false);
    }

        
      
    }
    useEffect(() => {
        getDevices();
        getAssignedDevices();
    },[]);

    return (
      <Fragment>

               <Loader />
          
                 <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-md-7 col-xl-6 box-col-6 my-auto">
                        <ul className="nav-steps">
                          <li><a title="">1. Kampagne vorbereiten</a></li>
                          <li><a title="">2. App editieren</a></li>
                          <li><b>3. Kontrolle und veröffentlichen</b></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-5 col-xl-6 box-col-6 my-auto text-right">
                        <button className="btn btn-light" style={{marginRight:'15px'}} onClick={pageBack} type="button" data-bs-original-title="" title="">Zurück</button>

                        {!isLoading && (
                              <button onClick={publishAndClose}  title="Veröffentlichen" className="btn btn-primary mr-2">Veröffentlichen</button>

                          )}
                          {isLoading && (

                              <button className="btn btn-primary mr-2" >
                                      <i className="fa fa-spinner fa-spin"></i> {pleaseWait}
                              </button>
                          )}
                     
                      </div>
                    </div>

                    <div className="container-fluid">
                      <div className="row mt-5 mb-2">
                        <div className="col-sm-12 col-xl-9">
                          <h6>Meine neue Kampagne</h6>
                        </div>
                        <div className="col-sm-12 col-xl-3">
                          <h6>Meine Geräte</h6>
                        </div>
                      </div>

                      <div className="row mt-2 mb-2">
                        <div className="col-sm-12 col-xl-9 box-col-9">
                          <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                            <div className="card-body text-center" style={{ position: 'relative' , overflow:'hidden'}}>
                               <Preview campaign_id = {campaign_id} template_detail={template_detail} deviceid='' />
                            </div>
                          </div>
                        </div>



                        <div className="col-sm-12 col-xl-3 box-col-3">
                  
                            { devices.length > 0 ? ( 
                              devices.map( (elm)=>{
                                return (<><div className="col-md-12" key={elm.id}><DeviceLayout deviceDetail = {elm} deviceIds={deviceIds} setDeviceIds={setDeviceIds}/></div></>)
                              })
                            ):(
                              <div>Ihr Gerät wird hier angezeigt, nachdem Sie sich bei der Player-App angemeldet haben.</div>
                            )
                          }
                    
                        </div>
                      </div>
                    </div>
                 </div>
          
    </Fragment>
    );
};

export default Publish;

export const getServerSideProps = async (context) => {
  const { campaign_id } = context.params;

  const template_detail = await app.get(`/getCampaign/${campaign_id}`).then(response => response.data.campaign);
  console.log(campaign_id)
  let { deviceid } = context.query;
  if(deviceid === undefined){
    deviceid = null;
  } 
  return {
    props: {
      campaign_id,
      deviceid,
      template_detail
    },
  };
};

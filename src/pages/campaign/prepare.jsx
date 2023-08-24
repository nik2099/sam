import TemplateSmallBox from "../../components/TemplateSmallBox";
import DeviceLayout from "../../components/DeviceLayout";
import { useState, useEffect} from 'react';
import app from "../../../utils/axios";
import React, { Fragment } from 'react';
import { useUser } from "../../context/user";
import { useRouter } from "next/router";
import Loader from '../../components/Layout/Loader';
import { toast } from "react-toastify";
import {pleaseWait,AllDevice,Tablet,laptop,all} from '../../Constant';



const Prepare = ({campaignid}) => {
    const router = useRouter();
    const [templates, setTemplates] = useState([]);
    const [categories, setCategory] = useState([]);
    const [campignName, setCampignName] = useState();
    const [templateId, setTemplateId] = useState();
    const [templateCategoryId, setTemplateCategory] = useState();
    const [deviceIds, setDeviceIds] = useState([]);
    const [devices, setDevices] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [isLoading, setLoading] = useState(false);
    let selectedOptionId = "All";
    let selectedDevice = 0;
    const isAnonymous = true;


  


    const getCategory = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const categoryResponse = await app.get("/getCategory");
        setCategory(categoryResponse.data.categories);
      
      } catch (error) {
      }
    };

    const createCampigns = async (event) =>{
      // event.currentTarget.disabled = true;
       setLoading(true);
      
        try {
            if(campignName === undefined){
                setLoading(false);
                toast.error('Bitte Kampagne auswählen', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true, 
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })
            }else if(templateId === undefined){
                setLoading(false);
                toast.error('Bitte wählen Sie ein Template aus!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true, 
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  })
      
          }else{
                var url = '/saveCampaign';
                if(campaignid != '' && campaignid !== undefined && campaignid != null){
                  url = '/updateCampaign/'+campaignid;
                }
                app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
                const response = await app.post(url,
                JSON.stringify({
                    name: campignName,
                    template_id: templateId,
                    device_ids: deviceIds,
                  }));
                   
             
                if (response.status == 200) {
                    setLoading(false);

                    await router.push('/campaign/'+response.data.campaign.id+'/editor');
                    
                    toast.success('Kampagne erfolgreich erstellt!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true, 
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      })
    
                }
            }

        } catch (error) {
          setLoading(false);
        }
        
    }


    const getTemplates = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get("/getAppsList");
        setTemplates(response.data.apps);
       
      } catch (error) {
      }
    };

    const getDevices = async () => {
        try {
          // app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          const deviceResponse = await app.get("/getDeviceList");
          
          setDevices(deviceResponse.data.devices);

        
        } catch (error) {
        }
    };
  
    const getCampaign = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const responseUser = await app.get(`/getCampaign/${campaignid}`);
        setTemplateId(responseUser.data.campaign.template.id);
        setTemplateCategory(responseUser.data.campaign.template.category_id);
        setCampignName(responseUser.data.campaign.name);
        setDeviceIds(responseUser.data.device_ids);
      } catch (error) {
        router.push('/login');
      }
    };
  
    useEffect(() => {
      getCategory();
      getTemplates();
      getDevices();
      
        console.log(campaignid);
        if(campaignid != null){
          getCampaign()
        }
      
      
    },[]);

  return (
    <Fragment>
        <Loader />
        <div className="container-fluid">
          <div className="row mt-2 mb-2">
            <div className="col-sm-12 col-md-7 col-xl-6 box-col-6 my-auto">
              <ul className="nav-steps">
                <li><b>1. Kampagne vorbereiten</b></li>
                <li><a  title="App editieren">2. App editieren</a></li>
                <li><a title="Kontrolle und veröffentlichen">3. Kontrolle und veröffentlichen</a></li>
              </ul>
            </div>
            
            <div className="col-sm-12 col-md-5 col-xl-6 box-col-6 my-auto text-right">
              {!isLoading && (
                    <button onClick={createCampigns} className="btn btn-primary mr-2">Fortfahren</button>

              )}
              {isLoading && (

              <button className="btn btn-primary mr-2" >
                      <i className="fa fa-spinner fa-spin"></i> {pleaseWait}
              </button>
              )}
           
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row mt-5 mb-5">
            <div className="col-sm-12 col-xl-7 col-xxl-3 col-3">
              <input className="form-control" id="inputEmail3" onChange={(e) => setCampignName(e.target.value)} value={campignName} type="text" placeholder="Name der Kampagne" />
            </div>
          </div>
        </div>

        <div className="container-fluid item-checkbox">
          <div className="row mt-2 mb-2">
            <div className="col-sm-12 col-md-7 col-xl-7 box-col-7">
              <div className="row">
                <div className="col-sm-12 col-md-7 col-xl-7 col-xxl-9 box-col-9 my-auto">
                  <h6>Meine Apps</h6> (bitte eine auswählen)
                </div>
                <div className="col-sm-12 col-md-5 col-xl-5 col-xxl-3 box-col-3 text-right">
                    <select className="form-select form-select-lg mb-3 samvio-select-box" defaultValue={selectedOptionId} onChange={(e) => { setFilterParam(e.target.value);}} aria-label=".form-select-lg example">
                        <option value="All">{all}</option>
                        {categories.map((ele)=>
                            <option key={ele.id} value={ele.id} selected={templateCategoryId == ele.id}>{ele.name}</option>
                        )}
                    </select>
                </div>
              </div>
              <div className="row mt-4">

              { filterParam == 'All' ? (
      
                    templates.map( (elm)=>{
                    return (<div className="col-sm-12 col-md-7 col-xl-6 col-xxl-4 box-col-4" key={elm.id}><TemplateSmallBox template={elm} templateId={templateId} setTemplateId={setTemplateId} /></div>)
                  })
                  
                
                ):(

                                
                      templates.filter(templates => templates.category_id == filterParam)
                    .map( (elm)=>{
                      return (<div className="col-sm-12 col-md-7 col-xl-6 col-xxl-4 box-col-4" key={elm.id}><TemplateSmallBox template={elm} templateId={templateId} setTemplateId={setTemplateId}/></div>)
                    })
                              
                              
                )}

            
              
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-xl-5 box-col-5">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-xl-7 col-xxl-9 box-col-9 my-auto">
                  <h6>Meine Geräte</h6> (Mehrfachauswahl möglich)
                </div>
                <div className="col-sm-12 col-md-6 col-xl-5 col-xxl-3 box-col-3 text-right">
                    <select className="form-select form-select-lg mb-3 samvio-select-box" defaultValue={selectedDevice} aria-label=".form-select-lg example">
                        <option value="0">{AllDevice}</option>
                        <option value="1">{Tablet}</option>
                        <option value="2">{laptop}</option>
                    </select>
                </div>
              </div>

              <div className="row mt-4">

                
                    { devices.length > 0 ? ( 
                        devices.map( (elm)=>{
                          return (<div className="col-sm-12 col-xl-12 col-xxl-6 box-col-6" key={elm.id}><DeviceLayout deviceDetail = {elm} deviceIds={deviceIds} setDeviceIds={setDeviceIds}/></div>)
                        })
                      ):(
                        <div>Your device will be visible here after login into Player app.</div>
                      )
                    }
              
            
              </div>

              
            </div>
          </div>
        </div>
    </Fragment>
  );
};



export default Prepare;

export const getServerSideProps = async (context) => {
  
  let { campaignid } = context.query;
  if(campaignid === undefined){
    campaignid = null;
  }  
  return {
    props: {
      campaignid,
    },
  };
};
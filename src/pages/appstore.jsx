import app from "../../utils/axios";
import React, { Fragment } from 'react';
import { useState, useEffect} from 'react';
import TemplateSmallBox from "../components/TemplateSmallBox";
import Link from 'next/link';
import { toast } from "react-toastify";
import Loader from '../components/Layout/Loader';
import { LargeModal,MyApp,Still,Available,Appstore,AddApp,AllApps,pleaseWait} from '../Constant';
import { useUser } from "../context/user";
const Campaign = ({}) => {

	
    const { user,setUser } = useUser({});
    const [templates, setTemplates] = useState([]);
    const [categories, setCategory] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [myappsIds, setMyAppsIds] = useState([]);
    const [appIds, setAppIds] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getTemplates = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const templateResponse = await app.get("/getTemplateList");
        
        setTemplates(templateResponse.data);
    
       
      } catch (error) {
      }
    };


    const getMyApps = async () => {
      try {

        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get("/getMyAppsIds");

        setMyAppsIds(response.data.apps);
        setAppIds(response.data.apps);
        
      } catch (error) {
      }
    };


    const addMyApps = async () => {
      setLoading(true);
      try {

        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const templateResponse = await app.post("/setMyApps", JSON.stringify({
          template_id: appIds,
          no_of_campaigns: user.plan.no_of_campaigns,
        }));
        
        setMyAppsIds(templateResponse.data.apps);
        setAppIds(templateResponse.data.apps);
        setLoading(false);
        toast.success('App has been added to my apps');
      } catch (error) {
        setLoading(false);
      
      }
    };


    const getCategory = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const categoryResponse = await app.get("/getCategory");
        setCategory(categoryResponse.data.categories);
        console.log(categoryResponse);
        
        
      } catch (error) {
      }
    };
    
    useEffect(() => {
      getCategory();
      getMyApps();
      getTemplates();
    },[]);

   

  return (
    <Fragment>
        <Loader />
          <div className="container-fluid">
            <div className="row mt-2 mb-2">
              <div className="col-sm-12 col-md-8 col-xl-9 col-xxl-10 box-col-10 my-auto">
                <ul className="nav-steps">
                  <li>
                      <Link href="/MyApp">
                            <a>{MyApp}</a>
                      </Link>
                      ({Still} <b className="color-body-primary">{user && user.type == "user" && user.plan && user.plan.no_of_templates-user.no_of_myapps > 999 ? 'Infinite' : user.plan && user.plan.no_of_templates-user.no_of_myapps}</b> {Available})</li>
                  <li><b>{Appstore}</b></li>

                  <li> 
                  {!isLoading && (
                      <button type="button" className="btn btn-primary" onClick={addMyApps}>{AddApp}</button>
  
                  )}
                  {isLoading && (
                  
                      <button className="btn btn-primary mr-2" >
                          <i className="fa fa-spinner fa-spin"></i> {pleaseWait}
                      </button>
                  )}
                    </li>
                  
                </ul>
              </div>
              
              <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-2 box-col-2 text-right">
                  <select className="form-select form-select-lg mb-3" onChange={(e) => { setFilterParam(e.target.value);}} aria-label=".form-select-lg example">
                      <option value="All">{AllApps}</option>
                      {categories.map((ele)=>
                          <option key={ele.id} value={ele.id}>{ele.name}</option>
                      )}
                </select>
              </div>
            </div>
          </div>


          <div className="container-fluid">
            <div className="row mt-5 mb-2">

            { filterParam == 'All' ? (
        
                templates.map( (elm)=>{
                  return (<div className="col-sm-12 col-md-4 col-xl-4 col-xxl-3" key={elm.id}><TemplateSmallBox template={elm}    setAppIds={setAppIds} myappsIds={myappsIds} appIds={appIds}  show={false} /></div>)
                })
              
            
            ):(

                            
              templates.filter(templates => templates.category_id == filterParam)
                  .map( (elm)=>{
                    return (<div className="col-sm-12 col-md-4 col-xl-4 col-xxl-3" key={elm.id}><TemplateSmallBox template={elm} setAppIds={setAppIds} myappsIds={myappsIds} appIds={appIds}  show={false}/></div>)
                  })
                          
                          
            )}
            
            
            
            </div>
          </div>
      
    </Fragment>
  );
};
export default Campaign;
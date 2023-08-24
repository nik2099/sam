import AppLayout from '../components/Layout/Layout';
import { useState, useRef,useEffect} from 'react';
import app from "../../utils/axios";
import { LargeModal,MyApp,Still,Available,Appstore,AddApp,AllApps,Upgrade} from '../Constant';
import { Btn } from '../components/AbstractElements';
import { useRouter } from "next/router";
import React, { Fragment } from 'react';
import MyApps from '../components/MyApps';
import UpgradeModel from '../components/subscriptionModel/upgradeModel';
import Link from 'next/link';
import Head from 'next/head';
import { MyAppTitle} from '../Constant/seo';
import Loader from '../components/Layout/Loader';
import { useUser } from "../context/user";
const Myapp = () => {

    const [Large, setLarge] = useState(false);
    const LargeModaltoggle = () => setLarge(!Large);

    const { user,setUser } = useUser({});
    const router = useRouter();
    const [campaigns, setCampaigns] = useState([]);
    const [categories, setCategory] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);


    


    const getApps = async () => {
      try {

        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get("/getAppsList");
        
        setCampaigns(response.data.apps);
       
      } catch (error) {
      }
    };


    const getCategory = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const categoryResponse = await app.get("/getCategory");
        setCategory(categoryResponse.data.categories);
       
      } catch (error) {
      }
    };
  
    useEffect(() => {
      getCategory();
      getApps();
    },[]);


  return (

    <Fragment>
      <Loader />
        <Head>
            <title>{MyAppTitle}</title>
          </Head>
              <div className="container-fluid">
              <div className="container-fluid">
                <div className="row mt-2 mb-2">
                  <div className="col-sm-12 col-md-8 col-xl-9 col-xxl-10 box-col-10 my-auto">
                    <ul className="nav-steps">
                      <li><b>{MyApp}</b> ({Still} <b className="color-body-primary">{user && user.type == "user" && user.plan && user.plan.no_of_templates-user.no_of_myapps > 999 ? 'Infinite' : user.plan && user.plan.no_of_templates-user.no_of_myapps}</b> {Available})</li>
                      <li>
                         <Link href="/appstore">
                            <a>{Appstore}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-2 box-col-2 text-right">
                    <div className="dropdown">
                      <select className="form-select form-select-lg mb-3" onChange={(e) => { setFilterParam(e.target.value);}} aria-label=".form-select-lg example">
                        <option value="All">{AllApps}</option>
                            {categories.map((ele)=>
                                <option key={ele.id} value={ele.id}>{ele.name}</option>
                            )}
                      
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                  <div className="row mt-5 mb-2">
        
                    <div className="col-sm-12 col-md-4 col-xl-4 col-xxl-3">
                      <div id="addNewWrapper" data-type="app" className="card h-100 card-full">
                        <div className="card-body text-center">
                          <div className="d-flex align-items-center justify-content-center h-100">
                            <div className="flex-column">
                              <div>

                                <Link href="/appstore">
                                    <i className="fa fa-plus mb-3" style={{fontSize:'2vw'}}></i>
                                </Link>
                                <br/>
                                <h2 className="mt-3 color-body">{AddApp}</h2>
                                <p className="color-body">{Still} <b className="color-body-primary">{user && user.type == "user" && user.plan && user.plan.no_of_templates-user.no_of_myapps > 999 ? 'Infinite' : user.plan && user.plan.no_of_templates-user.no_of_myapps}</b> {Available}</p>
                              </div>
                              <div className="mt-5">
                              { user && user.type == "user" && user.plan && user.plan.no_of_templates-user.no_of_myapps > 0 && (
                                 <Btn attrBtn={{ color: "primary", onClick: LargeModaltoggle }}>{Upgrade}</Btn>
                              )}
                                
                                      <UpgradeModel isOpen={Large} title={LargeModal} toggler={LargeModaltoggle} size="xl">...</UpgradeModel>
                              </div>
                            </div>
                          </div>
                        </div>
                              </div>
                    </div>
                
                      { filterParam == 'All' ? (
                          
                          campaigns.map( (elm)=>{
                            return (<div className="col-sm-12 col-md-4 col-xl-4 col-xxl-3" key={elm.id}><MyApps appsDetail = {elm} /></div>)
                          })
                        
                      
                      ):(

                                      
                        campaigns.filter(campaigns => campaigns.category_id == filterParam)
                            .map( (elm)=>{
                              return (<div className="col-sm-12 col-md-4 col-xl-4 col-xxl-3" key={elm.id}><MyApps appsDetail = {elm} /></div>)
                            })
                                    
                                    
                      )}
                
              
            
                  </div>
                </div>
                
              </div>
  </Fragment>
   
  );
};

export default Myapp;

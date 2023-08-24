import Loader from '../admin/Loader';
import Taptop from '../admin/TapTop';
import Header from '../admin/Header';
import Sidebar from '../admin/Sidebar';
import { useRouter } from "next/router";
import React, { Fragment } from 'react';
import ThemeCustomize from '../../Layout/admin/ThemeCustomizer';
import { ToastContainer } from 'react-toastify';
import CustomizerContext from '../../../_helper/Customizer';
import ConfigDB from '../../../Config/ThemeConfig';
import { useContext, useState, useEffect} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnimationThemeContext from '../../../_helper/AnimationTheme';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = ({children,user,setUser,
  classNames,
  ...rest }) => {
  const router = useRouter();
  const { sidebar_types } = useContext(CustomizerContext);
  const settings1 = ConfigDB.data.settings.sidebar_setting || localStorage.getItem('sidebar_Settings');
  const sidebar_types1 = ConfigDB.data.settings.sidebar.type || localStorage.getItem('sidebar_types') || sidebar_types;
  const { animation } = useContext(AnimationThemeContext);
  const animationTheme = animation || ConfigDB.data.router_animation || localStorage.getItem('animation');




  return (
    <Fragment>
      {/* <Loader /> */}
        <Taptop />
        <div className={`page-wrapper-admin  ${sidebar_types1} ${settings1}`} id="pageWrapper">
           {router.pathname == "/login" || router.pathname=="/campaign/[campaign_id]/preview" || router.pathname =="/reset-password" || router.pathname =="/register" || router.pathname =="/forget-password" || router.pathname == "/profile/[invoice_id]/invoice" ? " " : <Header user={user} setUser={setUser}/>}

            <div className={router.pathname == "/login" || router.pathname=="/campaign/[campaign_id]/preview" || router.pathname =="/reset-password" || router.pathname =="/register" || router.pathname =="/forget-password" || router.pathname == "/profile/[invoice_id]/invoice" ? "" : "page-body-wrapper horizontal-menu"}>

             {router.pathname == "/login" || router.pathname=="/campaign/[campaign_id]/preview" || router.pathname =="/register" || router.pathname =="/reset-password" || router.pathname =="/forget-password" || router.pathname == "/profile/[invoice_id]/invoice" ? " " : <Sidebar/>} 
             
              <TransitionGroup {...rest}>
                  <CSSTransition
                  
                    timeout={100}
                    classNames={animationTheme}
                    unmountOnExit
                  >
                  
                  <div className="page-body">
                        {children}
                  </div>
                  </CSSTransition>
               </TransitionGroup>
            </div>
        </div>
        <ThemeCustomize />
      <ToastContainer />
    </Fragment>
  );
};
export default AdminLayout;
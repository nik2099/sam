import Loader from './Loader';
import Taptop from './TapTop';
import Header from './Header';
import Sidebar from './Sidebar';
import { useRouter } from "next/router";
import React, { Fragment } from 'react';
import ThemeCustomize from '../Layout/ThemeCustomizer';
import { ToastContainer } from 'react-toastify';
import CustomizerContext from '../../_helper/Customizer';
import ConfigDB from '../../Config/ThemeConfig';
import { useContext, useState, useEffect} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnimationThemeContext from '../../_helper/AnimationTheme';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../context/user";

const AppLayout = ({children,setUser,
  classNames,
  ...rest }) => {
  const { user } = useUser({});
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
        <div className={`page-wrapper ${sidebar_types1} ${settings1}`} id="pageWrapper">
           {router.pathname == "/login" || router.pathname=="/campaign/[campaign_id]/preview" || router.pathname=="/template/[template_name]/preview" || router.pathname=="/template/[template_id]/preview" || router.pathname =="/reset-password" || router.pathname =="/register" || router.pathname == "/404" || router.pathname == "/50" || router.pathname =="/forget-password" || router.pathname == "/profile/invoice/[invoice_id]" ? " " : <Header user={user} setUser={setUser}/>}

            <div className={router.pathname == "/login" || router.pathname=="/campaign/[campaign_id]/preview" || router.pathname=="/template/[template_id]/preview" || router.pathname =="/reset-password" || router.pathname =="/register" || router.pathname =="/forget-password" || router.pathname == "/404" || router.pathname == "/500" || router.pathname=="/template/[template_name]/preview" || router.pathname == "/profile/invoice/[invoice_id]" ? "" : "page-body-wrapper horizontal-menu"}>
             
             {router.pathname == "/login" || router.pathname=="/campaign/[campaign_id]/preview" || router.pathname=="/template/[template_id]/preview" || router.pathname =="/register" || router.pathname =="/reset-password" || router.pathname =="/forget-password" || router.pathname == "/404" || router.pathname == "/500" || router.pathname=="/template/[template_name]/preview" || router.pathname == "/profile/invoice/[invoice_id]" ? " " : <Sidebar/>} 
             
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
export default AppLayout;
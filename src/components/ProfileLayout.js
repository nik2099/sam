import Navigation from "../components/Navigation";
import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';

const ProfileLayout = ({children}) => {


  return (
    
    <Fragment>
        <div className="container-fluid">
            <div className="row mt-2 mb-2">
                <div className="col-sm-12 col-xl-9 box-col-9 my-auto">
                    <Navigation/>
                </div>
            </div>
        </div>
        {children}
        <ToastContainer />
    </Fragment>
  );
};

export default ProfileLayout;

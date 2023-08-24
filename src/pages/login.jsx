import Footer from '../components/Layout/Footer';
import Login from '../components/Auth/Login';
import Loader from '../components/Layout/Loader';

import { useContext, useState, useEffect} from 'react';

const Logins = () => {
  useEffect(() => {
    const alanBtn = require('@alan-ai/alan-sdk-web');
    alanBtn({
      key: "102949261a1ee50b876de23749e5fea92e956eca572e1d8b807a3e2338fdd0dc/stage",
      rootEl: document.getElementById("alan-btn"),
      onCommand: (commandData) => {
        if (commandData.command === 'goBack') {
          // Call client code that will react to the received command
          router.push("/login");
        }
      },
    });


  },[]);
  return (
    <>
    <Loader />
    <section>
    
      <div  className="container-fluid">
        <div className="row mt-2 mb-2 justify-content-md-center container-fullheight"> 
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-5 col-xxl-4 box-col-6 my-auto">
            <div className="">
              <div className="register-form-wrapper">
                <Login/>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
   </section>
   </>

    
  );
};

export default Logins;
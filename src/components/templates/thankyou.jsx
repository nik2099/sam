import React, { useEffect, useState } from 'react';

const Thankyou = ({ heading, setContactHeading,headingColor, buttonColor, buttonTextColor,setCurrentPage}) => {
  
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPage('willkommen')
        }, 3000);
      }, []);
    
    return (
        <>
      <style jsx>{`
        .titleText{
          color: ${headingColor};
        }

      `}</style>
   
                <section style={{height: '100vh'}}>

                    <div className="wrappers animate__animated animate__fadeIn">
                        <div className="col_flex">
                            <i className="fa fa-envelope mb-3" style={{fontSize:'2vw'}}></i>
                            <p className="titleText">
                                Vielen Dank!
                            </p> 
                            <p className="info_text">                           
                            Sie erhalten in kürze eine Nachricht von uns
                            </p>

                            <button className='btn' style={{ backgroundColor: buttonColor, color: buttonTextColor}} onClick={(e) => { setCurrentPage('willkommen') }} type='submit'>
                            zurück zum Start
                        </button>
         
                        </div>

                     
                    </div>
                </section>
           
        </>
        );
    };
    
    export default Thankyou;
    
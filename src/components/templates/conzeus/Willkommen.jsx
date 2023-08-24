import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Pageloader from '../../../components/Layout/Loader/pageloader';

const Willkommen = ({ editable, heading, buttonTextColor, subHeading, setWelcomeHeading, setWelcomeSubHeading, buttonColor, activeButtonColor, image1, setWelcomeImage1Url, setWelcomeImage1File, headingColor,buttontext3,setWelcomeButton3Text,setCurrentPage,currentPage}) => {

    if(editable == 'true' || editable == true){
       editable = true
    }else{
        editable = false
    }
  
  
    
    const handleImageSelect = (e) => {
        setWelcomeImage1File(e.target.files[0])
        setWelcomeImage1Url(URL.createObjectURL(e.target.files[0]))
        
    }

    const handleChange = async (val) => {
        setWelcomeHeading(val);
      };

      const handleChange2 = async (val) => {
        setWelcomeSubHeading(val);
      };

      const handleTextChange1 = async (val) => {
        setWelcomeButton3Text(val);
      };
  return (
    <>

    <Pageloader/>
        <Head>
        <link rel='stylesheet' href={`/assets/tepmplateComponent/grid/grid_1.css`} />\
     
      </Head>
      <style jsx>{`
        .btn:hover {
            color: ${activeButtonColor};
        }
        .titleText{
            color: ${headingColor};
        }
      `}</style>


      <section style={{height: '100vh'}}>

        <div className="wrappers animate__animated animate__fadeIn">
            <div className="col_flex">
               <div className="title_nd_info" >

                <p className="titleText">

                { editable ? (
                <EdiText
                    type='text'
                    required={true}
                    value={heading}
                    submitOnEnter={true}
                    submitOnUnfocus={true}
                    editOnViewClick={true}
                    startEditingOnFocus={true}
                    showButtonsOnHover
                    saveButtonClassName="custom-save-button"
                    cancelButtonClassName="custom-cancel-button"
                    onSave={handleChange}
                    validationMessage="Please type at least 50 characters."
                    validation={val => val.length <= 50}
                />
                ):( 
                    <span>{heading}</span>
                )}
                </p> 
                    <p className="info_text">
                    { editable ? (
                    <EdiText
                        type='textarea'
                        value={subHeading}
                        editOnViewClick={true}
                        showButtonsOnHover
                        onSave={handleChange2}
                        validationMessage="Please type at least 150 characters."
                        validation={val => val.length <= 150}
                        submitOnEnter={true}
                        submitOnUnfocus={true}
                        saveButtonClassName="custom-save-button"
                        cancelButtonClassName="custom-cancel-button"
                    />
                    ):(
                        <span>{subHeading}</span>
                    )}

                </p>
                 
                    
                </div>

                
                <div className="flex card_below" style={{gap: '3vw'}}>
                    <div className="image_card">
                        <div className="image" style={{position:'relative'}}>
        

                            { editable ? (
                            <ImageUpload
                                handleImageSelect={handleImageSelect}
                                imageSrc={image1}
                                setImageSrc={setWelcomeImage1Url}
                                style={{
                                    width: 400,
                                    height: 250,
                                    margin: 0,
                                    background: '#ebeeef'
                                }}
                            />

                            ):(

                                <img src={image1}  onClick={() => setCurrentPage('eigenschaften')}  style={{width:'20vw'}} alt="logo" />

                                
                            )}


                        </div>
                        <div className="full_width_btn w-100">

                        { editable ? (
                            <p className="btn" style={{ backgroundColor: buttonColor,color:buttonTextColor }}>
                           
                            <EdiText
                                type='text'
                                value={buttontext3}
                                editOnViewClick={true}
                                showButtonsOnHover
                                onSave={handleTextChange1}
                                validationMessage="Please type at least 30 characters."
                                validation={val => val.length <= 30}
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                            </p>
                            ):(

                            <p className="btn w-100"  onClick={() => setCurrentPage('eigenschaften')}  style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'33px' }} >
                                <span>{buttontext3}</span>
                          
                            </p>
                           )}
                        
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
      </section>
     
    </>
  );
};

export default Willkommen;

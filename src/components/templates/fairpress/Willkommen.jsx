import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Image from "next/image";
import Link from 'next/link';
import Pageloader from '../../../components/Layout/Loader/pageloader';
const Willkommen = ({ editable, heading, buttonTextColor, subHeading, setWelcomeHeading, setWelcomeSubHeading, buttonColor, activeButtonColor, image1, setWelcomeImage1Url, setWelcomeImage1File, image2, setWelcomeImage2Url, setWelcomeImage2File,image3, setWelcomeImage3Url, setWelcomeImage3File,template_name,headingColor,setCurrentPage,buttontext3,setWelcomeButton3Text,currentPage }) => {

   
    if(editable == 'true' || editable == true){
       editable = true
    }else{
        editable = false
    }
  

    
    const handleImageSelect = (e) => {
        setWelcomeImage1File(e.target.files[0])
        setWelcomeImage1Url(URL.createObjectURL(e.target.files[0]))
        
    }

    const handleImageSelect2 = (e) => {
        setWelcomeImage2File(e.target.files[0])
        setWelcomeImage2Url(URL.createObjectURL(e.target.files[0]))
    }

    const handleImageSelect3 = (e) => {
        setWelcomeImage3File(e.target.files[0])
        setWelcomeImage3Url(URL.createObjectURL(e.target.files[0]))
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
      
      <style jsx>{`
        .btn:hover {
            color: ${activeButtonColor};
        }
        .titleText{
            color: ${headingColor};
        }

        .editor_titleText{
            color: ${headingColor};
        }
      `}</style>

      <Pageloader/>
      <section style={{height:'100vh'}}>

        <div className="wrappers animate__animated animate__fadeIn">
            <div className="col_flex">
             
                <div className="title_nd_info" >

                      { editable ? (
                        <p className="editor_titleText">
                        <EdiText
                            type='textarea'
                            value={heading}
                            onSave={handleChange}
                            validationMessage="Please type at least 100 characters."
                            validation={val => val.length <= 100}
                            editOnViewClick={true}
                            showButtonsOnHover
                            submitOnEnter={true}
                            submitOnUnfocus={true}
                            saveButtonClassName="custom-save-button"
                            cancelButtonClassName="custom-cancel-button"
                        />
                        </p> 
                        ):( 
                            <p className="titleText">{heading}</p>
                        )}
             
                 
                    { editable ? (
                           <p className="editor_info_text">
                    <EdiText
                        type='textarea'
                        value={subHeading}
                        onSave={handleChange2}
                        validationMessage="Please type at least 150 characters."
                        validation={val => val.length <= 150}
                        editOnViewClick={true}
                        showButtonsOnHover
                        submitOnEnter={true}
                        submitOnUnfocus={true}
                        saveButtonClassName="custom-save-button"
                        cancelButtonClassName="custom-cancel-button"
                    />
                      </p>
                    ):(
                        <p className=" info_text">{subHeading}</p>
                    )}

              
                 </div>
     
         
                
                <div style={{display: 'flex',flexDirection: 'row',gap:'3vw'}}>
                    <div className="image_card">
                        <div className="image" style={{position:'relative'}}>
        

                            { editable ? (
                            <ImageUpload
                                handleImageSelect={handleImageSelect}
                                imageSrc={image1}
                                setImageSrc={setWelcomeImage1Url}
                                style={{
                                    width: 220,
                                    height: 220,
                                    margin: 0,
                                    background: '#ebeeef'
                                }}
                            />

                            ):(

                                <img src={image1}  className="fairpress_img" alt="logo" style={{width:'100%'}}/>

                                
                            )}


                        </div>
                     
                    </div>
                    <div className="image_card">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect2}
                            imageSrc={image2}
                            setImageSrc={setWelcomeImage2Url}
                            style={{
                                width: 220,
                                height: 220,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img src={image2}  className="fairpress_img" alt="logo" style={{width:'100%'}}/>
                            )}

                           
                        </div>
                        <div className="full_width_btn">

                            { editable ? (
                                <p className="btn" style={{ backgroundColor: buttonColor,color:buttonTextColor }}>
                            
                                <EdiText
                                    type='text'
                                    value={buttontext3}
                                    onSave={handleTextChange1}
                                    validationMessage="Please type at least 30 characters."
                                    validation={val => val.length <= 30}
                                    editOnViewClick={true}
                                    showButtonsOnHover
                                    submitOnEnter={true}
                                    submitOnUnfocus={true}
                                    saveButtonClassName="custom-save-button"
                                    cancelButtonClassName="custom-cancel-button"
                                />
                                </p>
                                ):(

                                <p className="btn" onClick={() => setCurrentPage('question1')} style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'33px' }} >
                                    <span>{buttontext3}</span>
                            
                                </p>
                            )}
                             
                            
                        </div>
                    </div>

                    <div className="image_card ">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect3}
                            imageSrc={image3}
                            setImageSrc={setWelcomeImage3Url}
                            style={{
                                width: 220,
                                height: 220,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="fairpress_img" src={image3}  alt="logo" style={{width:'100%'}}/>
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

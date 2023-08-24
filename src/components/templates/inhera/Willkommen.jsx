import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Image from "next/image";
import Link from 'next/link';
import Pageloader from '../../../components/Layout/Loader/pageloader';

const Willkommen = ({ editable, heading, buttonTextColor, subHeading, setWelcomeHeading, setWelcomeSubHeading, buttonColor, activeButtonColor, image1, setWelcomeImage1Url, setWelcomeImage1File, image2, setWelcomeImage2Url, setWelcomeImage2File,image3, setWelcomeImage3Url, setWelcomeImage3File,image4, setWelcomeImage4Url, setWelcomeImage4File,image5, setWelcomeImage5Url, setWelcomeImage5File,image6, setWelcomeImage6Url, setWelcomeImage6File,image7, setWelcomeImage7Url, setWelcomeImage7File,image8, setWelcomeImage8Url, setWelcomeImage8File,template_name,headingColor,setCurrentPage,currentPage }) => {

   
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

    const handleImageSelect4 = (e) => {
        setWelcomeImage4File(e.target.files[0])
        setWelcomeImage4Url(URL.createObjectURL(e.target.files[0]))
    }

    const handleImageSelect5 = (e) => {
        setWelcomeImage5File(e.target.files[0])
        setWelcomeImage5Url(URL.createObjectURL(e.target.files[0]))
    }

    const handleImageSelect6 = (e) => {
        setWelcomeImage6File(e.target.files[0])
        setWelcomeImage6Url(URL.createObjectURL(e.target.files[0]))
    }

    const handleImageSelect7 = (e) => {
        setWelcomeImage7File(e.target.files[0])
        setWelcomeImage7Url(URL.createObjectURL(e.target.files[0]))
    }

    const handleImageSelect8 = (e) => {
        setWelcomeImage8File(e.target.files[0])
        setWelcomeImage8Url(URL.createObjectURL(e.target.files[0]))
    }

    const handleChange = async (val) => {
        setWelcomeHeading(val);
      };

      const handleChange2 = async (val) => {
        setWelcomeSubHeading(val);
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
                    <div className="inhera_image_card">
                        <div className="image" style={{position:'relative'}}>
        

                            { editable ? (
                            <ImageUpload
                                handleImageSelect={handleImageSelect}
                                imageSrc={image1}
                                setImageSrc={setWelcomeImage1Url}
                                style={{
                                    width: 150,
                                    height: 150,
                                    margin: 0,
                                    background: '#ebeeef'
                                }}
                            />

                            ):(

                                <img src={image1}  className="inhera_img" alt="logo" style={{width:'100%'}}/>

                                
                            )}


                        </div>
                    </div>
                    <div className="inhera_image_card">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect2}
                            imageSrc={image2}
                            setImageSrc={setWelcomeImage2Url}
                            style={{
                                width: 150,
                                height: 150,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img src={image2}  className="inhera_img" alt="logo" style={{width:'100%'}}/>
                            )}

                           
                        </div>
                    </div>

                    <div className="inhera_image_card">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect3}
                            imageSrc={image3}
                            setImageSrc={setWelcomeImage3Url}
                            style={{
                                width: 150,
                                height: 150,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="inhera_img" src={image3}  alt="logo" style={{width:'100%'}}/>
                            )}

                           
                        </div>
                    </div>

                    <div className="inhera_image_card ">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect4}
                            imageSrc={image4}
                            setImageSrc={setWelcomeImage4Url}
                            style={{
                                width: 150,
                                height: 150,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="inhera_img" src={image4}  alt="logo" style={{width:'100%'}}/>
                            )}

                           
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex',flexDirection: 'row',gap:'3vw'}}>
                    <div className="inhera_image_card">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect5}
                            imageSrc={image5}
                            setImageSrc={setWelcomeImage5Url}
                            style={{
                                width: 150,
                                height: 150,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="inhera_img" src={image5}  alt="logo" style={{width:'100%'}}/>
                            )}

                           
                        </div>
                    </div>

                    <div className="inhera_image_card">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect6}
                            imageSrc={image6}
                            setImageSrc={setWelcomeImage6Url}
                            style={{
                                width: 150,
                                height: 150,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="inhera_img" src={image6}  alt="logo" style={{width:'100%'}}/>
                            )}

                           
                        </div>
                    </div>

                    <div className="inhera_image_card">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect7}
                            imageSrc={image7}
                            setImageSrc={setWelcomeImage7Url}
                            style={{
                                width: 150,
                                height: 150,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="inhera_img" src={image7}  alt="logo" style={{width:'100%'}}/>
                            )}

                           
                        </div>
                    </div>

                     <div className="inhera_image_card">
                        <div className="image" style={{position:'relative'}}>
             
                           { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect8}
                            imageSrc={image8}
                            setImageSrc={setWelcomeImage8Url}
                            style={{
                                width: 150,
                                height: 150,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="inhera_img" src={image8}  alt="logo" style={{width:'100%'}}/>
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

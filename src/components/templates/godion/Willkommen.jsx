import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Image from "next/image";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import Pageloader from '../../../components/Layout/Loader/pageloader';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Willkommen = ({ editable, heading, buttonTextColor, subHeading, setWelcomeHeading, setWelcomeSubHeading, buttonColor, activeButtonColor, image1, setWelcomeImage1Url, setWelcomeImage1File, image2, setWelcomeImage2Url, setWelcomeImage2File,image3, setWelcomeImage3Url, setWelcomeImage3File,image4, setWelcomeImage4Url, setWelcomeImage4File,image5, setWelcomeImage5Url, setWelcomeImage5File,headingColor,setCurrentPage,currentPage,image1heading,image1SubHeading,image2heading,image2SubHeading,image3heading,image3SubHeading,image4heading,image4SubHeading,image5heading,image5SubHeading,setImage1Heading,setImage2Heading,setImage3Heading,setImage4Heading,setImage5Heading,setImage1SubHeading,setImage2SubHeading,setImage3SubHeading,setImage4SubHeading,setImage5SubHeading}) => {

   
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

    const handleChange = async (val) => {
        setWelcomeHeading(val);
      };

    const handleChange2 = async (val) => {
       setWelcomeSubHeading(val);
    };

    const changeImage1Heading = async (val) => {
        setImage1Heading(val);
    };

    const changeImage1SubHeading = async (val) => {
        setImage1SubHeading(val);
    };

    const changeImage2Heading = async (val) => {
        setImage2Heading(val);
    };

    const changeImage2SubHeading = async (val) => {
        setImage2SubHeading(val);
    };

    const changeImage3Heading = async (val) => {
        setImage3Heading(val);
    };

    const changeImage3SubHeading = async (val) => {
        setImage3SubHeading(val);
    };

    const changeImage4Heading = async (val) => {
        setImage4Heading(val);
    };

    const changeImage4SubHeading = async (val) => {
        setImage4SubHeading(val);
    };

    const changeImage5Heading = async (val) => {
        setImage5Heading(val);
    };

    const changeImage5SubHeading = async (val) => {
        setImage5SubHeading(val);
    };

   
  return (
    <>
      <Pageloader/>
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
        .swiper-slide {
            text-align: left !important;
        }
        .ProtitleText{
            color: ${headingColor};
        }
      `}</style>
     

      <section style={{height:'100vh'}}>

        <div className="wrappers">
            <div className="row">
                 
                 <div className="col-6">
                    <div className="animate__animated animate__fadeIn">
                  
                    { editable ? (
                        <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        
                        modules={[Pagination]}
                        className="editor_godion_slider"
                    >
                        <SwiperSlide>
                        
                            <ImageUpload
                                handleImageSelect={handleImageSelect}
                                imageSrc={image1}
                                setImageSrc={setWelcomeImage1Url}
                                style={{
                                    width: 200,
                                    height: 200,
                                    margin: 0,
                                    background: '#ebeeef'
                                }}
                            />

                            

                            <div className="image_cap">
                            
                            
                                    <h6>
                                    <EdiText
                                        validationMessage="Please type at least 100 characters."
                                        validation={val => val.length <= 100}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnUnfocus
                                        startEditingOnFocus
                                        type='textarea'
                                        value={image1heading}
                                        onSave={changeImage1Heading}
                                    />
                                    </h6>
                                
                                        <p>
                                        <EdiText
                                            validationMessage="Please type at least 150 characters."
                                            validation={val => val.length <= 150}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            tabIndex={2}
                                            submitOnUnfocus
                                            startEditingOnFocus
                                            type='textarea'
                                            value={image1SubHeading}
                                            onSave={changeImage1SubHeading}
                                        />
                                        </p>
                                
                            </div>
                                
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <ImageUpload
                            handleImageSelect={handleImageSelect2}
                            imageSrc={image2}
                            setImageSrc={setWelcomeImage2Url}
                            style={{
                                width: 200,
                                height: 200,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            

                            <div >
        
                                    <h6 className="image_cap">
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnUnfocus
                                        startEditingOnFocus
                                        type='textarea'
                                        value={image2heading}
                                        onSave={changeImage2Heading}
                                    />
                                    </h6>
                                    

                                        <p className="image_cap">
                                        <EdiText
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            tabIndex={2}
                                            submitOnUnfocus
                                            startEditingOnFocus
                                            type='textarea'
                                            value={image2SubHeading}
                                            onSave={changeImage2SubHeading}
                                        />
                                        </p>
                                
                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <ImageUpload
                            handleImageSelect={handleImageSelect3}
                            imageSrc={image3}
                            setImageSrc={setWelcomeImage3Url}
                            style={{
                                width: 200,
                                height: 200,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />


                            <div className="image_cap">
                        
                                        <h6>
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image3heading}
                                        onSave={changeImage3Heading}
                                    />
                                    </h6>
                                

                                
                                        <p>
                                        <EdiText
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            tabIndex={2}
                                            type='textarea'
                                            value={image3SubHeading}
                                            onSave={changeImage3SubHeading}
                                            submitOnEnter={true}
                                            submitOnUnfocus={true}
                                            saveButtonClassName="custom-save-button"
                                            cancelButtonClassName="custom-cancel-button"
                                        />
                                        </p>
                                

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <ImageUpload
                            handleImageSelect={handleImageSelect4}
                            imageSrc={image4}
                            setImageSrc={setWelcomeImage4Url}
                            style={{
                                width: 200,
                                height: 200,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />


                            <div className="image_cap">
                        
                                <h6>
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image4heading}
                                        onSave={changeImage4Heading}
                                    />
                                </h6>
                                

                                <p>
                                    <EdiText
                                        validationMessage="Please type at least 30 characters."
                                        validation={val => val.length <= 30}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image4SubHeading}
                                        onSave={changeImage4SubHeading}
                                    />
                                </p>
                                
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        
                            <ImageUpload
                            handleImageSelect={handleImageSelect5}
                            imageSrc={image5}
                            setImageSrc={setWelcomeImage5Url}
                            style={{
                                width: 200,
                                height: 200,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />


                            <div className="image_cap">
                            
                                <h6>
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image5heading}
                                        onSave={changeImage5Heading}
                                    />
                                </h6>
                            
                                <p>
                                    <EdiText
                                        validationMessage="Please type at least 30 characters."
                                        validation={val => val.length <= 30}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image5SubHeading}
                                        onSave={changeImage5SubHeading}
                                    />
                                </p>

                            </div>
                        </SwiperSlide>
                
                    </Swiper>
                    

                    ):(

                        <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="godion_slider"
                    >
                        <SwiperSlide>
                        { editable ? (
                            <ImageUpload
                                handleImageSelect={handleImageSelect}
                                imageSrc={image1}
                                setImageSrc={setWelcomeImage1Url}
                                style={{
                                    width: 100,
                                    height: 100,
                                    margin: 0,
                                    background: '#ebeeef'
                                }}
                            />

                            ):(

                                <img src={image1}  className="godion_img" alt="logo" style={{width:'100%'}}/>
                                    
                                
                            )}

                            <div className="image_cap">
                            
                                { editable ? (
                                        <h6>
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image1heading}
                                        onSave={changeImage1Heading}
                                    />
                                    </h6>
                                    ):( 
                                    <h6 className="ProtitleText">{image1heading}</h6>
                                    )}


                                    { editable ? (
                                        <p>
                                        <EdiText
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            tabIndex={2}
                                            submitOnEnter={true}
                                            submitOnUnfocus={true}
                                            saveButtonClassName="custom-save-button"
                                            cancelButtonClassName="custom-cancel-button"
                                            type='textarea'
                                            value={image1SubHeading}
                                            onSave={changeImage1SubHeading}
                                        />
                                        </p>
                                    ):( 
                                    <p>{image1SubHeading}</p>                                   
                                    )}
                                    
                            </div>
                                
                        </SwiperSlide>
                        <SwiperSlide>
                        { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect2}
                            imageSrc={image2}
                            setImageSrc={setWelcomeImage2Url}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img src={image2}  className="godion_img" alt="logo" style={{width:'100%'}}/>
                            )}

                            <div className="image_cap">
                                
                            { editable ? (
                                    <h6>
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image2heading}
                                        onSave={changeImage2Heading}
                                    />
                                    </h6>
                                    ):( 
                                    <h6 className="ProtitleText">{image2heading}</h6>
                                    )}

                                    { editable ? (
                                        <p>
                                        <EdiText
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            tabIndex={2}
                                            submitOnEnter={true}
                                            submitOnUnfocus={true}
                                            saveButtonClassName="custom-save-button"
                                            cancelButtonClassName="custom-cancel-button"
                                            type='textarea'
                                            value={image2SubHeading}
                                            onSave={changeImage2SubHeading}
                                        />
                                        </p>
                                    ):( 
                                    <p>{image2SubHeading}</p>                                   
                                    )}
                        
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            
                        { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect3}
                            imageSrc={image3}
                            setImageSrc={setWelcomeImage3Url}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="godion_img" src={image3}  alt="logo" style={{width:'100%'}}/>
                            )}

                            <div className="image_cap">
                            { editable ? (
                                        <h6>
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image3heading}
                                        onSave={changeImage3Heading}
                                    />
                                    </h6>
                                    ):( 
                                    <h6 className="ProtitleText">{image3heading}</h6>
                                    )}

                                    { editable ? (
                                        <p>
                                        <EdiText
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            tabIndex={2}
                                            submitOnEnter={true}
                                            submitOnUnfocus={true}
                                            saveButtonClassName="custom-save-button"
                                            cancelButtonClassName="custom-cancel-button"
                                            type='textarea'
                                            value={image3SubHeading}
                                            onSave={changeImage3SubHeading}
                                        />
                                        </p>
                                    ):( 
                                    <p>{image3SubHeading}</p>                                   
                                    )}

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect4}
                            imageSrc={image4}
                            setImageSrc={setWelcomeImage4Url}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="godion_img" src={image4}  alt="logo" style={{width:'100%'}}/>
                            )}

                            <div className="image_cap">
                            { editable ? (
                                        <h6>
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image4heading}
                                        onSave={changeImage4Heading}
                                    />
                                    </h6>
                                    ):( 
                                    <h6 className="ProtitleText">{image4heading}</h6>
                                    )}

                                    { editable ? (
                                        <p>
                                        <EdiText
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            tabIndex={2}
                                            submitOnEnter={true}
                                            submitOnUnfocus={true}
                                            saveButtonClassName="custom-save-button"
                                            cancelButtonClassName="custom-cancel-button"
                                            type='textarea'
                                            value={image4SubHeading}
                                            onSave={changeImage4SubHeading}
                                        />
                                        </p>
                                    ):( 
                                    <p>{image4SubHeading}</p>                                   
                                    )}
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        { editable ? (
                            <ImageUpload
                            handleImageSelect={handleImageSelect5}
                            imageSrc={image5}
                            setImageSrc={setWelcomeImage5Url}
                            style={{
                                width: 100,
                                height: 100,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                            />

                            ):(
                                <img className="godion_img" src={image5}  alt="logo" style={{width:'100%'}}/>
                            )}

                            <div className="image_cap">
                                { editable ? (
                                    <h6>
                                    <EdiText
                                        validationMessage="Please type at least 20 characters."
                                        validation={val => val.length <= 20}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                        type='textarea'
                                        value={image5heading}
                                        onSave={changeImage5Heading}
                                    />
                                </h6>
                                ):( 
                                <h6 className="ProtitleText">{image5heading}</h6>
                                )}

                                { editable ? (
                                        <p>
                                        <EdiText
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            tabIndex={2}
                                            submitOnEnter={true}
                                            submitOnUnfocus={true}
                                            saveButtonClassName="custom-save-button"
                                            cancelButtonClassName="custom-cancel-button"
                                            type='textarea'
                                            value={image5SubHeading}
                                            onSave={changeImage5SubHeading}
                                        />
                                        </p>
                                    ):( 
                                    <p>{image5SubHeading}</p>                                   
                                    )}


                            </div>
                        </SwiperSlide>
                
                    </Swiper>
                            
                        
                    )}

                    </div>
                </div>
                
                <div className="col-6" style={{display:'flex'}}>
                    <div className="title_nd_info animate__animated animate__fadeIn" >

                            { editable ? (
                            <p className="editor_titleText">
                            <EdiText
                                validationMessage="Please type at least 20 characters."
                                validation={val => val.length <= 20}
                                editOnViewClick={true}
                                showButtonsOnHover
                                tabIndex={2}
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                                type='textarea'
                                value={heading}
                                onSave={handleChange}
                            />
                            </p> 
                            ):( 
                                <p className="titleText">{heading}</p>
                            )}


                            { editable ? (
                                <p className="editor_info_text">
                            <EdiText
                                validationMessage="Please type at least 30 characters."
                                validation={val => val.length <= 30}
                                editOnViewClick={true}
                                showButtonsOnHover
                                tabIndex={2}
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                                type='textarea'
                                value={subHeading}
                                onSave={handleChange2}
                            />
                            </p>
                            ):(
                            <p className=" info_text">{subHeading}</p>
                            )}


                    </div>
                 </div>
                   
            </div>
        </div>
      </section>
     
    </>
  );
};

export default Willkommen;

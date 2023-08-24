import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Pageloader from '../../../components/Layout/Loader/pageloader';

const Willkommen = ({ editable, heading, buttonTextColor, subHeading, setWelcomeHeading, setWelcomeSubHeading, buttonColor, activeButtonColor, image1, setWelcomeImage1Url, setWelcomeImage1File, image2, setWelcomeImage2Url, setWelcomeImage2File,template_name,headingColor,buttontext1,buttontext2,setWelcomeButton1Text,setWelcomeButton2Text,setSelectWelcome1Button,setSelectWelcome2Button,setCurrentPage,currentPage }) => {



    if(editable == 'true' || editable == true){
       editable = true
    }else{
        editable = false
    }
  
   const clickButton = (value,e)=>{
    setSelectWelcome1Button(value)
   }

   const clickButton2 = (value,e)=>{
    setSelectWelcome2Button(value)
   }
    
    const handleImageSelect = (e) => {
        setWelcomeImage1File(e.target.files[0])
        setWelcomeImage1Url(URL.createObjectURL(e.target.files[0]))
        
    }

    const handleImageSelect2 = (e) => {
        setWelcomeImage2File(e.target.files[0])
        setWelcomeImage2Url(URL.createObjectURL(e.target.files[0]))
    }

    const handleChange = async (val) => {
        setWelcomeHeading(val);
      };

      const handleChange2 = async (val) => {
        setWelcomeSubHeading(val);
      };

      const handleTextChange1 = async (val) => {
        setWelcomeButton1Text(val);
      };

      const handleTextChange2 = async (val) => {
        setWelcomeButton2Text(val);
      };
      
  return (
    <>
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
        .editor_titleText{
            color: ${headingColor};
        }
      `}</style>
      <Pageloader/>

      <section  style={{height: '100vh'}}>

        <div className="wrappers">
            <div className="col_flex">
              <div className="title_nd_info animate__animated animate__fadeIn" >
        

                { editable ? (
                    <p className="editor_titleText">
                    
                    <EdiText
                        type='textarea'
                        value={heading}
                        onSave={handleChange}
                        editOnViewClick={true}
                        showButtonsOnHover
                        validationMessage="Please type at least 100 characters."
                        validation={val => val.length <= 100}
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
                            editOnViewClick={true}
                            showButtonsOnHover
                            validationMessage="Please type at least 150 characters."
                            validation={val => val.length <= 150}
                            submitOnEnter={true}
                            submitOnUnfocus={true}
                            saveButtonClassName="custom-save-button"
                            cancelButtonClassName="custom-cancel-button"
                        />
                     </p>
                    ):(
                        <p className="info_text">{subHeading}</p>
                    )}

               
            
              </div>  
                <div className="flex card_below  animate__animated animate__fadeIn" style={{gap: '3vw'}}>
                    <div className="image_card" >
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

                           
                                <img src={image1}  alt="logo" onClick={(e) => { setCurrentPage('eigenschaften') }}/>
                           
                                
                            )}


                        </div>
                        <div className="full_width_btn w-100">
                          { editable ? (
                            <p className="btn editor_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'33px'  }}>
                           
                            <EdiText
                                type='text'
                                value={buttontext1}
                                onSave={handleTextChange1}
                                editOnViewClick={true}
                                showButtonsOnHover
                                validationMessage="Please type at least 30 characters."
                                validation={val => val.length <= 30}
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                            </p>
                            ):(

                            <p className="btn w-100" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'33px'  }} onClick={(e) => { setCurrentPage('eigenschaften') }}>
                                <span>{buttontext1}</span>
                          
                            </p>
                           )}
                            
                        </div>
                    </div> 
                    <div className="image_card" >
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
                          
                                <img src={image2}  alt="logo" onClick={(e) => { setCurrentPage('Eigenschaften2') }} />
                
                            )}

                           
                        </div>
                        <div className="full_width_btn w-100">
                        { editable ? (
                            <p className="btn editor_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'33px'  }}>
                           
                            <EdiText
                                type='text'
                                value={buttontext2}
                                onSave={handleTextChange2}
                                editOnViewClick={true}
                                showButtonsOnHover
                                validationMessage="Please type at least 30 characters."
                                validation={val => val.length <= 30}
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                            </p>
                            ):(
                         
                            <p className="btn w-100" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'33px'  }}  onClick={(e) => { setCurrentPage('Eigenschaften2') }} >
                                <span>{buttontext2}</span>
                          
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

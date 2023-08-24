import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Pageloader from '../../../components/Layout/Loader/pageloader';

const Willkommen = ({ editable, heading, buttonTextColor, subHeading, setWelcomeHeading, setWelcomeSubHeading, buttonColor, activeButtonColor, image1, setWelcomeImage1Url, setWelcomeImage1File, image2, setWelcomeImage2Url, setWelcomeImage2File,image3, setWelcomeImage3Url,setWelcomeImage3File,image4,setWelcomeImage4Url,setWelcomeImage4File,template_name,headingColor,buttontext1,buttontext2,buttontext3,buttontext4,setWelcomeButton1Text,setWelcomeButton2Text,setWelcomeButton3Text,setWelcomeButton4Text,setSelectWelcome1Button,setSelectWelcome2Button,setSelectWelcome3Button,setSelectWelcome4Button,setCurrentPage,currentPage ,setSelectWelcomeButton}) => {



    if(editable == 'true' || editable == true){
       editable = true
    }else{
        editable = false
    }

  
   const clickButton = (value,e)=>{
    console.log(value)
    setSelectWelcomeButton(value)
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

      const handleTextChange3 = async (val) => {
        setWelcomeButton3Text(val);
      };

      const handleTextChange4 = async (val) => {
        setWelcomeButton4Text(val);
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

        <section style={{height: '100vh'}}>

            <div className="wrappers">
                <div className="flex animate__animated animate__fadeIn" style={{gap: '3vw'}}>
                    
                    <div className="image_left">
                        <div className="flex card_below" style={{gap: '1vw'}}>
                            <div className="image_cards" >
                                <div className="image" style={{position:'relative'}}>
                

                                    { editable ? (
                                    <ImageUpload
                                        handleImageSelect={handleImageSelect}
                                        imageSrc={image1}
                                        setImageSrc={setWelcomeImage1Url}
                                        style={{
                                            width: 245,
                                            height: 220,
                                            margin: 0,
                                            background: '#ebeeef'
                                        }}
                                    />

                                    ):(

                                
                                        <img src={image1} onClick={(e) => { clickButton(buttontext1,e); setCurrentPage('eigenschaften') }} className="dashdock_welcome_img" alt="logo" />
                                
                                        
                                    )}


                                </div>
                                <div className="full_width_btn">
                                { editable ? (
                                    <p className="btn editor_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'0px 0px 33px 33px !important'}}>
                                
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

                                    <p className="btn template_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor ,borderRadius:'0px 0px 33px 33px !important'}} onClick={(e) => { clickButton(buttontext1,e); setCurrentPage('eigenschaften') }}>
                                        <span>{buttontext1}</span>
                                
                                    </p>
                                )}
                                    
                                </div>
                            </div> 
                            <div className="image_cards" >
                                <div className="image" style={{position:'relative'}}>
                    
                                { editable ? (
                                    <ImageUpload
                                    handleImageSelect={handleImageSelect2}
                                    imageSrc={image2}
                                    setImageSrc={setWelcomeImage2Url}
                                    style={{
                                        width: 245,
                                        height: 220,
                                        margin: 0,
                                        background: '#ebeeef'
                                    }}
                                    />

                                    ):(
                                
                                        <img src={image2}  onClick={(e) => { clickButton(buttontext2,e); setCurrentPage('Eigenschaften2') }} className="dashdock_welcome_img" alt="logo" />
                        
                                    )}

                                
                                </div>
                                <div className="full_width_btn">
                                { editable ? (
                                    <p className="btn editor_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'0px 0px 33px 33px !important' }}>
                                
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
                                
                                    <p className="btn template_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'0px 0px 33px 33px !important'}}  onClick={(e) => { clickButton(buttontext2,e); setCurrentPage('Eigenschaften2') }} >
                                        <span>{buttontext2}</span>
                                
                                    </p>
                                
                                )}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex card_below" style={{gap: '1vw'}}>
                            <div className="image_cards" >
                                <div className="image" style={{position:'relative'}}>
                    
                                { editable ? (
                                    <ImageUpload
                                    handleImageSelect={handleImageSelect2}
                                    imageSrc={image3}
                                    setImageSrc={setWelcomeImage2Url}
                                    style={{
                                        width: 245,
                                        height: 220,
                                        margin: 0,
                                        background: '#ebeeef'
                                    }}
                                    />

                                    ):(
                                
                                        <img src={image3}  onClick={(e) => { clickButton(buttontext3,e); setCurrentPage('Eigenschaften3') }} className="dashdock_welcome_img" alt="logo" />
                        
                                    )}

                                
                                </div>
                                <div className="full_width_btn">
                                { editable ? (
                                    <p className="btn editor_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'0px 0px 33px 33px !important' }}>
                                
                                    <EdiText
                                        type='text'
                                        value={buttontext3}
                                        onSave={handleTextChange3}
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
                                
                                    <p className="btn template_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'0px 0px 33px 33px !important'}}  onClick={(e) => { clickButton(buttontext3,e); setCurrentPage('Eigenschaften3') }} >
                                        <span>{buttontext3}</span>
                                
                                    </p>
                                
                                )}
                                    
                                </div>
                            </div>

                            <div className="image_cards" >
                                <div className="image" style={{position:'relative'}}>
                    
                                { editable ? (
                                    <ImageUpload
                                    handleImageSelect={handleImageSelect4}
                                    imageSrc={image4}
                                    setImageSrc={setWelcomeImage4Url}
                                    style={{
                                        width: 245,
                                        height: 220,
                                        margin: 0,
                                        background: '#ebeeef'
                                    }}
                                    />

                                    ):(
                                
                                        <img src={image4} onClick={(e) => { clickButton(buttontext4,e); setCurrentPage('Eigenschaften4') }} className="dashdock_welcome_img"  alt="logo" />
                        
                                    )}

                                
                                </div>
                                <div className="full_width_btn">
                                { editable ? (
                                    <p className="btn editor_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor }}>
                                
                                    <EdiText
                                        type='text'
                                        value={buttontext4}
                                        onSave={handleTextChange4}
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
                                
                                    <p className="btn template_btn" style={{ backgroundColor: buttonColor,color:buttonTextColor,borderRadius:'0px 0px 33px 33px !important' }}  onClick={(e) => { clickButton(buttontext4,e); setCurrentPage('Eigenschaften4') }} >
                                        <span>{buttontext4}sadada</span>
                                
                                    </p>
                                
                                )}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" dashdock_content text_area" >

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
                            <div className="title_nd_info text_area" >
                            <p className="titleText">{heading}</p>
                            </div>
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
                </div>
            </div>
        
        </section>
     
    </>
  );
};

export default Willkommen;

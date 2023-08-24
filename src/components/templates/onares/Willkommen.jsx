import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Pageloader from '../../../components/Layout/Loader/pageloader';

const Willkommen = ({ editable, heading, subHeading,description, setWelcomeHeading, setWelcomeSubHeading,setWelcomeDescription, image1, setWelcomeImage1Url, setWelcomeImage1File, headingColor }) => {

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

      const handleChange3 = async (val) => {
        setWelcomeDescription(val);
      };

  return (
    <>
        <Head>
        <link rel='stylesheet' href={`/assets/tepmplateComponent/grid/grid_1.css`} />\
     
      </Head>
      <Pageloader/>
      <style jsx>{`
        .titleText, .editor_titleText{
            color: ${headingColor};
        }
      `}</style>


      <section className="screen-space">
        
            <div className="wrappers animate__animated animate__fadeIn">
               <div className="flex_row">
                    <div className="" style={{position:'relative'}}>


                        { editable ? (
                        <ImageUpload
                            handleImageSelect={handleImageSelect}
                            imageSrc={image1}
                            setImageSrc={setWelcomeImage1Url}
                            style={{
                                width: 300,
                                height: 200,
                                margin: 0,
                                background: '#ebeeef'
                            }}
                        />

                        ):(

                            <img src={image1}  style={{width:'35vw'}} alt="logo" />

                            
                        )}


                    </div>

                    <div className="content-div" >

                
                    
                        { editable ? (
                            <p className="editor_secondary_title">
                                <EdiText
                                    type='textarea'
                                    value={subHeading}
                                    onSave={handleChange2}
                                    validationMessage="Please type at least 50 characters."
                                    validation={val => val.length <= 50}
                                    editOnViewClick={true}
                                    showButtonsOnHover
                                    submitOnEnter={true}
                                    submitOnUnfocus={true}
                                    saveButtonClassName="custom-save-button"
                                    cancelButtonClassName="custom-cancel-button"
                                />
                            </p>
                        ):(
                            <p className="secondary_title">{subHeading}</p>
                        )}

                
                    

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
                            <p className="editor_desc_Text">
                                <EdiText
                                    type='textarea'
                                    value={description}
                                    onSave={handleChange3}
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
                            <p className="desc_Text">{description}</p>
                        )}

                
                    
                        
                    </div>
                </div>
           
        </div>
      </section>
     
    </>
  );
};

export default Willkommen;

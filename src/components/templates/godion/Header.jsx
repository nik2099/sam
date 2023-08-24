import Head from 'next/head';
import React, { useState } from 'react';
import {BsList} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr';
import EdiText from 'react-editext';


export default function Header({ editable,color, activeColor, setCurrentPage, currentPage, template_name,menu1,menu2,menu3,menu4,welcomeMenu,productDetail1Menu,productDetail2Menu,productDetail3Menu,productDetail4Menu,question1Menu,question2Menu,question3Menu,videoMenu,galleryMenu,contactMenu,setWelcomeMenuHeading,setProductDetail1MenuHeading,setProductDetail2MenuHeading,setProductDetail3MenuHeading,setProductDetail4MenuHeading,setQuestion1MenuHeading,setQuestion2MenuHeading,setQuestion3MenuHeading,setVideoMenuHeading,setGalleryMenuHeading,setContactMenuHeading  }) {

  if(editable == 'true' || editable == true){
    editable = true
  }else{
      editable = false
  }

  const changeWelcomeMenuHeading = async (val) => {
    setWelcomeMenuHeading(val);
  };

  const changeProductdetail1MenuHeading = async (val) => {
    setProductDetail1MenuHeading(val);
  };

  const changeProductdetail2MenuHeading = async (val) => {
    setProductDetail2MenuHeading(val);
  };

  const changeProductdetail3MenuHeading = async (val) => {
    setProductDetail3MenuHeading(val);
  };

  const changeProductdetail4MenuHeading = async (val) => {
    setProductDetail4MenuHeading(val);
  };

  const changeGalleryMenuHeading = async (val) => {
    setGalleryMenuHeading(val);
  };

  const changeContactMenuHeading = async (val) => {
    setContactMenuHeading(val);
  };

  return (
    <>
      <Head>
        <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_2.css`} />
        <link rel='stylesheet' href={`/assets/tepmplateComponent/commontemp.css`} />
      </Head>
      <style jsx>{`
        .nav_wrapper_2 .active {
          color: ${activeColor} !important;
        }
        .nav_wrapper_2 {
          position: absolute;
          top:0 !important;
          bottom: initial !important;
      }
    
        .nav_wrapper_2 li a {
          color: #000000;
      }

      `}</style>

      <div id="nav">
        <div className="nav_wrapper_2">
            <li className="first_nav_item nav_item">
              <a id='willkommen' className={currentPage === 'willkommen' ? 'active' : null}
                          onClick={() => setCurrentPage('willkommen')}>
                            { editable ? (
                            <EdiText
                                type='text'
                                value={welcomeMenu}
                                onSave={changeWelcomeMenuHeading}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                            ):( 
                              <>{welcomeMenu}</> 
                            )}
                          </a>
            </li>
            <li className="nav_item">
              <a id='eigenschaften'
                      className={currentPage === 'eigenschaften' ? 'active' : null}
                      onClick={() => setCurrentPage('eigenschaften')}>
                        { editable ? (
                        <EdiText
                            type='textarea'
                            value={productDetail1Menu}
                            onSave={changeProductdetail1MenuHeading}
                            validationMessage="Please type at least 50 characters."
                            validation={val => val.length <= 50}
                            editOnViewClick={true}
                            showButtonsOnHover
                            submitOnEnter={true}
                            submitOnUnfocus={true}
                            saveButtonClassName="custom-save-button"
                            cancelButtonClassName="custom-cancel-button"
                        />
                        ):( 
                            <>{productDetail1Menu}</>
                        )}
                      </a>
            </li>
            <li className="nav_item">
              <a  id='galerie'
                      className={currentPage === 'galerie' ? 'active' : null}
                      onClick={() => setCurrentPage('galerie')}>
                        { editable ? (
                        <EdiText
                            type='textarea'
                            value={galleryMenu}
                            onSave={changeGalleryMenuHeading}
                            validationMessage="Please type at least 50 characters."
                            validation={val => val.length <= 50}
                            editOnViewClick={true}
                            showButtonsOnHover
                            submitOnEnter={true}
                            submitOnUnfocus={true}
                            saveButtonClassName="custom-save-button"
                            cancelButtonClassName="custom-cancel-button"
                        />
                        ):( 
                            <>{galleryMenu}</>
                        )}
                      </a>
            </li>
            <li className="nav_item">
              <a id='kontakt'
                            className={currentPage === 'kontakt' ? 'active' : null}
                            onClick={() => setCurrentPage('kontakt')}>
                              { editable ? (
                              <EdiText
                                  type='textarea'
                                  value={contactMenu}
                                  onSave={changeContactMenuHeading}
                                  validationMessage="Please type at least 50 characters."
                                  validation={val => val.length <= 50}
                                  editOnViewClick={true}
                                  showButtonsOnHover
                                  submitOnEnter={true}
                                  submitOnUnfocus={true}
                                  saveButtonClassName="custom-save-button"
                                  cancelButtonClassName="custom-cancel-button"
                              />
                              ):( 
                                  <>{contactMenu}</>
                              )}
                            </a>
            </li>
        </div>
      </div>

     
     
    </>
  );
}

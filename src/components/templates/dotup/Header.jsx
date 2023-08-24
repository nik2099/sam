import Head from 'next/head';
import React, { useState } from 'react';
import {BsList} from 'react-icons/bs';
import {BsXLg} from 'react-icons/bs';
import EdiText from 'react-editext';

export default function Header({ editable,progressBarColor,backgroundColor, editorNav, color, notShowable,activeColor, setCurrentPage, currentPage,
welcomeMenu,productDetail1Menu,productDetail2Menu,galleryMenu,contactMenu,setWelcomeMenuHeading,setProductDetail1MenuHeading,setProductDetail2MenuHeading,setGalleryMenuHeading,setContactMenuHeading }) {
  

  const [navopen, setNavopen] = React.useState(false);
  const [bgColor, setBgcolor] = React.useState('#dedede');
  function toggleMenu(){
    setNavopen(!navopen)
  }

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

  const changeGalleryMenuHeading = async (val) => {
    setGalleryMenuHeading(val);
  };

  const changeContactMenuHeading = async (val) => {
    setContactMenuHeading(val);
  };





  return (
    <>
      <Head>
        <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_3.css`} />
        <link rel='stylesheet' href={`/assets/tepmplateComponent/commontemp.css`} />
      </Head>
      <style jsx>{`
        .nav_wrapper_3 .active {
          color: ${activeColor} !important;
        }
      
        .nav_wrapper_3{
          background: ${backgroundColor};
        }

        .bg-progress-color{
          background: ${progressBarColor} !important;
        }
        .nav_wrapper_3 li a {
          color: #fff;
      }

      .editor-header{
        position: absolute !important;
      }

      #nav_4 {
        position: absolute;
        right: 0;
        width: 25vw;
        height: 100%;
        /* padding-left: 5vw; */
        display: flex;
        top: 0;
        z-index: 999;
        flex-direction: row;
        justify-content: center;
        transition: all 0.3s;
    }

    #nav_4 .nav_icon {
      position: absolute;
      background: #fff;
      padding: 0.5vw;
      border: solid 0.2vw;
      left: -39px;
      cursor: pointer;
  }
      `}</style>

       { notShowable ? (
              <div id="nav_3" className={navopen?'active_menu':''}>
                <div className="nav_icon">
                  { navopen ? (
                      <BsXLg></BsXLg>
                  ):(
                      <BsList></BsList>
                  )}
                </div>
              </div>
        ):(
                <section>
                  
                <div id={editorNav?'nav_4':'nav_3'} className={navopen?'active_menu':''}>
                    <div className="nav_icon" onClick={toggleMenu}>
                      { navopen ? (
                          <BsXLg></BsXLg>
                      ):(
                          <BsList></BsList>
                      )}
                    </div>
                    <div className="nav_wrapper_3" >
                        <li>
                        <a
                          
                          id='willkommen'
                          className={currentPage === 'willkommen' ? 'active' : null}
                          onClick={() => setCurrentPage('willkommen')}
                        >
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
        
                  <li>
                    <a
                     
                      id='eigenschaften'
                      className={currentPage === 'eigenschaften' ? 'active' : null}
                      onClick={() => setCurrentPage('eigenschaften')}
                    >
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

                  <li>
                    <a
                     
                      id='eigenschaften'
                      className={currentPage === 'Eigenschaften2' ? 'active' : null}
                      onClick={() => setCurrentPage('Eigenschaften2')}
                    >
                      { editable ? (
                        <EdiText
                            type='textarea'
                            value={productDetail2Menu}
                            onSave={changeProductdetail2MenuHeading}
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
                            <>{productDetail2Menu}</>
                        )}
                    </a>
                  </li>
                  <li>
                    <a
                      
                      id='galerie'
                      className={currentPage === 'galerie' ? 'active' : null}
                      onClick={() => setCurrentPage('galerie')}
                    >
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
                        <li>
                          <a
                            
                            id='kontakt'
                            className={currentPage === 'kontakt' ? 'active' : null}
                            onClick={() => setCurrentPage('kontakt')}
                          >
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
              </section>
              )}
     
    </>
  );
}

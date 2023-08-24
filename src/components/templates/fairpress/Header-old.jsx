import { Opacity } from '@mui/icons-material';
import Head from 'next/head';
import React, { useState } from 'react';
import {BsList} from 'react-icons/bs';
import {BsXLg} from 'react-icons/bs';
import EdiText from 'react-editext';

export default function Header({ editable,progressBarColor,backgroundColor, editorNav, color, notShowable,activeColor, setCurrentPage, currentPage, template_name, menu1,menu2,menu3,menu4,setMenuFirstHeading,setMenuSecondHeading,setMenuThirdHeading,setMenuFourthHeading}) {
  

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

  const changeMenu1TitleHeading = async (val) => {
    setMenuFirstHeading(val);
  };

  const changeMenu2TitleHeading = async (val) => {
    setMenuSecondHeading(val);
  };

  const changeMenu3TitleHeading = async (val) => {
    setMenuThirdHeading(val);
  };

  const changeMenu4TitleHeading = async (val) => {
    setMenuFourthHeading(val);
  };



  return (
    <>
      <Head>
        {/* <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_3.css`} /> */}
        <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/big-nav.css`} />
        {/* <link rel='stylesheet' href={`/assets/tepmplateComponent/commontemp.css`} /> */}
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
             
              <div id="nav_3" className={navopen?'active_menu':''} >
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
                    <div className="nav_wrapper_3" style={{ opacity: editorNav? '1': '0'}}>
                        <li>
                        <a
                          
                          id='willkommen'
                          className={currentPage === 'willkommen' ? 'active' : null}
                          onClick={() => setCurrentPage('willkommen')}
                        >

                            { editable ? (
                            <EdiText
                                type='text'
                                value={menu1}
                                onSave={changeMenu1TitleHeading}
                                validationMessage="Please type at least 30 characters."
                                validation={val => val.length <= 30}
                                editOnViewClick={true}
                                showButtonsOnHover
                            />
                            ):( 
                               <>{menu1}</> 
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
                                value={menu2}
                                onSave={changeMenu2TitleHeading}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                            />
                            ):( 
                                <>{menu2}</>
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
                                value={menu3}
                                onSave={changeMenu3TitleHeading}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                            />
                            ):( 
                                <>{menu3}</>
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
                                value={menu4}
                                onSave={changeMenu4TitleHeading}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                            />
                            ):( 
                                <>{menu4}</>
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

import React from "react";
import Head from 'next/head';
import { useEffect, useState,useRef  } from 'react';
import EdiText from 'react-editext';
import { toast } from "react-toastify";
import app from "../../../../utils/axios";
import "react-toastify/dist/ReactToastify.css";
import Pageloader from '../../../components/Layout/Loader/pageloader';
const Video = ({editable, heading, subHeading, setVideoHeading,headingColor, setVideoSubHeading,videoPreview,setVideoPreview}) => {
  const [inView, setInView] = useState(true);
  const [file, setFile] = useState();
  console.log("heading",heading);
  console.log("subHeading",subHeading);
  const filePicekerRef = useRef(null);

  if(editable == 'true' || editable == true){
      editable = true
  }else{
      editable = false
  }

 
  const handleChange = async (val) => {
    setVideoHeading(val);
  };

  const handleChange2 = async (val) => {
    setVideoSubHeading(val);
  };

  const changeHeading = async (val) => {
    setVideoHeading(val);
  };


  function handleSetFile(event) {
    const files = event.target.files[0];
     setVideoPreview(files);
    if (files?.length) {
      setFile(files[0]);
    }
  }


  function clearFiles() {
		setVideoPreview(null);
	}

  

  useEffect(() => {
    setInView(true);
  }, []);
 

  return (
    <>
     <style jsx>{`
        .editor_titleText,.titleText{
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
                  <p className=" info_text">{subHeading}</p>
                )}
           </div>


          <div className="video_upload">
              <div className="preview">
                {videoPreview != null && <video controls autoplay="autoplay" loop="true" style={{height:'50vh'}}>
                <source src={videoPreview}  type="video/mp4"></source>
                  </video>}
              </div>
             

              { editable ? (
                <>
                <div style={{display: 'flex',flexDirection: 'inherit', justifyContent: 'space-between'}}>
                <form action="POST">
                <div>
                  <input  className="btn btn-dark" type="file" id="file" accept=".mp4" onChange={handleSetFile} />
                
                </div>
              </form>

              {(videoPreview) && (
                <button className="btn btn-danger" onClick={clearFiles}>
                  x
                </button>
              )}
                </div>
             
              </>
            ):(
              <></>
            )}

       </div>
        </div>
      </div>

    

		</section>


    
    </>
 );
};

export default Video;


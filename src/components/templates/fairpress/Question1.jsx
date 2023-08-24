import { useEffect, useState } from 'react';
import Head from 'next/head';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Progressbar from '../../../components/Progress_bar';
import Pageloader from '../../../components/Layout/Loader/pageloader';
export default function Question1({ editable, buttonTextColor,heading, image1, setQuestion1firstImage1Url, setQuestion1firstImage1File, image2, setQuestion1secondImage2Url, setQuestion1secondImage2File, image3, setQuestion1thirdImage3Url, setQuestion1thirdImage3File, image4, setQuestion1fourthImage4Url, setQuestion1fourthImage4File,buttonColor, setQuestion1Button1Text, setQuestion1Button2Text,setQuestion1Button3Text,setQuestion1Button4Text,question1Button1Text, question1Button2Text,question1Button3Text,question1Button4Text,setQuestion1Heading,setSelectQuestion1Button1,setCurrentPage,currentPage}) {
  const [inView, setInView] = useState(true);



  if(editable == 'true' || editable == true){
      editable = true
  }else{
      editable = false
  }

  useEffect(() => {
    setInView(true);
  }, []);

   const clickButton1 = (value,e)=>{
    setSelectQuestion1Button1(value)
   }


  const handleHeadingChange = async (value) => {
    setQuestion1Heading(value);
  };


  const handleButtonTextChange1 = async (value) => {
    setQuestion1Button1Text(value);
  };

  const handleButtonTextChange2 = async (value) => {
    setQuestion1Button2Text(value);
  };

  const handleButtonTextChange3 = async (value) => {
    setQuestion1Button3Text(value);
  };

  const handleButtonTextChange4 = async (value) => {
    setQuestion1Button4Text(value);
  };


  const handleImageSelect1 = (e) => {
    setQuestion1firstImage1File(e.target.files[0])
    setQuestion1firstImage1Url(URL.createObjectURL(e.target.files[0]))
  };

  const handleImageSelect2 = (e) => {
    setQuestion1secondImage2File(e.target.files[0])
    setQuestion1secondImage2Url(URL.createObjectURL(e.target.files[0]))
  };

  const handleImageSelect3 = (e) => {
    setQuestion1thirdImage3File(e.target.files[0])
    setQuestion1thirdImage3Url(URL.createObjectURL(e.target.files[0]))
  };

  const handleImageSelect4 = (e) => {
    setQuestion1fourthImage4File(e.target.files[0])
    setQuestion1fourthImage4Url(URL.createObjectURL(e.target.files[0]))
  };



  return (
    <>
 
      <style jsx>{`
        .bg-bar{
          background-color: ${buttonColor} !important;
        }
        .titleText{
          color: ${buttonColor} !important;
        }
        .editor_titleText{
          color: ${buttonColor} !important;
        }
      `}</style>
<Pageloader/>
      <section id="UberdasProdukt"  className="secview" style={{zindex: '200',height: '100vh',position: 'relative',
    overflow: 'hidden'}}>
        <div className="wrappers animate__animated animate__fadeIn">
   
            <div className="col_flex">
                     <div style={{width:'365px',margin: 'auto'}}>
                        <Progressbar bgcolor={buttonColor} className='striped' progress='40'  height={10} />
                    </div>
                   
                    <div className="text-center" style={{display: 'inline-block'}}>
                       
                        { editable ? (
                              <p className="editor_titleText mt-3 mb-3">
                            
                              <EdiText
                                  type='text'
                                  value={heading}
                                  onSave={handleHeadingChange}
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

                                <p className="titleText mt-3 mb-3">{heading}</p>
                            )}
                     
                    </div>
                           
                    <div className="flex card_below" style={{gap: '2vw'}}>
           
                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect1}
                                    imageSrc={image1}
                                    setImageSrc={setQuestion1firstImage1Url}
                                    style={{
                                        width: 300,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image1} alt="" onClick={(e) => { clickButton1(question1Button1Text,e); setCurrentPage('question2') }} className="fairpress_img" style={{width:'100%'}}/>
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor: buttonColor,color:buttonTextColor,width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question1Button1Text}
                                            onSave={handleButtonTextChange1}
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

                                          <p className="btn" style={{backgroundColor: buttonColor,color:buttonTextColor,width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question1Button1Text,e); setCurrentPage('question2') }}>{question1Button1Text}</p>
                                      )}
                                                                        
                                </div>
                         
                            </div>

                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect2}
                                    imageSrc={image2}
                                    setImageSrc={setQuestion1secondImage2Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image2} alt="" onClick={(e) => { clickButton1(question1Button2Text,e); setCurrentPage('question2') }} className="fairpress_img" style={{width:'100%'}}/>
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor: buttonColor,color:buttonTextColor,width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question1Button2Text}
                                            onSave={handleButtonTextChange2}
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

                                          <p className="btn" style={{backgroundColor: buttonColor,color:buttonTextColor,width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question1Button2Text,e); setCurrentPage('question2') }}>{question1Button2Text}</p>
                                      )}
                                                                         
                                </div>
                         
                            </div>

                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect3}
                                    imageSrc={image3}
                                    setImageSrc={setQuestion1thirdImage3Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image3} alt="" onClick={(e) => { clickButton1(question1Button3Text,e); setCurrentPage('question2') }} className="fairpress_img" style={{width:'100%'}}/>
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor: buttonColor,color:buttonTextColor,width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question1Button3Text}
                                            onSave={handleButtonTextChange3}
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

                                          <p className="btn" style={{backgroundColor: buttonColor,color:buttonTextColor,width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question1Button3Text,e); setCurrentPage('question2') }}>{question1Button3Text}</p>
                                      )}
                                                                         
                                </div>
                         
                            </div>

                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect4}
                                    imageSrc={image4}
                                    setImageSrc={setQuestion1fourthImage4Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image4} onClick={(e) => { clickButton1(question1Button4Text,e); setCurrentPage('question2') }} className="fairpress_img" alt="" style={{width:'100%'}}/>
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor: buttonColor,color:buttonTextColor,width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question1Button4Text}
                                            onSave={handleButtonTextChange4}
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

                                          <p className="btn" style={{backgroundColor: buttonColor,color:buttonTextColor,width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question1Button4Text,e); setCurrentPage('question2') }}>{question1Button4Text}</p>
                                      )}
                                                                         
                                </div>
                         
                            </div>
                      
                  </div>
              </div> 
        </div>

     </section>

    </>
  );
}

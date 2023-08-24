import { useEffect, useState } from 'react';
import Head from 'next/head';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Progressbar from '../../../components/Progress_bar';
import Pageloader from '../../../components/Layout/Loader/pageloader';
export default function Question3({ editable, heading, image1, setQuestion3firstImage1Url, setQuestion3firstImage1File, image2, setQuestion3secondImage2Url, setQuestion3secondImage2File, image3, setQuestion3thirdImage3Url, setQuestion3thirdImage3File,image4, setQuestion3fourthImage4Url, setQuestion3fourthImage4File,buttonColor, setQuestion3Button1Text, setQuestion3Button2Text,setQuestion3Button3Text,setQuestion3Button4Text,question3Button1Text, question3Button2Text,question3Button3Text,question3Button4Text,setQuestion3Heading,setSelectQuestion3Button1,setCurrentPage,currentPage }) {

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
    setSelectQuestion3Button1(value)
  }


  const handleHeadingChange = (value)=>{
    setQuestion3Heading(value)
  };

  const handleButtonTextChange1 = async (val) => {
    setQuestion3Button1Text(val);
  };

  const handleButtonTextChange2 = async (val) => {
    setQuestion3Button2Text(val);
  };

  const handleButtonTextChange3 = async (val) => {
    setQuestion3Button3Text(val);
  };

  const handleButtonTextChange4 = async (val) => {
    setQuestion3Button4Text(val);
  };


  const handleImageSelect1 = (e) => {
    setQuestion3firstImage1File(e.target.files[0])
    setQuestion3firstImage1Url(URL.createObjectURL(e.target.files[0]))
  };

  const handleImageSelect2 = (e) => {
    setQuestion3secondImage2File(e.target.files[0])
    setQuestion3secondImage2Url(URL.createObjectURL(e.target.files[0]))
  };
  
  const handleImageSelect3 = (e) => {
    setQuestion3thirdImage3File(e.target.files[0])
    setQuestion3thirdImage3Url(URL.createObjectURL(e.target.files[0]))
  };

  const handleImageSelect4 = (e) => {
    setQuestion3fourthImage4File(e.target.files[0])
    setQuestion3fourthImage4Url(URL.createObjectURL(e.target.files[0]))
  };


  return (
    <>
      <style jsx>{`
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
                         <Progressbar bgcolor={buttonColor} className='striped' progress='100'  height={10} />
                    </div>
                    
                    <div className="text-center" style={{display: 'inline-block'}}>
                     
                        { editable ? (
                        <p className="editor_titleText mt-3 mb-3">
                      
                        <EdiText
                            type='text'
                            value={heading}
                            onSave={handleHeadingChange}
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

                          <p className="titleText mt-3 mb-3">{heading}</p>
                      )}
                    
                    </div>

                    <div style={{display: 'flex',flexDirection: 'row',gap:'3vw'}}>
           
                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect1}
                                    imageSrc={image1}
                                    setImageSrc={setQuestion3firstImage1Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image1} onClick={(e) => { clickButton1(question3Button1Text,e); setCurrentPage('kontakt') }} className="fairpress_img" alt="" />
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question3Button1Text}
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

                                          <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question3Button1Text,e); setCurrentPage('kontakt') }}>{question3Button1Text}</p>
                                      )}
                                                                        
                                </div>
                         
                            </div>

                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect2}
                                    imageSrc={image2}
                                    setImageSrc={setQuestion3secondImage2Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image2} onClick={(e) => { clickButton1(question3Button2Text,e); setCurrentPage('kontakt') }} className="fairpress_img" alt="" />
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question3Button2Text}
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

                                          <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question3Button2Text,e); setCurrentPage('kontakt') }}>{question3Button2Text}</p>
                                      )}
                                                                         
                                </div>
                         
                            </div>

                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect3}
                                    imageSrc={image3}
                                    setImageSrc={setQuestion3thirdImage3Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image3}  onClick={(e) => { clickButton1(question3Button3Text,e); setCurrentPage('kontakt') }} className="fairpress_img" alt="" />
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question3Button3Text}
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

                                          <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question3Button3Text,e); setCurrentPage('kontakt') }}>{question3Button3Text}</p>
                                      )}
                                                                         
                                </div>
                         
                            </div>

                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect4}
                                    imageSrc={image4}
                                    setImageSrc={setQuestion3fourthImage4Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image4} onClick={(e) => { clickButton1(question3Button4Text,e); setCurrentPage('kontakt') }} className="fairpress_img" alt="" />
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question3Button4Text}
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

                                          <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question3Button4Text,e); setCurrentPage('kontakt') }}>{question3Button4Text}</p>
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

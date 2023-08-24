import { useEffect, useState } from 'react';
import Head from 'next/head';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Progressbar from '../../../components/Progress_bar';
import Pageloader from '../../../components/Layout/Loader/pageloader';
export default function Question2({ editable, heading, image1, setQuestion2firstImage1Url, setQuestion2firstImage1File, image2, setQuestion2secondImage2Url, setQuestion2secondImage2File, buttonColor, setQuestion2Button1Text, setQuestion2Button2Text,question2Button1Text, question2Button2Text,setQuestion2Heading,setSelectQuestion2Button1,setCurrentPage,currentPage }) {

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
    setSelectQuestion2Button1(value)
   }

  const handleHeadingChange = (value)=>{
    setQuestion2Heading(value)
  };

  const handleButtonTextChange1 = async (val) => {
    setQuestion2Button1Text(val);
  };

  const handleButtonTextChange2 = async (val) => {
    setQuestion2Button2Text(val);
  };


  const handleImageSelect1 = (e) => {
    setQuestion2firstImage1File(e.target.files[0])
    setQuestion2firstImage1Url(URL.createObjectURL(e.target.files[0]))
  };

  const handleImageSelect2 = (e) => {
    setQuestion2secondImage2File(e.target.files[0])
    setQuestion2secondImage2Url(URL.createObjectURL(e.target.files[0]))
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
                        <Progressbar bgcolor={buttonColor} className='striped' progress='60'  height={10} />
                    </div>
                    
                    <div className="editor_text-center" style={{display: 'inline-block'}}>
                    
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
                                    setImageSrc={setQuestion2firstImage1Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image1} alt="" onClick={(e) => { clickButton1(question2Button1Text,e); setCurrentPage('question3') }} className="gutloop_question_img" style={{width:'100%'}}/>
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question2Button1Text}
                                            onSave={handleButtonTextChange1}
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            submitOnEnter={true}
                                            submitOnUnfocus={true}
                                            saveButtonClassName="custom-save-button"
                                            cancelButtonClassName="custom-cancel-button"
                                        />
                                        </p>
                                        ):(

                                          <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question2Button1Text,e); setCurrentPage('question3') }}>{question2Button1Text}</p>
                                      )}
                                                                        
                                </div>
                         
                            </div>

                            <div className="">
                                <div className="image_card">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect2}
                                    imageSrc={image2}
                                    setImageSrc={setQuestion2secondImage2Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image2} alt="" onClick={(e) => { clickButton1(question2Button2Text,e); setCurrentPage('question3') }} className="gutloop_question_img" style={{width:'100%'}}/>
                                  )}
                                </div>

                                <div className="full_width_btn">
                                { editable ? (
                                         <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}}>
                                      
                                        <EdiText
                                            type='text'
                                            value={question2Button2Text}
                                            onSave={handleButtonTextChange2}
                                            validationMessage="Please type at least 30 characters."
                                            validation={val => val.length <= 30}
                                            editOnViewClick={true}
                                            showButtonsOnHover
                                            submitOnEnter={true}
                                            submitOnUnfocus={true}
                                            saveButtonClassName="custom-save-button"
                                            cancelButtonClassName="custom-cancel-button"
                                        />
                                        </p>
                                        ):(

                                          <p className="btn" style={{backgroundColor:buttonColor,color:'#fff',width:'100%',borderRadius:'0px 0px 33px 33px'}} onClick={(e) => { clickButton1(question2Button2Text,e); setCurrentPage('question3') }}>{question2Button2Text}</p>
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

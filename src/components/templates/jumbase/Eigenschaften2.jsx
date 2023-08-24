import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
// import required modules
import { Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Pageloader from '../../../components/Layout/Loader/pageloader';

export default function Eigenschaften2({ editable,product2Image1Heading,product2Image1SubHeading, product2Image1Description,setProduct2Image1Heading,setProduct2Image1SubHeading,setProduct2Image1Description, image1, setProduct2Image1Url, setProduct2Image1File,image2, setProduct2Image2Url, setProduct2Image2File,image3, setProduct2Image3Url, setProduct2Image3File,headingColor }) {

  const [inView, setInView] = useState(true);


  if(editable == 'true' || editable == true){
      editable = true
  }else{
      editable = false
  }

  useEffect(() => {
    setInView(true);
  }, []);


  const changeProductImage1Heading = async (val) => {
    setProduct2Image1Heading(val);
  };
  const changeProductImage1SubHeading = async (val) => {
    setProduct2Image1SubHeading(val);
  };
  const changeProductImage1Description = async (val) => {
    setProduct2Image1Description(val);
  };


  const handleImageSelect1 = (e) => {
    setProduct2Image1File(e.target.files[0])
    setProduct2Image1Url(URL.createObjectURL(e.target.files[0]))
  }
  const handleImageSelect2 = (e) => {
    setProduct2Image2File(e.target.files[0])
    setProduct2Image2Url(URL.createObjectURL(e.target.files[0]))
  }

  const handleImageSelect3 = (e) => {
    setProduct2Image3File(e.target.files[0])
    setProduct2Image3Url(URL.createObjectURL(e.target.files[0]))
  }



  return (
    <>
      <Head>
      {/* <link rel='stylesheet' href={`/assets/tepmplateComponent/carousel/carousel_6.css`} /> */}
      </Head>
      <Pageloader/>
      <style jsx>{`
        .titleText{
            color: ${headingColor};
        }
        // .swiper-pagination-bullet-active {
        //   background: ${headingColor} !important;
        // }
      `}</style>

      <section id="UberdasProdukt"  className="m-auto secview" style={{zindex: '200',height: '100vh',position: 'relative',
    overflow: 'hidden'}}>
        <div className="wrappers animate__animated animate__fadeIn">
            <div className="conzeus-space">
              <div className="row">
                  <div className="col-4">
                    
                  { editable ? (
                        <ImageUpload
                        handleImageSelect={handleImageSelect1}
                        imageSrc={image1}
                        setImageSrc={setProduct2Image1Url}
                        style={{
                            width: 300,
                            height: 250,
                            margin: 0,
                            objectFit: 'contain',
                            background: '#ebeeef'
                        }}
                        />
                      ):( 
                        <img src={image1} alt="" />
                      )}
                  </div>
                  <div className="col-2">
                      <div className="row">
                          <div className="col-12" style={{marginBottom: '29px'}}>
                          { editable ? (
                              <ImageUpload
                              handleImageSelect={handleImageSelect2}
                              imageSrc={image2}
                              setImageSrc={setProduct2Image2Url}
                              style={{
                                  width: 120,
                                  height: 110,
                                  margin: 0,
                                  background: '#ebeeef'
                              }}
                              />
                            ):( 
                              <img src={image2} className="eigensch_small" alt="" />
                            )}
                          </div>
                          <div className="col-12">
                          { editable ? (
                              <ImageUpload
                              handleImageSelect={handleImageSelect3}
                              imageSrc={image3}
                              setImageSrc={setProduct2Image3Url}
                              style={{
                                  width: 122,
                                  height: 110,
                                  margin: 0,
                                  objectFit: 'contain',
                                  background: '#ebeeef'
                              }}
                              />
                            ):( 
                              <img src={image3} className="eigensch_small" alt="" />
                            )}
                          </div>
                      </div>
                  </div>
                  <div className="col-6" style={{display: 'flex',
    alignItems: 'center'}}>
                      <div className="product_des" style={{textAlign: 'left'}}>
                                    <p className="secondary_title">
                                    { editable ? (
                                        <EdiText
                                        type='textarea'
                                        value={product2Image1SubHeading}
                                        onSave={changeProductImage1SubHeading}
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
                                          <span>{product2Image1SubHeading}</span>
                                      )}
                                        
                                    </p>
                                    <h4 className="titleText">
                                    { editable ? (

                                      <EdiText
                                      type='textarea'
                                      value={product2Image1Heading}
                                      onSave={changeProductImage1Heading}
                                      validationMessage="Please type at least 100 characters."
                                      validation={val => val.length <= 100}
                                      editOnViewClick={true}
                                      showButtonsOnHover
                                      submitOnEnter={true}
                                      submitOnUnfocus={true}
                                      saveButtonClassName="custom-save-button"
                                      cancelButtonClassName="custom-cancel-button"
                                      />
                                      ):( 
                                      <span>{product2Image1Heading}</span>
                                      )}
                                    
                                    
                                    </h4>
                                    <p>
                                    { editable ? (
                                      <EdiText
                                          type='textarea'
                                          value={product2Image1Description}
                                          onSave={changeProductImage1Description}
                                          validationMessage="Please type at least 150 characters."
                                          validation={val => val.length <= 150}
                                          editOnViewClick={true}
                                          showButtonsOnHover
                                          submitOnEnter={true}
                                          submitOnUnfocus={true}
                                          saveButtonClassName="custom-save-button"
                                          cancelButtonClassName="custom-cancel-button"
                                      />
                                      ):( 
                                          <p>{product2Image1Description}</p>
                                      )}
                                  
                                      </p>
                      </div>  
                  </div>
              </div>     

            </div>
                
                
        </div>

    </section>

    </>
  );
}

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
export default function Eigenschaften({ editable,productImage1Heading,productImage1SubHeading, productImage1Description,setProductImage1Heading,setProductImage1SubHeading,setProductImage1Description, image1, setProductImage1Url, setProductImage1File,image2, setProductImage2Url, setProductImage2File,image3, setProductImage3Url, setProductImage3File,headingColor }) {

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
    setProductImage1Heading(val);
  };
  const changeProductImage1SubHeading = async (val) => {
    setProductImage1SubHeading(val);
  };
  const changeProductImage1Description = async (val) => {
    setProductImage1Description(val);
  };


  const handleImageSelect1 = (e) => {
    setProductImage1File(e.target.files[0])
    setProductImage1Url(URL.createObjectURL(e.target.files[0]))
  }
  const handleImageSelect2 = (e) => {
    setProductImage2File(e.target.files[0])
    setProductImage2Url(URL.createObjectURL(e.target.files[0]))
  }

  const handleImageSelect3 = (e) => {
    setProductImage3File(e.target.files[0])
    setProductImage3Url(URL.createObjectURL(e.target.files[0]))
  }



  return (
    <>
     <Pageloader/>
      <Head>
      <link rel='stylesheet' href={`/assets/tepmplateComponent/carousel/carousel_6.css`} />
      </Head>
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
                        setImageSrc={setProductImage1Url}
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
                              setImageSrc={setProductImage2Url}
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
                              setImageSrc={setProductImage3Url}
                              style={{
                                  width: 122,
                                  height: 110,
                                  margin: 0,
                                  objectFit: 'contain',
                                  background: '#ebeeef'
                              }}
                              />
                            ):( 
                              <img src={image1} className="eigensch_small" alt="" />
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
                                          value={productImage1Heading}
                                          editOnViewClick={true}
                                          showButtonsOnHover
                                          onSave={changeProductImage1Heading}
                                          validationMessage="Please type at least 50 characters."
                                          validation={val => val.length <= 50}
                                          submitOnEnter={true}
                                          submitOnUnfocus={true}
                                          saveButtonClassName="custom-save-button"
                                          cancelButtonClassName="custom-cancel-button"
                                      />
                                      ):( 
                                          <span>{productImage1Heading}</span>
                                      )}
                                        
                                    </p>
                                    <h4 className="titleText">
                                    { editable ? (
                                      <EdiText
                                        type='textarea'
                                        value={productImage1SubHeading}
                                        onSave={changeProductImage1SubHeading}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        validationMessage="Please type at least 100 characters."
                                        validation={val => val.length <= 100}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                    />
                                      ):( 
                                          <span>{productImage1SubHeading}</span>
                                      )}
                                    
                                    </h4>
                                    <p>
                                    { editable ? (
                                      <EdiText
                                          type='textarea'
                                          value={productImage1Description}
                                          onSave={changeProductImage1Description}
                                          editOnViewClick={true}
                                          showButtonsOnHover
                                          validationMessage="Please type at least 200 characters."
                                          validation={val => val.length <= 200}
                                          submitOnEnter={true}
                                          submitOnUnfocus={true}
                                          saveButtonClassName="custom-save-button"
                                          cancelButtonClassName="custom-cancel-button"
                                      />
                                      ):( 
                                          <p>{productImage1Description}</p>
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

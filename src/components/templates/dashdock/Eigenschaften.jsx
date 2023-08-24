import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css/thumbs";
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Pageloader from '../../../components/Layout/Loader/pageloader';
export default function Eigenschaften({ editable,productImage1Heading, productImage1Description,setProductImage1Heading,setProductImage1Description, productImage2Heading,productImage2Description,setProductImage2Heading,setProductImage2Description,productImage3Heading, productImage3Description,setProductImage3Heading,setProductImage3Description,productImage4Heading, productImage4Description,setProductImage4Heading,setProductImage4Description,image1, setProductImage1Url, setProductImage1File,image2, setProductImage2Url, setProductImage2File,image3, setProductImage3Url, setProductImage3File,image4, setProductImage4Url, setProductImage4File,headingColor }) {

  const [inView, setInView] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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

  const changeProductImage1Description = async (val) => {
    setProductImage1Description(val);
  };


  const changeProductImage2Heading = async (val) => {
    setProductImage2Heading(val);
  };

  const changeProductImage2Description = async (val) => {
    setProductImage2Description(val);
  };


  const changeProductImage3Heading = async (val) => {
    setProductImage3Heading(val);
  };

  const changeProductImage3Description = async (val) => {
    setProductImage3Description(val);
  };


  const changeProductImage4Heading = async (val) => {
    setProductImage4Heading(val);
  };

  const changeProductImage4Description = async (val) => {
    setProductImage4Description(val);
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

  const handleImageSelect4 = (e) => {
    setProductImage4File(e.target.files[0])
    setProductImage4Url(URL.createObjectURL(e.target.files[0]))
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
        .editor_secondary_title{
            color: ${headingColor};
        }
     
      `}</style>

      <section id="UberdasProdukt"  className="secview" style={{zindex: '200',height: '100vh',position: 'relative',
    overflow: 'hidden'}}>
    <div className="wrapper animate__animated animate__fadeIn" style={{gap: '2.1vw'}}>
    <div className="left_product_slider mr-3">

                  <Swiper
                      direction={"vertical"}
                      pagination={{
                        clickable: true,
                      }}
                    
                      loop={true}
                      slidesPerView={4}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs,Pagination]}
                      className=""
                    >
                 
                            <SwiperSlide>
                            <div className="swiper-slide">
                                   <img src={image1?image1:'/assets/img/default.jpg'} alt="" />
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <img src={image2?image2:'/assets/img/default.jpg'} alt="" />
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide">
                                    <img src={image3?image3:'/assets/img/default.jpg'}  alt="" />
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide">
                                      <img src={image4?image4:'/assets/img/default.jpg'} alt="" />
                            </div>
                            </SwiperSlide>
                  
                    </Swiper>
                
                </div>
                
            <div className="main vertical_product_slider">
             
                <Swiper
                    direction={"vertical"}
                    onSwiper={setThumbsSwiper}
                    freeMode={true}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs, Pagination]}
                    className="mySwiper_image_des"
                  >
                    {/* <div className="swiper mySwiper_image_des">
                        <div className="swiper-wrapper"> */}
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="product_image">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect1}
                                    imageSrc={image1}
                                    setImageSrc={setProductImage1Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                    <img src={image1} alt="" />
                                  )}
                                </div>
                                <div className="product_des title_nd_info left_aligned">
                              
                                { editable ? (
                                    <p className="editor_secondary_title">
                                  <EdiText
                                      type='textarea'
                                      value={productImage1Heading}
                                      onSave={changeProductImage1Heading}
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
                                      <p className="titleText">{productImage1Heading}</p>
                                  )}
                                    
                            
                              
                               
                                { editable ? (
                                   <p className="editor_pro_info">
                                   <EdiText
                                      type='textarea'
                                      value={productImage1Description}
                                      onSave={changeProductImage1Description}
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
                                      <p className="pro_info">{productImage1Description}</p>
                                  )}
                             
                                </div>    
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="product_image">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect2}
                                    imageSrc={image2}
                                    setImageSrc={setProductImage2Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                      <img src={image2}  alt=""/>
                                  )}
                                </div>
                                <div className="product_des title_nd_info left_aligned">
                               
                                { editable ? (
                                   <p className="editor_secondary_title">
                                  <EdiText
                                      type='textarea'
                                      value={productImage2Heading}
                                      onSave={changeProductImage2Heading}
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
                                      <p className="titleText">{productImage2Heading}</p>
                                  )}
                                    
                             
                          
                     
                                { editable ? (
                                  <p className="editor_pro_info">
                                  <EdiText
                                    type='textarea'
                                    value={productImage2Description}
                                    onSave={changeProductImage2Description}
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
                                      <p className="pro_info">{productImage2Description}</p>
                                  )}
                             
                                </div>    
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="product_image">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect3}
                                    imageSrc={image3}
                                    setImageSrc={setProductImage3Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                      <img src={image3} alt=""/>
                                  )}
                                </div>
                                <div className="product_des title_nd_info left_aligned">
                               
                                { editable ? (
                                   <p className="editor_secondary_title">
                                  <EdiText
                                      type='textarea'
                                      value={productImage3Heading}
                                      onSave={changeProductImage3Heading}
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
                                      <p className="titleText">{productImage3Heading}</p>
                                  )}
                                
                       
                               
                                { editable ? (
                                   <p className="editor_pro_info">
                                   <EdiText
                                      type='textarea'
                                      value={productImage3Description}
                                      onSave={changeProductImage3Description}
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
                                      <p className="pro_info">{productImage3Description}</p>
                                  )}
                               
                               
                                </div>    
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="product_image">
                                { editable ? (
                                   <ImageUpload
                                    handleImageSelect={handleImageSelect4}
                                    imageSrc={image4}
                                    setImageSrc={setProductImage4Url}
                                    style={{
                                        width: 220,
                                        height: 220,
                                        margin: 0,
                                        objectFit: 'contain',
                                        background: '#ebeeef'
                                    }}
                                   />
                                  ):( 
                                      <img src={image4} alt=""/>
                                  )}
                                </div>
                                <div className="product_des title_nd_info left_aligned">
                                
                                { editable ? (
                                  <p className="editor_secondary_title">
                                   <EdiText
                                      type='textarea'
                                      value={productImage4Heading}
                                      onSave={changeProductImage4Heading}
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
                                      <p  className="titleText">{productImage4Heading}</p>
                                  )}
                                    
                          
                               
                                { editable ? (
                                   <p className="editor_pro_info">
                                   <EdiText
                                      type='textarea'
                                      value={productImage4Description}
                                      onSave={changeProductImage4Description}
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
                                      <p className="pro_info">{productImage4Description}</p>
                                  )}
                                
                                
                                </div>    
                            </div>
                            </SwiperSlide>
                        {/* </div>
                    </div> */}
                  </Swiper>
              </div> 
             
            
    </div>

</section>

    </>
  );
}

import { Swiper, SwiperSlide } from 'swiper/react';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
import "swiper/css/thumbs";
import "swiper/css";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Pageloader from '../../../components/Layout/Loader/pageloader';
export default function Eigenschaften({ editable,productImage1Heading,productImage1SubHeading, productImage1Description,setProductImage1Heading,setProductImage1SubHeading,setProductImage1Description, image1, setProductImage1Url, setProductImage1File,headingColor,image2,setProductImage2Url, setProductImage2File,setProductImage3Url, setProductImage3File,setProductImage4Url, setProductImage4File,image3,image4}) {

  const [inView, setInView] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 console.log(productImage1Heading);
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
  
  const handleImageSelect4 = (e) => {
    setProductImage4File(e.target.files[0])
    setProductImage4Url(URL.createObjectURL(e.target.files[0]))
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
        <div className="wrappers">
            <div className="animate__animated animate__fadeIn">
              <div className="row">
                  <div className="col-6">
                  <div style={{position: 'relative'}}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={20}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="godian_product_slider"
      >
        <SwiperSlide>
          <img src={image1?image1:'/assets/img/default.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2?image2:'/assets/img/default.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3?image3:'/assets/img/default.jpg'} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4?image4:'/assets/img/default.jpg'}  alt="" />
        </SwiperSlide>
      
       
      </Swiper>
 
      </div>
      
      <div>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="godian_product_slider"
      >
        <SwiperSlide>

        { editable ? (
          <ImageUpload
            handleImageSelect={handleImageSelect1}
            imageSrc={image1}
            setImageSrc={setProductImage1Url}
            style={{
                width: 80,
                height: 78,
                margin: 0,
                background: '#ebeeef'
            }}
            />
          ):( 
            <img src={image1}  className="onares_gallery_pic" alt="" />
              
          )}
        
        </SwiperSlide>
        <SwiperSlide>
        { editable ? (
          <ImageUpload
            handleImageSelect={handleImageSelect2}
            imageSrc={image2}
            setImageSrc={setProductImage2Url}
            style={{
                width: 80,
                height: 78,
                margin: 0,
                background: '#ebeeef'
            }}
            />
          ):( 
            <img src={image2}  className="onares_gallery_pic" alt="" />
          )}
        </SwiperSlide>
        <SwiperSlide>
        { editable ? (
          <ImageUpload
            handleImageSelect={handleImageSelect3}
            imageSrc={image3}
            setImageSrc={setProductImage3Url}
            style={{
                width: 80,
                height: 78,
                margin: 0,
                background: '#ebeeef'
            }}
            />
          ):( 
            <img src={image3}  className="onares_gallery_pic" alt="" />
          )}
        </SwiperSlide>
        <SwiperSlide>
        { editable ? (
          <ImageUpload
            handleImageSelect={handleImageSelect4}
            imageSrc={image4}
            setImageSrc={setProductImage4Url}
            style={{
                width: 80,
                height: 78,
                margin: 0,
                background: '#ebeeef'
            }}
            />
          ):( 
            <img src={image4} className="onares_gallery_pic" alt="" />
          )}
        </SwiperSlide>
      
      </Swiper>
      </div>
                
                  </div>
             
                  <div className="col-6" style={{display: 'flex', alignItems: 'center'}}>
                      <div className="product_des" style={{textAlign: 'left'}}>
                                    <p className="secondary_title">
                                    { editable ? (
                                      <EdiText
                                          tabIndex={2}
                                          type='textarea'
                                          value={productImage1Heading}
                                          onSave={changeProductImage1Heading}
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
                                          <span>{productImage1Heading}</span>
                                      )}
                                        
                                    </p>
                                    <h4 className="editor_titleText">
                                    { editable ? (
                                      <EdiText
                                        validationMessage="Please type at least 100 characters."
                                        validation={val => val.length <= 100}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        tabIndex={2}
                                        startEditingOnFocus
                                        type='textarea'
                                        value={productImage1SubHeading}
                                        onSave={changeProductImage1SubHeading}
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                    />
                                      ):( 
                                          <span className="titleText">{productImage1SubHeading}</span>
                                      )}
                                    
                                    </h4>
                                    <p>
                                    { editable ? (
                                      <EdiText
                                          validationMessage="Please type at least 100 characters."
                                          validation={val => val.length <= 100}
                                          editOnViewClick={true}
                                          showButtonsOnHover
                                          tabIndex={2}
                                          startEditingOnFocus
                                          type='textarea'
                                          value={productImage1Description}
                                          onSave={changeProductImage1Description}
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

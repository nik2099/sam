import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ImageUpload from 'image-upload-react';
import EdiText from 'react-editext';
import Pageloader from '../../../components/Layout/Loader/pageloader';

// import required modules
import { Mousewheel, Navigation , Pagination } from "swiper";

export default function Galerie({ editable,image1, setGalleryImage1Url, setGalleryImage1File,image2, setGalleryImage2Url, setGalleryImage2File,image3, setGalleryImage3Url, setGalleryImage3File,image4, setGalleryImage4Url, setGalleryImage4File, image5, setGalleryImage5Url, setGalleryImage5File}) {

  const handleImageSelect1 = (e) => {
    setGalleryImage1File(e.target.files[0])
    setGalleryImage1Url(URL.createObjectURL(e.target.files[0]))
  }
  
  const handleImageSelect2 = (e) => {
    setGalleryImage2File(e.target.files[0])
    setGalleryImage2Url(URL.createObjectURL(e.target.files[0]))
  }
  
  const handleImageSelect3 = (e) => {
    setGalleryImage3File(e.target.files[0])
    setGalleryImage3Url(URL.createObjectURL(e.target.files[0]))
  }
  
  const handleImageSelect4 = (e) => {
    setGalleryImage4File(e.target.files[0])
    setGalleryImage4Url(URL.createObjectURL(e.target.files[0]))
  }
  
  const handleImageSelect5 = (e) => {
    setGalleryImage5File(e.target.files[0])
    setGalleryImage5Url(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <>
    <Pageloader/>
        <section id="mySwiper_type1_3" className="m-auto mt-50 gallery-slider" style={{width: '100vh',overflow:'inherit'}}>
          <div style={{position: 'relative'}} className="animate__animated animate__fadeIn">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                loop={true}
                navigation={{
                  prevEl: '.jumbase-prev',
                  nextEl: '.jumbase-next',
                }}
                spaceBetween={80}
                mousewheel={true}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[Mousewheel,Navigation]}
                className="jumbase-slider"
              >
                <SwiperSlide> 
                    { editable ? (
                      <ImageUpload
                        handleImageSelect={handleImageSelect1}
                        imageSrc={image1}
                        setImageSrc={setGalleryImage1Url}
                        style={{
                            width: 300,
                            height: 300,
                            margin: 'auto',
                            background: '#ebeeef'
                        }}
                        />
                      ):( 
                        <img src={image1}  alt="" />
                          
                      )}

                </SwiperSlide>
                <SwiperSlide> 
                    { editable ? (
                      <ImageUpload
                        handleImageSelect={handleImageSelect2}
                        imageSrc={image2}
                        setImageSrc={setGalleryImage2Url}
                        style={{
                            width: 300,
                            height: 300,
                            margin: 'auto',
                            background: '#ebeeef'
                        }}
                        />
                      ):( 
                        <img src={image2}  alt="" />
                          
                      )}
                </SwiperSlide>
                <SwiperSlide> 
                    { editable ? (
                      <ImageUpload
                        handleImageSelect={handleImageSelect3}
                        imageSrc={image3}
                        setImageSrc={setGalleryImage3Url}
                        style={{
                            width: 300,
                            height: 300,
                            margin: 'auto',
                            background: '#ebeeef'
                        }}
                        />
                      ):( 
                        <img src={image3}  alt="" />
                          
                      )}
                </SwiperSlide>
                <SwiperSlide>
                    { editable ? (
                      <ImageUpload
                        handleImageSelect={handleImageSelect4}
                        imageSrc={image4}
                        setImageSrc={setGalleryImage4Url}
                        style={{
                            width: 300,
                            height: 300,
                            margin: 'auto',
                            background: '#ebeeef'
                        }}
                        />
                      ):( 
                        <img src={image4}  alt="" />
                          
                      )}
                </SwiperSlide>
                <SwiperSlide> 
                { editable ? (
                      <ImageUpload
                        handleImageSelect={handleImageSelect5}
                        imageSrc={image5}
                        setImageSrc={setGalleryImage5Url}
                        style={{
                            width: 300,
                            height: 300,
                            margin: 'auto',
                            background: '#ebeeef'
                        }}
                        />
                      ):( 
                        <img src={image5}  alt="" />
                          
                      )}
                </SwiperSlide>
            
              </Swiper>
              <div className="jumbase-next"><FaAngleLeft></FaAngleLeft></div>
              <div className="jumbase-prev"><FaAngleRight></FaAngleRight></div>
          </div>
      </section>
    </>
  );
}
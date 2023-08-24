// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import ImageUpload from 'image-upload-react';
import Image from "next/image";
import Pageloader from '../../../components/Layout/Loader/pageloader';
export default function Galerie({ editable,image1, setGalleryImage1Url, setGalleryImage1File,image2, setGalleryImage2Url, setGalleryImage2File,image3, setGalleryImage3Url, setGalleryImage3File,image4, setGalleryImage4Url, setGalleryImage4File, image5, setGalleryImage5Url, setGalleryImage5File,template_name,arrowColor }) {

  const [inView, setInView] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  if(editable == 'true' || editable == true){
      editable = true
  }else{
      editable = false
  }

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

  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <>
      <Head>
      <link rel='stylesheet' href={`/assets/tepmplateComponent/slider_3.css`} />
      </Head>
      <style jsx>{`
        // .gallery-slider .next, .gallery-slider .prev {
        //     color: ${arrowColor};
        // }
      `}</style>
 <Pageloader/>
      
      <section id="mySwiper_type1_3" className="m-auto mt-50 gallery-slider" style={{width: '100vh',paddingTop:'10vh',overflow:'inherit'}}>
      <div style={{position: 'relative'}} className="animate__animated animate__fadeIn">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={20}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
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
        <SwiperSlide>
          <img src={image5?image5:'/assets/img/default.jpg'}  alt="" />
        </SwiperSlide>
       
      </Swiper>
      <div className="next"><FaAngleLeft></FaAngleLeft></div>
      <div className="prev"><FaAngleRight></FaAngleRight></div>
      </div>
      
      <div className="animate__animated animate__fadeIn">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>

        { editable ? (
          <ImageUpload
            handleImageSelect={handleImageSelect1}
            imageSrc={image1}
            setImageSrc={setGalleryImage1Url}
            style={{
                width: 80,
                height: 78,
                margin: 0,
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
                width: 80,
                height: 78,
                margin: 0,
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
                width: 80,
                height: 78,
                margin: 0,
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
                width: 80,
                height: 78,
                margin: 0,
                background: '#ebeeef'
            }}
            />
          ):( 
            <img src={image4} alt="" />
          )}
        </SwiperSlide>
        <SwiperSlide>
        { editable ? (
          <ImageUpload
            handleImageSelect={handleImageSelect5}
            imageSrc={image5}
            setImageSrc={setGalleryImage5Url}
            style={{
                width: 80,
                height: 78,
                margin: 0,
                background: '#ebeeef'
            }}
            />
          ):( 
            <img src={image5}  alt="" />
          )}
        </SwiperSlide>
      </Swiper>
      </div>
      </section>
    </>
  );
}

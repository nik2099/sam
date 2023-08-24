// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
import "swiper/css/thumbs";
import "swiper/css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Image from "next/image";
import Pageloader from '../../../components/Layout/Loader/pageloader';

export default function Galerie({ editable,image1,heading,subHeading,setGalleryHeading,headingColor,setGallerySubHeading,setGalleryImage1Url, setGalleryImage1File,image2, setGalleryImage2Url, setGalleryImage2File,image3, setGalleryImage3Url, setGalleryImage3File,image4, setGalleryImage4Url, setGalleryImage4File, image5, setGalleryImage5Url, setGalleryImage5File,template_name}) {

  const [inView, setInView] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  if(editable == 'true' || editable == true){
      editable = true
  }else{
      editable = false
  }
  console.log(headingColor,'test color')

  const handleChange = async (val) => {
    setGalleryHeading(val);
  };

  const handleChange2 = async (val) => {
    setGallerySubHeading(val);
  };


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
    <Pageloader/>
      <Head>
          {/* <link rel='stylesheet' href={`/assets/tepmplateComponent/slider_3.css`} /> */}
      </Head>
        <style jsx>{`
        }
        .titleText,.editor_titleText{
            color: ${headingColor};
        }
        `}</style>


      <section id="mySwiper_type1_3" className="m-auto mt-50 gallery-slider animate__animated animate__fadeIn" style={{height: '100vh'}}>

                { editable ? (
                    <p className="editor_titleText">
                    <EdiText
                        type='text'
                        value={heading}
                        validationMessage="Please type at least 100 characters."
                        validation={val => val.length <= 100}
                        onSave={handleChange}
                        editOnViewClick={true}
                        showButtonsOnHover
                    />
                    </p>
                ):( 
                    <h6 className="titleText">{heading}</h6>
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
                    />
                  </p>
                ):(
                    <p className="info_text">{subHeading}</p>
                )}


      <div style={{position: 'relative'}} className="animate__animated animate__backInDown">
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
        className="fairpress-slider"
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
      
      <div className="animate__animated animate__backInDown">
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="fairpress-slider"
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
            <img src={image1}  className="onares_gallery_pic" alt="" />
              
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
            <img src={image2}  className="onares_gallery_pic" alt="" />
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
            <img src={image3}  className="onares_gallery_pic" alt="" />
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
            <img src={image4} className="onares_gallery_pic" alt="" />
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
            <img src={image5}  className="onares_gallery_pic" alt="" />
          )}
        </SwiperSlide>
      </Swiper>
      </div>
      </section>
    </>
  );
}

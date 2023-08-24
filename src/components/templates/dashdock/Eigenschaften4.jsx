import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import EdiText from 'react-editext';
import ImageUpload from 'image-upload-react';
import Pageloader from '../../../components/Layout/Loader/pageloader';
export default function Eigenschaften4({ editable,product4Image1Heading, product4Image1Description,setProduct4Image1Heading,setProduct4Image1Description, product4Image2Heading,product4Image2Description,setProduct4Image2Heading,setProduct4Image2Description,product4Image3Heading, product4Image3Description,setProduct4Image3Heading,setProduct4Image3Description,product4Image4Heading, product4Image4Description,setProduct4Image4Heading,setProduct4Image4Description,image1, setProduct4Image1Url, setProduct4Image1File,image2, setProduct4Image2Url, setProduct4Image2File,image3, setProduct4Image3Url, setProduct4Image3File,image4, setProduct4Image4Url, setProduct4Image4File,headingColor }) {

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
    setProduct4Image1Heading(val);
  };

  const changeProductImage1Description = async (val) => {
    setProduct4Image1Description(val);
  };


  const changeProductImage2Heading = async (val) => {
    setProduct4Image2Heading(val);
  };

  const changeProductImage2Description = async (val) => {
    setProduct4Image2Description(val);
  };


  const changeProductImage3Heading = async (val) => {
    setProduct4Image3Heading(val);
  };

  const changeProductImage3Description = async (val) => {
    setProduct4Image3Description(val);
  };


  const changeProductImage4Heading = async (val) => {
    setProduct4Image4Heading(val);
  };

  const changeProductImage4Description = async (val) => {
    setProduct4Image4Description(val);
  };

  const handleImageSelect1 = (e) => {
    setProduct4Image1File(e.target.files[0])
    setProduct4Image1Url(URL.createObjectURL(e.target.files[0]))
  }
  const handleImageSelect2 = (e) => {
    setProduct4Image2File(e.target.files[0])
    setProduct4Image2Url(URL.createObjectURL(e.target.files[0]))
  }

  const handleImageSelect3 = (e) => {
    setProduct4Image3File(e.target.files[0])
    setProduct4Image3Url(URL.createObjectURL(e.target.files[0]))
  }

  const handleImageSelect4 = (e) => {
    setProduct4Image4File(e.target.files[0])
    setProduct4Image4Url(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <>
      <Head>
      <link rel='stylesheet' href={`/assets/tepmplateComponent/carousel/carousel_6.css`} />
      </Head>
      <style jsx>{`
        .secondary_title,.titleText,.editor_secondary_title{
            color: ${headingColor};
        }
    
      `}</style>
     
     <Pageloader/>
     
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
                      className="mySwiper_product"
                    >
                    {/* <div thumbsSlider="" className="swiper mySwiper_product"> */}
                        {/* <div className="swiper-wrapper"> */}
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
                        {/* </div> */}
                    {/* </div> */}
                    </Swiper>
                   {/* <div className="swiper-pagination"></div>  */}
                </div>
                
            <div className="main vertical_product_slider">
                <Swiper
                     direction={"vertical"}
                     onSwiper={setThumbsSwiper}
                     freeMode={true}
                     slidesPerView={1}
                     spaceBetween={20}
                     watchSlidesProgress={true}
                     modules={[FreeMode, Navigation, Thumbs]}
                   
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
                                    setImageSrc={setProduct4Image1Url}
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
                                      value={product4Image1Heading}
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
                                      <p className="titleText">{product4Image1Heading}</p>
                                  )}
                                    
                              
                               
                                { editable ? (
                                  <p className="editor_pro_info">
                                  
                                   <EdiText
                                      type='textarea'
                                      value={product4Image1Description}
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
                                      <p className="pro_info">{product4Image1Description}</p>
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
                                    setImageSrc={setProduct4Image2Url}
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
                                      value={product4Image2Heading}
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
                                      <p className="titleText">{product4Image2Heading}</p>
                                  )}
                                    
                            
                                { editable ? (
                                    <p className="editor_pro_info">
                                  <EdiText
                                    type='textarea'
                                    value={product4Image2Description}
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
                                      <p className="pro_info">{product4Image2Description}</p>
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
                                    setImageSrc={setProduct4Image3Url}
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
                                      value={product4Image3Heading}
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
                                      <p className="titleText">{product4Image3Heading}</p>
                                  )}
                                    
                        
                               
                                { editable ? (
                                   <p className="editor_pro_info">
                                   <EdiText
                                      type='textarea'
                                      value={product4Image3Description}
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
                                      <p className="pro_info">{product4Image3Description}</p>
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
                                    setImageSrc={setProduct4Image4Url}
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
                                      value={product4Image4Heading}
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
                                      <p  className="titleText">{product4Image4Heading}</p>
                                  )}
                                    
                            
                                
                                { editable ? (
                                  <p className="editor_pro_info">
                                   <EdiText
                                      type='textarea'
                                      value={product4Image4Description}
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
                                      <p className="pro_info">{product4Image4Description}</p>
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

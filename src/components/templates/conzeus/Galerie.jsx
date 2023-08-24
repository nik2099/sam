// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
import "swiper/css/thumbs";
import "swiper/css";
import { FreeMode, Navigation, Thumbs,Pagination } from "swiper";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import ImageUpload from 'image-upload-react';
import EdiText from 'react-editext';
import Pageloader from '../../../components/Layout/Loader/pageloader';

export default function Galerie({ editable,image1, setGalleryImage1Url, setGalleryImage1File,image2, setGalleryImage2Url, setGalleryImage2File,image3, setGalleryImage3Url, setGalleryImage3File,image4, setGalleryImage4Url, setGalleryImage4File, image5, setGalleryImage5Url, setGalleryImage5File,setGalleryHeading, setGallerySubHeading,heading ,subHeading,setGalleryImageHeading1,setGalleryImageHeading2,setGalleryImageHeading3,setGalleryImageHeading4,setGalleryImageHeading5,imageHeading1,imageHeading2,imageHeading3,imageHeading4,imageHeading5,imageSubHeading1,imageSubHeading2,imageSubHeading3,imageSubHeading4,imageSubHeading5,setGalleryImageSubHeading1,setGalleryImageSubHeading2,setGalleryImageSubHeading3,setGalleryImageSubHeading4,setGalleryImageSubHeading5,headingColor}) {

  const [inView, setInView] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  if(editable == 'true' || editable == true){
      editable = true
  }else{
      editable = false
  }


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


const GalleryImageHeading1 = async (val) => {
  setGalleryImageHeading1(val);
};
const GalleryImageSubHeading1 = async (val) => {
  setGalleryImageSubHeading1(val);
};
const GalleryImageHeading2 = async (val) => {
  setGalleryImageHeading2(val);
};
const GalleryImageSubHeading2 = async (val) => {
  setGalleryImageSubHeading2(val);
};

const GalleryImageHeading3 = async (val) => {
  setGalleryImageHeading3(val);
};
const GalleryImageSubHeading3 = async (val) => {
  setGalleryImageSubHeading3(val);
};

const GalleryImageHeading4 = async (val) => {
  setGalleryImageHeading4(val);
};
const GalleryImageSubHeading4 = async (val) => {
  setGalleryImageSubHeading4(val);
};
const GalleryImageHeading5 = async (val) => {
  setGalleryImageHeading5(val);
};
const GalleryImageSubHeading5 = async (val) => {
  setGalleryImageSubHeading5(val);
};

  useEffect(() => {
    setInView(true);
  }, []);

  return (
    <>
 <Pageloader/>
        <style jsx>{`
 
        .titleText,.image_heading,.editor_titleText{
            color: ${headingColor};
        }
        .image_heading{
          width: 100%;
        }
      `}</style>
   
      <section id="mySwiper_type1_3" style={{height:'100vh'}} >
      <div className="conzeus-slider animate__animated animate__fadeIn">
        
      <div className="col_flex mb-3" style={{textAlign: 'center'}}>
                 

                  { editable ? (
                    <p className="editor_titleText">
                    <EdiText
                        type='textarea'
                        value={heading}
                        editOnViewClick={true}
                        showButtonsOnHover
                        onSave={setGalleryHeading}
                        validationMessage="Please type at least 100 characters."
                        validation={val => val.length <= 100}
                        submitOnEnter={true}
                        submitOnUnfocus={true}
                        saveButtonClassName="custom-save-button"
                        cancelButtonClassName="custom-cancel-button"
                    />
                    </p> 
                  ):( 
                      <h1 className="titleText">{heading}</h1>
                  )}
                
                  
                
                  { editable ? (
                    <p className="editor_secondary_title">
                      <EdiText
                          type='textarea'
                          value={subHeading}
                          editOnViewClick={true}
                          showButtonsOnHover
                          onSave={setGallerySubHeading}
                          validationMessage="Please type at least 150 characters."
                          validation={val => val.length <= 150}
                          submitOnEnter={true}
                          submitOnUnfocus={true}
                          saveButtonClassName="custom-save-button"
                          cancelButtonClassName="custom-cancel-button"
                      />
                    </p>
                  ):(
                  <h6 className="secondary_title">{subHeading}</h6>
                  )}

           
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       <SwiperSlide>

          { editable ? (
            <ImageUpload
              handleImageSelect={handleImageSelect1}
              imageSrc={image1}
              setImageSrc={setGalleryImage1Url}
              style={{
                  width: 250,
                  height: 250,
                  margin: 0,
                  background: '#ebeeef'
              }}
              />
            ):( 
              <img src={image1}  className="conzeus_img" alt="" />
                
            )}

            <div style={{marginTop:'15px'}}>
          <h5 className="image_heading">
            { editable ? (
            <EdiText
                type='textarea'
                value={imageHeading1}
                editOnViewClick={true}
                showButtonsOnHover
                onSave={GalleryImageHeading1}
                validationMessage="Please type at least 100 characters."
                validation={val => val.length <= 100}
                submitOnEnter={true}
                submitOnUnfocus={true}
                saveButtonClassName="custom-save-button"
                cancelButtonClassName="custom-cancel-button"
            />
            ):(
                <span>{imageHeading1}</span>
            )}
            </h5>
              <h6 style={{color:'#000'}}>
              { editable ? (
                <EdiText
                      type='textarea'
                      value={imageSubHeading1}
                      editOnViewClick={true}
                      showButtonsOnHover
                      onSave={GalleryImageSubHeading1}
                      validationMessage="Please type at least 150 characters."
                      validation={val => val.length <= 150}
                      submitOnEnter={true}
                      submitOnUnfocus={true}
                      saveButtonClassName="custom-save-button"
                      cancelButtonClassName="custom-cancel-button"
                />
                ):(
                    <span>{imageSubHeading1}</span>
                )}
              </h6>
            </div>
            

          </SwiperSlide>
          <SwiperSlide>
          { editable ? (
            <ImageUpload
              handleImageSelect={handleImageSelect2}
              imageSrc={image2}
              setImageSrc={setGalleryImage2Url}
              style={{
                  width: 250,
                  height: 250,
                  margin: 0,
                  background: '#ebeeef'
              }}
              />
            ):( 
              <img src={image2}  className="conzeus_img" alt="" />
            )}

            <div style={{marginTop:'15px'}}>
            <h5 className="image_heading">
            { editable ? (
                <EdiText
                    type='textarea'
                    value={imageHeading2}
                    onSave={GalleryImageHeading2}
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
                <span>{imageHeading2}</span>
                )}
                </h5>
                <h6 className="info_text">
                { editable ? (
                <EdiText
                      type='textarea'
                      value={imageSubHeading2}
                      editOnViewClick={true}
                      showButtonsOnHover
                      onSave={GalleryImageSubHeading2}
                      validationMessage="Please type at least 150 characters."
                      validation={val => val.length <= 150}
                      submitOnEnter={true}
                      submitOnUnfocus={true}
                      saveButtonClassName="custom-save-button"
                      cancelButtonClassName="custom-cancel-button"
                />
                ):(
                <span>{imageSubHeading2}</span>
                )}
                </h6>
            </div>

          </SwiperSlide>
          <SwiperSlide>
          { editable ? (
            <ImageUpload
              handleImageSelect={handleImageSelect3}
              imageSrc={image3}
              setImageSrc={setGalleryImage3Url}
              style={{
                  width: 250,
                  height: 250,
                  margin: 0,
                  background: '#ebeeef'
              }}
              />
            ):( 
              <img src={image3}  className="conzeus_img" alt="" />
            )}

            <div  style={{marginTop:'15px'}}>
              <h5 className="image_heading"> 
                { editable ? (
                <EdiText
                      type='textarea'
                      value={imageHeading3}
                      editOnViewClick={true}
                      showButtonsOnHover
                      onSave={GalleryImageHeading3}
                      validationMessage="Please type at least 100 characters."
                      validation={val => val.length <= 100}
                      submitOnEnter={true}
                      submitOnUnfocus={true}
                      saveButtonClassName="custom-save-button"
                      cancelButtonClassName="custom-cancel-button"
                />
                ):(
                <span>{imageHeading3}</span>
                )}
                </h5>
                <h6 className="info_text">
                { editable ? (
                <EdiText
                        type='textarea'
                        value={imageSubHeading3}
                        editOnViewClick={true}
                        showButtonsOnHover
                        onSave={GalleryImageSubHeading3}
                        validationMessage="Please type at least 150 characters."
                        validation={val => val.length <= 150}
                        submitOnEnter={true}
                        submitOnUnfocus={true}
                        saveButtonClassName="custom-save-button"
                        cancelButtonClassName="custom-cancel-button"
                />
                ):(
                <span>{imageSubHeading3}</span>
                )}
                </h6>
            </div>

          </SwiperSlide>
          <SwiperSlide>
          { editable ? (
            <ImageUpload
              handleImageSelect={handleImageSelect4}
              imageSrc={image4}
              setImageSrc={setGalleryImage4Url}
              style={{
                  width: 250,
                  height: 250,
                  margin: 0,
                  background: '#ebeeef'
              }}
              />
            ):( 
              <img src={image4} className="conzeus_img" alt="" />
            )}

            <div style={{marginTop:'15px'}}>
            <h5 className="image_heading"> 
                { editable ? (
                <EdiText
                    type='textarea'
                    value={imageHeading4}
                    editOnViewClick={true}
                    showButtonsOnHover
                    onSave={GalleryImageHeading4}
                    validationMessage="Please type at least 100 characters."
                    validation={val => val.length <= 100}
                    submitOnEnter={true}
                    submitOnUnfocus={true}
                    saveButtonClassName="custom-save-button"
                    cancelButtonClassName="custom-cancel-button"
                />
                ):(
                <span>{imageHeading4}</span>
                )}
                </h5>
                <h6 className="info_text">
                { editable ? (
                <EdiText
                      type='textarea'
                      value={imageSubHeading4}
                      editOnViewClick={true}
                      showButtonsOnHover
                      onSave={GalleryImageSubHeading4}
                      validationMessage="Please type at least 150 characters."
                      validation={val => val.length <= 150}
                      submitOnEnter={true}
                      submitOnUnfocus={true}
                      saveButtonClassName="custom-save-button"
                      cancelButtonClassName="custom-cancel-button"
                />
                ):(
                <span>{imageSubHeading4}</span>
                )}
                </h6>
            </div>

          </SwiperSlide>
          <SwiperSlide>
          { editable ? (
            <ImageUpload
              handleImageSelect={handleImageSelect5}
              imageSrc={image5}
              setImageSrc={setGalleryImage5Url}
              style={{
                  width: 250,
                  height: 250,
                  margin: 0,
                  background: '#ebeeef'
              }}
              />
            ):( 
              <img src={image5} className="conzeus_img"  alt="" />
            )}

            <div style={{marginTop:'15px'}}>
            <h5 className="image_heading"> 
                { editable ? (
                <EdiText
                      type='textarea'
                      value={imageHeading5}
                      editOnViewClick={true}
                      showButtonsOnHover
                      onSave={GalleryImageHeading5}
                      validationMessage="Please type at least 100 characters."
                      validation={val => val.length <= 100}
                      submitOnEnter={true}
                      submitOnUnfocus={true}
                      saveButtonClassName="custom-save-button"
                      cancelButtonClassName="custom-cancel-button"
                />
                ):(
                <span>{imageHeading5}</span>
                )}
                </h5>
                <h6 className="info_text">
                { editable ? (
                <EdiText
                      type='textarea'
                      value={imageSubHeading5}
                      editOnViewClick={true}
                      showButtonsOnHover
                      onSave={GalleryImageSubHeading5}
                      validationMessage="Please type at least 150 characters."
                      validation={val => val.length <= 150}
                      submitOnEnter={true}
                      submitOnUnfocus={true}
                      saveButtonClassName="custom-save-button"
                      cancelButtonClassName="custom-cancel-button"
                />
                ):(
                <span>{imageSubHeading5}</span>
                )}
                </h6>
            </div>

          </SwiperSlide>
      </Swiper>


      </div>
      </section>
    </>
  );
}

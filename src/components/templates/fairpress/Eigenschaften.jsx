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
export default function Eigenschaften({ editable,productImage1Heading,productImage1SubHeading, productImage1Description,setProductImage1Heading,setProductImage1SubHeading,setProductImage1Description, image1, setProductImage1Url, setProductImage1File,headingColor }) {

  const [inView, setInView] = useState(true);

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


  return (
    <>
      <Head>
      {/* <link rel='stylesheet' href={`/assets/tepmplateComponent/carousel/carousel_6.css`} /> */}
      </Head>
      <style jsx>{`
        .titleText{
            color: ${headingColor};
        }
        // .swiper-pagination-bullet-active {
        //   background: ${headingColor} !important;
        // }
      `}</style>
<Pageloader/>
      <section id="UberdasProdukt"  className="m-auto secview" style={{zindex: '200',height: '100vh',position: 'relative',
    overflow: 'hidden'}}>
        <div className="wrappers animate__animated animate__fadeIn">
            <div className="">
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
             
                  <div className="col-8" style={{display: 'flex',
    alignItems: 'center'}}>
                      <div className="product_des" style={{textAlign: 'left'}}>
                                    <p className="secondary_title">
                                    { editable ? (
                                      <EdiText
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
                                          validationMessage="Please type at least 150 characters."
                                          validation={val => val.length <= 150}
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

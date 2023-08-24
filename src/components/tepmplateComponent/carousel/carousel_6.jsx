import Head from 'next/head';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
// import ContentEditable from '../ContentEditable';

const Carousel6 = ({ backgroundColor, buttonColor, activeButtonColor, template_name }) => {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={`/assets/tepmplateComponent/carousel/carousel_6.css`} />
      </Head>
      <section id="UberdasProdukt"  className="secview hide" style="z-index: 200;height: 100vh;">
    <div className="wrapper">
            <div className="main vertical_product_slider">
                <div className="slider__inner ">
                    <div className="swiper mySwiper_image_des">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="product_image"><Image src="/assets/img/schuh1.jpg" alt=""/></div>
                                <div className="product_des title_nd_info left_aligned">
                                    <p className="secondary_title">Kleine Überschrift</p>
                                    <p className="titleText">Große Überschrift</p>
                                    <p className="info_text">Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.</p>
                                </div>    
                            </div>
                            <div className="swiper-slide">
                                <div className="product_image"><Image src="/assets/img/schuh2.jpg" alt=""/></div>
                                <div className="product_des title_nd_info left_aligned">
                                    <p className="secondary_title">Kleine Überschrift</p>
                                    <p className="titleText">Große Überschrift</p>
                                    <p className="info_text">Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.</p>
                                </div>    
                            </div>
                            <div className="swiper-slide">
                                <div className="product_image"><Image src="/assets/img/schuh3.jpg" alt=""/></div>
                                <div className="product_des title_nd_info left_aligned">
                                    <p className="secondary_title">Kleine Überschrift</p>
                                    <p className="titleText">Große Überschrift</p>
                                    <p className="info_text">Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.</p>
                                </div>    
                            </div>
                            <div className="swiper-slide">
                                <div className="product_image"><Image src="/assets/img/schuh4.jpg" alt=""/></div>
                                <div className="product_des title_nd_info left_aligned">
                                    <p className="secondary_title">Kleine Überschrift</p>
                                    <p className="titleText">Große Überschrift</p>
                                    <p className="info_text">Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left_product_slider">
                    <div thumbsSlider="" className="swiper mySwiper_product">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <Image src="img/schuh1.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <Image src="img/schuh2.jpg" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <Image src="img/schuh3.jpg" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <Image src="img/schuh4.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                   <div className="swiper-pagination"></div> 
            </div>
    </div>
</div>
</section>

<div classNameName="left_product_slider">
                  <Swiper
                      direction={"vertical"}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      classNameName="mySwiper_product"
                    >
                    {/* <div thumbsSlider="" classNameName="swiper mySwiper_product"> */}
                        {/* <div classNameName="swiper-wrapper"> */}
                            <SwiperSlide>
                            <div classNameName="swiper-slide">
                                <Image src="/assets/img/schuh1.jpg" alt=""/>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div classNameName="swiper-slide">
                                <Image src="/assets/img/schuh2.jpg" alt=""/>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div classNameName="swiper-slide">
                                <Image src="/assets/img/schuh3.jpg" alt=""/>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div classNameName="swiper-slide">
                                <Image src="/assets/img/schuh4.jpg" alt=""/>
                            </div>
                            </SwiperSlide>
                        {/* </div> */}
                    {/* </div> */}
                    </Swiper>
                   <div classNameName="swiper-pagination"></div> 
            </div>
      
    </>
  );
};

export default Carousel6;

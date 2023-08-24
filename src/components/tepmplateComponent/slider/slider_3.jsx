import Head from 'next/head';
import Image from "next/image";
// import ContentEditable from '../ContentEditable';

const Slider3 = ({ backgroundColor, buttonColor, activeButtonColor, template_name }) => {
  return (
    <>
        <Head>
            <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/slider_3.css`} />
        </Head>
        <section id="gallerymj">
            <div className="wrapper">
                <div className="main">
                    <div className="slider__inner">
                        <div className="swiper mySwiper_2">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <Image src="/assets/img/schuh1.jpg" alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <Image src="/assets/img/schuh2.jpg" alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <Image src="/assets/img/schuh3.jpg" alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <Image src="/assets/img/schuh4.jpg" alt=""/>
                                </div>
                                <div className="swiper-slide">
                                    <Image src="/assets/img/schuh5.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="bottom-center">
                            <div thumbsSlider="" className="swiper mySwiper_thumb ">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <Image src="/assets/img/schuh1.jpg" alt="" />
                                    </div>
                                    <div className="swiper-slide">
                                        <Image src="/assets/img/schuh2.jpg" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <Image src="/assets/img/schuh3.jpg" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <Image src="/assets/img/schuh4.jpg" alt=""/>
                                    </div>
                                    <div className="swiper-slide">
                                        <Image src="/assets/img/schuh5.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  );
};

export default Slider3;

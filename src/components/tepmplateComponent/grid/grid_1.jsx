import Head from 'next/head';
import Image from "next/image";
// import ContentEditable from '../ContentEditable';

const Grid1 = ({ backgroundColor, buttonColor, activeButtonColor, template_name }) => {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={`/assets/tepmplateComponent/grid/grid_1.css`} />
      </Head>
      <section id="uberproduct1" style="z-index: 200">
        <div className="wrapper">
            <div className="col_flex">
                <div className="title_nd_info">
                    <p className="titleText">Große Überschrift</p>
                    <p className="info_text">Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts.</p>
                </div>
                <div className="flex card_below" style="gap: 3vw;">
                    <div className="image_card">
                        <div className="image">
                            <Image src='/assets/img/farbe1.jpg' alt=""/>
                        </div>
                        <div className="full_width_btn">
                            <p className="btn">Mitarbeiter holen</p>
                        </div>
                    </div>
                    <div className="image_card">
                        <div className="image">
                            <Image src='/assets/img/farbe1.jpg' alt=""/>
                        </div>
                        <div className="full_width_btn">
                            <p className="btn">Mitarbeiter holen</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
    </>
  );
};

export default Grid1;

import Head from 'next/head';
// import ContentEditable from '../ContentEditable';

const ContactFrom1 = ({ backgroundColor, buttonColor, activeButtonColor, template_name }) => {
  return (
    <>
        <Head>
            <link rel='stylesheet' href={`/assets/tepmplateComponent/contactForm/form_1.css`} />
        </Head>
        <section id="kontakt-view" style="z-index: 300">
            <div className="wrapper">
                <div className="flex form">
                    <p className="info_text">Sie wollen noch mehr Infos zum Produkt? Tragen Sie sich in unseren Newsletter ein und Sie bekommen weitere spannende Informationen von uns!</p>
                    <div className="form_container" style="display:flex;flex-direction: column;">
                        <input type="text" placeholder="Enter Username" name="uname"/>
                        <input type="password" placeholder="Enter Password" name="psw"/>
                        <p className="btn" type="submit">Senden</p>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  );
};

export default ContactFrom1;

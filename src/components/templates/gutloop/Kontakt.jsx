import Head from 'next/head';
import { useEffect, useState } from 'react';
import EdiText from 'react-editext';
import { toast } from "react-toastify";
import app from "../../../../utils/axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiMailLine } from "react-icons/ri";
import { RiProfileLine } from "react-icons/ri";
import Pageloader from '../../../components/Layout/Loader/pageloader';
const Kontak = ({ heading, subheading, setContactHeading,setContactSubHeading, headingColor, background,campaign_id,deviceid,buttonColor, buttonTextColor,editable, buttonHeading,setContactButtonHeading, question1,question2,question3,setCurrentPage}) => {
  const [inView, setInView] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isLoading, setLoading] = useState(false);

  if(editable == 'true' || editable == true){
      editable = true
  }else{
      editable = false
  }

  const changeHeading = async (val) => {
    setContactHeading(val);
  };
  
  const changeSubHeading = async (val) => {
    setContactSubHeading(val);
  };
  
  const changeButtonHeading = async (val) => {
    setContactButtonHeading(val);
  };

  useEffect(() => {
    setInView(true);
  }, []);
 

  const contact = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.post(
        "/user/campaignEnquiry",
        JSON.stringify({ name, email,campaign_id,deviceid,question1,question2,question3,type:'quiz'})
      );

      if (response.data.success == true) {
        setLoading(false);
        setName('');
        setEmail('');
        toast.success(response.data.msg);
        setCurrentPage('Thankyou');
      }
    } catch (errors) {
      setLoading(false);
      const errorsResponse = errors.response.data.errors;
      for (const error in errorsResponse) {
        if(error != 'deviceid'){
          toast.error(errorsResponse[error][0], {
         
          });
        }
        
      }
    }
  };


  return (
    <>
      <Head>
        <link rel='stylesheet' href={`/assets/tepmplateComponent/contactForm/form_1.css`} />
      </Head>
      <Pageloader/>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      <style jsx>{`
        .titleText,.editor_titleText{
          color: ${headingColor};
        }
      `}</style>
      
      
      
      <div className='container'>
        <section  style={{ zIndex: '300', height:'100vh'}}>
          <div className='wrappers '>
            <div className='flex form contact_background'>
              <div className="animate__animated animate__fadeIn">
              { editable ? (
                 <p className='editor_titleText'>
                 <EdiText
                    type='textarea'
                    value={heading}
                    onSave={changeHeading}
                    validationMessage="Please type at least 100 characters."
                    validation={val => val.length <= 100}
                    editOnViewClick={true}
                    showButtonsOnHover
                    submitOnEnter={true}
                    submitOnUnfocus={true}
                    saveButtonClassName="custom-save-button"
                    cancelButtonClassName="custom-cancel-button"
                />
                </p>
                ):( 
                    <p className="titleText">{heading}</p>
                )}

                { editable ? (
                 <p className='editor_desc_Text'>
                 <EdiText
                    type='textarea'
                    value={subheading}
                    onSave={changeSubHeading}
                    validationMessage="Please type at least 150 characters."
                    validation={val => val.length <= 150}
                    editOnViewClick={true}
                    showButtonsOnHover
                    submitOnEnter={true}
                    submitOnUnfocus={true}
                    saveButtonClassName="custom-save-button"
                    cancelButtonClassName="custom-cancel-button"
                />
                </p>
                ):( 
                    <p className='desc_Text kont'>{subheading}</p>
                )}
                
                
              </div>

              <form onSubmit="{submitContact}">
                <div className='form_container' style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="animate__animated animate__fadeIn">
                    <div className="form-col">
                    <RiProfileLine className="icons"></RiProfileLine>
                    <input 
                      className='w-full' 
                      type='text' 
                      name="username" 
                      required
                      id='name'
                      value={name}
                      placeholder='Dein Name' 
                      onChange={(e) => setName(e.target.value)}
                    />
                    </div>

                    <div className="form-col">
                    
                    <RiMailLine className="icons"></RiMailLine>
                    <input
                      className='w-full'
                      type='email'
                      placeholder='Dein E-Mail Address'
                      name='email'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      
                    />
                    </div>

                    <div className="check_box">
                      <input type="checkbox" name="terms"/>
                      <label className="lbl" for="exampleCheck1">Ich akzeptiere die Datenschutzerklärung.</label>
                    </div>

                    { editable ? (
                        <button className='btn my-btn' style={{ backgroundColor: buttonColor, color: buttonTextColor}}  type='button'>
                        
                        
                        <EdiText
                            type='text'
                            value={buttonHeading}
                            onSave={changeButtonHeading}
                            validationMessage="Please type at least 30 characters."
                            validation={val => val.length <= 30}
                            editOnViewClick={true}
                            showButtonsOnHover
                            submitOnEnter={true}
                            submitOnUnfocus={true}
                            saveButtonClassName="custom-save-button"
                            cancelButtonClassName="custom-cancel-button"
                        />
                      </button>
                      ):( 
                        <>
                           {!isLoading && (
                         <button className='btn my-btn' style={{ backgroundColor: buttonColor, color: buttonTextColor}} onClick={contact} type='submit'>{buttonHeading}</button>
                         )}

                          {isLoading && (
                    
                              <button className="btn btn-primary mr-2" >
                                  <i className="fa fa-spinner fa-spin"></i> Please wait...
                              </button>
                          )}
                        </>
                       
                      )}
                    
                    
                    <div className="scanner-box">
                        <img src='/assets/img/scanner.jpeg' alt="" />
                        <p>Datenschutzerklärung scannen</p>
                    </div>

                  </div>
                </div>
              </form>
             
            </div>
          </div>
        </section>
      </div>
    </>
 );
};

export default Kontak;


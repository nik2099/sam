import React, { Fragment } from "react";
import { EmailAddress, first_name, last_name, Password, RememberPassword, SignIn ,BackToLogin,RequestNewPassword,ForgotPasswors,pleaseWait} from '../../Constant';
import { useForm } from 'react-hook-form';
import app from "../../../utils/axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import Link from 'next/link';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPwd = () => {
    const [email, setEmail] = useState("");
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleError = (errors) => { console.log(errors)};
    const [isLoading, setLoading] = useState(false);

    const forgotOptions = {
        email: { required: "Email is required" }
    };


    const handleForgotPassword = async (data) => {
       
          try {
         
            app.defaults.timeout = 100000;
            setLoading(true);
            const response = await app.post(
              "/forget-password",
              JSON.stringify({ 'email':data.email })
            );
            if(response.data.success == true){
                setLoading(false);
                toast.success('Otp wurde an Ihre Registrierungs-E-Mail-ID gesendet.');
                await router.push({
                  pathname: "/reset-password",
                  query: {
                    email,
                  },
                });
            }else{
                setLoading(false);
                toast.error(response.data.errors[0], {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
          
        } catch (errors) {
            setLoading(false);
            const errorsResponse = errors.response.data.errors;
            for (const error in errorsResponse) {
              toast.error(errorsResponse[error][0], {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          
          }
        };

    return (
        <Fragment>
             <div className="row mt-2 mb-2 justify-content-md-center container-fullheight">
                 <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 box-col-6 my-auto">
                    <div className="mb-4 text-center">
                        <h1>{ForgotPasswors}</h1>
                    </div>
                    <div className="register-form-wrapper">
                        <form className="requires-validation" onSubmit={handleSubmit(handleForgotPassword, handleError)}>
                            <div className="mb-3 row">
                                <div className="form-input-btn_input">
                                    <input className="form-control" id="inputEmail3" name="email" type="email" placeholder={EmailAddress} {...register('email', forgotOptions.email)}  onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <small className="text-danger">
                                      {errors?.email && errors.email.message}
                                </small>
                            </div>
                
                            <div className="mb-5 row">
                                <div className="form-input-btn_input d-grid">
                                {!isLoading && (
                                <button className="btn btn-primary mr-2">{RequestNewPassword}</button>

                                )}
                                {isLoading && (
                                
                                <button className="btn btn-primary mr-2" >
                                    <i className="fa fa-spinner fa-spin"></i> {pleaseWait}
                                </button>
                                )}

                                </div>
                            </div>
                        </form>
                        <div className="row text-center">
                            <ul>
                                <li>
                                    <Link href="/login">
                                        <a title="Zurück zum Login">{BackToLogin}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                 </div>
             </div>
          
        </Fragment>
    )
}

export default ForgetPwd;
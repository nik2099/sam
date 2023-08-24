import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { EmailAddress, Otp, Password, Confirm_password,RequestNewPassword,ForgotPasswors,BackToLogin,pleaseWait} from '../Constant';
import { useForm } from 'react-hook-form';
import app from "../../utils/axios";
import { useRouter } from "next/router";
import Link from 'next/link';
import Loader from '../components/Layout/Loader';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CreatePwd = ({ emailQ, otpQ }) => {

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setLoading] = useState(false);

    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleError = (errors) => { console.log(errors)};


    const changeOptions = {
        email: { required: "Email is required" },
        otp: { 
        required: "OTP is required",
        minLength: {
            value: 6,
            message: "OTP must have at least 6 characters"
        },
     
        },
        password: {
          required: "Password is required",
          minLength: {
              value: 6,
              message: "Password must have at least 8 characters"
          }
        },
        password_confirmation: {
            required: "Confirm Password is required",
            minLength: {
                value: 6,
                message: "Password must have at least 6 characters"
            }
            }

        
    };

    const handleChangePassword = async (data) => {

        try {
            setLoading(true);
          const response = await app.post(
            "/reset-password",
            JSON.stringify({
              email:data.email,
              otp:data.otp,
              password:data.password,
              password_confirmation: data.password,
            })
          );
          if(response.data.success == true){
            setLoading(false);
            toast.success('Passwort wurde geändert.');
            router.push("/login");
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


    useEffect(() => {
        setEmail(emailQ);
    });

    return (
        <Fragment>
            <Loader />
            <div className="row mt-2 mb-2 justify-content-md-center container-fullheight">
                 <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 box-col-6 my-auto">
                    <div className="mb-4 text-center">
                        <h1>{ForgotPasswors}</h1>
                    </div>
                    <div className="register-form-wrapper">
                        <form className="requires-validation" onSubmit={handleSubmit(handleChangePassword, handleError)}>
                            <div className="mb-3 row">
                                <div className="form-input-btn_input">
                                    <input className="form-control" id="inputEmail3" value={email} name="email"  type="email" placeholder={EmailAddress} {...register('email', changeOptions.email)} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                             
                            </div>


                            <div className="mb-3 row">
                                <div className="form-input-btn_input">
                                    <input className="form-control" id="inputEmail3" value={otp} name="otp" type="number" placeholder={Otp} {...register('otp', changeOptions.otp)} onChange={(e) => setOtp(e.target.value)} />
                                </div>
                                <small className="text-danger">
                                      {errors?.otp && errors.otp.message}
                                </small>
                            </div>

                            <div className="mb-3 row">
                                <div className="form-input-btn_input">
                                    <input className="form-control" id="inputEmail3" name="password" type="password" placeholder={Password} {...register('password', changeOptions.password)} value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <small className="text-danger">
                                      {errors?.password && errors.password.message}
                                </small>
                            </div>

                            <div className="mb-3 row">
                                <div className="form-input-btn_input">
                                    <input className="form-control" id="inputEmail3" name="password_confirmation" type="password" placeholder={Confirm_password} {...register('password_confirmation', changeOptions.password_confirmation)}   value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <small className="text-danger">
                                      {errors?.password_confirmation && errors.password_confirmation.message}
                                </small>
                            </div>
                
                            <div className="mb-5 row">
                                <div className="form-input-btn_input d-grid">

                                    {!isLoading && (
                                     <button className="btn btn-primary btn-block" type="submit" 
                                     disabled={
                                       email == "" ||
                                       otp == "" ||
                                       password == "" ||
                                       confirmPassword == "" ||
                                       password != confirmPassword
                                     }>{RequestNewPassword}</button>

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

export default CreatePwd;

export const getServerSideProps = async (context) => {
    const { email, otp } = context.query;
    return {
      props: {
        emailQ: email || "",
      },
    };
  };
import React, { Fragment,useState } from 'react';
import { EmailAddress, first_name, last_name, Password, GetStarted, BackToLogin,AllreadyAccount,StartNow , pleaseWait} from '../../Constant';
import { useForm } from 'react-hook-form';
import app from "../../../utils/axios";
import { useRouter } from "next/router";
import Link from 'next/link';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../context/user";

const RegisterFrom = () => {
    const router = useRouter();
    const { user,setUser } = useUser({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleError = (errors) => { console.log(errors)};
    const [isLoading, setLoading] = useState(false);
  

    const registerOptions = {
        first_name: { required: "first name is required" },
        last_name: { required: "last name is required" },
        email: { required: "Email is required" },
        privacy: { required: "Datenschutz muss akzeptiert werden!" },
        password: {
            required: "Password is required",
            minLength: {
                value: 6,
                message: "Password must have at least 6 characters"
            }
        }
    };
    

   

    const handleRegistration = async (data) => {
        setLoading(true);
        try {
          const response = await app.post(
            "/register",
            JSON.stringify({
              first_name: data.first_name,
              last_name: data.last_name,
              email:data.email,
              password:data.password,
              passowrd_confirmation: data.password,
              privacy: data.privacy == "on" ? false : true,
              newsletter: data.newsletter == "on" ? false : true,
            })
          );
          if (response.status == 201) {
            setLoading(false);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('type', response.data.type);
            toast.success('register successfully');
            setUser(response.data);
            await router.push("/profile");
          }
        } catch (error) {
            setLoading(false);
            const errorsResponse = error.response.data.errors;
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

            <div className="row mt-2 mb-2 justify-content-md-center">
                <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 box-col-6 my-auto">
                            
                            <div className="mb-4 text-center">
                                <h1>{GetStarted}</h1>
                            </div>

                         
                            <div className="register-form-wrapper">
                                <form className="requires-validation" onSubmit={handleSubmit(handleRegistration, handleError)}>
                                    <div className="mb-3 row">
                                        <div className="form-input-btn_input">
                                            <input className="form-control" id="inputEmail3" name="first_name" type="text" placeholder={first_name} {...register('first_name', registerOptions.first_name)}/>
                                           
                                        </div>
                                        <small className="text-danger">
                                            {errors?.first_name && errors.first_name.message}
                                        </small>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="form-input-btn_input">
                                            <input className="form-control" id="inputEmail3" type="text" name="last_name" placeholder={last_name} {...register('last_name', registerOptions.last_name)}/>
                                        </div>
                                        <small className="text-danger">
                                            {errors?.last_name && errors.last_name.message}
                                        </small>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="form-input-btn_input">
                                            <input className="form-control" id="inputEmail3" name="email" type="email" placeholder={EmailAddress} {...register('email', registerOptions.email)} />
                                        </div>
                                        <small className="text-danger">
                                            {errors?.email && errors.email.message}
                                        </small>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="form-input-btn_input">
                                            <input className="form-control" id="inputEmail3" name="password" type="password" placeholder={Password} {...register('password', registerOptions.password)}/>
                                        </div>
                                        <small className="text-danger">
                                            {errors?.password && errors.password.message}
                                        </small>
                                    </div>
                                    
                                    <div className="col mb-4">
                                        <input className="form-check-input checkbox_animated" id="chk-ani" type="checkbox" name="privacy" {...register('privacy', registerOptions.privacy)}/>
                                        <label className="form-check-label check-dsgvo">Ich habe die <a href="https://www.smavio.de/datenschutz" title="Datenschutzerklärung">Datenschutzerklärung</a> zur Kenntnis genommen und stimme einer elektronischen Speicherung und Verarbeitung meiner Daten zu.</label>
                                        <div className="invalid-feedback">This is an error state form validation message!</div>
                                        <small className="text-danger">
                                            {errors?.privacy && errors.privacy.message}
                                        </small>
                                    </div>
                                    
                                    <div className="col mb-4">
                                        <input className="form-check-input checkbox_animated" id="chk-ani-one" type="checkbox" name="newsletter" {...register('newsletter', registerOptions.newsletter)} />
                                        <label className="form-check-label check-dsgvo">Ich bin damit einverstanden, Nachrichten und Updates von smavio zu erhalten.</label>
                                        <small className="text-danger">
                                            {errors?.newsletter && errors.newsletter.message}
                                        </small>
                                    </div>
                        
                                    <div className="row mb-5">
                                        <div className="form-input-btn_input d-grid">
                                            {!isLoading && (
                                                <button className="btn btn-primary mr-2">{StartNow}</button>

                                            )}
                                            {isLoading && (
                                            
                                                <button className="btn btn-primary mr-2" >
                                                    <i className="fa fa-spinner fa-spin"></i> {pleaseWait}
                                                </button>
                                            )}
                                           
                                        </div>
                                    </div>
                                </form>
                                
                                <div className="row text-center mb-5">
                                    <ul>
                                        <li>{AllreadyAccount}</li>
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
    );
};

export default RegisterFrom;
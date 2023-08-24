import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import app from "../../../utils/axios";
import { Btn, H1, UL, LI } from '../../components/AbstractElements';
import { EmailAddress, Forgot, Password, Login,pleaseWait } from '../../Constant';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../context/user";

const LoginForm = () => {
    const { user,setUser } = useUser({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleError = (errors) => { console.log(errors)}
    const [isLoading, setLoading] = useState(false);
    const router = useRouter();


    const registerOptions = {
        email: { required: "Email is required" },
        password: {
        required: "Password is required",
        minLength: {
            value: 5,
            message: "Password must have at least 8 characters"
        }
        }
    };


  
    

    const handleLogin = async (data) => {
        setLoading(true);
        try {
            const response = await app.post(
                "/login",
                JSON.stringify({ 'email':data.email, 'password':data.password})
            );
            if (response.status == 200) {
              
                if(response.data.type == 'admin'){
                    setLoading(false);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('type', response.data.type);
                    setUser(response.data);
                    await router.push("/admin/users");
                    toast.success('Erfolgreich eingeloggt!');
                   
                }else{
                    setLoading(false);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('type', response.data.type);
                    setUser(response.data);
                    await router.push("/profile");
                    toast.success('Erfolgreich eingeloggt!');
                    
                }
                
            }
            } catch (error) {
                setLoading(false);
                const errorsResponse = error.response.data.errors;
                errorsResponse.map((errorMessage) =>
                    toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true, 
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    })
                );
            }
    }



    return (
        <Fragment>

            <div className="mb-4 text-center">
                <H1>Hallo, willkommen zurück</H1>
            </div>
            <div>

                <form onSubmit={handleSubmit(handleLogin, handleError)}>
                    <div className="mb-3">
                       
                        <input
                        placeholder={EmailAddress}
                        className="form-control"
                        type="email"
                        name="email"
                        {...register('email', registerOptions.email)}
                        />
                        <small className="text-danger">
                        {errors?.email && errors.email.message}
                        </small>
                    </div>

                    <div className="mb-3">
                        <input
                        placeholder={Password}
                        className="form-control"
                        type="password"
                        name="password"
                        {...register('password', registerOptions.password)}
                        />
                        <small className="text-danger">
                        {errors?.password && errors.password.message}
                        </small>
                    </div>
                    <div className="mb-3 row text-center">
                        <UL>
                            <LI> <Link href="/forget-password"><a title="Passwort vergessen?">{Forgot}</a></Link></LI>
                        </UL>
                    </div>
        
                    <div className="mb-5 row">
                        <div className="form-input-btn_input d-grid">
                           {!isLoading && (
                            <Btn attrBtn={{ color: 'primary', className: 'btn-block'}} >{Login}</Btn>

                            )}
                            {isLoading && (
                               
                            <button className="btn btn-primary mr-2" >
                                <i className="fa fa-spinner fa-spin"></i> {pleaseWait}
                            </button>
                            )}

                        </div>
                    </div>

                    <div className="row text-center">
                        <UL>
                            <LI>Du hast noch keinen Account?</LI>
                            <LI>
                                <Link href="/register">
                                     <a title="Jetzt kostenlos registrieren">Jetzt kostenlos registrieren</a>
                                </Link>
                            </LI>
                        </UL>
                    </div>
                </form>

                
            </div>
        </Fragment>
    );
};

export default LoginForm;
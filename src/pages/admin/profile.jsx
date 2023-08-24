import { useState, useEffect,Fragment } from "react";
import app from "../../../utils/axios";
import { useRouter } from "next/router";
import FeatherIcon from "feather-icons-react";
import { useForm } from 'react-hook-form';
import { useUser } from "../../context/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Profil} from '../../Constant';
import ProfileImageCircle from "../../components/ProfileImageCircle";
import Head from 'next/head';
import Loader from '../../components/Layout/Loader';
const Profile = () => {

  const { user,setUser } = useUser({});
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleError = (errors) => {};

  const [Large, setLarge] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState();

  const router = useRouter();


  const initializeFields = () => {
    setFirstName(user.first_name || "");
    setLastName(user.last_name || "");
    setPhone(user.mobile || "");
    setEmail(user.email || "");
    setProfileImage(user.profile_picture || "");
  };





  useEffect(() => {

    if(localStorage.token){
      if (user && !user.type == 'admin') {
        localStorage.clear();
        router.push("/login");
      }else{
        initializeFields();
      }
    }else{
      router.push("/login");
    }

  }, []);

  const uploadImage = async (e) => {
    e.preventDefault();
    const img = e.target.files[0];
    const imgUrl = URL.createObjectURL(img);
    setProfileImage(imgUrl);
    const formData = new FormData();
    formData.append("image", img);
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.post("/profile-picture", formData);
      toast.success('Profile image has been updated');
    
      setUser(response.data.user);
      fetchUser();
    } catch (e) {
      console.log(e);
    }
  };


  const deleteProfilePic = async (e) => {
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    await app.delete("/delete_profilepic");
    setUser(response.data.user);
  };
  
  const registerOptions = {
    firstName: { required: "first Name is required" },
    lastName: { required: "Last Name is required" },
    phone: { required: "Phone is required" },
    email: { required: "Email is required" },

};



  const handleRegistration = async (e) => {

    let inputs = {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      password: password,

    }; 
    
    for (let index in inputs) {
      if (inputs[index] == "" || inputs[index] == null) {
        delete inputs[index];
      }
    }

    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.post("/admin/profile", JSON.stringify(inputs));
	    setUser(response.data);
      toast.success("Profile updated!");
    } catch (error) {
     
    }
  };




  return (
    <Fragment>
      <Loader/>
        <Head>
          <title>{Profil}</title>
        </Head>
      

         <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="container-fluid">
						<div className="row mt-5 mb-2">
							<div className="col-sm-12 col-xl-6 col-xxl-4 box-col-4 m-auto">
            
								<div className="row">
									<div className="col-sm-12 col-xl-9 box-col-9 my-auto">
										<h6>{Profil}</h6>
									</div>
									<div className="col-sm-12 col-xl-3 box-col-3 text-right">
                                   
									<div className="profile-picture ms-auto">
									
										{profileImage ? (
										     <img src={profileImage} id="photo" width={200} height={200} />

										) : (
											<ProfileImageCircle
											initials={user.name_initials}
											size={35}
											/>
										)}


										{profileImage ? (
                        <>
                        <div className="uploadBtn d-flex align-items-center justifiy-content-center"  onClick={() => {deleteProfilePic();}}><FeatherIcon icon="trash" size={12} /></div>
                        </>
                      ) : (
                        <>
                          <input type="file" id="selectFile" onChange={uploadImage} />
                              <label className="uploadBtn d-flex align-items-center justifiy-content-center" id="uploadBtn" >
                            <FeatherIcon icon="upload" size={12} />
                          </label>
                        </>
                      )}
									</div>
										
									</div>
								</div>
								<div className="row mt-4">
                 
									<div className="col-sm-12 col-xl-12 box-col-12">
										<div className="mb-3 row">
											<div className="col-sm-12 col-xl-6 box-col-6">
												<input className="form-control" type="text" 
												value={firstName} 
												onChange={(e) => setFirstName(e.target.value)}  
												name="firstName" placeholder="Vorname"/>
                      
				              </div>
											<div className="col-sm-12 col-xl-6 box-col-6">
												<input className="form-control" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} name="lastName"  placeholder="Nachname"/>
                      
				              </div>
										</div>
										<div className="mb-3 row">
											<div className="col-sm-12">
												<input className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} name="phome"  type="number" placeholder="Telefonnummer"/>
                     
				              </div>
										</div>
										<div className="mb-3 row">
											<div className="col-sm-12">
												<input className="form-control" id="inputEmail3"   onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="E-Mail-Adresse"/>
                    
											</div>
										</div>
										<div className="mb-3 row">
											<div className="col-sm-12">
												<input className="form-control" id="inputEmail3" onChange={(e) => setPassword(e.target.value)} name="password"  type="text" placeholder="Passwort"/>
      
											</div>
										</div>
									
									
									</div>


                  <div className="col-sm-12 col-xl-3 box-col-3 text-left">
                  <button className="btn btn-primary btn-medium mb-5" type="submit" data-bs-original-title="" title="">Speichern</button>
                  </div>

								</div>
							</div>
							
						</div>
					</div>

             

          </form>
          
        
       
    </Fragment>
  );
};

export default Profile;

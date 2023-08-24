import ProfileLayout from "../../components/ProfileLayout";
import { useState, useEffect } from "react";
import app from "../../../utils/axios";
import { useRouter } from "next/router";
import FeatherIcon from "feather-icons-react";
import { useForm } from 'react-hook-form';
import { useUser } from "../../context/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileImageCircle from "../../components/ProfileImageCircle";
import PaymentModel from '../../components/subscriptionModel/paymentModel';
import UserDeleteConfirmModel from '../../components/subscriptionModel/userDeleteConfirmModel';
import { LargeModal,Profil,Optional} from '../../Constant';
import Head from 'next/head';
import Loader from '../../components/Layout/Loader';
const Profile = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleError = (errors) => {};
  const [isLoading, setLoading] = useState(false);


  const { user,setUser } = useUser({});
  const LargeModaltoggle = () => setLarge(!Large);
  const [Large, setLarge] = useState(false);
  const [currentSubscription, setCurrentSubscription] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [role, setRole] = useState("");
  const [newsletter, setNewsletter] = useState(0);
  const [billingFirstName, setBillingFirstName] = useState("");
  const [billingLastName, setBillingLastName] = useState("");
  const [billingCompanyName, setBillingCompany] = useState("");
  const [street, setStreet] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [taxId, setTaxId] = useState("");
  const [profileImage, setProfileImage] = useState();

  const router = useRouter();

  const initializeFields = () => {
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setPhone(user.mobile);
    setEmail(user.email);
    setCompanyName(user.company_name);
    setIndustry(user.industry);
    setRole(user.role);
    setNewsletter(user.newsletter);
    setBillingFirstName(user.billing_first_name);
    setBillingLastName(user.billing_last_name);
    setBillingCompany(user.billing_company_name);
    setStreet(user.street);
    setHouseNo(user.street);
    setPostcode(user.house_no);
    setCity(user.city);
    setCountry(user.country);
    setTaxId(user.taxId);
    setProfileImage(user.profile_picture);
  };


  useEffect(() => {

		initializeFields();
	
	
  }, [user]);

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
    } catch (e) {
      console.log(e);
    }
  };


  const deleteProfilePic = async (e) => {
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.delete("/delete_profilepic");
    setUser(response.data.user);
	toast.error("User profile photo deleted!");
  };

  const registerOptions = {
    firstName: { required: "first Name is required" },
    lastName: { required: "Last Name is required" },
    phone: { required: "Phone is required" },
    email: { required: "Email is required" },
    companyName: { required: "company Name is required" },
    billingFirstName: { required: "Billing First Name is required" }

};


const deleteUser = async (e) => {

        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.delete("/delete_profile");
        toast.success("User profile deleted!");
        router.reload();
	
  };


  const handleRegistration = async (e) => {
    setLoading(true);
    let inputs = {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      password: password,
      company_name: companyName,
      industry: industry,
      role: role,
      newsletter: newsletter,
      billing_first_name: billingFirstName,
      billing_last_name: billingLastName,
      billing_company_name: billingCompanyName,
      street: street,
      house_no: houseNo,
      postcode: postcode,
      city: city,
      country: country,
      tax_id: taxId,
    }; 
    
    for (let index in inputs) {
      if (inputs[index] == "" || inputs[index] == null) {
        delete inputs[index];
      }
    }

    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.post("/profile", JSON.stringify(inputs));
	  setUser(response.data);
      toast.success("Profile updated!");
	  setLoading(false);
    } catch (error) {
	   setLoading(flase);
    }
  };




  return (
    <ProfileLayout>
		 <Loader/>
        <Head>
          <title>{Profil}</title>
        </Head>
      

         <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="container-fluid">
				<div className="row mt-5 mb-2">
					<div className="col-sm-12 col-xl-6 col-xxl-4 box-col-4">

						<div className="row">
							<div className="col-sm-12 col-xl-9 box-col-9 my-auto">
								<h6>{Profil}</h6>
							</div>
							<div className="col-sm-12 col-xl-3 box-col-3 text-right">
							
							<div className="profile-picture ms-auto">
							
								{profileImage ? (
									<>
										<img src={profileImage} id="photo" width={200} height={200} />
									
									</>
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
								        <label htmlFor="selectFile" className="uploadBtn d-flex align-items-center justifiy-content-center" id="uploadBtn" >
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
								<div className="mb-3 row">
									<div className="col-sm-12">
										<input className="form-control" id="inputEmail3" onChange={(e) => setCompanyName(e.target.value)} value={companyName} type="text" name="companyName"  placeholder="Unternehmen"/>
									</div>
								</div>
								<div className="mb-3 row">
									<div className="col-sm-12">
										<select className="form-select digits" onChange={(e) => setIndustry(e.target.value)}  name="industry" value={industry} id="exampleFormControlSelect9">
											<option>Ihre Branche</option>
											<option>Branche 2</option>
											<option>Branche 3</option>
											<option>Branche 4</option>
											<option>Branche 5</option>
										</select>
									</div>
								</div>
								{/* <div className="mb-3 row">
									<div className="col-sm-12">
										<select className="form-select digits" onChange={(e) => setRole(e.target.value)}  value={role} name="role" id="exampleFormControlSelect9">
											<option>Ihre Rolle</option>
											<option>Rolle 2</option>
											<option>Rolle 3</option>
											<option>Rolle 4</option>
											<option>Rolle 5</option>
										</select>
									</div>

								</div> */}
								<div className="col">
									<input className="form-check-input checkbox_animated"  onChange={(e) => setNewsletter(newsletter == 0 ? 1 : 0)} checked={newsletter} name="newsletter" id="newsletter" type="checkbox" data-bs-original-title="" title=""/>
									<label className="form-check-label" >Ich bin damit einverstanden, Nachrichten und Updates von smavio zu erhalten.</label>
			
								</div>
							</div>
		

		


						</div>
					</div>
					<div className="col-sm-12 col-xl-6 col-xxl-4 box-col-4" style={{paddingTop: '48px'}}>
						<div className="row">
							<div className="col-sm-12 col-xl-9 box-col-9 my-auto">
								<h6>Rechnungsadresse</h6>
							</div>
							
						</div>
						<div className="row mt-4">
							<div className="col-sm-12 col-xl-12 box-col-12">
			
								<div className="mb-3 row">
									<div className="col-sm-12 col-xl-6 box-col-6">
										<input className="form-control" type="text" name="billingFirstName" onChange={(e) => setBillingFirstName(e.target.value)} value={billingFirstName}  placeholder="Vorname"/>
						</div>
									<div className="col-sm-12 col-xl-6 box-col-6">
										<input className="form-control" type="text"   onChange={(e) => setBillingLastName(e.target.value)} value={billingLastName} name="billingLastName" placeholder="Nachname"/>
						</div>
								</div>
								<div className="mb-3 row">
									<div className="col-sm-12">
										<input className="form-control" id="inputEmail3"  onChange={(e) => setBillingCompany(e.target.value)} name="billingCompanyName" value={billingCompanyName} type="text" placeholder="Unternehmen"/>
						</div>
								</div>
								<div className="mb-3 row">
									<div className="col-sm-12 col-xl-6 box-col-6">
										<input className="form-control" type="text"  onChange={(e) => setStreet(e.target.value)} value={street} name="street" placeholder="Straße"/>
						</div>
									<div className="col-sm-12 col-xl-6 box-col-6">
										<input className="form-control" type="text" onChange={(e) => setHouseNo(e.target.value)} value={houseNo} name="houseNo" placeholder="Hausnr."/>
						</div>
								</div>
								<div className="mb-3 row">
									<div className="col-sm-12 col-xl-6 box-col-6">
										<input className="form-control" type="text"  onChange={(e) => setPostcode(e.target.value)} value={postcode}  name="postcode" placeholder="PLZ"/>
						</div>
									<div className="col-sm-12 col-xl-6 box-col-6">
										<input className="form-control" type="text" onChange={(e) => setCity(e.target.value)} value={city}  name="city" placeholder="Stadt"/>
						</div>
								</div>
								<div className="mb-3 row">
									<div className="col-sm-12">
										<input className="form-control"   onChange={(e) => setCountry(e.target.value)} value={country} id="inputEmail3"  name="country" type="text" placeholder="Land"/>
						</div>
								</div>
								<div className="mb-3 row">
									<div className="col-sm-12">
										<input className="form-control" onChange={(e) => setTaxId(e.target.value)} value={taxId} name="taxId" id="inputEmail3" type="text" placeholder="Umsatzsteuer ID *"/>
						</div>
								</div>
								<div className="mb-3 row">
									<div className="col-sm-12"><small>* {Optional}</small></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-12 col-xl-4 box-col-4"></div>
				</div>

				<div className="col-sm-12 col-xl-3 box-col-3 text-left">

				{!isLoading && (
				<button className="btn btn-primary mr-2" >Speichern</button>

				)}
				{isLoading && (
					
				<button className="btn btn-primary mr-2" >
					<i className="fa fa-spinner fa-spin"></i> Please wait...
				</button>
				)}

				</div>
			</div>
         </form>
          
        
        <div className="container-fluid">
			<div className="row mt-5 mb-2">
				<div className="col-sm-12 col-xl-6 col-xxl-4 box-col-3">
					<span className="underline">
						<h6><a title=""  onClick={() => {deleteUser();}}>Profil löschen</a></h6>
				
		
					<UserDeleteConfirmModel isOpen={Large} title={LargeModal} userDelete={true} toggler={LargeModaltoggle} size="ml">...</UserDeleteConfirmModel>

					</span>
					<p className="mt-2">Wenn du dein Profil löschst, gehen alle Daten unwiderruflich verloren und alle Endgeräte werden deaktiviert.</p>
				</div>
				<div className="col-sm-12 col-xl-9 box-col-9"></div>
			</div>
		</div>
    </ProfileLayout>
  );
};

export default Profile;

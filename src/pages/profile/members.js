import ProfileLayout from "../../components/ProfileLayout";
import { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import app from "../../../utils/axios";
import MembersListItem from "../../components/Members/ListItem";
import MembersList from "../../components/Members/List";
import InviteeList from "../../components/Members/InviteeList";
import router, { useRouter } from "next/router";
import Head from 'next/head'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../context/user";
import { Still,PlaceAvailable,Note,Kindlypress,YourTeam,InviteEmployees} from '../../Constant';
import Loader from '../../components/Layout/Loader';

const ProfileMembers = () => {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { user,setUser } = useUser({});
  const router = useRouter();


  const deleteSubUser = async (memberId) => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.delete(`/sub-user/${memberId}`);
      toast.success("Sub user removed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {}
  };

  const deleteInvitation = async (invitationId) => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.delete(`/sub-user/invitation/${invitationId}`);
      toast.success("Invitation removed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {}
  };

  useEffect(() => {
  },[]);

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const inviteUsers = async (e) => {
    e.preventDefault();
    try{
    const emails = value.map((val) => val.value);
    const response = await app.post(
      "/sub-user/invite",
      JSON.stringify({ emails })
    );
    setValue("");
    toast.success(`${emails.length} users are invited`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  } catch (errors) {
    const errorsResponse = errors.response.data.errors;
    console.log(errorsResponse)
    for (const error in errorsResponse) {
      console.log(error)
      toast.error(errorsResponse[error], {
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


  const components = {
    DropdownIndicator: null,
  };

  const createOption = (label) => ({
    label,
    value: label,
  });

  const handleChange = (value, actionMeta) => {
    setValue(value);
  };
  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };
  const handleKeyDown = (event) => {
    if (!inputValue) return;
    if (!validateEmail(inputValue)) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue([...value, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };
  return (
    <ProfileLayout>
       <Loader/>
          <Head>
          <title>Mitarbeiter</title>
        </Head>

      <div
        className="container-fluid"
        id="employee"
        aria-labelledby="employee-tab"
      >
        <h5 className="pt-4 fw-bold">{YourTeam}</h5>
        {user &&
          user.type == "user" &&
          user.plan &&
          user.plan.no_of_employees - user.sub_users.length != 0 && (
            <div className="input-group mb-3 pt-4">
              <CreatableSelect
                components={components}
                inputValue={inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                onChange={handleChange}
                onInputChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Geben Sie etwas ein und drücken Sie die Eingabetaste..."
                value={value}
                className="form-control"
              />
              <button
                className="btn btn-primary rounded-0 px-3"
                onClick={inviteUsers}
              >
                {InviteEmployees}
              </button>
            </div>
          )}

          <h6 className="mb-2"><b>{Note}:</b> {Kindlypress}.</h6>
          <div className="card">
            <div className="table-responsive">
              <table id="exampleTable" className="table table-hover">
                <tbody>
                  {typeof user.first_name != "undefined" && (
                    <MembersListItem
                      memberProp={user}
                      withPermission={false}
                      deleteSubUser={deleteSubUser}
                    />
                  )}
                  {user.sub_users != null ? (
                    <MembersList
                      members={user.sub_users}
                      deleteSubUser={deleteSubUser}
                    />
                  ) : (
                    <></>
                  )}
                  {user.parent_user != null ? (
                    <MembersListItem
                      memberProp={user.parent_user}
                      withPermission={false}
                      deleteSubUser={deleteSubUser}
                    />
                  ) : (
                    <></>
                  )}
                  {user.sub_user_invitations != null && (
                    <InviteeList
                      members={user.sub_user_invitations}
                      deleteSubUser={deleteInvitation}
                    />
                  )}
                </tbody>
              </table>
            
            </div>
          </div>

          <div>

            
          {user && !user.user_id && (
                <p>
                  ({Still}{" "} <b className="color-body-primary"> {user &&
                    user.plan &&
                    user.plan.no_of_employees - user.sub_users.length}{" "}</b>
                 
                 {PlaceAvailable})
                </p>
              )}
          </div>
        <div
          className="modal fade"
          id="addSubUser"
          tabIndex={-1}
          aria-labelledby="addSubUser"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content rounded-0 border-1 border-dark">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body m-lg-5 m-md-4 m-3">
                <h5 className="text-center">
                  Hallo Kim. Möchtest du dem Team von Ingmar Hansen
                  <br /> beitreten? Du kannst sofort damit beginnen, smavio
                  <br /> Kampagnen zu erstellen.
                </h5>
                <div className="d-flex justify-content-center mt-4">
                  <form className="col-lg-6 col-md-8 col-12">
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control border-1 rounded-0 border-dark"
                        id="inputName3"
                        placeholder="Vorname"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control border-1 rounded-0 border-dark"
                        id="inputName"
                        placeholder="Nachname"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control border-1 rounded-0 border-dark"
                        id="exampleFormControlInput3"
                        placeholder="E-Mail-Adresse"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control border-1 rounded-0 border-dark"
                        id="inputPassword"
                        placeholder="Passwort"
                      />
                    </div>
                    <div className="mb-2 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input rounded-0"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Datenschutz
                      </label>
                    </div>
                    <div className="mb-4 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input rounded-0"
                        id="exampleCheck3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck2"
                      >
                        Newsletter
                      </label>
                    </div>
                    <button
                      type="registration"
                      className="btn btn-primary border-0 rounded-0 w-100 bg-dark"
                    >
                      Jetzt starten
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfileMembers;

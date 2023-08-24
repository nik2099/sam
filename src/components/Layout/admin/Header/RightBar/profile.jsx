import React, { Fragment } from 'react';
import { useRouter } from "next/router";
import app from "../../../../../../utils/axios";
import Link from 'next/link';
import ProfileImageCircle from "../../../../ProfileImageCircle";
import { useUser } from "../../../../../context/user";
import { toast } from "react-toastify";

const ProfileclassName = () => {
   
    const router = useRouter();
    const { user } = useUser({});
   

    const logout = async () => {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        await app.get("/logout");
        localStorage.clear();
        router.push("/login");
        toast.success('LogOut Successfuly');
      };


    return (
        <Fragment>

       
                <li className="onhover-dropdown">

                {user.profile_picture ? (
                    <img
                    src={user.profile_picture}
                    id="profile-photo"
                    className="rounded-circle"
                    alt=""
                    style={{height: '32px',width: '32px'}}
                    />
                ) : (
                    <ProfileImageCircle
                    initials={
                        user.first_name &&
                        user.first_name.charAt(0) + user.last_name.charAt(0)
                    }
                    size={35}
                    />
                )}

            
                    <div className="bookmark-dropdown onhover-show-div">
                        <ul className="m-t-5 setting-nav">
                            <li>
                            {user.profile_picture ? (
                                <img
                                src={user.profile_picture}
                                id="profile-photo"
                                className="rounded-circle"
                                alt=""
                                style={{height: '32px',width: '32px'}}
                                />
                            ) : (
                                <ProfileImageCircle
                                initials={
                                    user.first_name &&
                                    user.first_name.charAt(0) + user.last_name.charAt(0)
                                }
                                size={35}
                                />
                            )}
                                <div className="setting-nav-user">{user.name}</div>
                            </li>
                            <li className="setting-nav-settings">
                                <Link href="/admin/profile">
                                    <a title="Einstellungen" className="color-body">Einstellungen</a>
                                </Link>
                            </li>
                            <li className="setting-nav-logout"><a onClick={logout}>Abmelden</a></li>
                        </ul>
                    </div>
                </li>
           
          
        </Fragment>
    );
};

export default ProfileclassName;
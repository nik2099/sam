import ProfileLayout from "../../components/ProfileLayout";
import { useState, useEffect } from "react";
import app from "../../../utils/axios";
import router, { useRouter } from "next/router";
import Link from "next/link";
import Head from 'next/head';
import Loader from '../../components/Layout/Loader';

const ProfilePaymentMethods = () => {
  const [pmType, setPmType] = useState("");
  const [pmLastFour, setPmLastFour] = useState(0);

  const fetchUser = async () => {
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.get("/user");
    const user = response.data;
    if (!user.pm_type) {
      router.push("/profile/update-payment-method");
    }
    setPmType(user.pm_type);
    setPmLastFour(user.pm_last_four);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <ProfileLayout>
       <Loader/>
         <Head>
          <title>Zahlungsmethode</title>
        </Head>

      <div className="container-fluid">
        <div className="row mt-5 mb-2">
          <div className="col-sm-12 col-xl-6 col-xl-3 box-col-3 my-auto">
            <h5 className="pt-4 fw-bold">Deine aktuelle Zahlungsmethode</h5>
            <div className="d-flex align-items-center mt-5">
              <span className="text-uppercase fw-bolder">
                {pmType} ****{pmLastFour}
              </span>
              <Link href="/profile/update-payment-method">
                <button
                  type="button"
                  className="btn btn-primary btn-w150-center"
                >
                  Ändern
                </button>
              </Link>
            </div>
        </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default ProfilePaymentMethods;

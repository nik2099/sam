import ProfileLayout from "../../components/ProfileLayout";
import app from "../../../utils/axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';
import Loader from '../../components/Layout/Loader';

const ProfileNotifications = () => {
  const [campaignCreated, setCampaignCreated] = useState(1);
  const [campaignPaused, setCampaignPaused] = useState(1);
  const [deviceConnected, setDeviceConnected] = useState(1);
  const [deviceRemoved, setDeviceRemoved] = useState(1);
  const [reportAvailable, setReportAvailable] = useState(1);
  const [appAdded, setAppAdded] = useState(1);
  const [appPublished, setAppPublished] = useState(1);
  const [isLoading, setLoading] = useState(false);


  const getSettings = async () => {
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.get("/notification-settings");
    const {
      campaign_created,
      campaign_paused,
      device_connected,
      device_removed,
      report_available,
      app_added,
      app_published,
    } = response.data;
    setCampaignCreated(campaign_created);
    setCampaignPaused(campaign_paused);
    setDeviceConnected(device_connected);
    setDeviceRemoved(device_removed);
    setReportAvailable(report_available);
    setAppAdded(app_added);
    setAppPublished(app_published);
  };

  const updateSettings = async () => {
    setLoading(true);
    app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    const response = await app.post(
      "/notification-settings",
      JSON.stringify({
        campaign_created: campaignCreated,
        campaign_paused: campaignPaused,
        device_connected: deviceConnected,
        device_removed: deviceRemoved,
        report_available: reportAvailable,
        app_added: appAdded,
        app_published: appPublished,
      })
    );
    if (response.status == 200) {
      setLoading(false);
      const {
        campaign_created,
        campaign_paused,
        device_connected,
        device_removed,
        report_available,
        app_added,
        app_published,
      } = response.data;
      toast.success("Notification settings updated!");
      setCampaignCreated(campaign_created);
      setCampaignPaused(campaign_paused);
      setDeviceConnected(device_connected);
      setDeviceRemoved(device_removed);
      setReportAvailable(report_available);
      setAppAdded(app_added);
      setAppPublished(app_published);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);
  return (

   
    <ProfileLayout>
      <Loader/>
       <Head>
        <title>Benachrichtigungen</title>
      </Head>


          <div className="container-fluid">
						<div className="row mt-5 mb-2">
							<div className="col-sm-12 col-xl-12 box-col-12 my-auto">
								<h6>Ich möchte bei diesen Ereignissen per E-Mail benachrichtigt werden</h6>
								<div className="col mt-3 info-checkbox">
									<input className="form-check-input checkbox_animated" id="chk-ani" type="checkbox"  checked={campaignCreated}m
                  onChange={(e) => {
                    setCampaignCreated(campaignCreated == 1 ? 0 : 1);
                  }}/>
                  <label className="form-check-label" >Wenn eine Kampagne erstellt wurde</label>

									<input className="form-check-input checkbox_animated" id="chk-ani1" type="checkbox" checked={campaignPaused}
                  onChange={(e) => {
                    setCampaignPaused(campaignPaused == 1 ? 0 : 1);
                  }}/>
                  <label className="form-check-label" >Wenn eine Kampagne pausiert wurde</label>

									<input className="form-check-input checkbox_animated" id="chk-ani2" type="checkbox"   checked={deviceConnected}
                  onChange={(e) => {
                    setDeviceConnected(deviceConnected == 1 ? 0 : 1);
                  }}/>
                  <label className="form-check-label" >Wenn ein neues Endgerät mit dem Account verbunden wurde</label>
									<input className="form-check-input checkbox_animated" id="chk-ani3" type="checkbox"  checked={deviceRemoved}
                  onChange={(e) => {
                    setDeviceRemoved(deviceRemoved == 1 ? 0 : 1);
                  }}/>
                  <label className="form-check-label" >Wenn ein Endgerät aus dem Account entfernt wurde</label>

									<input className="form-check-input checkbox_animated" id="chk-ani4" type="checkbox"  checked={reportAvailable}
                  onChange={(e) => {
                    setReportAvailable(reportAvailable == 1 ? 0 : 1);
                  }}/>
                  <label className="form-check-label" >Wenn ein Kampagnenbericht verfügbar ist</label>

									<input className="form-check-input checkbox_animated" id="chk-ani5" type="checkbox"  checked={appAdded}
                  onChange={(e) => {
                    setAppAdded(appAdded == 1 ? 0 : 1);
                  }}/>
                  <label className="form-check-label" >Wenn eine neue App zu meinen Apps hinzugefügt wurde</label>

									<input className="form-check-input checkbox_animated" id="chk-ani6" type="checkbox"  checked={appPublished}
                  onChange={(e) => {
                    setAppPublished(appPublished == 1 ? 0 : 1);
                  }}/>
                  <label className="form-check-label">Wenn neue Apps im Appstore verfügbar sind</label>
								</div>
                
                <div className="mt-3">
                {!isLoading && (
                    <button
                    type="button"
                    className="btn btn-primary btn-medium"
                    onClick={updateSettings}
                  >
                    Speichern
                  </button>
                   

                )}
                {isLoading && (
                
                    <button className="btn btn-primary mr-2" >
                        <i className="fa fa-spinner fa-spin"></i> Please wait...
                    </button>
                )}


                  
                </div>
							</div>
              
						</div>
					</div>

    </ProfileLayout>
  );
};

export default ProfileNotifications;

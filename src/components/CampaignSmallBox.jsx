import { useState, useEffect } from "react";
import Link from 'next/link';
import app from '../../utils/axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from 'moment';

const CampaignSmallBox = ({campaignDetail, deleteCampaign,changeCampaignStatus}) => {
  const [campaign, setCampaign] = useState(campaignDetail);
  const [campaignStatus, setCampaignStatus] = useState(campaignDetail.status);
  const time = Moment(campaignDetail.created_at).format("DD-MM-YYYY h:mm:ss");
  
  const setCampainActive = async () => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const response = await app.get(`/activateCampaign/${campaignDetail.id}`);

      if (response.status == 200) {
        toast.success("Kampagne aktiv!"); 
        changeCampaignStatus(campaignDetail.id,1);
      }else{
        toast.error("Etwas ist schief gelaufen!"); 
      }
     
    } catch (error) {
      toast.error("Etwas ist schief gelaufen!");
    }
  };
  
   const setCampainPaused = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get(`/pauseCampaign/${campaignDetail.id}`);

        if (response.status == 200) {
          // setCampaignStatus(0);
          toast.success("Kampagne pausiert!"); 
          changeCampaignStatus(campaignDetail.id,0)
        }else{
          toast.error("Etwas ist schief gelaufen!"); 
        }
       
      } catch (error) {
        toast.error("Etwas ist schief gelaufen!");
      }
    };


    const campainDelete = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await app.get(`/deleteCampaign/${campaignDetail.id}`);
        
        if (response.status == 200) {
          toast.success("Kampagne wurde gelöscht!"); 
          deleteCampaign(campaignDetail.id);
        }else{
          toast.error("Etwas ist schief gelaufen!"); 
        }
      } catch (error) {
        toast.error("Etwas ist schief gelaufen!");
      }
    };

    return (
        <>
		<div className="">
			<div className="card h-100 card-full">
				<div className="table-responsive">
					<table className="table">
						<tbody>
							<tr>
								<td colSpan="2" className="app-image-wrapper">
									<div className="dots-wrapper">
										<div className="page-item-header">
											<div className="main-header-right row m-0">
												<div className="nav-right col pull-right right-menu p-0">
													<ul className="nav-menus">
														<li className="onhover-dropdown">
															<i className="icon-more-alt"></i>
															<div className="bookmark-dropdown onhover-show-div">
																<ul className="m-t-1">
																	<li className="p-1">
																	<Link href={{
																		pathname: "/campaign/prepare",
																		query: {campaignid: `${campaignDetail.id}`}, // the data
																		}}>
																		<a className="color-body" >Bearbeiten</a>
																	</Link>
																	</li>

																	<li className="p-1">
																	<Link href={`/campaign/${campaignDetail.id}/preview`}>
																		<a target="_blank" className="color-body" >Vorschau</a>
																	</Link>
																	</li>

																	{ campaignDetail.status == 1 ? (
																		<li className="p-1">
																			<a className="color-body" onClick={() => {setCampainPaused(campaignDetail.id)}} >Pausieren</a>
																		</li>
																	):(
																		<li className="p-1">
																			<a className="color-body" onClick={() => {setCampainActive(campaignDetail.id)}} >Aktiv</a>
																				
																		</li>
																	)}

																	<li className="p-1">
																			
																			<a className="color-body" onClick={() => {campainDelete(campaignDetail.id)}}>Löschen</a>
																		
																	</li>
																	
																</ul>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div>
										<img src={campaignDetail.template.image} alt=""/>
									</div>
									<div className="device-wrapper">
										<div className="hw-tooltip-wrapper hw-tooltip-b2 hw-tooltip-l1 hidden">
											<div className="hw-tooltip" >3 Gerät/e in dieser Kampagne aktiv</div>
											<div className="hw-tooltip-arrow"></div>
										</div>
										<div className="icons-wrapper">
											<div className="icons-wrapper-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg></div>
											<div className="icons-wrapper-count"> {campaignDetail.no_of_devices}</div>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td className="align-middle">
									<b>{campaignDetail.name}</b>
									<br/>
									<small>Zuletzt aktualisiert {time}</small>
								</td>
								<td className="align-middle" >
									<div className="status-wrapper">
										<div className="hw-tooltip-wrapper hw-tooltip-b0 hidden" >
											<div className="hw-tooltip" >Kampagne aktiv</div>
											<div className="hw-tooltip-arrow"></div>
										</div>

										{ campaignDetail.status == 1 ? (
											<div className="dot-green"></div>
										):(
											<div className="dot-red"></div>
										)}
										
										
									</div>
									
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
        </>
        );
    };
    
    export default CampaignSmallBox;
    
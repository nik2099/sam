import app from "../../utils/axios";
import AppLayout from '../components/Layout/Layout';
import Loader from '../components/Layout/Loader';
import { useRouter } from "next/router";
import React, { Fragment } from 'react';
import { useContext, useState, useEffect} from 'react';
import Link from 'next/link';
import CampaignSmallBox from "../components/CampaignSmallBox";
import { Btn } from '../components/AbstractElements';
import { LargeModal,NewCampaign,Available,Still,AllCampaign,ActiveCampaign,PauseCampaign,Upgrade} from '../Constant';
import { CampaignTitle} from '../Constant/seo';
import UpgradeModel from '../components/subscriptionModel/upgradeModel';
import Head from 'next/head';
import { toast } from "react-toastify";
import { useUser } from "../context/user";
import axios from 'axios';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Campaign = () => {

    const { user,setUser } = useUser({});
    const [Large, setLarge] = useState(false);
    const LargeModaltoggle = () => setLarge(!Large);
    const [campaigns, setCampaigns] = useState([]);
    const router = useRouter();
    const [filterParam, setFilterParam] = useState(["All"]);
    const [inputText, setInputText] = useState('');
    const [generatedText, setGeneratedText] = useState('');
    const [generatedText2, setGeneratedText2] = useState();


    // const {
    //   transcript,
    //   listening,
    //   resetTranscript,
    //   browserSupportsSpeechRecognition
    // } = useSpeechRecognition();
  
    // if (!browserSupportsSpeechRecognition) {
    //   return <span>Browser doesn't support speech recognition.</span>;
    // }
    const deleteCampaign = async (campaign_id) => {
  
      let updatedCampaigns  =     campaigns.filter(campaign => campaign.id !== campaign_id);
      setCampaigns(updatedCampaigns);
      // this.setState({ tasks: updatedTasks });
      
    }

    // const handleGenerateText = async () => {
    //   axios.defaults.headers.common['Authorization'] = `Bearer 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`;
    //   const response = await axios.post('https://api.openai.com/v1/completions', {
    //     model:"text-davinci-001",
    //     prompt: inputText,
    //     temperature:0.4,
    //     max_tokens:1400,
    //     top_p:1,
    //     frequency_penalty:0,
    //     presence_penalty:0,
    //   });

    //   setGeneratedText(response.data.choices[0].text);
    // };

    const changeCampaignStatus = async (campaign_id,status) =>{
      let updatedCampaigns  =     campaigns.map((campaign, index) => {
      if(campaign.id == campaign_id){
        campaign.status = status
      }
      return campaign
      });
      setCampaigns(updatedCampaigns);
    }

 


    const getCampaigns = async () => {
      try {
        app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const campaignResponse = await app.get("/getCampaignList");
        
        setCampaigns(campaignResponse.data.campaigns);
       
      } catch (error) {
      }
    };
    
    
    useEffect(() => {
      // const alanBtn = require('@alan-ai/alan-sdk-web');
      // alanBtn({
      //   key: "102949261a1ee50b876de23749e5fea92e956eca572e1d8b807a3e2338fdd0dc/stage",
      //   rootEl: document.getElementById("alan-btn"),
      //   onCommand: () => {
      //     setGeneratedText2(count.current.text);
      //     console.info('Actual count value:', count.current.text);
      //   }
      // });

      if(localStorage.token){
        if (user && !user.type == 'user') {
          localStorage.clear();
          router.push("/login");
        }else{
          getCampaigns();
        }
      }else{
        router.push("/login");
      }

    },[]);

   

  return (

    <Fragment>
       <Loader />
        <Head>
           <title>{CampaignTitle}</title>
        </Head>

        {/* <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div> */}
        {/* <div>
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button onClick={handleGenerateText}>Generate text</button>
                <p>{generatedText}</p>
                <p>{generatedText2}</p>
                </div> */}

 
          <div className="container-fluid">
            <div className="row mt-2 mb-2">
              <div className="col-sm-12 col-md-8 col-xl-9 col-xxl-10 box-col-10">&nbsp;</div>
              <div className="col-sm-12 col-md-4 col-xl-3 col-xxl-2 box-col-2">
                <div className="row">
                  <div className="col-sm-12 ">
                        <select className="form-select digits"  onChange={(e) => { setFilterParam(e.target.value);}}>
                            <option value="All">{AllCampaign}</option>
                            <option value="1">{ActiveCampaign}</option>
                            <option value="0">{PauseCampaign}</option>
                        </select>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container-fluid">
              <div className="row mt-5 mb-2">
                  <div className="col-sm-12 col-md-4 col-xl-4 col-xxl-3 bubbling-href-wrapper">
                      <div id="addNewWrapper" data-type="kampagne" className="card h-100 card-full">
                        <div className="card-body text-center">
                          <div className="d-flex align-items-center justify-content-center h-100">
                            <div className="flex-column">
                              <div>
                              { user && user.type == "user" && user.plan && user.plan.no_of_campaigns-campaigns.length > 0 && (
                              <Link href="/campaign/prepare">
                                    <i className="fa fa-plus mb-3" style={{fontSize:'2vw'}}></i>
                                </Link>
                              )}
                                <br/>
                                
                                <h2 className="mt-3 color-body">{NewCampaign}</h2>
                                <p className="color-body">{Still} <b className="color-body-primary">{user && user.type == "user" && user.plan && user.plan.no_of_campaigns-campaigns.length > 999 ? 'Infinite' : user.plan && user.plan.no_of_campaigns-campaigns.length}</b> {Available}</p>
                              
                              </div>
                                <div className="mt-5">
                                <Btn attrBtn={{ color: "primary", onClick: LargeModaltoggle }}>{Upgrade}</Btn>
                                {/* <button className="btn btn-info-light btn-medium" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalUpgrade" data-bs-original-title="" title="">Upgrade</button> */}
                                
                                <UpgradeModel isOpen={Large} title={LargeModal} toggler={LargeModaltoggle} size="xl">...</UpgradeModel>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

                  { filterParam == 'All' ? (
                    
                      campaigns.map((elm) => {
                      return (<div className="col-sm-12 col-md-4 col-xl-4 col-xxl-3 bubbling-href-wrapper" key={elm.id}><CampaignSmallBox  deleteCampaign={deleteCampaign} campaignDetail = {elm} changeCampaignStatus={changeCampaignStatus}/></div>)
                    })
                    
                  
                  ):(

                  
                    campaigns
                      .filter(campaigns => campaigns.status == filterParam)
                      .map( (elm)=>{
                      return (<div className="col-sm-12 col-md-4 col-xl-4 col-xxl-3 bubbling-href-wrapper" key={elm.id}><CampaignSmallBox  deleteCampaign={deleteCampaign} campaignDetail = {elm} changeCampaignStatus={changeCampaignStatus}/></div>)
                      })
                          
                          
                  )}
          
              </div>
          </div>
        
         
    </Fragment>
  );
};
export default Campaign;

import dynamic from 'next/dynamic';
import app from '../../../../utils/axios';
import { useRouter } from 'next/router';
import { useContext, useState, useRef,useEffect} from 'react';
import Head from 'next/head';
import { GithubPicker } from 'react-color';
import React, { Fragment } from 'react';
import { toast } from "react-toastify";
import Link from 'next/link';
import Loader from '../../../components/Layout/Loader';
import {pleaseWait} from '../../../Constant';
import { Accordion, Col } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H5 } from '../../../components/AbstractElements';
import EdiText from 'react-editext';

const Editor = ({ campaign_id,template_detail}) => {
  const [templatename, setTemplatename] = useState(template_detail.template.name);
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(0);
  const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));

  const getCampaign = async () => {
    try {
      app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
      const responseUser = await app.get(`/getCampaign/${campaign_id}`);
      setTemplatename(responseUser.data.campaign.template.name);
    } catch (error) {
      // router.push('/login');
    }
  };

  

  useEffect(() => {
    getCampaign();
  },[]);

  
 
  const navBarEditor = useRef();
  const welcomeEditor = useRef();
  const kontaktEditor = useRef();
  const eigenschaftenEditor = useRef();
  const galerieEditor = useRef();
  const [animationParam, setAnimationParam] = useState();
  const [animationButtonOn, setAnimationButtonOn] = useState(false);

  const [commonColor, setCommonColor] = useState('#434343d1');
  const [templateEditable, setTemplateEditable] = useState('true');
  const [editorNav, editorNavs] = useState('true');
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('#434343d1');
  const [navbarColor, setNavbarColor] = useState('#cd9323');
  const [navbarActiveColor, setNavbarActiveColor] = useState('#cd9323');

  const [navbarWelcomeMenu, setNavbarWelcomeMenu] = useState('Welcome');
  const [navbarProductDetail1Menu, setNavbarProductDetail1Menu] = useState('Product Detail 1');
  const [navbarProductDetail2Menu, setNavbarProductDetail2Menu] = useState('Product Detail 2');
  const [navbarProductDetail3Menu, setNavbarProductDetail3Menu] = useState('Product Detail 3');
  const [navbarProductDetail4Menu, setNavbarProductDetail4Menu] = useState('Product Detail 4');
  const [navbarfrage1Menu, setNavbarFrage1Menu] = useState('Question 1');
  const [navbarfrage2Menu, setNavbarFrage2Menu] = useState('Question 2');
  const [navbarfrage3Menu, setNavbarFrage3Menu] = useState('Question 3');
  const [navbarVideoMenu, setNavbarVideoMenu] = useState('video');
  const [navbarGalleryMenu, setNavbarGalleryMenu] = useState('Gallery');
  const [navbarContactMenu, setNavbarContactMenu] = useState('Contact');

  const [welcomeHeading, setWelcomeHeading] = useState('Dies ist ein');
  const [welcomeSubHeading, setWelcomeSubHeading] = useState('Dies ist ein Typoblindtext');
  const [welcomeDescription, setWelcomeDescription] = useState('Dies ist ein Typoblindtext');
  const [welcomeImage1Url, setWelcomeImage1Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage2Url, setWelcomeImage2Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage3Url, setWelcomeImage3Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage4Url, setWelcomeImage4Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage5Url, setWelcomeImage5Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage6Url, setWelcomeImage6Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage7Url, setWelcomeImage7Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage8Url, setWelcomeImage8Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage1File, setWelcomeImage1File] = useState('');
  const [welcomeImage2File, setWelcomeImage2File] = useState('');
  const [welcomeImage3File, setWelcomeImage3File] = useState('');
  const [welcomeImage4File, setWelcomeImage4File] = useState('');
  const [welcomeImage5File, setWelcomeImage5File] = useState('');
  const [welcomeImage6File, setWelcomeImage6File] = useState('');
  const [welcomeImage7File, setWelcomeImage7File] = useState('');
  const [welcomeImage8File, setWelcomeImage8File] = useState('');
  const [welcomeButton1Text, setWelcomeButton1Text] = useState('Analog, was sonst');
  const [welcomeButton2Text, setWelcomeButton2Text] = useState('Digital ist mein Ding');
  const [welcomeButton3Text, setWelcomeButton3Text] = useState('Mehr erfahren');
  const [welcomeButton4Text, setWelcomeButton4Text] = useState('Mehr erfahren');

  const [welcomeImage1Heading, setWelcomeImage1Heading] = useState('Dies ist ein');
  const [welcomeImage1SubHeading, setWelcomeImage1SubHeading] = useState('Dies ist ein');
  const [welcomeImage2Heading, setWelcomeImage2Heading] = useState('Dies ist ein');
  const [welcomeImage2SubHeading, setWelcomeImage2SubHeading] = useState('Dies ist ein');
  const [welcomeImage3Heading, setWelcomeImage3Heading] = useState('Dies ist ein');
  const [welcomeImage3SubHeading, setWelcomeImage3SubHeading] = useState('Dies ist ein');
  const [welcomeImage4Heading, setWelcomeImage4Heading] = useState('Dies ist ein');
  const [welcomeImage4SubHeading, setWelcomeImage4SubHeading] = useState('Dies ist ein');
  const [welcomeImage5Heading, setWelcomeImage5Heading] = useState('Dies ist ein');
  const [welcomeImage5SubHeading, setWelcomeImage5SubHeading] = useState('Dies ist ein');

  const [commonButtonBackgroundColor, setCommonButtonBackgroundColor] = useState('#434343d1');
  const commonButtonTextColor = ['#ffff'];
  const [productImage1Heading, setProductImage1Heading] = useState('Große Überschrift');
  const [productImage1SubHeading, setProductImage1SubHeading] = useState('Große Überschrift');
  const [productImage1Description, setProductImage1Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');
  const [productImage1Url, setProductImage1Url] = useState('/assets/img/schuh1.jpg');
  const [productImage1File, setProductImage1File] = useState('');
  const [productImage2Url, setProductImage2Url] = useState('/assets/img/schuh2.jpg');
  const [productImage2File, setProductImage2File] = useState('');
  const [productImage3Url, setProductImage3Url] = useState('/assets/img/schuh3.jpg');
  const [productImage3File, setProductImage3File] = useState('');
  const [productImage4Url, setProductImage4Url] = useState('/assets/img/schuh4.jpg');
  const [productImage4File, setProductImage4File] = useState('');
  const [productImage2Heading, setProductImage2Heading] = useState('Große Überschrift');
  const [productImage2SubHeading, setProductImage2SubHeading] = useState('Große Überschrift');
  const [productImage2Description, setProductImage2Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');
  const [productImage3Heading, setProductImage3Heading] = useState('Große Überschrift');
  const [productImage3SubHeading, setProductImage3SubHeading] = useState('Große Überschrift');
  const [productImage3Description, setProductImage3Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');
  const [productImage4Heading, setProductImage4Heading] = useState('Große Überschrift');
  const [productImage4SubHeading, setProductImage4SubHeading] = useState('Große Überschrift');
  const [productImage4Description, setProductImage4Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');

  const [product2Image1Heading, setProduct2Image1Heading] = useState('Große Überschrift');
  const [product2Image1SubHeading, setProduct2Image1SubHeading] = useState('Große Überschrift');
  const [product2Image1Description, setProduct2Image1Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');
  const [product2Image1Url, setProduct2Image1Url] = useState('/assets/img/schuh1.jpg');
  const [product2Image1File, setProduct2Image1File] = useState('');
  const [product2Image2Url, setProduct2Image2Url] = useState('/assets/img/schuh2.jpg');
  const [product2Image2File, setProduct2Image2File] = useState('');
  const [product2Image3Url, setProduct2Image3Url] = useState('/assets/img/schuh3.jpg');
  const [product2Image3File, setProduct2Image3File] = useState('');
  const [product2Image4Url, setProduct2Image4Url] = useState('/assets/img/schuh4.jpg');
  const [product2Image4File, setProduct2Image4File] = useState('');
  const [product2Image2Heading, setProduct2Image2Heading] = useState('Große Überschrift');
  const [product2Image2SubHeading, setProduct2Image2SubHeading] = useState('Große Überschrift');
  const [product2Image2Description, setProduct2Image2Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');
  const [product2Image3Heading, setProduct2Image3Heading] = useState('Große Überschrift');
  const [product2Image3SubHeading, setProduct2Image3SubHeading] = useState('Große Überschrift');
  const [product2Image3Description, setProduct2Image3Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');
  const [product2Image4Heading, setProduct2Image4Heading] = useState('Große Überschrift');
  const [product2Image4SubHeading, setProduct2Image4SubHeading] = useState('Große Überschrift');
  const [product2Image4Description, setProduct2Image4Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');

  const [product3Image1Heading, setProduct3Image1Heading] = useState('Große Überschrift');
  const [product3Image1SubHeading, setProduct3Image1SubHeading] = useState('Große Überschrift');
 
  const [product3Image1Url, setProduct3Image1Url] = useState('/assets/img/schuh1.jpg');
  const [product3Image1File, setProduct3Image1File] = useState('');
  const [product3Image2Url, setProduct3Image2Url] = useState('/assets/img/schuh2.jpg');
  const [product3Image2File, setProduct3Image2File] = useState('');
  const [product3Image3Url, setProduct3Image3Url] = useState('/assets/img/schuh3.jpg');
  const [product3Image3File, setProduct3Image3File] = useState('');
  const [product3Image4Url, setProduct3Image4Url] = useState('/assets/img/schuh4.jpg');
  const [product3Image4File, setProduct3Image4File] = useState('');

  const [product3Image2Heading, setProduct3Image2Heading] = useState('Große Überschrift');
  const [product3Image2SubHeading, setProduct3Image2SubHeading] = useState('Große Überschrift');
 
  const [product3Image3Heading, setProduct3Image3Heading] = useState('Große Überschrift');
  const [product3Image3SubHeading, setProduct3Image3SubHeading] = useState('Große Überschrift');
  
  const [product3Image4Heading, setProduct3Image4Heading] = useState('Große Überschrift');
  const [product3Image4SubHeading, setProduct3Image4SubHeading] = useState('Große Überschrift');
  

  const [product4Image1Heading, setProduct4Image1Heading] = useState('Große Überschrift');
  const [product4Image1SubHeading, setProduct4Image1SubHeading] = useState('Große Überschrift');
 
  const [product4Image1Url, setProduct4Image1Url] = useState('/assets/img/schuh1.jpg');
  const [product4Image1File, setProduct4Image1File] = useState('');
  const [product4Image2Url, setProduct4Image2Url] = useState('/assets/img/schuh2.jpg');
  const [product4Image2File, setProduct4Image2File] = useState('');
  const [product4Image3Url, setProduct4Image3Url] = useState('/assets/img/schuh3.jpg');
  const [product4Image3File, setProduct4Image3File] = useState('');
  const [product4Image4Url, setProduct4Image4Url] = useState('/assets/img/schuh4.jpg');
  const [product4Image4File, setProduct4Image4File] = useState('');
  
  const [product4Image2Heading, setProduct4Image2Heading] = useState('Große Überschrift');
  const [product4Image2SubHeading, setProduct4Image2SubHeading] = useState('Große Überschrift');
 
  const [product4Image3Heading, setProduct4Image3Heading] = useState('Große Überschrift');
  const [product4Image3SubHeading, setProduct4Image3SubHeading] = useState('Große Überschrift');
  
  const [product4Image4Heading, setProduct4Image4Heading] = useState('Große Überschrift');
  const [product4Image4SubHeading, setProduct4Image4SubHeading] = useState('Große Überschrift');
  

  const [videoHeading, setVideoHeading] = useState('Dies ist ein');
  const [videoSubHeading, setVideoSubHeading] = useState('Dies ist ein Typoblindtext');
  const [videoPreview, setVideoPreview] = useState('/video/adidas.mp4');
  let selectedOptionId = "";

  const [galleryImage1Url, setGalleryImage1Url] = useState('/assets/img/schuh1.jpg');
  const [galleryImage1File, setGalleryImage1File] = useState('');
  const [galleryImage2Url, setGalleryImage2Url] = useState('/assets/img/schuh2.jpg');
  const [galleryImage2File, setGalleryImage2File] = useState('');
  const [galleryImage3Url, setGalleryImage3Url] = useState('/assets/img/schuh3.jpg');
  const [galleryImage3File, setGalleryImage3File] = useState('');
  const [galleryImage4Url, setGalleryImage4Url] = useState('/assets/img/schuh4.jpg');
  const [galleryImage4File, setGalleryImage4File] = useState('');
  const [galleryImage5Url, setGalleryImage5Url] = useState('/assets/img/schuh5.jpg');
  const [galleryImage5File, setGalleryImage5File] = useState('');

  const [galleryHeading, setGalleryHeading] = useState('Dies ist ein');
  const [gallerySubHeading, setGallerySubHeading] = useState('Dies ist ein Typoblindtext');
  const [imageHeading1, setGalleryImageHeading1] = useState('Kosstenlos testen');
  const [imageSubHeading1, setGalleryImageSubHeading1] = useState('Dies ist ein');
  const [imageHeading2, setGalleryImageHeading2] = useState('Kosstenlos testen');
  const [imageSubHeading2, setGalleryImageSubHeading2] = useState('Dies ist ein');
  const [imageHeading3, setGalleryImageHeading3] = useState('Kosstenlos testen');
  const [imageSubHeading3, setGalleryImageSubHeading3] = useState('Dies ist ein');
  const [imageHeading4, setGalleryImageHeading4] = useState('Kosstenlos testen');
  const [imageSubHeading4, setGalleryImageSubHeading4] = useState('Dies ist ein');
  const [imageHeading5, setGalleryImageHeading5] = useState('Kosstenlos testen');
  const [imageSubHeading5, setGalleryImageSubHeading5] = useState('Dies ist ein');

  const [contactHeading, setContactHeading] = useState('Wir machen dich zur Maschine');
  const [contactSubHeading, setContactSubHeading] = useState('Trag dich hier ein und mit etwas Glück gewinnst du eine Woche Profi Workout mit einem Personal Trainer.');
  const [contactButtonHeading, setContactButtonHeading] = useState('Einreichen');

  const [question1heading, setQuestion1Heading] = useState('Dies ist ein');
  const [question1Image1Url, setQuestion1firstImage1Url] = useState('/assets/img/schuh1.jpg');
  const [question1Image1File, setQuestion1firstImage1File] = useState('');
  const [question1Image2Url, setQuestion1secondImage2Url] = useState('/assets/img/schuh2.jpg');
  const [question1Image2File, setQuestion1secondImage2File] = useState('');
  const [question1Image3Url, setQuestion1thirdImage3Url] = useState('/assets/img/schuh2.jpg');
  const [question1Image3File, setQuestion1thirdImage3File] = useState('');
  const [question1Image4Url, setQuestion1fourthImage4Url] = useState('/assets/img/schuh2.jpg');
  const [question1Image4File, setQuestion1fourthImage4File] = useState('');
  const [question1Button1Text, setQuestion1Button1Text] = useState('Mitarbeiter holen');
  const [question1Button2Text, setQuestion1Button2Text] = useState('Mitarbeiter holen');
  const [question1Button3Text, setQuestion1Button3Text] = useState('Mitarbeiter holen');
  const [question1Button4Text, setQuestion1Button4Text] = useState('Mitarbeiter holen');


  const [question2heading, setQuestion2Heading] = useState('Dies ist ein');
  const [question2Image1Url, setQuestion2firstImage1Url] = useState('/assets/img/schuh1.jpg');
  const [question2Image1File, setQuestion2firstImage1File] = useState('');
  const [question2Image2Url, setQuestion2secondImage2Url] = useState('/assets/img/schuh2.jpg');
  const [question2Image2File, setQuestion2secondImage2File] = useState('');
  const [question2Image3Url, setQuestion2thirdImage3Url] = useState('/assets/img/schuh2.jpg');
  const [question2Image3File, setQuestion2thirdImage3File] = useState('');
  const [question2Image4Url, setQuestion2fourthImage4Url] = useState('/assets/img/schuh2.jpg');
  const [question2Image4File, setQuestion2fourthImage4File] = useState('');
  const [question2Button1Text, setQuestion2Button1Text] = useState('Mitarbeiter holen');
  const [question2Button2Text, setQuestion2Button2Text] = useState('Mitarbeiter holen');
  const [question2Button3Text, setQuestion2Button3Text] = useState('Mitarbeiter holen');
  const [question2Button4Text, setQuestion2Button4Text] = useState('Mitarbeiter holen');


  const [question3heading, setQuestion3Heading] = useState('Dies ist ein');
  const [question3Image1Url, setQuestion3firstImage1Url] = useState('/assets/img/schuh1.jpg');
  const [question3Image1File, setQuestion3firstImage1File] = useState('');
  const [question3Image2Url, setQuestion3secondImage2Url] = useState('/assets/img/schuh2.jpg');
  const [question3Image2File, setQuestion3secondImage2File] = useState('');
  const [question3Image3Url, setQuestion3thirdImage3Url] = useState('/assets/img/schuh2.jpg');
  const [question3Image3File, setQuestion3thirdImage3File] = useState('');
  const [question3Image4Url, setQuestion3fourthImage4Url] = useState('/assets/img/schuh2.jpg');
  const [question3Image4File, setQuestion3fourthImage4File] = useState('');
  const [question3Button1Text, setQuestion3Button1Text] = useState('Mitarbeiter holen');
  const [question3Button2Text, setQuestion3Button2Text] = useState('Mitarbeiter holen');
  const [question3Button3Text, setQuestion3Button3Text] = useState('Mitarbeiter holen');
  const [question3Button4Text, setQuestion3Button4Text] = useState('Mitarbeiter holen');

  
  const [navBarHeight, setNavBarHeight] = useState(10);
  const [welcomeHeight, setWelcomeHeight] = useState(10);
  const [kontaktHeight, setKontaktHeight] = useState(10);
  const presetColors = ['#e600e6'];
  const [currentPage, setCurrentPage] = useState('willkommen');

  const [isGalerieAvailable, setIsGalerieAvailable] = useState(true);
  const [isEigenschaftenAvailable, setIsEigenschaftenAvailable] = useState(true);
  const [isEigenschaftenAvailable2, setIsEigenschaftenAvailable2] = useState(true);
  const [isEigenschaftenAvailable3, setIsEigenschaftenAvailable3] = useState(true);
  const [isEigenschaftenAvailable4, setIsEigenschaftenAvailable4] = useState(true);
  const [isQuestion1Available, setIsQuestion1Available] = useState(true);
  const [isQuestion2Available, setIsQuestion2Available] = useState(true);
  const [isQuestion3Available, setIsQuestion3Available] = useState(true);
  const [isHeaderAvailable, setIsHeaderAvailable] = useState(true);
  const [isVideoAvailable, setIsVideoAvailable] = useState(true);

  const changeWelcomeMenu = async (val) => {
    setNavbarWelcomeMenu(val);
  };

  const changeProductDetail1MenuTitle = async (val) => {
    setNavbarProductDetail1Menu(val);
  };

  const changeProductDetail2MenuTitle = async (val) => {
    setNavbarProductDetail2Menu(val);
  };

  const changeProductDetail3MenuTitle = async (val) => {
    setNavbarProductDetail3Menu(val);
  };

  const changeProductDetail4MenuTitle = async (val) => {
    setNavbarProductDetail4Menu(val);
  };

  const changeFrage1MenuTitle = async (val) => {
    setNavbarFrage1Menu(val);
  };

  const changeFrage2MenuTitle = async (val) => {
    setNavbarFrage2Menu(val);
  };

  const changeFrage3MenuTitle = async (val) => {
    setNavbarFrage3Menu(val);
  };

  const changeVideoMenuTitle = async (val) => {
    setNavbarVideoMenu(val);
  };

  const changeGalleryMenuTitle = async (val) => {
    setNavbarGalleryMenu(val);
  };

  const changeContactMenuTitle = async (val) => {
    setNavbarContactMenu(val);
  };
  
  const buildFormData = (formData, data, parentKey) =>{
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
  
      formData.append(parentKey, value);
    }
 
  }


  const  changeAnimationButton = async (e) => {
    setAnimationButtonOn(e.target.checked);
      if(e.target.checked){
        setAnimationParam('');
      }else{
        setAnimationParam('circleanimation');
      }
    

  }

  const pageBack = async () =>{
    await updateProperties();
    await router.push(`/campaign/prepare?campaignid=${campaign_id}`);
  }

  const updateAndContinueProperties = async () =>{
    await updateProperties();
    await router.push(`/campaign/${campaign_id}/publish`);
  }

  const updateProperties  = async () =>{
    setLoading(true);
    try {
      var formData = new FormData();
      var data =  {'data':{
                      'navbar':{
                        'background': navbarBackgroundColor,
                        'color': commonColor,
                        'active color': commonColor
                      },

                      'menu':{
                        'welcome menu': navbarWelcomeMenu,
                        'product detail1': navbarProductDetail1Menu,
                        'product detail2': navbarProductDetail2Menu,
                        'product detail3': navbarProductDetail3Menu,
                        'product detail4': navbarProductDetail4Menu,
                        'frage1': navbarfrage1Menu,
                        'frage2': navbarfrage2Menu,
                        'frage3': navbarfrage3Menu,
                        'video': navbarVideoMenu,
                        'gallery menu': navbarGalleryMenu,
                        'contact menu': navbarContactMenu,

                      },

                      'welcome':{
                        'heading': welcomeHeading,
                        'sub heading' : welcomeSubHeading,
                        'description' : welcomeDescription,
                        'image1':welcomeImage1File,
                        'image1 heading':welcomeImage1Heading,
                        'image1 subheading':welcomeImage1SubHeading,                       
                        'image2':welcomeImage2File,
                        'image2 heading':welcomeImage2Heading,
                        'image2 subheading':welcomeImage2SubHeading,
                        'image3':welcomeImage3File,
                        'image3 heading':welcomeImage3Heading,
                        'image3 subheading':welcomeImage3SubHeading,
                        'image4':welcomeImage4File,
                        'image4 heading':welcomeImage4Heading,
                        'image4 subheading':welcomeImage4SubHeading,
                        'image5':welcomeImage5File,
                        'image5 heading':welcomeImage5Heading,
                        'image5 subheading':welcomeImage5SubHeading,
                        'image6':welcomeImage6File,
                        'image7':welcomeImage7File,
                        'image8':welcomeImage8File,
                        'button1':welcomeButton1Text,
                        'button2':welcomeButton2Text,
                        'button3':welcomeButton3Text,
                        'button4':welcomeButton4Text
                      },
                      'question1':{
                         'heading':question1heading,
                         'image1':question1Image1File,
                         'image2':question1Image2File,
                         'image3':question1Image3File,
                         'image4':question1Image4File,
                         'button1':question1Button1Text,
                         'button2':question1Button2Text,
                         'button3':question1Button3Text,
                         'button4':question1Button4Text
                      },
                      'question2':{
                         'heading':question2heading,
                         'image1':question2Image1File,
                         'image2':question2Image2File,
                         'image3':question2Image3File,
                         'image4':question2Image4File,
                         'button1':question2Button1Text,
                         'button2':question2Button2Text,
                         'button3':question2Button3Text,
                         'button4':question2Button4Text
                      },
                      'question3':{
                         'heading':question3heading,
                         'image1':question3Image1File,
                         'image2':question3Image2File,
                         'image3':question3Image3File,
                         'image4':question3Image4File,
                         'button1':question3Button1Text,
                         'button2':question3Button2Text,
                         'button3':question3Button3Text,
                         'button4':question3Button4Text
                      },
                      'product':{
                        'image1 heading': productImage1Heading,
                        'image1 subheading': productImage1SubHeading,
                        'image1 description': productImage1Description,
                        'image2 heading': productImage2Heading,
                        'image2 subheading': productImage2SubHeading,
                        'image2 description': productImage2Description,
                        'image3 heading': productImage3Heading,
                        'image3 subheading': productImage3SubHeading,
                        'image3 description': productImage3Description,
                        'image4 heading': productImage4Heading,
                        'image4 subheading': productImage4SubHeading,
                        'image4 description': productImage4Description,
                        'image1':productImage1File,
                        'image2':productImage2File,
                        'image3':productImage3File,
                        'image4':productImage4File
                      },
                      'product2':{
                        'image1 heading': product2Image1Heading,
                        'image1 subheading': product2Image1SubHeading,
                        'image1 description': product2Image1Description,
                        'image2 heading': product2Image2Heading,
                        'image2 subheading': product2Image2SubHeading,
                        'image2 description': product2Image2Description,
                        'image3 heading': product2Image3Heading,
                        'image3 subheading': product2Image3SubHeading,
                        'image3 description': product2Image3Description,
                        'image4 heading': product2Image4Heading,
                        'image4 subheading': product2Image4SubHeading,
                        'image4 description': product2Image4Description,
                        'image1':product2Image1File,
                        'image2':product2Image2File,
                        'image3':product2Image3File,
                        'image4':product2Image4File
                      },
                      'product3':{
                        'image1 heading': product3Image1Heading,
                        'image1 subheading': product3Image1SubHeading,
                        'image2 heading': product3Image2Heading,
                        'image2 subheading': product3Image2SubHeading,
                        'image3 heading': product3Image3Heading,
                        'image3 subheading': product3Image3SubHeading,
                        'image4 heading': product3Image4Heading,
                        'image4 subheading': product3Image4SubHeading,
                        'image1':product3Image1File,
                        'image2':product3Image2File,
                        'image3':product3Image3File,
                        'image4':product3Image4File
                      },
                      'product4':{
                        'image1 heading': product4Image1Heading,
                        'image1 subheading': product4Image1SubHeading,
                        'image2 heading': product4Image2Heading,
                        'image2 subheading': product4Image2SubHeading,
                        'image3 heading': product4Image3Heading,
                        'image3 subheading': product4Image3SubHeading,
                        'image4 heading': product4Image4Heading,
                        'image4 subheading': product4Image4SubHeading,
                        'image1':product4Image1File,
                        'image2':product4Image2File,
                        'image3':product4Image3File,
                        'image4':product4Image4File
                      },
                      'video':{
                        'heading': videoHeading,
                        'sub heading' : videoSubHeading,
                        'video':videoPreview
                      },
                      'gallery':{
                        'image1':galleryImage1File,
                        'image2':galleryImage2File,
                        'image3':galleryImage3File,
                        'image4':galleryImage4File,
                        'image5':galleryImage5File,
                        'heading': galleryHeading,
                        'sub heading' : gallerySubHeading,
                        'imageHeading1':imageHeading1,
                        'imageSubHeading1':imageSubHeading1,
                        'imageHeading2':imageHeading2,
                        'imageSubHeading2':imageSubHeading2,
                        'imageHeading3':imageHeading3,
                        'imageSubHeading3':imageSubHeading3,
                        'imageHeading4':imageHeading4,
                        'imageSubHeading4':imageSubHeading4,
                        'imageHeading5':imageHeading5,
                        'imageSubHeading5':imageSubHeading5
                      },
                      'contact':{
                        'heading': contactHeading,
                        'sub heading' : contactSubHeading,
                        'Button heading' : contactButtonHeading
                      },
                      'common':{
                        // 'button textcolor': commonColor,
                        'button background': commonColor,
                        'animation': animationParam
                      }
                    }
                  }
      buildFormData(formData, data);
     
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      const response = await app.post(`/updateCampaignData/${campaign_id}`,formData,config);
      
      if (response.status == 200) {
        setLoading(false);
        toast.success("Kampagnen Daten wurden gespeichert!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }else{
        setLoading(false);
        toast.success("Kampagnen Daten wurden gespeichert!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

    } catch (error) {
      setLoading(false);
    }


  }
  
  const fetchCampaignData = async () => {
    
    try {

      const responseTemplateData = await app.get(`/getCampaignData/${campaign_id}`);
    
      responseTemplateData.data.forEach(function(ele){
        console.log(ele);
        if(ele.component == 'navbar'){

          if(ele.property == 'background'){
            setNavbarBackgroundColor(ele.value); 
          }

          if(ele.property == 'color'){
            setCommonColor(ele.value);
          }

          if(ele.property == 'active color'){
            setNavbarActiveColor(ele.value);
          }

        }else if(ele.component == 'menu'){

          if(ele.property == 'welcome menu'){
            setNavbarWelcomeMenu(ele.value); 
          }

          if(ele.property == 'product detail1'){
            setNavbarProductDetail1Menu(ele.value);
          }

          if(ele.property == 'product detail2'){
            setNavbarProductDetail2Menu(ele.value);
          }

          if(ele.property == 'product detail3'){
            setNavbarProductDetail3Menu(ele.value);
          }

          if(ele.property == 'product detail4'){
            setNavbarProductDetail4Menu(ele.value);
          }

          if(ele.property == 'frage1'){
            setNavbarFrage1Menu(ele.value);
          }

          if(ele.property == 'frage2'){
            setNavbarFrage2Menu(ele.value);
          }

          if(ele.property == 'frage3'){
            setNavbarFrage3Menu(ele.value);
          }

          if(ele.property == 'video'){
            setNavbarVideoMenu(ele.value);
          }

          if(ele.property == 'gallery menu'){
            setNavbarGalleryMenu(ele.value);
          }

          if(ele.property == 'contact menu'){
            setNavbarContactMenu(ele.value);
          }

        


        }else if(ele.component == 'welcome'){

          if(ele.property == 'heading'){
            setWelcomeHeading(ele.value);
          }

          if(ele.property == 'sub heading'){
            setWelcomeSubHeading(ele.value);
          }

          if(ele.property == 'description'){
            setWelcomeDescription(ele.value);
          }

          if(ele.property == 'image1'){
            setWelcomeImage1Url(ele.value);
          }

          if(ele.property == 'image1 heading'){
            setWelcomeImage1Heading(ele.value);
          }

          if(ele.property == 'image1 subheading'){
            setWelcomeImage1SubHeading(ele.value);
          }

          if(ele.property == 'image2'){
            setWelcomeImage2Url(ele.value);
          }

          if(ele.property == 'image2 heading'){
            setWelcomeImage2Heading(ele.value);
          }

          if(ele.property == 'image1 subheading'){
            setWelcomeImage2SubHeading(ele.value);
          }

          if(ele.property == 'image3'){
            setWelcomeImage3Url(ele.value);
          }

          if(ele.property == 'image3 heading'){
            setWelcomeImage3Heading(ele.value);
          }

          if(ele.property == 'image3 subheading'){
            setWelcomeImage3SubHeading(ele.value);
          }

          if(ele.property == 'image4'){
            setWelcomeImage4Url(ele.value);
          }

          if(ele.property == 'image4 heading'){
            setWelcomeImage4Heading(ele.value);
          }

          if(ele.property == 'image4 subheading'){
            setWelcomeImage4SubHeading(ele.value);
          }

          if(ele.property == 'image5'){
            setWelcomeImage5Url(ele.value);
          }
          
          if(ele.property == 'image5 heading'){
            setWelcomeImage5Heading(ele.value);
          }

          if(ele.property == 'image5 subheading'){
            setWelcomeImage5SubHeading(ele.value);
          }

          if(ele.property == 'image6'){
            setWelcomeImage6Url(ele.value);
          }

          if(ele.property == 'image7'){
            setWelcomeImage7Url(ele.value);
          }

          if(ele.property == 'image8'){
            setWelcomeImage8Url(ele.value);
          }


          if(ele.property == 'button1'){
            setWelcomeButton1Text(ele.value);
          }

          if(ele.property == 'button2'){
            setWelcomeButton2Text(ele.value);
          }

          if(ele.property == 'button3'){
            setWelcomeButton3Text(ele.value);
          }

          if(ele.property == 'button4'){
            setWelcomeButton4Text(ele.value);
          }

          
        
        }else if(ele.component == 'question1'){
          if(ele.property == 'heading'){
            setQuestion1Heading(ele.value);
          }

          if(ele.property == 'image1'){
            setQuestion1firstImage1Url(ele.value);
          }

          if(ele.property == 'image2'){
            setQuestion1secondImage2Url(ele.value);
          }

          if(ele.property == 'image3'){
            setQuestion1thirdImage3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setQuestion1fourthImage4Url(ele.value);
          }

          if(ele.property == 'button1'){
            setQuestion1Button1Text(ele.value);
          }

          if(ele.property == 'button2'){
            setQuestion1Button2Text(ele.value);
          }

          if(ele.property == 'button3'){
            setQuestion1Button3Text(ele.value);
          }

          if(ele.property == 'button4'){
            setQuestion1Button4Text(ele.value);
          }

        }else if(ele.component == 'question2'){
          if(ele.property == 'heading'){
            setQuestion2Heading(ele.value);
          }

          if(ele.property == 'image1'){
            setQuestion2firstImage1Url(ele.value);
          }

          if(ele.property == 'image2'){
            setQuestion2secondImage2Url(ele.value);
          }

          if(ele.property == 'image3'){
            setQuestion2thirdImage3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setQuestion2fourthImage4Url(ele.value);
          }

          if(ele.property == 'button1'){
            setQuestion2Button1Text(ele.value);
          }

          if(ele.property == 'button2'){
            setQuestion2Button2Text(ele.value);
          }

          if(ele.property == 'button3'){
            setQuestion2Button3Text(ele.value);
          }

          if(ele.property == 'button4'){
            setQuestion2Button4Text(ele.value);
          }

        }else if(ele.component == 'question3'){
          if(ele.property == 'heading'){
            setQuestion3Heading(ele.value);
          }

          if(ele.property == 'image1'){
            setQuestion3firstImage1Url(ele.value);
          }

          if(ele.property == 'image2'){
            setQuestion3secondImage2Url(ele.value);
          }

          if(ele.property == 'image3'){
            setQuestion3thirdImage3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setQuestion3fourthImage4Url(ele.value);
          }

          if(ele.property == 'button1'){
            setQuestion3Button1Text(ele.value);
          }

          if(ele.property == 'button2'){
            setQuestion3Button2Text(ele.value);
          }

          if(ele.property == 'button3'){
            setQuestion3Button3Text(ele.value);
          }

          if(ele.property == 'button4'){
            setQuestion3Button4Text(ele.value);
          }

        }else if(ele.component == 'common'){
          
          if(ele.property == 'button textcolor'){
            // setCommonButtonTextColor(ele.value);
          }

          if(ele.property == 'button background'){
            setCommonColor(ele.value);
          }

          if(ele.property == 'animation'){
            setAnimationParam(ele.value);
            if(ele.value != '' && ele.value != null){
              setAnimationButtonOn(true);
            }
          }


       

        }else if(ele.component == 'product'){
          
          if(ele.property == 'image1 heading'){
            setProductImage1Heading(ele.value);
          }
          
          if(ele.property == 'image1 subheading'){
            setProductImage1SubHeading(ele.value);
          }
         
          if(ele.property == 'image1 description'){
            setProductImage1Description(ele.value);
          }

          if(ele.property == 'image1'){
            setProductImage1Url(ele.value);
          }

          if(ele.property == 'image2'){
            setProductImage2Url(ele.value);
          }

          if(ele.property == 'image3'){
            setProductImage3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setProductImage4Url(ele.value);
          }

          

          if(ele.property == 'image2 heading'){
            setProductImage2Heading(ele.value);
          }
          if(ele.property == 'image2 subheading'){
            setProductImage2SubHeading(ele.value);
          }

          if(ele.property == 'image2 description'){
            setProductImage2Description(ele.value);
          }

          if(ele.property == 'image3 heading'){
            setProductImage3Heading(ele.value);
          }
          
          if(ele.property == 'image3 subheading'){
            setProductImage3SubHeading(ele.value);
          }

          if(ele.property == 'image3 description'){
            setProductImage3Description(ele.value);
          }

          if(ele.property == 'image4 heading'){
            setProductImage4Heading(ele.value);
          }
          
          if(ele.property == 'image4 subheading'){
            setProductImage4SubHeading(ele.value);
          }

          if(ele.property == 'image4 description'){
            setProductImage4Description(ele.value);
          }
         
        }else if(ele.component == 'product2'){
          
          if(ele.property == 'image1 heading'){
            setProduct2Image1Heading(ele.value);
          }
          
          if(ele.property == 'image1 subheading'){
            setProduct2Image1SubHeading(ele.value);
          }
         
          if(ele.property == 'image1 description'){
            setProduct2Image1Description(ele.value);
          }

          if(ele.property == 'image1'){
            setProduct2Image1Url(ele.value);
          }

          if(ele.property == 'image2'){
            setProduct2Image2Url(ele.value);
          }

          if(ele.property == 'image3'){
            setProduct2Image3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setProduct2Image4Url(ele.value);
          }

          if(ele.property == 'image2 heading'){
            setProduct2Image2Heading(ele.value);
          }
          if(ele.property == 'image2 subheading'){
            setProduct2Image2SubHeading(ele.value);
          }

          if(ele.property == 'image2 description'){
            setProduct2Image2Description(ele.value);
          }

          if(ele.property == 'image3 heading'){
            setProduct2Image3Heading(ele.value);
          }
          
          if(ele.property == 'image3 subheading'){
            setProduct2Image3SubHeading(ele.value);
          }

          if(ele.property == 'image3 description'){
            setProduct2Image3Description(ele.value);
          }

          if(ele.property == 'image4 heading'){
            setProduct2Image4Heading(ele.value);
          }
          
          if(ele.property == 'image4 subheading'){
            setProduct2Image4SubHeading(ele.value);
          }

          if(ele.property == 'image4 description'){
            setProduct2Image4Description(ele.value);
          }
         
        }else if(ele.component == 'product3'){
          
          if(ele.property == 'image1 heading'){
            setProduct3Image1Heading(ele.value);
          }
          
          if(ele.property == 'image1 subheading'){
            setProduct3Image1SubHeading(ele.value);
          }    

          if(ele.property == 'image1'){
            setProduct3Image1Url(ele.value);
          }

          if(ele.property == 'image2'){
            setProduct3Image2Url(ele.value);
          }

          if(ele.property == 'image3'){
            setProduct3Image3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setProduct3Image4Url(ele.value);
          }

          if(ele.property == 'image2 heading'){
            setProduct3Image2Heading(ele.value);
          }
          if(ele.property == 'image2 subheading'){
            setProduct3Image2SubHeading(ele.value);
          }

          if(ele.property == 'image3 heading'){
            setProduct3Image3Heading(ele.value);
          }
          
          if(ele.property == 'image3 subheading'){
            setProduct3Image3SubHeading(ele.value);
          }

  
          if(ele.property == 'image4 heading'){
            setProduct3Image4Heading(ele.value);
          }
          
          if(ele.property == 'image4 subheading'){
            setProduct3Image4SubHeading(ele.value);
          }

         
        }else if(ele.component == 'product4'){
          
          if(ele.property == 'image1 heading'){
            setProduct4Image1Heading(ele.value);
          }
          
          if(ele.property == 'image1 subheading'){
            setProduct4Image1SubHeading(ele.value);
          }


          if(ele.property == 'image1'){
            setProduct4Image1Url(ele.value);
          }

          if(ele.property == 'image2'){
            setProduct4Image2Url(ele.value);
          }

          if(ele.property == 'image3'){
            setProduct4Image3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setProduct4Image4Url(ele.value);
          }

          if(ele.property == 'image2 heading'){
            setProduct4Image2Heading(ele.value);
          }
          if(ele.property == 'image2 subheading'){
            setProduct4Image2SubHeading(ele.value);
          }

          if(ele.property == 'image3 heading'){
            setProduct4Image3Heading(ele.value);
          }
          
          if(ele.property == 'image3 subheading'){
            setProduct4Image3SubHeading(ele.value);
          }

          if(ele.property == 'image4 heading'){
            setProduct4Image4Heading(ele.value);
          }
          
          if(ele.property == 'image4 subheading'){
            setProduct4Image4SubHeading(ele.value);
          }
         
        }else if(ele.component == 'video'){
          if(ele.property == 'heading'){
            setVideoHeading(ele.value);
          }

          if(ele.property == 'sub heading'){
            setVideoSubHeading(ele.value);
          }

          if(ele.property == 'video'){
            setVideoPreview(ele.value);
          } 

        }else if(ele.component == 'gallery'){
          if(ele.property == 'image1'){
            setGalleryImage1Url(ele.value);
          }

          if(ele.property == 'image2'){
            setGalleryImage2Url(ele.value);
          }

          if(ele.property == 'image3'){
            setGalleryImage3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setGalleryImage4Url(ele.value);
          }

          if(ele.property == 'image5'){
            setGalleryImage5Url(ele.value);
          }

          if(ele.property == 'heading'){
            setGalleryHeading(ele.value);
          }

          if(ele.property == 'sub heading'){
            setGallerySubHeading(ele.value);
          }

          if(ele.property =='image_first_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_first_sub_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_second_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_second_sub_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_third_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_third_sub_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_fourth_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_fourth_sub_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_fifth_heading'){
            setGalleryImageHeading1(ele.value)
          }

          if(ele.property =='image_fifth_sub_heading'){
            setGalleryImageHeading1(ele.value)
          }

        }else if(ele.component == 'contact'){
          
          if(ele.property == 'heading'){
            setContactHeading(ele.value);
          }

          if(ele.property == 'sub heading'){
            setContactSubHeading(ele.value);
          }


          if(ele.property == 'Button heading'){
            setContactButtonHeading(ele.value);
          }
          
        }
           
      })
      

    
    } catch (error) {

    }
  };


  useEffect(() => {
    fetchCampaignData();
  
    const navBartWidth = navBarEditor.current ? navBarEditor.current.offsetWidth : 0;
    const navBarHeight = (navBartWidth * 15) / 16;
    setNavBarHeight(navBarHeight);


    const width = welcomeEditor.current ? welcomeEditor.current.offsetWidth : 0;
    const height = (width * 12) / 16;
    setWelcomeHeight(height);
    const kontaktWidth = kontaktEditor.current ? kontaktEditor.current.offsetWidth : 0;
    const kontaktHeight = (kontaktWidth * 15) / 16;
    setKontaktHeight(kontaktHeight);
  }, [welcomeEditor.current, kontaktEditor.current]);

  const Header = dynamic(() => import(`../../../components/templates/${templatename}/Header`).catch(err => {
    setIsHeaderAvailable(false);
  }));
  
  const Willkommen = dynamic(() => import(`../../../components/templates/${templatename}/Willkommen`), {
    loading: () => <p>Loading...</p>,
  });

  const Eigenschaften = dynamic(() => import(`../../../components/templates/${templatename}/Eigenschaften`).catch(err => {
    setIsEigenschaftenAvailable(false);
  }));

  const Eigenschaften2 = dynamic(() => import(`../../../components/templates/${templatename}/Eigenschaften2`).catch(err => {
    setIsEigenschaftenAvailable2(false);
  }));

  const Eigenschaften3 = dynamic(() => import(`../../../components/templates/${templatename}/Eigenschaften3`).catch(err => {
    setIsEigenschaftenAvailable3(false);
  }));

  const Eigenschaften4 = dynamic(() => import(`../../../components/templates/${templatename}/Eigenschaften4`).catch(err => {
    setIsEigenschaftenAvailable4(false);
  }));

  const Video = dynamic(() => import(`../../../components/templates/${templatename}/Video`).catch(err => {
    setIsVideoAvailable(false);
  }));

  const Galerie = dynamic(() => import(`../../../components/templates/${templatename}/Galerie`).catch(err => {
    setIsGalerieAvailable(false);
  }));
  
  const Kontakt = dynamic(() => import(`../../../components/templates/${templatename}/Kontakt`), {
    // loading: () => <p>Loading...</p>,
  });
   

  const Question1 = dynamic(() => import(`../../../components/templates/${templatename}/Question1`).catch(err => {
    setIsQuestion1Available(false);
  }));


  const Question2 = dynamic(() => import(`../../../components/templates/${templatename}/Question2`).catch(err => {
    setIsQuestion2Available(false);
  }));
  
  const Question3 = dynamic(() => import(`../../../components/templates/${templatename}/Question3`).catch(err => {
      setIsQuestion3Available(false);
  }));
  
  


  return (
    
    <Fragment>
       <Head>
                <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/editornav.css`} />
                {/* <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_3.css`} /> */}
                <link rel='stylesheet' href={`/assets/tepmplateComponent/commontemp.css`} />
                <link rel='stylesheet' href={`/assets/tepmplateComponent/grid/grid_1.css`} />
                <link rel='stylesheet' href={`/assets/tepmplateComponent/contactForm/form_1.css`} />

            </Head>
     
         
                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-md-7 col-xl-6 box-col-6 my-auto">
                        <ul className="nav-steps">
                          <li><a title="Kampagne vorbereiten">1. Kampagne vorbereiten</a></li>
                          <li><b>2. App editieren</b></li>
                          <li><a title="Kontrolle und veröffentlichen">3. Kontrolle und veröffentlichen</a></li>
                        </ul>
                      </div>
                      
                      <div className="col-sm-12 col-md-5 col-xl-6 box-col-6 my-auto text-right">
                        <button className="btn btn-light" style={{marginRight:'15px'}} type="button" onClick={pageBack} title="Zurück">Zurück</button>

                          {!isLoading && (
                              <button onClick={updateAndContinueProperties} title="Fortfahren" className="btn btn-primary mr-2">Fortfahren</button>

                          )}
                          {isLoading && (

                              <button className="btn btn-primary mr-2" >
                                      <i className="fa fa-spinner fa-spin"></i> {pleaseWait}
                              </button>
                          )}

              
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid">
                    <div className="row mt-5 mb-2 item-checkbox">
                      <div className="col-sm-12 col-xl-12 xl-100 app-editieren-tabs">
                      
                        <ul className="nav nav-tabs nav-right" id="right-tab" role="tablist">
                          <li className="nav-item"><a className="nav-link active" id="right-home-tab" data-bs-toggle="tab" href="#right-home" role="tab" aria-controls="right-home" aria-selected="true" data-bs-original-title="" title=""><i className="icon-panel"></i></a></li>
                          <li className="nav-item">
                           <Link href={`/campaign/${campaign_id}/preview`}>
                                <a className="nav-link" id="profile-right-tab" target="_blank"><i className="icon-eye"></i></a>
                           </Link> 
                            </li>
                        </ul>
                        
                        <div className="tab-content" id="right-tabContent">
                          <div className="tab-pane fade active show" id="right-home" role="tabpanel" aria-labelledby="right-home-tab">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-sm-12 col-xl-5">
                                    <b>Farbpalette</b>
                                    <br/>
                                  

                                   
                                    <div className="color-checkbox">	
                                    <GithubPicker 
                                      color={commonColor}
                                      onChangeComplete={ (e)=>{  setCommonColor(e.hex) }}
                                      colors = {['#000000', '#7644dc', '#e600e6', '#016be4', '#03d8bc', '#54b046', '#e62e01', '#e6a400', '#e4c601', '#b09346']}
                                      presetColors={presetColors}
                                      width='71%'
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-xl-4">
                                    <b>Hintergrundanimation</b><br/>

                                    <input className="checkbox_animated" value={!animationButtonOn} onChange={(e) => changeAnimationButton(e)}  type="checkbox"  checked={animationButtonOn}></input>

                                   
                                   
                                  </div>

                                  {animationButtonOn &&
                                  <div className="col-sm-12 col-xl-3">
                                       <select className="form-select digits" defaultValue={selectedOptionId} onChange={(e) => { setAnimationParam(e.target.value);}}>
                                      
                                            <option value="circleanimation">Kreis Animation</option>
                                            <option value="snowfallanimation">Schnefall Animation</option>
                                            <option value="bubbleanimation">Blasenanimation</option>
                                            <option value="dotanimation">Punktanimation</option>
                                            <option value="baloonanimation">Ballon-Animation</option>
                                        </select>
                                  </div>

                                   }
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="right-profile" role="tabpanel" aria-labelledby="profile-right-tab">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-sm-12 col-xl-12">???</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* { isHeaderAvailable &&
                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <h6>Menü</h6>
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                        
             
   
                      <div className="col-sm-12 col-xl-12"> 
                    <div className="default-according" id="accordion">
                       <Accordion >
                          <Accordion.Item eventKey="0" >
                            <Accordion.Header style={{width:'100%'}}>Navigation</Accordion.Header>
                            <Accordion.Body>
                             <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                          
                              <Header 
                                  backgroundColor={navbarBackgroundColor} 
                                  color={commonColor} 
                                  activeColor={commonColor} 
                                  setCurrentPage={setCurrentPage} 
                                  currentPage={currentPage} 
                                  editable ={templateEditable} 
                                  editorNav={editorNav}
                                 
                                  welcomeMenu={navbarWelcomeMenu}
                                  productDetail1Menu={navbarProductDetail1Menu}
                                  productDetail2Menu={navbarProductDetail2Menu}
                                  productDetail3Menu={navbarProductDetail3Menu}
                                  productDetail4Menu={navbarProductDetail4Menu}
                                  question1Menu={navbarfrage1Menu}
                                  question2Menu={navbarfrage2Menu}
                                  question3Menu={navbarfrage3Menu}
                                  videoMenu={navbarVideoMenu}
                                  galleryMenu={navbarGalleryMenu}
                                  contactMenu={navbarContactMenu}

                                  setWelcomeMenuHeading={setNavbarWelcomeMenu}
                                  setProductDetail1MenuHeading={setNavbarProductDetail1Menu}
                                  setProductDetail2MenuHeading={setNavbarProductDetail2Menu}
                                  setProductDetail3MenuHeading={setNavbarProductDetail3Menu}
                                  setProductDetail4MenuHeading={setNavbarProductDetail4Menu}
                                  setQuestion1MenuHeading={setNavbarFrage1Menu}
                                  setQuestion2MenuHeading={setNavbarFrage2Menu}
                                  setQuestion3MenuHeading={setNavbarFrage3Menu}
                                  setVideoMenuHeading={setNavbarVideoMenu}
                                  setGalleryMenuHeading={setNavbarGalleryMenu}
                                  setContactMenuHeading={setNavbarContactMenu}

                              />

                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>


                    </div>
            
                       
                      </div>
                     
                    </div>
                  </div>
                   } */}

                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                      <h6>
                            <EdiText
                                type='text'
                                value={navbarWelcomeMenu}
                                onSave={changeWelcomeMenu}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                          
                          </h6>
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <div className="card h-100 card-full" style={{minHeight:'700px'}}>
                        <Willkommen
                            editable = {templateEditable}
                            buttontext1={welcomeButton1Text}
                            buttontext2={welcomeButton2Text}
                            buttontext3={welcomeButton3Text}
                            buttontext4={welcomeButton4Text}
                            setWelcomeButton1Text={setWelcomeButton1Text}
                            setWelcomeButton2Text={setWelcomeButton2Text}
                            setWelcomeButton3Text={setWelcomeButton3Text}
                            setWelcomeButton4Text={setWelcomeButton4Text}
                            buttonTextColor = {commonButtonTextColor}
                            buttonColor={commonColor}
                            activeButtonColor={commonButtonTextColor}
                            headingColor={commonColor}
                            heading={welcomeHeading}
                            subHeading={welcomeSubHeading}
                            description={welcomeDescription}
                            setWelcomeHeading={setWelcomeHeading}
                            setWelcomeSubHeading={setWelcomeSubHeading}
                            setWelcomeDescription={setWelcomeDescription}

                            image1={welcomeImage1Url}
                            setWelcomeImage1Url={setWelcomeImage1Url}
                            setWelcomeImage1File={setWelcomeImage1File}
                            image1heading={welcomeImage1Heading}
                            image1SubHeading={welcomeImage1SubHeading}
                            setImage1Heading={setWelcomeImage1Heading}
                            setImage1SubHeading={setWelcomeImage1SubHeading}

                            image2={welcomeImage2Url}
                            setWelcomeImage2Url={setWelcomeImage2Url}
                            setWelcomeImage2File={setWelcomeImage2File}
                            image2heading={welcomeImage2Heading}
                            image2SubHeading={welcomeImage2SubHeading}
                            setImage2Heading={setWelcomeImage2Heading}
                            setImage2SubHeading={setWelcomeImage2SubHeading}

                            image3={welcomeImage3Url}
                            setWelcomeImage3Url={setWelcomeImage3Url}
                            setWelcomeImage3File={setWelcomeImage3File}
                            image3heading={welcomeImage3Heading}
                            image3SubHeading={welcomeImage3SubHeading}
                            setImage3Heading={setWelcomeImage3Heading}
                            setImage3SubHeading={setWelcomeImage3SubHeading}

                            image4={welcomeImage4Url}
                            setWelcomeImage4Url={setWelcomeImage4Url}
                            setWelcomeImage4File={setWelcomeImage4File}
                            image4heading={welcomeImage4Heading}
                            image4SubHeading={welcomeImage4SubHeading}
                            setImage4Heading={setWelcomeImage4Heading}
                            setImage4SubHeading={setWelcomeImage4SubHeading}

                            image5={welcomeImage5Url}
                            setWelcomeImage5Url={setWelcomeImage5Url}
                            setWelcomeImage5File={setWelcomeImage5File}
                            image5heading={welcomeImage5Heading}
                            image5SubHeading={welcomeImage5SubHeading}
                            setImage5Heading={setWelcomeImage5Heading}
                            setImage5SubHeading={setWelcomeImage5SubHeading}

                            image6={welcomeImage6Url}
                            setWelcomeImage6Url={setWelcomeImage6Url}
                            setWelcomeImage6File={setWelcomeImage6File}

                            image7={welcomeImage7Url}
                            setWelcomeImage7Url={setWelcomeImage7Url}
                            setWelcomeImage7File={setWelcomeImage7File}

                            image8={welcomeImage8Url}
                            setWelcomeImage8Url={setWelcomeImage8Url}
                            setWelcomeImage8File={setWelcomeImage8File}
                        />
                        </div>
                      </div>
                 
                    </div>
                  </div>
                  
                  { isEigenschaftenAvailable &&
                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <h6>
                        <EdiText
                                type='text'
                                value={navbarProductDetail1Menu}
                                onSave={changeProductDetail1MenuTitle}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                        </h6>
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                        <Eigenschaften
                          editable = {templateEditable}

                          productImage1Heading={productImage1Heading}
                          setProductImage1Heading={setProductImage1Heading}
                          productImage1SubHeading={productImage1SubHeading}
                          setProductImage1SubHeading={setProductImage1SubHeading}
                          productImage1Description={productImage1Description}
                          setProductImage1Description={setProductImage1Description}

                          image1={productImage1Url}
                          setProductImage1Url={setProductImage1Url}
                          setProductImage1File={setProductImage1File}
                          

                          productImage2Heading={productImage2Heading}
                          setProductImage2Heading={setProductImage2Heading}
                          productImage2SubHeading={productImage2SubHeading}
                          setProductImage2SubHeading={setProductImage2SubHeading}
                          productImage2Description={productImage2Description}
                          setProductImage2Description={setProductImage2Description}

                          image2={productImage2Url}
                          setProductImage2Url={setProductImage2Url}
                          setProductImage2File={setProductImage2File}

                          productImage3Heading={productImage3Heading}
                          setProductImage3Heading={setProductImage3Heading}
                          productImage3SubHeading={productImage3SubHeading}
                          setProductImage3SubHeading={setProductImage3SubHeading}
                          productImage3Description={productImage3Description}
                          setProductImage3Description={setProductImage3Description}

                          image3={productImage3Url}
                          setProductImage3Url={setProductImage3Url}
                          setProductImage3File={setProductImage3File}

                          productImage4Heading={productImage4Heading}
                          setProductImage4Heading={setProductImage4Heading}
                          productImage4SubHeading={productImage4SubHeading}
                          setProductImage4SubHeading={setProductImage4SubHeading}
                          productImage4Description={productImage4Description}
                          setProductImage4Description={setProductImage4Description}

                          image4={productImage4Url}
                          setProductImage4Url={setProductImage4Url}
                          setProductImage4File={setProductImage4File}
                          headingColor={commonColor}
                      />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                 }

                 { isEigenschaftenAvailable2 &&
                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                      <h6>
                        <EdiText
                                type='text'
                                value={navbarProductDetail2Menu}
                                onSave={changeProductDetail2MenuTitle}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                        </h6>
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                        <Eigenschaften2
                          editable = {templateEditable}

                          product2Image1Heading={product2Image1Heading}
                          setProduct2Image1Heading={setProduct2Image1Heading}
                          product2Image1SubHeading={product2Image1SubHeading}
                          setProduct2Image1SubHeading={setProduct2Image1SubHeading}
                          product2Image1Description={product2Image1Description}
                          setProduct2Image1Description={setProduct2Image1Description}

                          image1={product2Image1Url}
                          setProduct2Image1Url={setProduct2Image1Url}
                          setProduct2Image1File={setProduct2Image1File}
                          

                          product2Image2Heading={product2Image2Heading}
                          setProduct2Image2Heading={setProduct2Image2Heading}
                          product2Image2SubHeading={product2Image2SubHeading}
                          setProduct2Image2SubHeading={setProduct2Image2SubHeading}
                          product2Image2Description={product2Image2Description}
                          setProduct2Image2Description={setProduct2Image2Description}

                          image2={product2Image2Url}
                          setProduct2Image2Url={setProduct2Image2Url}
                          setProduct2Image2File={setProduct2Image2File}

                          product2Image3Heading={product2Image3Heading}
                          setProduct2Image3Heading={setProduct2Image3Heading}
                          product2Image3SubHeading={product2Image3SubHeading}
                          setProduct2Image3SubHeading={setProduct2Image3SubHeading}
                          product2Image3Description={product2Image3Description}
                          setProduct2Image3Description={setProduct2Image3Description}

                          image3={product2Image3Url}
                          setProduct2Image3Url={setProduct2Image3Url}
                          setProduct2Image3File={setProduct2Image3File}

                          product2Image4Heading={product2Image4Heading}
                          setProduct2Image4Heading={setProduct2Image4Heading}
                          product2Image4SubHeading={product2Image4SubHeading}
                          setProduct2Image4SubHeading={setProduct2Image4SubHeading}
                          product2Image4Description={product2Image4Description}
                          setProduct2Image4Description={setProduct2Image4Description}

                          image4={product2Image4Url}
                          setProduct2Image4Url={setProduct2Image4Url}
                          setProduct2Image4File={setProduct2Image4File}
                          headingColor={commonColor}
                      />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                 }

                 { isEigenschaftenAvailable3 &&
                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                      <h6>
                        <EdiText
                                type='text'
                                value={navbarProductDetail3Menu}
                                onSave={changeProductDetail3MenuTitle}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                        </h6>
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                        <Eigenschaften3
                          editable = {templateEditable}

                          product3Image1Heading={product3Image1Heading}
                          setProduct3Image1Heading={setProduct3Image1Heading}
                          product3Image1SubHeading={product3Image1SubHeading}
                          setProduct3Image1SubHeading={setProduct2Image1SubHeading}

                          image1={product2Image1Url}
                          setProduct3Image1Url={setProduct3Image1Url}
                          setProduct3Image1File={setProduct3Image1File}
                          

                          product3Image2Heading={product3Image2Heading}
                          setProduct3Image2Heading={setProduct3Image2Heading}
                          product3Image2SubHeading={product3Image2SubHeading}
                          setProduct3Image2SubHeading={setProduct3Image2SubHeading}

                          image2={product3Image2Url}
                          setProduct3Image2Url={setProduct3Image2Url}
                          setProduct3Image2File={setProduct3Image2File}

                          product3Image3Heading={product3Image3Heading}
                          setProduct3Image3Heading={setProduct3Image3Heading}
                          product3Image3SubHeading={product3Image3SubHeading}
                          setProduct3Image3SubHeading={setProduct3Image3SubHeading}

                          image3={product2Image3Url}
                          setProduct3Image3Url={setProduct3Image3Url}
                          setProduct3Image3File={setProduct3Image3File}

                          product3Image4Heading={product3Image4Heading}
                          setProduct3Image4Heading={setProduct3Image4Heading}
                          product3Image4SubHeading={product3Image4SubHeading}
                          setProduct3Image4SubHeading={setProduct3Image4SubHeading}

                          image4={product3Image4Url}
                          setProduct3Image4Url={setProduct3Image4Url}
                          setProduct3Image4File={setProduct3Image4File}
                          headingColor={commonColor}
                      />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                 }

                 { isEigenschaftenAvailable4 &&
                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                      <h6>
                        <EdiText
                                type='text'
                                value={navbarProductDetail4Menu}
                                onSave={changeProductDetail4MenuTitle}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                        </h6>
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                        <Eigenschaften4
                          editable = {templateEditable}

                          product4Image1Heading={product4Image1Heading}
                          setProduct4Image1Heading={setProduct4Image1Heading}
                          product4Image1SubHeading={product4Image1SubHeading}
                          setProduct4Image1SubHeading={setProduct4Image1SubHeading}

                          image1={product4Image1Url}
                          setProduct4Image1Url={setProduct4Image1Url}
                          setProduct4Image1File={setProduct4Image1File}
                          

                          product4Image2Heading={product4Image2Heading}
                          setProduct4Image2Heading={setProduct4Image2Heading}
                          product4Image2SubHeading={product4Image2SubHeading}
                          setProduct4Image2SubHeading={setProduct4Image2SubHeading}

                          image2={product4Image2Url}
                          setProduct4Image2Url={setProduct4Image2Url}
                          setProduct4Image2File={setProduct4Image2File}

                          product4Image3Heading={product4Image3Heading}
                          setProduct4Image3Heading={setProduct4Image3Heading}
                          product4Image3SubHeading={product4Image3SubHeading}
                          setProduct4Image3SubHeading={setProduct4Image3SubHeading}

                          image3={product4Image3Url}
                          setProduct4Image3Url={setProduct4Image3Url}
                          setProduct4Image3File={setProduct4Image3File}

                          product4Image4Heading={product4Image4Heading}
                          setProduct4Image4Heading={setProduct4Image4Heading}
                          product4Image4SubHeading={product4Image4SubHeading}
                          setProduct4Image4SubHeading={setProduct4Image4SubHeading}

                          image4={product4Image4Url}
                          setProduct4Image4Url={setProduct4Image4Url}
                          setProduct4Image4File={setProduct4Image4File}
                          headingColor={commonColor}
                      />
                        </div>
                      </div>
                     
                    </div>
                  </div>
                 }
                 
                  {isVideoAvailable &&  
                      <div className="container-fluid">
                          <div className="row mt-2 mb-2">
                            <div className="col-sm-12 col-xl-12">
                            <h6>
                                <EdiText
                                        type='text'
                                        value={navbarVideoMenu}
                                        onSave={changeVideoMenuTitle}
                                        validationMessage="Please type at least 50 characters."
                                        validation={val => val.length <= 50}
                                        editOnViewClick={true}
                                        showButtonsOnHover
                                        submitOnEnter={true}
                                        submitOnUnfocus={true}
                                        saveButtonClassName="custom-save-button"
                                        cancelButtonClassName="custom-cancel-button"
                                    />
                                </h6>
                            </div>
                          </div>
                          <div className="row mt-2 mb-2">
                            <div className="col-sm-12 col-xl-12">
                              <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                                 <Video
                                   editable = {templateEditable}
                                   heading={videoHeading}
                                   headingColor={commonColor}
                                   subHeading={videoSubHeading}
                                   setVideoHeading={setVideoHeading}
                                   setVideoSubHeading={setVideoSubHeading}
                                   videoPreview ={videoPreview}
                                   setVideoPreview={setVideoPreview}
                                   />
                              </div>
                           </div>
                      
                          </div>
                      </div>
                  }


                 {isGalerieAvailable &&
                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <h6>
                          <EdiText
                                    type='text'
                                    value={navbarGalleryMenu}
                                    onSave={changeGalleryMenuTitle}
                                    validationMessage="Please type at least 50 characters."
                                    validation={val => val.length <= 50}
                                    editOnViewClick={true}
                                    showButtonsOnHover
                                    submitOnEnter={true}
                                    submitOnUnfocus={true}
                                    saveButtonClassName="custom-save-button"
                                    cancelButtonClassName="custom-cancel-button"
                                />
                        </h6>
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                        <Galerie
                        editable = {templateEditable}
                        headingColor={commonColor}
                        image1={galleryImage1Url}
                        setGalleryImage1Url={setGalleryImage1Url}
                        setGalleryImage1File={setGalleryImage1File}
                        image2={galleryImage2Url}
                        setGalleryImage2Url={setGalleryImage2Url}
                        setGalleryImage2File={setGalleryImage2File}
                        image3={galleryImage3Url}
                        setGalleryImage3Url={setGalleryImage3Url}
                        setGalleryImage3File={setGalleryImage3File}
                        image4={galleryImage4Url}
                        setGalleryImage4Url={setGalleryImage4Url}
                        setGalleryImage4File={setGalleryImage4File}
                        image5={galleryImage5Url}
                        setGalleryImage5Url={setGalleryImage5Url}
                        setGalleryImage5File={setGalleryImage5File}
                        setGalleryHeading={setGalleryHeading}
                        setGallerySubHeading={setGallerySubHeading}
                        heading={galleryHeading}
                        subHeading={gallerySubHeading}
                        setGalleryImageHeading1={setGalleryImageHeading1}
                        setGalleryImageSubHeading1={setGalleryImageSubHeading1}
                        imageHeading1={imageHeading1}
                        imageSubHeading1={imageSubHeading1}
                        setGalleryImageHeading2={setGalleryImageHeading2}
                        setGalleryImageSubHeading2={setGalleryImageSubHeading2}
                        imageHeading2={imageHeading2}
                        imageSubHeading2={imageSubHeading2}
                        setGalleryImageHeading3={setGalleryImageHeading3}
                        setGalleryImageSubHeading3={setGalleryImageSubHeading3}
                        imageHeading3={imageHeading3}
                        imageSubHeading3={imageSubHeading3}
                        setGalleryImageHeading4={setGalleryImageHeading4}
                        setGalleryImageSubHeading4={setGalleryImageSubHeading4}
                        imageHeading4={imageHeading4}
                        imageSubHeading4={imageSubHeading4}
                        setGalleryImageHeading5={setGalleryImageHeading5}
                        setGalleryImageSubHeading5={setGalleryImageSubHeading5}
                        imageHeading5={imageHeading5}
                        imageSubHeading5={imageSubHeading5}
                    />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  }
                  {isQuestion1Available &&
                          <div className="container-fluid">
                          <div className="row mt-2 mb-2">
                            <div className="col-sm-12 col-xl-12">
                            <h6>
                                <EdiText
                                          type='text'
                                          value={navbarfrage1Menu}
                                          onSave={changeFrage1MenuTitle}
                                          validationMessage="Please type at least 50 characters."
                                          validation={val => val.length <= 50}
                                          editOnViewClick={true}
                                          showButtonsOnHover
                                          submitOnEnter={true}
                                          submitOnUnfocus={true}
                                          saveButtonClassName="custom-save-button"
                                          cancelButtonClassName="custom-cancel-button"
                                      />
                                  </h6>
                            </div>
                          </div>
                          <div className="row mt-2 mb-2">
                            <div className="col-sm-12 col-xl-12">
                              <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                              <Question1
                                editable = {templateEditable}
                                heading={question1heading}
                                headingColor={commonColor}
                                setQuestion1Heading={setQuestion1Heading}
                             
                                image1={question1Image1Url}
                                setQuestion1firstImage1Url={setQuestion1firstImage1Url}
                                setQuestion1firstImage1File={setQuestion1firstImage1File}
                                setQuestion1Button1Text={setQuestion1Button1Text}
                                question1Button1Text={question1Button1Text}
      
                               
                                image2={question1Image2Url}
                                setQuestion1secondImage2Url={setQuestion1secondImage2Url}
                                setQuestion1secondImage2File={setQuestion1secondImage2File}
                                setQuestion1Button2Text={setQuestion1Button2Text}
                                question1Button2Text={question1Button2Text}

                                image3={question1Image3Url}
                                setQuestion1thirdImage3Url={setQuestion1thirdImage3Url}
                                setQuestion1thirdImage3File={setQuestion1thirdImage3File}
                                setQuestion1Button3Text={setQuestion1Button3Text}
                                question1Button3Text={question1Button3Text}

                                image4={question1Image4Url}
                                setQuestion1fourthImage4Url={setQuestion1fourthImage4Url}
                                setQuestion1fourthImage4File={setQuestion1fourthImage4File}
                                setQuestion1Button4Text={setQuestion1Button4Text}
                                question1Button4Text={question1Button4Text}



                                buttonTextColor = {commonButtonTextColor}
                                buttonColor={commonColor}
                                activeButtonColor={commonButtonTextColor}
                            />
                              </div>
                            </div>
                           
                          </div>
                        </div>
                  
                  }

                  {isQuestion2Available &&
                          <div className="container-fluid">
                          <div className="row mt-2 mb-2">
                            <div className="col-sm-12 col-xl-12">
                            <h6>
                                <EdiText
                                          type='text'
                                          value={navbarfrage2Menu}
                                          onSave={changeFrage2MenuTitle}
                                          validationMessage="Please type at least 50 characters."
                                          validation={val => val.length <= 50}
                                          editOnViewClick={true}
                                          showButtonsOnHover
                                          submitOnEnter={true}
                                          submitOnUnfocus={true}
                                          saveButtonClassName="custom-save-button"
                                          cancelButtonClassName="custom-cancel-button"
                                      />
                                  </h6>
          
                            </div>
                          </div>
                          <div className="row mt-2 mb-2">
                            <div className="col-sm-12 col-xl-12">
                              <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                              <Question2
                                 editable = {templateEditable}
                                 heading={question2heading}
                                 setQuestion2Heading={setQuestion2Heading}
                              
                                 image1={question2Image1Url}
                                 setQuestion2firstImage1Url={setQuestion2firstImage1Url}
                                 setQuestion2firstImage1File={setQuestion2firstImage1File}
                                 setQuestion2Button1Text={setQuestion2Button1Text}
                                 question2Button1Text={question2Button1Text}
       
                                
                                 image2={question2Image2Url}
                                 setQuestion2secondImage2Url={setQuestion2secondImage2Url}
                                 setQuestion2secondImage2File={setQuestion2secondImage2File}
                                 setQuestion2Button2Text={setQuestion2Button2Text}
                                 question2Button2Text={question2Button2Text}

                                 image3={question2Image3Url}
                                 setQuestion2thirdImage3Url={setQuestion2thirdImage3Url}
                                 setQuestion2thirdImage3File={setQuestion2thirdImage3File}
                                 setQuestion2Button3Text={setQuestion2Button3Text}
                                 question2Button3Text={question2Button3Text}

                                 image4={question2Image4Url}
                                 setQuestion2fourthImage4Url={setQuestion2fourthImage4Url}
                                 setQuestion2fourthImage4File={setQuestion2fourthImage4File}
                                 setQuestion2Button4Text={setQuestion2Button4Text}
                                 question2Button4Text={question2Button4Text}

                                 buttonTextColor = {commonButtonTextColor}
                                 buttonColor={commonColor}
                                 headingColor={commonColor}
                            />
                              </div>
                            </div>
                           
                          </div>
                        </div>
                  
                  }
                  { isQuestion3Available &&
                           <div className="container-fluid">
                           <div className="row mt-2 mb-2">
                             <div className="col-sm-12 col-xl-12">
                             <h6>
                                <EdiText
                                          type='text'
                                          value={navbarfrage3Menu}
                                          onSave={changeFrage3MenuTitle}
                                          validationMessage="Please type at least 50 characters."
                                          validation={val => val.length <= 50}
                                          editOnViewClick={true}
                                          showButtonsOnHover
                                          submitOnEnter={true}
                                          submitOnUnfocus={true}
                                          saveButtonClassName="custom-save-button"
                                          cancelButtonClassName="custom-cancel-button"
                                      />
                                  </h6>
                             </div>
                           </div>
                           <div className="row mt-2 mb-2">
                             <div className="col-sm-12 col-xl-12">
                               <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                               <Question3
                                   editable = {templateEditable}
                                   heading={question3heading}
                                   setQuestion3Heading={setQuestion3Heading}
                                
                                   image1={question3Image1Url}
                                   setQuestion3firstImage1Url={setQuestion3firstImage1Url}
                                   setQuestion3firstImage1File={setQuestion3firstImage1File}
                                   setQuestion3Button1Text={setQuestion3Button1Text}
                                   question3Button1Text={question3Button1Text}
         
                                  
                                   image2={question3Image2Url}
                                   setQuestion3secondImage2Url={setQuestion3secondImage2Url}
                                   setQuestion3secondImage2File={setQuestion3secondImage2File}
                                   setQuestion3Button2Text={setQuestion3Button2Text}
                                   question3Button2Text={question3Button2Text}

                                   image3={question3Image3Url}
                                   setQuestion3thirdImage3Url={setQuestion3thirdImage3Url}
                                   setQuestion3thirdImage3File={setQuestion3thirdImage3File}
                                   setQuestion3Button3Text={setQuestion3Button3Text}
                                   question3Button3Text={question3Button3Text}
  
                                   image4={question3Image4Url}
                                   setQuestion3fourthImage4Url={setQuestion3fourthImage4Url}
                                   setQuestion3fourthImage4File={setQuestion3fourthImage4File}
                                   setQuestion3Button4Text={setQuestion3Button4Text}
                                   question3Button4Text={question3Button4Text}


                                   buttonTextColor = {commonButtonTextColor}
                                   buttonColor={commonColor}
                                   activeButtonColor={commonButtonTextColor}
                                   headingColor={commonColor}
                               />
                               </div>
                             </div>
                            
                           </div>
                         </div>
                    }

                

                  <div className="container-fluid">
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                      <h6>
                      <EdiText
                                type='text'
                                value={navbarContactMenu}
                                onSave={changeContactMenuTitle}
                                validationMessage="Please type at least 50 characters."
                                validation={val => val.length <= 50}
                                editOnViewClick={true}
                                showButtonsOnHover
                                submitOnEnter={true}
                                submitOnUnfocus={true}
                                saveButtonClassName="custom-save-button"
                                cancelButtonClassName="custom-cancel-button"
                            />
                        </h6>
                      </div>
                    </div>
                    <div className="row mt-2 mb-2">
                      <div className="col-sm-12 col-xl-12">
                        <div className="card h-100 card-full" style={{minHeight:'500px'}}>
                        <Kontakt
                              editable = {templateEditable}
                              background={navbarBackgroundColor}
                              buttonColor={commonColor}
                              buttonTextColor = {commonButtonTextColor}
                              heading={contactHeading}
                              subheading={contactSubHeading}
                              headingColor={commonColor}
                              buttonHeading={contactButtonHeading}
                              setContactHeading={setContactHeading}
                              setContactSubHeading={setContactSubHeading}
                              setContactButtonHeading={setContactButtonHeading}
                             
                          />
                        </div>
                      </div>
      
                    </div>
                  </div>
                  
           
    </Fragment>
  );
};

export default Editor;

export const getServerSideProps = async (context) => {
  const { campaign_id } = context.params;
  const template_detail = await app.get(`/getCampaign/${campaign_id}`).then(response => response.data.campaign);

  return {
    props: {
      campaign_id,
      template_detail
    },
  };
};


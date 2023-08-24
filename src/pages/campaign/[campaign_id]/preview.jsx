import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import app from '../../../../utils/axios';
import Head from 'next/head';
import Loader from '../../../components/Layout/Loader';
import 'animate.css';

const Preview = ({ campaign_id,deviceid,template_detail }) => {

 
  const [templatename, setTemplatename] = useState(template_detail.template.name);
  const [currentPage, setCurrentPage] = useState('willkommen');
  const [templateEditable, setTemplateEditable] = useState('true');
  const [animationParam, setAnimationParam] = useState('');
  
  const [commonColor, setCommonColor] = useState('#434343d1');
  const commonButtonTextColor = ['#ffff'];

  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('#434343d1');
  const [navbarColor, setNavbarColor] = useState('#fff');
  const [navbarActiveColor, setNavbarActiveColor] = useState('#f2745b');


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
  const [welcomeImage1Url, setWelcomeImage1Url] = useState('/assets/img/schuh1.jpg');
  const [welcomeImage2Url, setWelcomeImage2Url] = useState('/assets/img/schuh1.jpg');
  const [welcomeImage3Url, setWelcomeImage3Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage4Url, setWelcomeImage4Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage5Url, setWelcomeImage5Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage6Url, setWelcomeImage6Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage7Url, setWelcomeImage7Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeImage8Url, setWelcomeImage8Url] = useState('/assets/img/schuh2.jpg');
  const [welcomeButtonText, setWelcomeButtonText] = useState('Submit');
  const [welcomeButton1Text, setWelcomeButton1Text] = useState('Analog, was sonst');
  const [welcomeButton2Text, setWelcomeButton2Text] = useState('Digital ist mein Ding');
  const [welcomeButton3Text, setWelcomeButton3Text] = useState('Mehr erfahren');
  const [welcomeButton4Text, setWelcomeButton4Text] = useState('Mehr erfahren');
  const [selecteWelcomeButton, setSelectWelcomeButton] = useState('');
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


  const [productImage1Heading, setProductImage1Heading] = useState('Große Überschrift');
  const [productImage1SubHeading, setProductImage1SubHeading] = useState('Große Überschrift');
  const [productImage1Description, setProductImage1Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');

  const [productImage2Heading, setProductImage2Heading] = useState('Große Überschrift');
  const [productImage2SubHeading, setProductImage2SubHeading] = useState('Große Überschrift');
  const [productImage2Description, setProductImage2Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');


  const [productImage3Heading, setProductImage3Heading] = useState('Große Überschrift');
  const [productImage3SubHeading, setProductImage3SubHeading] = useState('Große Überschrift');
  const [productImage3Description, setProductImage3Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');

  const [productImage4Heading, setProductImage4Heading] = useState('Große Überschrift');
  const [productImage4SubHeading, setProductImage4SubHeading] = useState('Große Überschrift');
  const [productImage4Description, setProductImage4Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');
  const [productImage1Url, setProductImage1Url] = useState('/assets/img/schuh1.jpg');
  const [productImage2Url, setProductImage2Url] = useState('/assets/img/schuh2.jpg');
  const [productImage3Url, setProductImage3Url] = useState('/assets/img/schuh3.jpg');
  const [productImage4Url, setProductImage4Url] = useState('/assets/img/schuh4.jpg');

  const [product2Image1Heading, setProduct2Image1Heading] = useState('Große Überschrift');
  const [product2Image1SubHeading, setProduct2Image1SubHeading] = useState('Große Überschrift');
  const [product2Image1Description, setProduct2Image1Description] = useState('Die ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen');
  const [product2Image1Url, setProduct2Image1Url] = useState('/assets/img/schuh1.jpg');
  const [product2Image2Url, setProduct2Image2Url] = useState('/assets/img/schuh2.jpg');
  const [product2Image3Url, setProduct2Image3Url] = useState('/assets/img/schuh3.jpg');
  const [product2Image4Url, setProduct2Image4Url] = useState('/assets/img/schuh4.jpg');
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
  const [product3Image2Url, setProduct3Image2Url] = useState('/assets/img/schuh2.jpg');
  const [product3Image3Url, setProduct3Image3Url] = useState('/assets/img/schuh3.jpg');
  const [product3Image4Url, setProduct3Image4Url] = useState('/assets/img/schuh4.jpg');
  const [product3Image2Heading, setProduct3Image2Heading] = useState('Große Überschrift');
  const [product3Image2SubHeading, setProduct3Image2SubHeading] = useState('Große Überschrift');
  const [product3Image3Heading, setProduct3Image3Heading] = useState('Große Überschrift');
  const [product3Image3SubHeading, setProduct3Image3SubHeading] = useState('Große Überschrift');
  const [product3Image4Heading, setProduct3Image4Heading] = useState('Große Überschrift');
  const [product3Image4SubHeading, setProduct3Image4SubHeading] = useState('Große Überschrift');


  const [product4Image1Heading, setProduct4Image1Heading] = useState('Große Überschrift');
  const [product4Image1SubHeading, setProduct4Image1SubHeading] = useState('Große Überschrift');
  const [product4Image1Url, setProduct4Image1Url] = useState('/assets/img/schuh1.jpg');
  const [product4Image2Url, setProduct4Image2Url] = useState('/assets/img/schuh2.jpg');
  const [product4Image3Url, setProduct4Image3Url] = useState('/assets/img/schuh3.jpg');
  const [product4Image4Url, setProduct4Image4Url] = useState('/assets/img/schuh4.jpg');
  const [product4Image2Heading, setProduct4Image2Heading] = useState('Große Überschrift');
  const [product4Image2SubHeading, setProduct4Image2SubHeading] = useState('Große Überschrift');
  const [product4Image3Heading, setProduct4Image3Heading] = useState('Große Überschrift');
  const [product4Image3SubHeading, setProduct4Image3SubHeading] = useState('Große Überschrift');
  const [product4Image4Heading, setProduct4Image4Heading] = useState('Große Überschrift');
  const [product4Image4SubHeading, setProduct4Image4SubHeading] = useState('Große Überschrift');
 
  const [videoHeading, setVideoHeading] = useState('Dies ist ein');
  const [videoSubHeading, setVideoSubHeading] = useState('Dies ist ein Typoblindtext');
  const [videoPreview, setVideoPreview] = useState('/video/adidas.mp4');


  const [galleryImage1Url, setGalleryImage1Url] = useState('/assets/img/schuh1.jpg');
  const [galleryImage2Url, setGalleryImage2Url] = useState('/assets/img/schuh2.jpg');
  const [galleryImage3Url, setGalleryImage3Url] = useState('/assets/img/schuh3.jpg');
  const [galleryImage4Url, setGalleryImage4Url] = useState('/assets/img/schuh4.jpg');
  const [galleryImage5Url, setGalleryImage5Url] = useState('/assets/img/schuh5.jpg');

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
  const [question1Image2Url, setQuestion1secondImage2Url] = useState('/assets/img/schuh2.jpg');
  const [question1Image3Url, setQuestion1secondImage3Url] = useState('/assets/img/schuh2.jpg');
  const [question1Image4Url, setQuestion1secondImage4Url] = useState('/assets/img/schuh2.jpg');
  const [question1Button1Text, setQuestion1Button1Text] = useState('Mitarbeiter holen');
  const [question1Button2Text, setQuestion1Button2Text] = useState('Mitarbeiter holen');
  const [question1Button3Text, setQuestion1Button3Text] = useState('Mitarbeiter holen');
  const [question1Button4Text, setQuestion1Button4Text] = useState('Mitarbeiter holen');
  const [selectQuestion1Button1value, setSelectQuestion1Button1value] = useState('');


  const [question2heading, setQuestion2Heading] = useState('Dies ist ein');
  const [question2Image1Url, setQuestion2firstImage1Url] = useState('/assets/img/schuh1.jpg');
  const [question2Image2Url, setQuestion2secondImage2Url] = useState('/assets/img/schuh2.jpg');
  const [question2Image3Url, setQuestion2secondImage3Url] = useState('/assets/img/schuh2.jpg');
  const [question2Image4Url, setQuestion2secondImage4Url] = useState('/assets/img/schuh2.jpg');
  const [question2Button1Text, setQuestion2Button1Text] = useState('Mitarbeiter holen');
  const [question2Button2Text, setQuestion2Button2Text] = useState('Mitarbeiter holen');
  const [question2Button3Text, setQuestion2Button3Text] = useState('Mitarbeiter holen');
  const [question2Button4Text, setQuestion2Button4Text] = useState('Mitarbeiter holen');
  const [selectQuestion2Button1value, setSelectQuestion2Button1value] = useState('');

  const [question3heading, setQuestion3Heading] = useState('Dies ist ein');
  const [question3Image1Url, setQuestion3firstImage1Url] = useState('/assets/img/schuh1.jpg');
  const [question3Image2Url, setQuestion3secondImage2Url] = useState('/assets/img/schuh2.jpg');
  const [question3Image3Url, setQuestion3secondImage3Url] = useState('/assets/img/schuh2.jpg');
  const [question3Image4Url, setQuestion3secondImage4Url] = useState('/assets/img/schuh2.jpg');
  const [question3Button1Text, setQuestion3Button1Text] = useState('Mitarbeiter holen');
  const [question3Button2Text, setQuestion3Button2Text] = useState('Mitarbeiter holen');
  const [question3Button3Text, setQuestion3Button3Text] = useState('Mitarbeiter holen');
  const [question3Button4Text, setQuestion3Button4Text] = useState('Mitarbeiter holen');
  const [selectQuestion3Button1value, setSelectQuestion3Button1value] = useState('');

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

          if(ele.property == 'image2 subheading'){
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
            setQuestion1secondImage3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setQuestion1secondImage4Url(ele.value);
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
            setQuestion2secondImage3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setQuestion2secondImage4Url(ele.value);
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
            setQuestion3secondImage3Url(ele.value);
          }

          if(ele.property == 'image4'){
            setQuestion3secondImage4Url(ele.value);
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
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_first_sub_heading'){
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_second_heading'){
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_second_sub_heading'){
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_third_heading'){
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_third_sub_heading'){
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_fourth_heading'){
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_fourth_sub_heading'){
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_fifth_heading'){
            setGalleryImageHeading1(ele.value);
          }

          if(ele.property =='image_fifth_sub_heading'){
            setGalleryImageHeading1(ele.value);
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
    
  },[])

  //  animation
   const Circleanimation = dynamic(() => import(`../../../components/animation/circleanimation`).catch(err => {
    setIsAnimationAvailable(false);
  }));

  const Bubbleanimation = dynamic(() => import(`../../../components/animation/bubbleanimation`).catch(err => {
    setIsAnimationAvailable(false);
  }));

  const Dotanimation = dynamic(() => import(`../../../components/animation/dotanimation`).catch(err => {
    setIsAnimationAvailable(false);
  }));

  const Snowfallanimation = dynamic(() => import(`../../../components/animation/snowfallanimation`).catch(err => {
    setIsAnimationAvailable(false);
  }));

  const Baloonanimation = dynamic(() => import(`../../../components/animation/baloonanimation`).catch(err => {
    setIsAnimationAvailable(false);
  }));
//  animation


  const Header = dynamic(() => import(`../../../components/templates/${templatename}/Header`).catch(err => {
    setIsHeaderAvailable(false);
  }));
  
  const Willkommen = dynamic(() => import(`../../../components/templates/${templatename}/Willkommen`), {
    // loading: () => <p>Loading...</p>,
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
   
  });

  const Thankyou = dynamic(() => import(`../../../components/templates/thankyou`), {
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
    <>
  {/* <Loader /> */}

      <Head>
         {/* header bottom */}
         {templatename == 'inhera' && (
           <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_2.css`} />
        )}

        {templatename == 'conzeus' && (
           <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_2.css`} />
        )}
        
        {/* header side  */}
        {templatename == 'dotup' &&(
           <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_3.css`} />
        )}

        {templatename == 'dashdock' &&(
           <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_3.css`} />
        )}

        
        {templatename == 'onares' &&(
           <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_3.css`} />
        )}
        
        {/* header side bigmenu */}
        {templatename == 'jumbase' &&(
             <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/big-nav.css`} />
        )}

        {templatename == 'fairpress' &&(
             <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/big-nav.css`} />
        )}

        {templatename == 'godion' &&(
              <link rel='stylesheet' href={`/assets/tepmplateComponent/navbar/nav_2.css`} />
        )}

        <link rel='stylesheet' href={`/assets/tepmplateComponent/commontemp.css`} />
        <link rel='stylesheet' href={`/assets/tepmplateComponent/grid/grid_1.css`} />
        <link rel='stylesheet' href={`/assets/tepmplateComponent/contactForm/form_1.css`} />
      </Head>



      <Header 
        backgroundColor={navbarBackgroundColor} 
        color={commonColor} 
        activeColor={commonColor} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage} 
        notShowable={false}
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
        setMenuFirstHeading={setNavbarWelcomeMenu}
        setMenuSecondHeading={setNavbarProductDetail1Menu}
        setMenuThirdHeading={setNavbarProductDetail2Menu}
        setMenuFourthHeading={setNavbarProductDetail3Menu}
        setMenuFifthHeading={setNavbarProductDetail4Menu}
        setMenuSixHeading={setNavbarFrage1Menu}
        setMenuSevenHeading={setNavbarFrage2Menu}
        setMenuEightHeading={setNavbarFrage3Menu}
        setMenuNineHeading={setNavbarVideoMenu}
        setMenuTenHeading={setNavbarGalleryMenu}
        setMenuElevenHeading={setNavbarContactMenu}
      />
    
  
        {animationParam =='circleanimation' && (
          <Circleanimation color={commonColor}></Circleanimation>
        )}


        {animationParam =='snowfallanimation' && (
          <Snowfallanimation color={commonColor}></Snowfallanimation>
        )}
        
        {animationParam =='bubbleanimation' && (
          <Bubbleanimation color={commonColor}></Bubbleanimation>
        )}

        {animationParam =='dotanimation' && (
          <Dotanimation color={commonColor}></Dotanimation>
        )}

        {animationParam =='baloonanimation' && (
          <Baloonanimation color={commonColor}></Baloonanimation>
        )}



      {currentPage == 'willkommen' && (
        <div className='container-fluid'>
             <div className='row'>
              <Willkommen
                  teditable = {templateEditable}
                  buttonTextColor = {commonButtonTextColor}
                  buttonColor={commonColor}
                  setCurrentPage={setCurrentPage} 
                  currentPage={currentPage}
                  headingColor={commonColor}
                  activeButtonColor={commonButtonTextColor}
                  heading={welcomeHeading}
                  subHeading={welcomeSubHeading}
                  description={welcomeDescription}
                  image1={welcomeImage1Url}
                  image2={welcomeImage2Url}
                  image3={welcomeImage3Url}
                  image4={welcomeImage4Url}
                  image5={welcomeImage5Url}
                  image6={welcomeImage6Url}
                  image7={welcomeImage7Url}
                  image8={welcomeImage8Url}
                  image1heading={welcomeImage1Heading}
                  image1SubHeading={welcomeImage1SubHeading}
                  image2heading={welcomeImage2Heading}
                  image2SubHeading={welcomeImage2SubHeading}
                  image3heading={welcomeImage3Heading}
                  image3SubHeading={welcomeImage3SubHeading}
                  image4heading={welcomeImage4Heading}
                  image4SubHeading={welcomeImage4SubHeading}
                  image5heading={welcomeImage5Heading}
                  image5SubHeading={welcomeImage5SubHeading}
                  setSelectWelcomeButton={setSelectWelcomeButton}
                  buttontext1={welcomeButton1Text}
                  buttontext2={welcomeButton2Text}
                  buttontext3={welcomeButton3Text}
                  buttontext4={welcomeButton4Text}
              />
            </div>
        </div>
      )}

      {currentPage == 'eigenschaften' && (
        <div className='container-fluid'>
          <div className='row'>
            <Eigenschaften
              teditable = {templateEditable}

              productImage1Heading={productImage1Heading}
              productImage1SubHeading={productImage1SubHeading}
              productImage1Description={productImage1Description}

              productImage2Heading={productImage2Heading}
              productImage2SubHeading={productImage2SubHeading}
              productImage2Description={productImage2Description}

              productImage3Heading={productImage3Heading}
              productImage3SubHeading={productImage3SubHeading}
              productImage3Description={productImage3Description}

              productImage4Heading={productImage4Heading}
              productImage4SubHeading={productImage4SubHeading}
              productImage4Description={productImage4Description}

              image1={productImage1Url}
              setProductImage1Url={setProductImage1Url}

              image2={productImage2Url}
              setProductImage2Url={setProductImage2Url}

              image3={productImage3Url}
              setProductImage3Url={setProductImage3Url}

              image4={productImage4Url}
              setProductImage4Url={setProductImage4Url}
              headingColor={commonColor}
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
            />
          </div>
        </div>
      )}

     {currentPage == 'Eigenschaften2' && (
      <div className="container-fluid">
        <div className="row">
            <Eigenschaften2
              teditable = {templateEditable}

              product2Image1Heading={product2Image1Heading}
              product2Image1SubHeading={product2Image1SubHeading}
              product2Image1Description={product2Image1Description}

              product2Image2Heading={product2Image2Heading}
              product2Image2SubHeading={product2Image2SubHeading}
              product2Image2Description={product2Image2Description}

              product2Image3Heading={product2Image3Heading}
              product2Image3SubHeading={product2Image3SubHeading}
              product2Image3Description={product2Image3Description}

              product2Image4Heading={product2Image4Heading}
              product2Image4SubHeading={product2Image4SubHeading}
              product2Image4Description={product2Image4Description}

              image1={product2Image1Url}
              setProduct2Image1Url={setProduct2Image1Url}

              image2={product2Image2Url}
              setProduct2Image2Url={setProduct2Image2Url}

              image3={product2Image3Url}
              setProduct2Image3Url={setProduct2Image3Url}

              image4={product2Image4Url}
              setProduct2Image4Url={setProduct2Image4Url}
              headingColor={commonColor}
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
          />
            </div>
          </div>
         
      )}

      {currentPage == 'Eigenschaften3' && (
      <div className="container-fluid">
        <div className="row">
            <Eigenschaften3
              teditable = {templateEditable}

              product3Image1Heading={product3Image1Heading}
              setProduct3Image1Heading={setProduct3Image1Heading}
              product3Image1SubHeading={product3Image1SubHeading}
              setProduct3Image1SubHeading={setProduct2Image1SubHeading}

              image1={product2Image1Url}
              setProduct3Image1Url={setProduct3Image1Url}
              

              product3Image2Heading={product3Image2Heading}
              setProduct3Image2Heading={setProduct3Image2Heading}
              product3Image2SubHeading={product3Image2SubHeading}
              setProduct3Image2SubHeading={setProduct3Image2SubHeading}

              image2={product3Image2Url}
              setProduct3Image2Url={setProduct3Image2Url}

              product3Image3Heading={product3Image3Heading}
              setProduct3Image3Heading={setProduct3Image3Heading}
              product3Image3SubHeading={product3Image3SubHeading}
              setProduct3Image3SubHeading={setProduct3Image3SubHeading}

              image3={product2Image3Url}
              setProduct3Image3Url={setProduct3Image3Url}

              product3Image4Heading={product3Image4Heading}
              setProduct3Image4Heading={setProduct3Image4Heading}
              product3Image4SubHeading={product3Image4SubHeading}
              setProduct3Image4SubHeading={setProduct3Image4SubHeading}

              image4={product3Image4Url}
              setProduct3Image4Url={setProduct3Image4Url}
              headingColor={commonColor}
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
          />
            </div>
          </div>
         
      )}

      {currentPage == 'Eigenschaften4' && (
      <div className="container-fluid">
        <div className="row">
            <Eigenschaften4
              teditable = {templateEditable}

              product4Image1Heading={product4Image1Heading}
              setProduct4Image1Heading={setProduct4Image1Heading}
              product4Image1SubHeading={product4Image1SubHeading}
              setProduct4Image1SubHeading={setProduct4Image1SubHeading}

              image1={product4Image1Url}
              setProduct4Image1Url={setProduct4Image1Url}
              

              product4Image2Heading={product4Image2Heading}
              setProduct4Image2Heading={setProduct4Image2Heading}
              product4Image2SubHeading={product4Image2SubHeading}
              setProduct4Image2SubHeading={setProduct4Image2SubHeading}

              image2={product4Image2Url}
              setProduct4Image2Url={setProduct4Image2Url}

              product4Image3Heading={product4Image3Heading}
              setProduct4Image3Heading={setProduct4Image3Heading}
              product4Image3SubHeading={product4Image3SubHeading}
              setProduct4Image3SubHeading={setProduct4Image3SubHeading}

              image3={product4Image3Url}
              setProduct4Image3Url={setProduct4Image3Url}

              product4Image4Heading={product4Image4Heading}
              setProduct4Image4Heading={setProduct4Image4Heading}
              product4Image4SubHeading={product4Image4SubHeading}
              setProduct4Image4SubHeading={setProduct4Image4SubHeading}

              image4={product4Image4Url}
              setProduct4Image4Url={setProduct4Image4Url}
              headingColor={commonColor}
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
          />
            </div>
          </div>
         
      )}

      {currentPage == 'video' && (
            <div className="container-fluid">
                <div className="row">
                   <Video
                      teditable = {templateEditable}
                      headingColor={commonColor}                  
                      heading={videoHeading}
                      subHeading={videoSubHeading}
                      setVideoHeading={setVideoHeading}
                      setVideoSubHeading={setVideoSubHeading}
                      videoPreview ={videoPreview}
                      setVideoPreview={setVideoPreview}
                      />
                </div>
            </div>
      )}

      {currentPage == 'question1' &&(
           <div className="container-fluid">
                <div className="row">
                    <Question1
                      teditable = {templateEditable}
                      heading={question1heading}
                      setQuestion1Heading={setQuestion1Heading}
                      headingColor={commonColor}

                      image1={question1Image1Url}
                      setQuestion1firstImage1Url={setQuestion1firstImage1Url}
                      setQuestion1Button1Text={setQuestion1Button1Text}
                      question1Button1Text={question1Button1Text}

                      setCurrentPage={setCurrentPage} 
                      currentPage={currentPage}
                      
                      image2={question1Image2Url}
                      setQuestion1secondImage2Url={setQuestion1secondImage2Url}
                      setQuestion1Button2Text={setQuestion1Button2Text}
                      question1Button2Text={question1Button2Text}

                      image3={question1Image3Url}
                      setQuestion1secondImage3Url={setQuestion1secondImage3Url}
                      setQuestion1Button3Text={setQuestion1Button3Text}
                      question1Button3Text={question1Button3Text}

                      image4={question1Image4Url}
                      setQuestion1secondImage4Url={setQuestion1secondImage4Url}
                      setQuestion1Button4Text={setQuestion1Button4Text}
                      question1Button4Text={question1Button4Text}


                      buttonTextColor = {commonButtonTextColor}
                      buttonColor={commonColor}
                      activeButtonColor={commonButtonTextColor}
                      setSelectQuestion1Button1={setSelectQuestion1Button1value}
                  />
                
                </div>
         </div>
      )}

      {currentPage == 'question2' &&(
         <div className='container-fluid'>
            <div className='row'>
              <Question2
                  teditable = {templateEditable}
                  heading={question2heading}
                  setQuestion2Heading={setQuestion2Heading}
                  headingColor={commonColor}
                  image1={question2Image1Url}
                  setQuestion2firstImage1Url={setQuestion2firstImage1Url}
                  setQuestion2Button1Text={setQuestion2Button1Text}
                  question2Button1Text={question2Button1Text}

                
                  image2={question2Image2Url}
                  setQuestion2secondImage2Url={setQuestion2secondImage2Url}
                  setQuestion2Button2Text={setQuestion2Button2Text}
                  question2Button2Text={question2Button2Text}

                  image3={question2Image3Url}
                  setQuestion2secondImage3Url={setQuestion2secondImage3Url}
                  setQuestion2Button3Text={setQuestion2Button3Text}
                  question2Button3Text={question2Button3Text}

                  image4={question2Image4Url}
                  setQuestion2secondImage4Url={setQuestion2secondImage4Url}
                  setQuestion2Button4Text={setQuestion2Button4Text}
                  question2Button4Text={question2Button4Text}


                  buttonTextColor = {commonButtonTextColor}
                  buttonColor={commonColor}
                  setCurrentPage={setCurrentPage} 
                  currentPage={currentPage}
                  setSelectQuestion2Button1={setSelectQuestion2Button1value}
            />
            </div>
        </div>
      )}


      {currentPage == 'question3' &&(
         <div className='container-fluid'>
            <div className='row'>
                 <Question3
                    teditable = {templateEditable}
                    heading={question3heading}
                    setQuestion3Heading={setQuestion3Heading}
                
                    image1={question3Image1Url}
                    setQuestion3firstImage1Url={setQuestion3firstImage1Url}
                    setQuestion3Button1Text={setQuestion3Button1Text}
                    question3Button1Text={question3Button1Text}

                  
                    image2={question3Image2Url}
                    setQuestion3secondImage2Url={setQuestion3secondImage2Url}
                    setQuestion3Button2Text={setQuestion3Button2Text}
                    question3Button2Text={question3Button2Text}

                    image3={question3Image3Url}
                    setQuestion3secondImage3Url={setQuestion3secondImage3Url}
                    setQuestion3Button3Text={setQuestion3Button3Text}
                    question3Button3Text={question3Button3Text}

                    image4={question3Image4Url}
                    setQuestion3secondImage4Url={setQuestion3secondImage4Url}
                    setQuestion3Button4Text={setQuestion3Button4Text}
                    question3Button4Text={question3Button4Text}

                    buttonTextColor = {commonButtonTextColor}
                    buttonColor={commonColor}
                    activeButtonColor={commonButtonTextColor}
                    setCurrentPage={setCurrentPage} 
                    currentPage={currentPage}
                    setSelectQuestion3Button1={setSelectQuestion3Button1value}
                />
            </div>
        </div>
      )}

      {currentPage == 'galerie' && (
        <Galerie
          teditable = {templateEditable}
          image1={galleryImage1Url}
          setGalleryImage1Url={setGalleryImage1Url}
          image2={galleryImage2Url}
          setGalleryImage2Url={setGalleryImage2Url}
          image3={galleryImage3Url}
          setGalleryImage3Url={setGalleryImage3Url}
          image4={galleryImage4Url}
          setGalleryImage4Url={setGalleryImage4Url}
          image5={galleryImage5Url}
          setGalleryImage5Url={setGalleryImage5Url}
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
          headingColor={commonColor}
          setCurrentPage={setCurrentPage} 
          currentPage={currentPage}
        />
      )}
      
      {currentPage == 'kontakt' && (
        <div className='container-fluid'>
          <div className='row'>
            <Kontakt
              teditable = {templateEditable}
              campaign_id={campaign_id}
              deviceid={deviceid}
              selecteWelcomeButton={selecteWelcomeButton}
              buttonColor={commonColor}
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
              buttonTextColor = {commonButtonTextColor}
              buttonHeading={contactButtonHeading}
              heading={contactHeading}
              subheading={contactSubHeading}
              headingColor={commonColor}
              question1={selectQuestion1Button1value}
              question2={selectQuestion2Button1value}
              question3={selectQuestion3Button1value}
             
            />
          </div>
        </div>
      )}

      {currentPage == 'Thankyou' && (
        <div className='container-fluid'>
          <div className='row'>
            <Thankyou
              buttonColor={commonColor}
              setCurrentPage={setCurrentPage} 
              currentPage={currentPage}
              buttonTextColor = {commonButtonTextColor}
              heading={contactHeading}
              headingColor={commonColor}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;

export const getServerSideProps = async (context) => {
  const { campaign_id } = context.params;
  const template_detail = await app.get(`/getCampaign/${campaign_id}`).then(response => response.data.campaign);

  let { deviceid } = context.query;
  if(deviceid === undefined){
    deviceid = null;
  } 
  return {
    props: {
      campaign_id,
      deviceid,
      template_detail
    },
  };
};
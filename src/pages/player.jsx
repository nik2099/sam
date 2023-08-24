import { useContext, useState, useRef,useEffect} from 'react';
import app from "../../utils/axios";
import { useRouter } from "next/router";
import React, { Fragment } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Accordion, Col } from 'react-bootstrap';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { Btn, H5 } from '../components/AbstractElements';
import Head from 'next/head';
import { PlayerTitle} from '../Constant/seo';
import { useUser } from "../context/user";
import Loader from '../components/Layout/Loader';
import { Players,Downloads,Desktop,informEmployee,Copy} from '../Constant';

const Player = ({}) => {

    const [isOpen, setIsOpen] = useState(0);
    const toggle = (id) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
    const data = [2, 3, 4, 5];

    const { user,setUser } = useUser({});
    const [subUser, setSubUser] = useState([]);
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(null);
    const animatedComponents = makeAnimated();
    const [value, setValue] = useState([]);
    const [copySuccess, setCopySuccess] = useState('');
    const [copySuccess1, setCopySuccess1] = useState('');
    const textAreaRef = useRef(null);
    const textAreaRef1 = useRef(null);

    let options = subUser.map((subuser) => {
        return {
            value: subuser.email,
            label: subuser.email
          }
        }
      );

      function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
      };


      function copyToClipboard1(e) {
        textAreaRef1.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess1('Copied!');
      };




    const getSubUser = async () => {
        try {
          app.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          const response = await app.get("/getSubUser");
        
          setSubUser(response.data.subuser);
       
         
        } catch (error) {
        }
      };
  
    useEffect(() => {
      getSubUser();
    },[]);
    

    const handleChange = (value) => {
        setValue(value);
      };

  
    const subUsersDetail = async (e) => {
        e.preventDefault();
        try{
        const emails = value.map((val) => val.value);

        const response = await app.post(
          "/shareDetail",
          JSON.stringify({ emails })
        );

        setValue("");
    
        toast.success(`${emails.length} users details send`, {
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


  return (

    <Fragment>
      <Loader />
       <Head>
           <title>{PlayerTitle}</title>
        </Head>

          <div className="container-fluid">
						<div className="row mt-4 mb-5">
							<div className="col-sm-12 col-xl-8 box-col-8">
				
								<h6>{Players}</h6>
								<p className="mt-2">Damit du deine Geräte mit diesem Account verbinden und deine Kampagnen ausspielen kannst, benötigst du den smavio Player. Die zum Player gehörenden Zugangsdaten findest du hier:</p>
								<div className="row mt-2 mb-2">
									<div className="col-sm-12 col-xl-12 col-xxl-9 box-col-9">
										<div className="table-responsive clipboard-login-data-wrapper">
											<table className="table clipboard-login-data">
												<tbody>
													<tr>
														<td><label className="col-form-label">Benutzername:</label></td>
														<td style={{width:'100%'}}><input className="form-control" readOnly ref={textAreaRef} value={user.email}/>
                            {copySuccess}</td>
														<td><button className="btn btn-primary btn-clipboard" onClick={copyToClipboard} type="button">{Copy}</button></td>
                          
										
													</tr>
                          <br/>
                          <tr className="mt-2">
													
                            <td><label className="col-form-label">Passwort:</label></td>
                            <td style={{width:'100%'}}><input className="form-control" readOnly ref={textAreaRef1} value={user.pucode}/> {copySuccess1}</td>
                            <td><button className="btn btn-primary btn-clipboard" onClick={copyToClipboard1} type="button" data-clipboard-action="copy" data-clipboard-target="#clipboardExample2" data-bs-original-title="" title="">{Copy}</button></td>
										
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
		
								<h6 className="mt-5">{informEmployee}</h6>
								<p className="mt-2">Sende deinen Mitarbeitern eine E-Mail mit allen wichtigen Informationen, Zugangsdaten und Downloads, damit sie den smavio Player ganz leicht auf allen Endgeräten installieren können!</p>
								<div className="multible-input-wrapper form-input-btn mt-2">
									<div className="form-input-btn_input employees-field">
                  <Select className="form-control"
                                    closeMenuOnSelect={false}
                                    defaultOptions
                                    components={animatedComponents}
                                    defaultValue={selectedOption}
                                    onChange={handleChange}
                                    isMulti
                                    options={options}
                                />
								
									</div>
									<div className="form-input-btn_btn employees">
										<button className="btn btn-primary mt-2" type="button" onClick={subUsersDetail} title="">{informEmployee}</button>
									</div>
								</div>
				
								<h6 className="mt-5">Häufige Fragen</h6>
							
           
              <Accordion defaultActiveKey="1">
                    <div className="default-according" id="accordion">
                      <Card>
                        <CardHeader>
                          <H5 attrH5={{ className: 'mb-0 p-0' }} >
                            <Btn attrBtn={{ as: Card.Header, className: 'btn btn-link', color: 'default', onClick: () => toggle(1) }} >
                            Was ist der smavio Player?
                            </Btn>
                          </H5>
                        </CardHeader>
                        <Collapse isOpen={isOpen === 1}>
                          <CardBody>
                            {'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'}
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card>
                        <CardHeader>
                          <H5 attrH5={{ className: 'mb-0 p-0' }} >
                            <Btn attrBtn={{ as: Card.Header, className: 'btn btn-link', color: 'default', onClick: () => toggle(2) }} >
                            Wie installiere ich den smavio Player?
                            </Btn>
                          </H5>
                        </CardHeader>
                        <Collapse isOpen={isOpen === 2}>
                          <CardBody>
                            {'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'}
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card>
                        <CardHeader>
                          <H5 attrH5={{ className: 'mb-0 p-0' }} >
                            <Btn attrBtn={{ as: Card.Header, className: 'btn btn-link', color: 'default', onClick: () => toggle(3) }} >
                            Auf welchen Geräten kann ich den smavio Player installieren?
                            </Btn>
                          </H5>
                        </CardHeader>
                        <Collapse isOpen={isOpen === 3}>
                          <CardBody>
                            {'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'}
                          </CardBody>
                        </Collapse>
                      </Card>

                      <Card>
                        <CardHeader>
                          <H5 attrH5={{ className: 'mb-0 p-0' }} >
                            <Btn attrBtn={{ as: Card.Header, className: 'btn btn-link', color: 'default', onClick: () => toggle(4) }} >
                            Benötigt der smavio Player eine Verbindung zum Internet?
                            </Btn>
                          </H5>
                        </CardHeader>
                        <Collapse isOpen={isOpen === 4}>
                          <CardBody>
                            {'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'}
                          </CardBody>
                        </Collapse>
                      </Card>
                    
                    </div>
                
              </Accordion>
   
				
							</div>

							<div className="col-sm-12 col-xl-4 box-col-4">
								<h6 className="mb-4">{Downloads}</h6>
								<div className="mb-5">
									<b>{Desktop}</b>
									<p className="mt-2">Installiere den smavio Player für Windows oder MacOS und spiele deine Kampagnen direkt auf deinem Rechner, deinem Laptop und an jedem beliebig angeschlossenen Display oder POS System ab.</p>
									<div className="mb-2"><button className="btn btn-primary btn-w150" type="button" data-bs-original-title="" title=""><i className="fa fa-apple"></i>&nbsp;&nbsp;Mac</button></div>
									<button className="btn btn-primary btn-w150" type="button" data-bs-original-title="" title=""><i className="fa fa-windows"></i>&nbsp;&nbsp;Windows</button>
								</div>
								<div>
									<b>Mobile (Tablet)</b>
									<p className="mt-2">Mit dem smavio Player für iOS und Android spielst du deine Kampagnen direkt auf mobilen Endgeräten aus. *</p>
									<div className="mb-2"><button className="btn btn-primary btn-w150" type="button" data-bs-original-title="" title=""><i className="fa fa-apple"></i>&nbsp;&nbsp;iOS</button></div>
									<div className="mb-5"><button className="btn btn-primary btn-w150" type="button" data-bs-original-title="" title=""><i className="fa fa-android"></i>&nbsp;&nbsp;Android</button></div>
									<small>* Nur für Tablets im Querformat</small>
								</div>
							</div>
						</div>
					</div>
  
  </Fragment>
   
  );
};

export default Player;

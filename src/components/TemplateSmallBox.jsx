import Image from 'next/image';
import Link from 'next/link';

const TemplateSmallBox = ({ template,templateId, myappsIds,setTemplateId, setAppIds, appIds ,show,children }) => {

	const handleMyApps = (templateid) => {
		
		if(appIds.includes(templateid)){
			const ids = appIds.filter(id =>  id != templateid);
			console.log(ids)
			setAppIds(ids)
		}else{
		  setAppIds(state => [...state, templateid])
		}
	}
	
	  
    return (
        <>
            
		
				<div className="card h-100 card-full">
					<div className="table-responsive">


<table className="table">
                    <tbody>
                      <tr>
                          <td colSpan="2" className="app-image-wrapper" id="app01">
                            <div className="dots-wrapper">
                              <div className="hw-tooltip-wrapper hw-tooltip-b1 hw-tooltip-l1 hidden">
                                <div className="hw-tooltip">Vorschau anzeigen</div>
                                <div className="hw-tooltip-arrow"></div>
                              </div>

                              <Link href={`/template/${template.name}/preview`}>
                              <a target="_blank" > 
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                              </a>
                            </Link>
                           
                            </div>


                            <div className="app-info-wrapper-outer">
                              <div className="app-info-trigger-wrapper"></div>
                              <div className="app-info-wrapper">
                                <h5>{template.details.title}</h5>
                                <ul className="mt-2">
                                {template.details.value.map((ele)=>
                                   <li key={ele.id} className="checked">{ele}</li>
                                   
                                )}
                             
                                </ul>
                              </div>
                              <div><img src={template.image} alt=""/></div>
                            </div>
                          </td>
                      </tr>

					  <tr>
									<td className="align-middle">
										<b>{template.name}</b>
										<br/>
										<small>{template.category.name}</small>
									</td>

									
									<td style={{width: '20px',position:'relative'}}>

									{ show == false ? (
											<input className="checkbox_animated" onChange={(e) => handleMyApps(template.id)}  type="checkbox"   name="flexRadioDefault" id="flexRadioDefault1" disabled={myappsIds.includes(template.id) &&(true)} checked={appIds.includes(template.id) &&(true)}></input>
									
									):(
									
										<input className="checkbox_animated" onClick={(e) => setTemplateId(template.id)} checked={ templateId==template.id &&(true) } type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
										
									)}
									
									</td>
								</tr>

                      <tr>
                          <td className="align-middle">
                          <div className="mt-2">
                            {template.details.tags.map((ele)=>
                                <div key={ele.id}  className="tag"><small>{ele}</small></div>
                            )}
                           
                        
                          </div>
                        </td>
                      </tr>
                    </tbody>
                </table>
					</div>
				</div>
			

		
        </>
        );
    };
    
    export default TemplateSmallBox;
    
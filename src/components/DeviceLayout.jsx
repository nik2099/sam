const Device = ({deviceDetail, deviceIds, setDeviceIds}) => {
  
    const handleDevice = (deviceid) => {
        console.log(deviceid);
        if(deviceIds.includes(deviceid)){
            const ids = deviceIds.filter(id =>  id != deviceid);
           
            setDeviceIds(ids)
        }else{
            setDeviceIds(state => [...state, deviceid])
        }
    }

    
    return (
        <>

   
                    <div className="card height-equal">
                        <table className="table">
                        <tbody>
                            <tr>
                            <td className="align-middle icon-td">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </td>
                            <td className="align-middle devices-wrapper-td">
                                <div className="devices-wrapper">
                              
                                <b>{deviceDetail.name}</b><small className="text-muted">({deviceDetail.user.name})</small><br/>
                                <i className="icon-location-pin"></i> <small>{deviceDetail.city},{deviceDetail.state},{deviceDetail.houseno}</small>
                             
                                <div className="devices-status">
                                    <input className="checkbox_animated" checked={ deviceIds.includes(deviceDetail.id) } onChange={(e) => handleDevice(deviceDetail.id)} id="chk-ani" type="checkbox" />

                                </div>

                                <div className="online_status">
                                    
                                { deviceDetail.status == 1 ? (
                                           <div className="dot-green"></div>
                                        ):(
                                           <div className="dot-red"></div>
                                      )}
                                </div>

                              
                                
                                </div>
                                
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
             
           
        </>
        );
    };
    
    export default Device;
    
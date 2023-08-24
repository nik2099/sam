import ProfileImageCircle from "../ProfileImageCircle";
import { useState } from "react";
import app from "../../../utils/axios";
import { toast } from "react-toastify";

const InviteeListItem = ({ memberProp, withPermission, deleteSubUser }) => {
  const [member, setMember] = useState(memberProp);

  return (

    
    
    
    <tr className={`main-nav ${member.status == 'pending' ? '' : 'pending_baar'}`}>
      <td>
          <div className="col-auto">
            <ProfileImageCircle initials={member.email.charAt(0)} size={45} />
          </div>
          {/* <div className="col-auto">
            <h6 className="fw-bold">{member.email}</h6>
            <p>
              <small className="text-capitalize" style={{color:'#a1a1a1'}}>{member.status}</small>
            </p>
          </div> */}
  
      </td>
      <td>
      <h6 className="fw-bold">{member.email}</h6>
            <p>
              <small className="text-capitalize" style={{color:'#a1a1a1'}}>{member.status}</small>
            </p>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            deleteSubUser(member.id);
          }}
        >
          Entfernen
        </button>
      </td>
      <td></td>
    </tr>
  );
};

export default InviteeListItem;

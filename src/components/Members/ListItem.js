import ProfileImageCircle from "../ProfileImageCircle";
import { useState } from "react";
import app from "../../../utils/axios";
import { toast } from "react-toastify";

const MembersListItem = ({ memberProp, withPermission, deleteSubUser }) => {
  const [member, setMember] = useState(memberProp);

  return (

    <tr>
      <td className="td-avatar">  
           <ProfileImageCircle
              initials={
                member &&
                member.first_name.charAt(0) + member.last_name.charAt(0)
              }
              size={45}
            />
      </td>
      <td className="align-middle"><b>{member.first_name} {member.last_name}</b><br/>{member.email}</td>
      <td className="align-middle">{member.type == "user" ? "Admin" : "Employees"}</td>
      <td className="align-middle text-right"></td>
    </tr>

   
  );
};

export default MembersListItem;

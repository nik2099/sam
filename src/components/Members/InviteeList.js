import InviteeListItem from './InviteeListItem';

const InviteeList = ({ members, deleteSubUser }) => {
  return (
    <>
      {members.map((member) => (
        <InviteeListItem memberProp={member} key={member.id} deleteSubUser={deleteSubUser} />
      ))}
    </>
  );
};

export default InviteeList;

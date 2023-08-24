import MembersListItem from './ListItem';

const MembersList = ({ members, deleteSubUser }) => {
  return (
    <>
      {members.map((member) => (
        <MembersListItem
          memberProp={member}
          withPermission={true}
          key={member.id}
          deleteSubUser={deleteSubUser}
        />
      ))}
    </>
  );
};

export default MembersList;

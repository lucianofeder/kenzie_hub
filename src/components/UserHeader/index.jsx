import male_avatar from "../../img/male_avatar.svg";

import {
  Header,
  UserAvatar,
  UserName,
  UserModule,
  TextArea,
  UserInfo,
  UserBio,
  Bio,
  Contact,
} from "./styles";

export const UserHeader = (props) => {
  const { user } = props;
  return (
    <Header>
      <UserInfo>
        <UserAvatar
          src={user.avatar_url || male_avatar}
          alt="Personal avatar"
        />
        <TextArea>
          <UserName>{user.name}</UserName>
          <UserModule>{user.course_module}</UserModule>
        </TextArea>
      </UserInfo>
      <UserBio>
        <Bio value={user.bio} disabled></Bio>
        <Contact>Contact: {user.contact}</Contact>
      </UserBio>
    </Header>
  );
};

export default UserHeader;

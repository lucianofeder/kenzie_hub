import { useHistory } from "react-router-dom";
import kenzie_logo from "../../img/kenzie_logo.png";
import male_avatar from "../../img/male_avatar.svg";
import {
  Header,
  Img,
  LogoSection,
  H2,
  Avatar,
  H3,
  ProfileSection,
  Logout,
} from "./styles";

const HeaderApp = (props) => {
  const history = useHistory();
  const { isLogged, setLogged, user } = props;

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
    setLogged(false);
  };
  return (
    <Header>
      <LogoSection>
        <Img onClick={() => history.push("/")} src={kenzie_logo} alt="Logo" />
        <H2 onClick={() => history.push("/")}>Kenzie Hub</H2>
        <H3 onClick={() => history.push("/all_users")}>All Users</H3>
      </LogoSection>
      <ProfileSection>
        {isLogged && (
          <Avatar
            alt="User Avatar"
            src={user.avatar_url || male_avatar}
            onClick={() => history.push(`/user/${user.id}`)}
          />
        )}
        <Logout onClick={handleLogout} />
      </ProfileSection>
    </Header>
  );
};

export default HeaderApp;

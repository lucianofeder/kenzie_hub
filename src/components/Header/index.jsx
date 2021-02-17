import kenzie_logo from "../../img/kenzie_logo.png";
import male_avatar from "../../img/male_avatar.svg";
import { Header, Img, LogoSection, H2, Avatar } from "./styles";

const HeaderApp = (props) => {
  return (
    <Header>
      <LogoSection>
        <Img src={kenzie_logo} alt="Logo" />
        <H2>Kenzie Hub</H2>
      </LogoSection>
      {props.isLogged && <Avatar alt="User Avatar" src={male_avatar} />}
    </Header>
  );
};

export default HeaderApp;

import { useHistory } from "react-router-dom";

import kenzie_logo from "../../img/kenzie_logo.png";
import male_avatar from "../../img/male_avatar.svg";
import { Header, Img, LogoSection, H2, Avatar } from "./styles";

const HeaderApp = (props) => {
  const history = useHistory();
  return (
    <Header>
      <LogoSection onClick={() => history.push("/")}>
        <Img src={kenzie_logo} alt="Logo" />
        <H2>Kenzie Hub</H2>
      </LogoSection>
      {props.isLogged && <Avatar alt="User Avatar" src={male_avatar} />}
    </Header>
  );
};

export default HeaderApp;

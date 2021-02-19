import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import male_avatar from "../../img/male_avatar.svg";
import { Card, Img, H2, H3 } from "./styles";

const UserCard = (props) => {
  const { user } = props;
  const nameArr = user.name.split(" ");
  let name;
  if (nameArr.length > 1) {
    name = [nameArr[0], nameArr[nameArr.length - 1]].join(" ");
  } else {
    name = nameArr[0];
  }

  const history = useHistory();

  return (
    <motion.div whileHover={{ scale: 1.15 }}>
      <Card onClick={() => history.push(`/user/${user.id}`)}>
        <Img src={user.avatar_url || male_avatar} alt="Profile pic" />
        <H2>{name}</H2>
        <H3>{user.email.toLowerCase()}</H3>
      </Card>
    </motion.div>
  );
};

export default UserCard;

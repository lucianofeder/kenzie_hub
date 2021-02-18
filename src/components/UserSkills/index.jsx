import { SkillsArea, Title, Text, TextArea, Img, Button } from "./styles";
import skills_img from "../../img/skills_img.svg";

const UserSkills = (props) => {
  const { skills } = props;
  return (
    <SkillsArea>
      <TextArea>
        <Title>Skills</Title>
        {skills.map((skill) => (
          <Text>
            {skill.title}: {skill.status}
          </Text>
        ))}
      </TextArea>
      <Img src={skills_img} alt="Representation of skills level" />
      <Button>+</Button>
    </SkillsArea>
  );
};

export default UserSkills;

import { useState, useEffect } from "react";

import { SkillsArea, Title, Text, TextArea, Img, Button } from "./styles";
import skills_img from "../../img/skills_img.svg";
import MenuAddSkill from "../MenuAddSkill";

const UserSkills = (props) => {
  const { skills, owner } = props;
  const [isSkillOpen, setSkillOpen] = useState(false);
  const [listedSkills, setListedSkills] = useState(skills);

  const toggleSkill = () => {
    setSkillOpen(!isSkillOpen);
  };

  useEffect(() => {
    if (listedSkills !== skills) {
      setListedSkills(skills);
    }
  }, [listedSkills, skills]);

  return (
    <>
      {isSkillOpen && (
        <MenuAddSkill
          toggleSkill={toggleSkill}
          listedSkills={listedSkills}
          setListedSkills={setListedSkills}
        ></MenuAddSkill>
      )}
      <SkillsArea>
        <TextArea>
          <Title>Skills</Title>
          {listedSkills.map((skill) => (
            <Text key={skill.id}>
              {skill.title}: {skill.status}
            </Text>
          ))}
        </TextArea>
        <Img src={skills_img} alt="Representation of skills level" />
        {owner && <Button onClick={toggleSkill}>+</Button>}
      </SkillsArea>
    </>
  );
};

export default UserSkills;

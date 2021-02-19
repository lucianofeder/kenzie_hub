import { useState, useEffect } from "react";

import { JobsArea, TextTitle, Link, TextDescription } from "./styles";
import { Title, TextArea, Img, Button } from "../UserSkills/styles";
import work_img from "../../img/work_img.svg";

import MenuAddWork from "../MenuAddWork";

const UserWorks = (props) => {
  const { works, owner, user } = props;
  const [isWorkOpen, setWorkOpen] = useState(false);
  const [listedWorks, setListedWorks] = useState(works);
  const toggleWork = () => {
    setWorkOpen(!isWorkOpen);
  };
  return (
    <>
      {isWorkOpen && (
        <MenuAddWork
          toggleWork={toggleWork}
          user={user}
          listedWorks={listedWorks}
          setListedWorks={setListedWorks}
        />
      )}

      <JobsArea>
        <TextArea>
          <Title>Past Works</Title>
          {listedWorks.map((work, index) => (
            <>
              <TextTitle key={work.id}>
                <Link href={work.deploy_url} target="_blank" rel="noreferrer">
                  {work.title}:
                </Link>
              </TextTitle>
              <TextDescription key={index}>{work.description}</TextDescription>
            </>
          ))}
        </TextArea>
        <Img src={work_img} alt="Representation of skills level" />
        {owner && <Button onClick={toggleWork}>+</Button>}
      </JobsArea>
    </>
  );
};

export default UserWorks;

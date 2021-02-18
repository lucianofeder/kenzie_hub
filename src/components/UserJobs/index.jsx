import { JobsArea, TextTitle, Link, TextDescription } from "./styles";
import { Title, TextArea, Img, Button } from "../UserSkills/styles";
import work_img from "../../img/work_img.svg";

const UserWorks = (props) => {
  const { works } = props;
  return (
    <JobsArea>
      <TextArea>
        <Title>Skills</Title>
        {works.map((work) => (
          <>
            <TextTitle>
              <Link href={work.deploy_url} target="_blank" rel="noreferrer">
                {work.title}:
              </Link>
            </TextTitle>
            <TextDescription>{work.description}</TextDescription>
          </>
        ))}
      </TextArea>
      <Img src={work_img} alt="Representation of skills level" />
      <Button>+</Button>
    </JobsArea>
  );
};

export default UserWorks;

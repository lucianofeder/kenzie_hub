import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";

import { Container } from "../../styles/container";
import Grid from "@material-ui/core/Grid";
import UserHeader from "../../components/UserHeader";
import UserSkills from "../../components/UserSkills";
import UserWorks from "../../components/UserJobs";

import { DivAside } from "./styles";

const User = (props) => {
  const history = useHistory();
  const params = useParams();
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const userID = params.id;

    if (!user) {
      api
        .get(`/users/${userID}`)
        .then((res) => setUser(res.data))
        .then(() => setLoaded(true))
        .catch((err) => console.log(err));
    }
    console.log(user);
  }, [user, params.id]);

  return loaded ? (
    <Container>
      <Grid container>
        <Grid item xs={false} sm={2}>
          <DivAside></DivAside>
        </Grid>
        <Grid item xs={12} sm={8}>
          <UserHeader user={user} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <UserSkills skills={user.techs} />
            </Grid>
            <Grid item xs={12} md={6}>
              <UserWorks works={user.works} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2}>
          <DivAside></DivAside>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <div>Oi</div>
  );
};

export default User;

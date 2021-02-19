import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../services/api";

import { Container } from "../../styles/container";
import Grid from "@material-ui/core/Grid";
import UserHeader from "../../components/UserHeader";
import UserSkills from "../../components/UserSkills";
import UserWorks from "../../components/UserWorks";

import { DivAside } from "./styles";

const User = ({ user }) => {
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const [owner, setOwner] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const { id } = useParams();

  const fetchData = (id) => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .then(() => setLoaded(true))
      .catch(() => history.push("/"));
  };

  useEffect(() => {
    if (user) {
      if (user.id === id && !owner) {
        setOwner(true);
      }
      if (user.id !== id && owner) {
        setOwner(false);
      }
    }

    if (!currentUser) {
      fetchData(id);
    } else if (currentUser.id !== id) {
      fetchData(id);
    }
  }, [user, history, owner, currentUser, id]);

  return loaded ? (
    <Container>
      <Grid container>
        <Grid item xs={false} sm={2}>
          <DivAside></DivAside>
        </Grid>
        <Grid item xs={12} sm={8}>
          <UserHeader user={currentUser} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <UserSkills skills={currentUser.techs} owner={owner} />
            </Grid>
            <Grid item xs={12} md={6}>
              <UserWorks works={currentUser.works} owner={owner} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2}>
          <DivAside></DivAside>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <div></div>
  );
};

export default User;

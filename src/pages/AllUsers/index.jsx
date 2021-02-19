import { useEffect, useState } from "react";
import { Container } from "../../styles/container";
import api from "../../services/api";

import UserCard from "../../components/UserCard";

const AllUsers = () => {
  const [nextPage, setNextPage] = useState();
  const [userList, setUserList] = useState();

  useEffect(() => {
    api.get("/users?perPage=15&page=1").then((res) => setUserList(res.data));
  });

  return (
    <Container>
      {userList &&
        userList.map((user) => <UserCard user={user} key={user.id} />)}
    </Container>
  );
};

export default AllUsers;

import { useEffect, useState } from "react";
import api from "../../services/api";

import UserCard from "../../components/UserCard";

import {
  UsersContainer,
  ContentArea,
  ArrowLeft,
  ArrowRight,
  ArrowSection,
} from "./styles";

const AllUsers = () => {
  const [nextPage, setNextPage] = useState(null);
  const [actualPage, setActualPage] = useState("/users?perPage=15&page=1");
  const [userList, setUserList] = useState();
  const [loaded, setLoaded] = useState(false);
  const [pageNumber, setPageNumber] = useState("1");

  const fetchdata = (url) => {
    api.get(url).then((res) => {
      setUserList(res.data);
      setLoaded(true);
      setNextPage(res.headers.nexturl);
      setActualPage(url);
      setPageNumber(res.headers.page);
    });
  };

  const handleNext = () => {
    setLoaded(false);
    if (nextPage) {
      setActualPage(nextPage);
    }
  };

  const handlePrevious = () => {
    setLoaded(false);
    if (pageNumber !== "1") {
      setActualPage(`/users?perPage=15&page=${pageNumber - 1}`);
    }
  };

  useEffect(() => {
    if (!loaded) {
      fetchdata(actualPage);
    }
  });

  return (
    <ContentArea>
      <ArrowSection>
        {pageNumber !== "1" && <ArrowLeft onClick={handlePrevious} />}
        {nextPage && <ArrowRight onClick={handleNext} />}
      </ArrowSection>
      <UsersContainer>
        {userList &&
          userList.map((user) => <UserCard user={user} key={user.id} />)}
      </UsersContainer>
      <ArrowSection>
        {pageNumber !== "1" && <ArrowLeft onClick={handlePrevious} />}
        {nextPage && <ArrowRight onClick={handleNext} />}
      </ArrowSection>
    </ContentArea>
  );
};

export default AllUsers;

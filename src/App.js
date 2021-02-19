import "./App.css";

import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import AllUsers from "./pages/AllUsers";
import HeaderApp from "./components/Header";
import FooterApp from "./components/Footer";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

const App = () => {
  const [isLogged, setLogged] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const userStored = JSON.parse(localStorage.getItem("user"));
    const tokenStored = localStorage.getItem("authToken");
    if (tokenStored && userStored && !isLogged) {
      setLogged(true);
      setUser(userStored);
    }
    if ((!tokenStored || !userStored) && isLogged) {
      setLogged(false);
      setUser(null);
    }
  }, [isLogged]);

  return (
    <div className="App">
      <HeaderApp
        isLogged={isLogged}
        setLogged={setLogged}
        user={user}
        setUser={setUser}
      />
      <Switch>
        <Route exact path="/">
          <Landing isLogged={isLogged} setLogged={setLogged} />
        </Route>
        <Route exact path="/login">
          <Login
            isLogged={isLogged}
            setLogged={setLogged}
            user={user}
            setUser={setUser}
          />
        </Route>
        <Route exact path="/new_user">
          <NewUser />
        </Route>
        <Route exact path="/user/:id">
          <User user={user} />
        </Route>
        <Route exact path="/all_users">
          <AllUsers />
        </Route>
        <Route>
          <NotFound path="/" />
        </Route>
      </Switch>
      <FooterApp />
    </div>
  );
};

export default App;

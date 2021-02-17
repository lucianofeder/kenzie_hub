import "./App.css";

import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import AllUsers from "./pages/AllUsers";
import HeaderApp from "./components/Header";
import FooterApp from "./components/Footer";

const App = () => {
  const [isLogged, setLogged] = useState(false);

  return (
    <div className="App">
      <HeaderApp isLogged={isLogged} />
      <Switch>
        <Route exact path="/">
          <Home isLogged={isLogged} setLogged={setLogged} />
        </Route>
        <Route exact path="/login">
          <Login isLogged={isLogged} setLogged={setLogged} />
        </Route>
        <Route exact path="/new_user">
          <NewUser />
        </Route>
        <Route exact path="/all_users">
          <AllUsers />
        </Route>
      </Switch>
      <FooterApp />
    </div>
  );
};

export default App;

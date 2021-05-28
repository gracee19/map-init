import NavBar from "./components/NavBar";
import "./App.css";
import ContainerBox from "./components/Container";
import Wrapper from "./components/Wrapper";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Login/signup";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Switch>
            <Route exact path={"/"}>
              <MainPage />
            </Route>
            <Route path={"/login"}>
              <Login />
            </Route>
            <Route path={"/signup"}>
              <SignUp />
            </Route>
            <Route path={"/map"}>
              <NavBar />
              <ContainerBox />
            </Route>
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;

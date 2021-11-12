import React from "react";
import { Route, Switch } from "react-router-dom";
import MemberProfile from "../components/MemberProfile/MemberProfile";
import NavBar from "../../src/components/navigation-bar/NavBar";
import Supervisor from "../components/Supervisor/Supervisor";

class MainRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/:path"
            render={(props) => <MemberProfile {...props} />}
          />
        </Switch>
        <Supervisor />
      </React.Fragment>
    );
  }
}

export default MainRouter;

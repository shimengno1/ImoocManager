import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Admin from "./admin";
import App from "./App";
import Login from "./pages/login/index";
import NoMatch from "./pages/nomatch/index";
import Buttons from "./pages/ui/buttons/index";
export default class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                <Route component={NoMatch}></Route>
              </Admin>
            )}
          ></Route>
        </App>
      </HashRouter>
    );
  }
}

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Admin from "./admin";
import App from "./App";
import Login from "./pages/login/index";
import NoMatch from "./pages/nomatch/index";
import Buttons from "./pages/ui/buttons/index";
import Modals from "./pages/ui/modals/index";
import Loadings from "./pages/ui/loadings/index";
import Notifications from "./pages/ui/notifications/notification";
import City from "./pages/city/index";
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
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                  <Route path="/admin/ui/modals" component={Modals}></Route>
                  <Route path="/admin/ui/loadings" component={Loadings}></Route>
                  <Route path="/admin/city" component={City}></Route>
                  <Route
                    path="/admin/ui/notification"
                    component={Notifications}
                  ></Route>
                  <Route component={NoMatch}></Route>
                </Switch>
              </Admin>
            )}
          ></Route>
        </App>
      </HashRouter>
    );
  }
}

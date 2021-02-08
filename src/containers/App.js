import React, { Component } from "react";
import routes from "../routes/routes";
import { Route, Switch } from "react-router-dom";
import NoMatch from "../components/noMatch/NoMatch";

class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props) => <Component {...props} {...rest} />}
          />
        ))}
        <Route render={(props) => <NoMatch {...props} />} />
      </Switch>
    );
  }
}

export default App;

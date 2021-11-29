import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// Components
import { Header, ScrollTop } from "./components";
import { Home } from "./screens";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <ScrollTop />
        <Header />
        <Switch>
          <Route path="/home" render={(props) => <Home {...props} />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

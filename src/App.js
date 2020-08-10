import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GoogleAnalytics } from "./components";
import {
  Home,
  SignIn,
  SignUp,
  ForgotPassword,
  Privacy,
  Terms,
  NewSignUp,
  Success,
} from "./views";
import "./firebase";

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/new-sign-up" component={NewSignUp} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/success" component={Success} />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <AppRoutes />
    </Router>
  );
}

export default App;

import React from "react";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Listboard from "./pages/Listboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/Footer";
import { Switch, Route } from "react-router-dom";
import Private from "./PrivateRoute";
import OrganizationDetails from "./OrganizationDetails";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Switch>
        <Private exact path="/dashboard" component={Dashboard} />
      </Switch>

      <Switch>
        <Private exact path="/post" component={Post} />
      </Switch>
      <Switch>
        <Private exact path="/settings" component={Settings} />
      </Switch>

      <Route exact path="/listboard">
        <Listboard />
      </Route>
      <Route
        exact
        path="/ngo/:id"
        render={(props) => (
          <OrganizationDetails {...props} id={props.match.params.id} />
        )}
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register} />
      <Footer />
    </div>
  );
}

export default App;

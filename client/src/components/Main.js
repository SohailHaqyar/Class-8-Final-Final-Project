import React from 'react';
import Home from './pages/Home';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import Listboard from './pages/Listboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './pages/Footer';
import {Switch, Route} from 'react-router-dom';
import OrganizationDetails from './OrganizationDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

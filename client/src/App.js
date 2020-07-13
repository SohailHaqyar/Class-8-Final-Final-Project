import React from "react";
import Main from "./components/Main";
import "./App.css";
import setAuthToken from "./actions/utils/setAuthToken";
import jwt_decode from "jwt-decode";
import store from "./store";
import { setCurrentUser } from "./actions/authActions";
// Checking for token

if (localStorage.jwtToken) {
  // Set Auth Headers
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}
function App() {
  return (
    <div>
      <Main />
    </div>
  );
}
export default App;

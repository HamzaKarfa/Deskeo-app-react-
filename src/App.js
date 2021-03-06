import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Users from './component/Users';
import Home from './component/Home/index';
import Admin from './component/Admin/index.js';
export default function App() {
  
  return (
    <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}





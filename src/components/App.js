import React, { useState } from "react";
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {getUsername,removeUser} from "./UserUpdater"

import Footer from './Footer';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import MyProfile from "./MyProfile";
import Post from "./Post";


function App() {
  const [username, setUsername] = useState(getUsername());

  const loginUser = (username) => {
    setUsername(username);
  }

  const logoutUser = () => {
    removeUser();
    setUsername(null);
  }

  
    return (
      <div className="d-flex flex-column min-vh-100">
        <Router>
          <Header  username={username} logoutUser={logoutUser} />
          <main role="main">
            <div className="container my-3">
              <Switch>
                {/* NOTE: The technique below is to pass down the history property to the Login component. */}
                <Route path="/Login" render={props => (
                <Login {...props} loginUser={loginUser} />
              )} />
               <Route path="/profile">
                  <MyProfile username={username}/>
                </Route>

               <Route path="/Registration">
                  <Registration username={username} />
                </Route>
                <Route path="/Post">
                  <Post username={username} />
                </Route>  
                <Route path="/">
                  <Home username={username} />
                </Route>                

              </Switch>
            </div>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }


export default App;

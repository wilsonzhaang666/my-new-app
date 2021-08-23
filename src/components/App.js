import React from "react";
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Footer';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';
import MyProfile from "./MyProfile";
import Post from "./Post";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { username: null };
  }

  loginUser = (username) => {
    this.setState({ username: username });
  };

  logoutUser = () => {
    this.setState({ username: null });
  }

  
  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Router>
          <Header username={this.state.username} logoutUser={this.logoutUser} />
          <main role="main">
            <div className="container my-3">
              <Switch>
                {/* NOTE: The technique below is to pass down the history property to the Login component. */}
                <Route path="/Login" render={props => (
                  <Login {...props} loginUser={this.loginUser} />
                )} />
               <Route path="/profile">
                  <MyProfile username={this.state.username} password={this.state.password}/>
                </Route>

               <Route path="/Registration">
                  <Registration username={this.state.username} />
                </Route>
                <Route path="/Post">
                  <Post username={this.state.username} />
                </Route>  
                <Route path="/">
                  <Home username={this.state.username} />
                </Route>                

              </Switch>
            </div>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

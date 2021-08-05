import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: "",
      errors: { }
    };
  }

  onChangeUsername = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }


  render() {
    return (
      <div>
        <h1>Login</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username" className="control-label">Username</label>
                <input name="username" id="username" className="form-control"
                  value={this.state.username} onChange={this.onChangeUsername} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="password" className="control-label">Password</label>
                <input type="password" name="password" id="password" className="form-control"
                  value={this.state.password} onChange={this.onChangePassword} />
              </div>
              <br />
              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
              <br />
              {this.state.errors["errorMessage"] &&
                <div className="form-group">
                  <span className="text-danger">{this.state.errors["errorMessage"]}</span>
                </div>
              }
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

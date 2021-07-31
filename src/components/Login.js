import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        password: ""
      },
      errors: { }
    };
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
                  value={this.state.fields.username} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="control-label">Password</label>
                <input type="password" name="password" id="password" className="form-control"
                  value={this.state.fields.password} onChange={this.handleInputChange} />
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
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

import React from "react";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
        username: "",
        email:"",
        password: "",
        confirmpassword: "",
      errors: { }
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    const confirmpassword = this.state.confirmpassword;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{6,}$/;
    if(!username ||!email||!password||!confirmpassword) {
      const fields = this.state.fields;
      this.setState({
        fields: fields,
        errors: { "errorMessage": "All the blank should be fill" }
      });
      return;
    }
    else if (!emailRegex.test(email)) 
    { 
      const fields = this.state.fields;
      this.setState({
        fields: fields,
        errors: { "errorMessage": "Email should be fill in proper format" }
      });
    }
    else if (!passwordRegex.test(password)) 
    { 
      const fields = this.state.fields;
      this.setState({
        fields: fields,
        errors: { "errorMessage": "Password should be at least six characters and should be a mix of uppercase and lowercase characters, numbers and punctuation" }
      });
    }
    else if (password !== confirmpassword) 
    { 
      const fields = this.state.fields;
      this.setState({
        fields: fields,
        errors: { "errorMessage": "The confirm password is not the same as the password" }
      });
    }
    else{
      let ob = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
      let olddata = localStorage.getItem('userdata');
      if(olddata==null){
        olddata = []
        olddata.push(ob)
        localStorage.setItem('userdata', JSON.stringify(olddata));
      }else{
        let oldArr = JSON.parse(olddata)
        oldArr.push(ob)
        localStorage.setItem("userdata", JSON.stringify(oldArr))
        console.log(oldArr,'hhg')
      }
      const fields  = this.state.fields;
      this.setState({
        fields: fields,
        errors: { "errorMessage": "Congrate the registration is success ." }
      });
    }

    // Reset password field to blank.

  }




  render() {
    return (
      <div>
        <h1>Registration</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username" className="control-label">Username</label>
                <input name="username" id="username" className="form-control"
                 value={this.state.username} onChange={this.handleInputChange} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email" className="control-label">Email</label>
                <input name="email" id="email" className="form-control"
                  value={this.state.email} onChange={this.handleInputChange} />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="password" className="control-label">Password</label>
                <input type="password" name="password" id="password" className="form-control"
                  value={this.state.password} onChange={this.handleInputChange} />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="confirmpassword" className="control-label">Confirm Password</label>
                <input type="password" name="confirmpassword" id="confirmpassword" className="form-control"
                  value={this.state.confirmpassword} onChange={this.handleInputChange} />
              </div>
              <br />

              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Sign Up" />
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

export default Registration;

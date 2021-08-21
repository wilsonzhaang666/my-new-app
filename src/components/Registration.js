import React, { useState }from "react";
import {getUser,insertOrUpdateUser,getCorrectID} from "./UserUpdater"

function Registration() {
  let newDate = new Date()
  const [fields, setFields] = useState(
    {
      id:0,
      joineddate:newDate.getFullYear()+"/"+(newDate.getMonth() + 1)+"/"+newDate.getDate(),
      username: '',
      email:'',
      password: '',
      confirmpassword: '',
    errors: { },
    });

    const [users, setUser] = useState(getUser());

  const handleInputChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { ...fields };
    const theuser = getUser();
    const email = user.email;
    const username = user.username;
    const password = user.password;
    const confirmpassword = user.confirmpassword;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{6,}$/;
    var submission;
    for (var i = 0; theuser.length > i; i++) {
      if (fields.username === theuser.at(i).username) {
        submission ="false";
      }
    }

   
    
    if(!username ||!email||!password||!confirmpassword) {
      const fields = user.fields;
      setFields({
        fields: fields,
        errors: { "errorMessage": "All the blank should be fill" }
      });
    }
    else if (submission ==="false"){
      const fields = user.fields;
      setFields({
        fields: fields,
        errors: { "errorMessage": "the username is already registed" }
      });
    }
    else if (!emailRegex.test(email)) 
    { 
      const fields = user.fields;
      setFields({
        fields: fields,
        errors: { "errorMessage": "Email should be fill in proper format" }
      });
    }
    else if (!passwordRegex.test(password)) 
    { 
      const fields = user.fields;
      setFields({
        fields: fields,
        errors: { "errorMessage": "Password should be at least six characters and should be a mix of uppercase and lowercase characters, numbers and punctuation" }
      });
    }
    else if (password !== confirmpassword) 
    { 
      const fields = user.fields;
      setFields({
        fields: fields,
        errors: { "errorMessage": "The confirm password is not the same as the password" }
      });
    }
    else{
      var idCount=0;
      {Object.keys(users).map((id) => {
        var userdata = users[id];
        
        if(userdata.id === 0){
           idCount = 0;
        }
        else if(userdata.id !== 0){
          idCount = 1;
        }


      })}
      if(idCount=== 0){
        user.id = Number(user.id)+1;
        insertOrUpdateUser(user)  
        setUser(getUser());
        alert("Register success!");
        window.location.reload();
      }
      else{
        user.id = getCorrectID() + 1;
        //run for loop to get user max value of user ids.
        //then +1 to get new place for new user.
        insertOrUpdateUser(user)  
        setUser(getUser());
        alert("Register success!");
        window.location.reload();

      }
      
     
      }

    


  }




    return (
      
      <div>
        <h1>Registration</h1>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username" className="control-label">Username</label>
                <input name="username" id="username" className="form-control"
                 value={fields.username} onChange={handleInputChange} />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email" className="control-label">Email</label>
                <input name="email" id="email" className="form-control"
                  value={fields.email} onChange={handleInputChange} />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="password" className="control-label">Password</label>
                <input type="password" name="password" id="password" className="form-control"
                  value={fields.password} onChange={handleInputChange} />
              </div>
              <br />

              <div className="form-group">
                <label htmlFor="confirmpassword" className="control-label">Confirm Password</label>
                <input type="password" name="confirmpassword" id="confirmpassword" className="form-control"
                  value={fields.confirmpassword} onChange={handleInputChange} />
              </div>
              <br />

              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Sign Up" />
              </div>
              {fields.errors["errorMessage"] &&
                <div className="form-group">
                  <span className="text-danger">{fields.errors["errorMessage"]}</span>
                </div>
              }
            </form>
          </div>
        </div>
      </div>
    );
  }


export default Registration;

import React, { useState }from "react";
import {getUser,insertOrUpdateUser, setUser} from "./UserUpdater"
import {Card,Button,Modal} from 'react-bootstrap';

function MyProfile(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const usersdata = getUser();
  for (var i = 0; usersdata.length > i; i++) {
    if (props.username === usersdata.at(i).username) {
     var userid= usersdata.at(i).id;
     var userjoineddate = usersdata.at(i).joineddate;
     var userusername = usersdata.at(i).username;
     var useremail = usersdata.at(i).email;
     var userpassword = usersdata.at(i).password;
     var userconfirmation = usersdata.at(i).confirmpassword
     var usererror = usersdata.at(i).errors;
    }
  }
  const [fields, setFields] = useState({
    id:userid,
    joineddate:userjoineddate,
    username:userusername,
    email:useremail,
    password: userpassword,
    confirmpassword: userconfirmation,
  errors: usererror,
  });


    const [users, setUser] = useState(getUser());



  
    const handleInputChange = (event) => {
      setFields({ ...fields, [event.target.name]: event.target.value });
  
    }


  const deleteProfile = (event) => {
    //delete the profile
    for (var i = 0; usersdata.length > i; i++) {
      if (props.username === usersdata.at(i).username) {
        usersdata.splice(i, 1);
      }
    }
    console.log(usersdata)
    localStorage.setItem("userdata", JSON.stringify(usersdata))

  }
  //THE VALIDATION NEED TO BE DONE！！！

  const handleSubmit = (event) => {
    event.preventDefault();
    // const email = user.email;
    // const password = user.password;
    // const confirmpassword = user.confirmpassword;
    // const emailRegex = /\S+@\S+\.\S+/;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{6,}$/;
    
    // if (!emailRegex.test(email)) 
    // { 
    //   alert("email need to be fill in properly")
    // }
    // else if (!passwordRegex.test(password)) 
    // { 
    //   alert("Password should be at least six characters and should be a mix of uppercase and lowercase characters, numbers and punctuation")
    // }
    // else if (password !== confirmpassword) 
    // { 
    //   alert("Password and confirmpassword should be the same")
    // }
    // else{
    const user = { ...fields };

    // Convert pet.id to a number.
    user.id = Number(user.id);

    insertOrUpdateUser(user);

    // Update state.
    setUser(getUser());
    alert('Eddit success')
    // }
  }
  var email;
  var user;
  var joineddate;
  for (var i = 0; usersdata.length > i; i++) {
    if (props.username === usersdata.at(i).username) {
     email = usersdata.at(i).email;
     user = usersdata.at(i).username;
     joineddate = usersdata.at(i).joineddate;
      // this.state.users.at(represent which user we are in)
    }
  }

    // console.log(this);
   
    return (
      <div>


        <>


  <Card bg="light" style={{ width: '20rem' }}>
    <Card.Header>My Profile</Card.Header>
    <Card.Body>
      <div style={{lineHeight:" 300%", padding:"10px"}}>
      <h4 class="mb-0 mt-0">{user}</h4>
      <span>{email}</span>
      </div>

      
      
      <Button variant="primary" onClick={handleShow}>
       Edit
      </Button>

      
      <Button variant="danger" onClick={handleShow1}>
        Delete Profile
      </Button>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your profile?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <button onClick={deleteProfile} className="btn btn-danger">Delete Profile</button>

        </Modal.Footer>
      </Modal>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit your profile</Modal.Title>
        </Modal.Header>
        <div>
        <hr />

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <div className="col-sm-8">
                <label htmlFor="email" className="control-label">Email</label>
                <input name="email" id="email" className="form-control"
                  value={fields.email} onChange={handleInputChange} />
                  </div>
              <br />
              <div className="col-sm-8">               
                <label htmlFor="password" className="control-label">Password</label>
                <input type="password" name="password" id="password" className="form-control"
                  value={fields.password} onChange={handleInputChange} />
                  </div>
              <br />
              <div className="col-sm-8">
                <label htmlFor="confirmpassword" className="control-label">Confirm Password</label>
                <input type="password" name="confirmpassword" id="confirmpassword" className="form-control"
                  value={fields.confirmpassword} onChange={handleInputChange} />
                  </div>
              </div>
              <br />



              <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <input type="submit" className="btn btn-primary" value="Edit" />

        </Modal.Footer>
            </form>

      </div>  

      </Modal>
  
      <br />
      <br /><br />
      <div style={{fontSize: '12px'}}>Joined:{joineddate}</div>

    </Card.Body>
  </Card>
  <br />
</>


      </div>
    );
   
  }


export default MyProfile;

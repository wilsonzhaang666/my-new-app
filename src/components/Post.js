import React, { useState }from "react";
import {Form,Button,Modal} from 'react-bootstrap';
import {getPostData,setPostData,getCorrectPostID,insertOrUpdatePost} from "./UserUpdater"


function Post(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    setShow(true);
    setFields({ id:event.id, username:event.username, post:event.post });
    }
    const [post, setPost] = useState("");
    const postdata = getPostData();



    const [errorMessage, setErrorMessage] = useState(null);
    const [posts, setPosts] = useState(getPostData()); 


    console.log(post)
    const handleInputChange = (event) => {
      setPost(event.target.value);
      
    }
    const handlePostChange=(event) => {
      setFields({ ...fields, [event.target.name]: event.target.value });

    }
    const [fields, setFields] = useState({
      id:0,
      username:"",
      post:"",
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Trim the post text.
      const postTrimmed = post.trim();
      
      if(postTrimmed === "") {
        setErrorMessage("A post cannot be empty.");
        return;
      }
      
      // Create post.
      // Reset post content.
      setPost("");
      setErrorMessage("");
      
      const PostId = Number(getCorrectPostID());
      console.log(PostId);
      const postdata = {
        id:PostId,
        username:props.username,
        post
      }
      insertOrUpdatePost(postdata);
      setPostData(getPostData());
      setPosts(getPostData())

    }

    const handleEdit =(event) => {
      event.preventDefault();
      const postdata = { ...fields };
      insertOrUpdatePost(postdata);
      setPostData(getPostData());
      setPosts(getPostData())

      alert('Eddit success')
    }

    const deletePost = (event) => {
      //delete the profile
      for (var i = 0; postdata.length > i; i++) {
        if (event === postdata.at(i).id) {
          postdata.splice(i, 1);
        }
      }
      localStorage.setItem("posts", JSON.stringify(postdata))
      setPosts(getPostData())

    }
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>New Post</legend>
            <div className="form-group">
              <textarea name="post" id="post" className="form-control" rows="3"
                value={post} onChange={handleInputChange} />
            </div>
            {errorMessage !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
              </div>
            }
            <div className="form-group">
              <input type="button" className="btn btn-danger mr-5" value="Cancel"
                onClick={() => { setPost(""); setErrorMessage(null); }} />
              <input type="submit" className="btn btn-primary" value="Post" />
            </div>
          </fieldset>
        </form>
  
        <hr />
        <h1>Forum</h1>
        <div>
        {
          
        }
        </div>
        <div>
        {Object.keys(posts).map((id) => {
            const post = posts[id];
            if (post.id ===0){
              return(
                null
              )
              
            }else if (post.username === props.username){
              return(
                <div key={post.id}>
                  <div className="border my-3 p-3" style={{ whiteSpace: "pre-wrap" }}>
                    <h3>Master</h3>
                  <h3 className="text-primary">{post.username}</h3>
                  {post.post}
                </div>
                <button onClick={() => deletePost(post.id)} className="btn btn-danger">Delete Post</button>
                <Button variant="primary" onClick={() =>handleShow(post)}>
        Edit
      </Button>

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

            <form onSubmit={handleEdit}>
                

            <Form.Group className="mb-3">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} name="post" id="post" className="form-control"
                  value={fields.post} onChange={handlePostChange}  />
        </Form.Group>


              <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <input type="submit" className="btn btn-primary" value="Edit" />

        </Modal.Footer>
            </form>
          </div>
      </Modal>
                </div>
              )
            }
            else{
              return (

              
                <div key={post.id}>
                  <div className="border my-3 p-3" style={{ whiteSpace: "pre-wrap" }}>
                  <h3 className="text-primary">{post.username}</h3>
                  {post.post}
                </div>
                </div>
              );
            }
           
          })}
        </div>
        
      </div>
    );
  }



export default Post;

import React, { useState }from "react";
import {Form,Button,Modal,Card} from 'react-bootstrap';
import {getUser,getPostData,setPostData,getCorrectPostID,insertOrUpdatePost,getCorrectreplyID,insertOrUpdateComment,setReplyData,getReplyData} from "./UserUpdater"
import def_img from "../assets/usericon.png";
import white from "../assets/white.png"

function Post(props) {
  const [image,setImage] =useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const replypost = (event) => {
      
    setShow1(true);
    const replyId = getCorrectreplyID();
    var userimg;
    for (var i = 0; usersdata.length > i; i++) {
      if (props.username === usersdata.at(i).username) {
        userimg = usersdata.at(i).img;
       if(usersdata.at(i).img !=""){
        userimg = usersdata.at(i).img;
       }
       else if(userimg===""){
        userimg = def_img
       }
      }
    }
    //set the ID to the length of array so that every new post will have the highest number as id
    // and set Post ID as post ID to recognize which reply is belong to which post.
    setComments({id:replyId, postId:event.id, username:props.username,usericon:userimg, post:
      "" });
  
  }
  const handleShow = (event) => {
    setShow(true);
    setFields({ id:event.id, username:event.username, post:event.post });
    }
    const [post, setPost] = useState("");
    const postdata = getPostData();

    const repliesdata = getReplyData();

    const [errorMessage, setErrorMessage] = useState(null);
    const [posts, setPosts] = useState(getPostData()); 
    const [replies,setReplies] = useState(getReplyData());
    const handleInputChange = (event) => {
      setPost(event.target.value);
      
    }

    
    const [comments,setComments] = useState({
      id:0,
      postid:0,
      username:"",
      post:"",
    });
    const handlePostChange=(event) => {
      setFields({ ...fields, [event.target.name]: event.target.value });

    }
    const handleReplyChange = (event) => {
      setComments({...comments, [event.target.name]: event.target.value});
    }
    const [fields, setFields] = useState({
      id:0,
      username:"",
      post:"",
    });
    const usersdata = getUser();
    const onImageChange = async (event) =>{
      const file = event.target.files[0];
      const base64 = await convertBase64(file);
      setImage(base64);
  };
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    const handleSubmit = (event) => {
      console.log(image)
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
      var userimg;
      for (var i = 0; usersdata.length > i; i++) {
        if (props.username === usersdata.at(i).username) {
          userimg = usersdata.at(i).img;
         if(usersdata.at(i).img !=""){
          userimg = usersdata.at(i).img;
         }
         else if(userimg===""){
          userimg = def_img
         }
        }
      }
      if(image === ""){
        var postdata = {
          id:PostId,
          img:userimg,
          username:props.username,
          image:"",
          post,
        }
      }
      else if(image !== ""){
        var postdata = {
          id:PostId,
          img:userimg,
          username:props.username,
          image:image,
          post
        }
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
      setShow(false);

      alert('Eddit success')

    }

    const deletePost = (event) => {
      const postdata = {  id:event, username:null};
      insertOrUpdatePost(postdata);
      setPostData(getPostData());
      

      setPosts(getPostData())



    }


    

    const handleReply = () => {
      const replydata = { ...comments };
      insertOrUpdateComment(replydata)
      setReplyData(getReplyData())
      setReplies(getReplyData())
      setShow1(false);


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
            <br />
            {errorMessage !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
              </div>
            }
            <div className="form-group">
              <input type="button" style={{ margin:"5px" }} className="btn btn-danger" value="Cancel"
                onClick={() => { setPost(""); setErrorMessage(null); }} />  
              <input type="submit" className="btn btn-primary" value="Post" />
            </div>
            <div className="col-sm-8">
                <label htmlFor="email" className="control-label"></label>
                <input type ="file" style={{ margin:"5px" }} placeholder ="Choose Image" 
              
             onChange= { onImageChange } />
                  </div>
              <br />
          </fieldset>
        </form>
  
        <hr />
        <h1>Forum</h1>
        <div>

        </div>
        <div>
        {Object.keys(posts).map((id) => {
            const post = posts[id];
            if (post.id ===0){
              return(
                null
              )
              
            }else if (post.username === props.username){
              if(post.username !== null){

              
              return(
                <div key={post.id}>
                  <div className="border my-3 p-3" style={{ whiteSpace: "pre-wrap" }}>
                    <h3>Master</h3>
                    <img src={post.img} alt="" width='80'  height= '60' />

                  <h3 className="text-primary">{post.username}</h3>
                  {post.post}
                  <div className="form-group">
                  <img  src={post.image} alt="" width='100'  height= '80' />
                  </div>
                  <div>
                {Object.keys(replies).map((id) => {
                const reply = replies[id]
                if (reply.postId === post.id){
                  
                  return(
                    <Card>
                      <Card.Body>
                      <img style={{ display:"inline",float:"left" ,fontSize:"20px"}} src={reply.usericon} alt="" width='40'  height= '30' />
                      <div><p style={{ display:"inline",float:"left" ,fontSize:"20px"}}>{reply.username}</p><p> :  {reply.post}</p></div>
                      
                    </Card.Body>
                    </Card>
                  )
                }
              }
              )}
                </div>
                <button onClick={() => {deletePost(post.id)}} style={{ margin:"5px" }} className="btn btn-danger">Delete Post</button>
                <Button variant="primary" style={{ margin:"5px" }}  onClick={() =>handleShow(post,props)}>
        Edit
      </Button>
      <Button variant="primary" onClick={() =>replypost(post)}>
        Reply
      </Button>
                </div>
                

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
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
        fade={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reply to the Post</Modal.Title>
        </Modal.Header>
        <div>





        <hr />

            <form onSubmit={handleReply}>
                

            <Form.Group className="mb-3">
            <h3>{props.username}</h3>

        <Form.Label>Reply to the Post</Form.Label>
        <Form.Control as="textarea" rows={3} name="post" id="post" className="form-control"
                  value={comments.post} onChange={handleReplyChange}  />

        </Form.Group>
        


              <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <input type="submit" className="btn btn-primary" value="Send Comment" />

        </Modal.Footer>
            </form>
          </div>
      </Modal>
                </div>
              )
            }}
            else{

              if(post.username !== null){ 
                if(post.image ===""){
                  post.image =white
                }  
                return (

              
                <div key={post.id}>
                  <div className="border my-3 p-3" style={{ whiteSpace: "pre-wrap" }}>
                  <img src={post.img} alt="" width='80'  height= '60' />

                  <h3 className="text-primary">{post.username}</h3>
                  {post.post}
                                    <div className="form-group">
                                     
                  <img  src={post.image} alt="" width='100'  height= '80' />
                  </div>
                  {Object.keys(replies).map((id) => {
                const reply = replies[id]
                if (reply.postId === post.id){
                  
                  return(
                    <Card>
                      <Card.Body>
                     

                      <img style={{ display:"inline",float:"left" ,fontSize:"20px"}} src={reply.usericon} alt="" width='40'  height= '30' /><div><p style={{ display:"inline",float:"left" ,fontSize:"20px"}}>{reply.username}</p><p> :  {reply.post}</p></div>
                      
                    </Card.Body>
                    </Card>
                  )
                }
              }
              )}
      <Button variant="primary" onClick={() =>replypost(post)}>
        Reply
      </Button>
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
        fade={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reply to the Post</Modal.Title>
        </Modal.Header>
        <div>





        <hr />

            <form onSubmit={handleReply}>
                

            <Form.Group className="mb-3">
            <h3>{props.username}</h3>

        <Form.Label>Reply to the Post</Form.Label>
        <Form.Control as="textarea" rows={3} name="post" id="post" className="form-control"
                  value={comments.post} onChange={handleReplyChange}  />

        </Form.Group>
        


              <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <input type="submit" className="btn btn-primary" value="Send Comment" />

        </Modal.Footer>
            </form>
          </div>
      </Modal>
                </div>
               
                </div>
              );
            }
           
          }})}
        </div>
        
      </div>
    );
  
  }



export default Post;

import React, { useState }from "react";
import {Card,Button,Modal} from 'react-bootstrap';
import {getPostData,setPostData,getCorrectPostID,insertOrUpdatePost} from "./UserUpdater"


function Post(props) {
    const [post, setPost] = useState("");
    
    const [errorMessage, setErrorMessage] = useState(null);
    const [posts, setPosts] = useState(getPostData());
    const postdata = getPostData();
    const handleInputChange = (event) => {
      setPost(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Trim the post text.
      const postTrimmed = post.trim();
      
      if(postTrimmed === "") {
        setErrorMessage("A post cannot be empty.");
        return;
      }
      
      // Create post.
      setPosts(getPostData())
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
    }
    const deletePost = (event) => {
      //delete the profile
      for (var i = 0; postdata.length > i; i++) {
        if (props.username === postdata.at(i).username) {
          postdata.splice(i, 1);
        }
      }
      localStorage.setItem("posts", JSON.stringify(postdata))
  
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
                <button onClick={deletePost} className="btn btn-danger">Delete Post</button>

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

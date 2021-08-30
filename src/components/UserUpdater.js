const USER_DATA = "userdata"
const POST_DATA = "posts"
const REPLY_DATA ="replies"

function initUsers() {
    if(localStorage.getItem(USER_DATA) !== null)
      return;
    
    // NOTE: An object has been used for key / value access, if preferred an array could be used instead.

    const users = [
        {
          id:0,
          username: "",
          password: ""
        }
      ];
      localStorage.setItem(USER_DATA, JSON.stringify(users));



    }

function initPosts() {
  if(localStorage.getItem(POST_DATA) !== null)
    return;
  const posts = [
    {
      id:0,
      username: "",
      post: ""
    }
  ];
  localStorage.setItem(POST_DATA, JSON.stringify(posts))
}

function initReply() {
  if(localStorage.getItem(REPLY_DATA) !== null)
    return;
  const comments = [
    {
      id:0,
      postId:0,
      username: "",
      post: ""
    }
  ];
  localStorage.setItem(REPLY_DATA, JSON.stringify(comments))
}

function getCorrectreplyID(){
  const replies = getReplyData();
  var largest = 0;
  for (var i = 0; replies.length > i; i++) {
    if (Number(replies.at(i).id)>largest) {
      largest = Number(replies.at(i).id);
    }
  }

  return largest+1;
}
function getCorrectPostID(){
  const post = getPostData();
  var largest = 0;
  for (var i = 0; post.length > i; i++) {
    if (Number(post.at(i).id)>largest) {
      largest = Number(post.at(i).id);
    }
  }

  return largest+1;
}
function getCorrectID(){
  const users = getUser();
  var largest = 0;
  for (var i = 0; users.length > i; i++) {
    if (Number(users.at(i).id)>largest) {
      largest = Number(users.at(i).id);
    }
  }
  return largest;

  
}

function getPostData(){
  return JSON.parse(localStorage.getItem(POST_DATA))
  //get the post data
}

function getReplyData(){
  return JSON.parse(localStorage.getItem(REPLY_DATA))
}

function setReplyData(replydata){
  localStorage.setItem(REPLY_DATA, JSON.stringify(replydata))

}

function setPostData(postData){
  localStorage.setItem(POST_DATA, JSON.stringify(postData))
  //set postdata
}

function getUser() {
    return JSON.parse(localStorage.getItem(USER_DATA))
  }

function setUser(user){
    localStorage.setItem(USER_DATA, JSON.stringify(user))
}

function setUsername(username){
    localStorage.setItem("user", username)
}

function getUsername(){
  return localStorage.getItem("user")
}

function insertOrUpdateUser(user) {
    const users = getUser();
  
    users[user.id] = user;
  
    setUser(users);
  }

  function insertOrUpdateComment(Comment) {
    const comments = getReplyData();
  
    comments[Comment.id] = Comment;
  
    setReplyData(comments);
  }
  
  function insertOrUpdatePost(post) {
    const posts = getPostData();
  
    posts[post.id] = post;
  
    setPostData(posts);
  }
  

  function verifyUser(username, password) {
    const users = getUser();
    for(const user of users) {
      if(username === user.username && password === user.password)
      {
        setUsername(username);
        return true;
      }
    }
  
    return false;
  }  

  function removeUser() {
    localStorage.removeItem("user");
  }
  
export{
    initUsers,
    initReply,
    insertOrUpdateComment,
    setReplyData,
    getReplyData,
    removeUser,
    initPosts,
    getUsername,
    getUser,
    getPostData,
    setPostData,
    insertOrUpdatePost,
    getCorrectreplyID,
    getCorrectPostID,
    insertOrUpdateUser,
    verifyUser,
    getCorrectID
}
const USER_DATA = "userdata"
const POST_DATA = "posts"

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


function getCorrectPostID(){
  const post = getPostData();

  var largest = post.length

  return largest;
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

function insertOrUpdateUser(user) {
    const users = getUser();
  
    users[user.id] = user;
  
    setUser(users);
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
export{
    initUsers,
    initPosts,
    getUser,
    getPostData,
    setPostData,
    insertOrUpdatePost,
    getCorrectPostID,
    insertOrUpdateUser,
    verifyUser,
    getCorrectID
}
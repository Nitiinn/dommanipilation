const posts = [
  { title: "Post One", body: "This is post one", createdAt: new Date().getTime() },
  { title: "Post Two", body: "This is post two",createdAt: new Date().getTime()},
];

let intervalId = 0;
function getPosts() {
  setTimeout(() => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      let output = "";
      posts.forEach((post) => {
        let timeStamp = (post.createdAt - new Date().getTime())/1000;
        output += `<li>${post.title} created ${timeStamp} seconds ago)</li>`;
      });
      document.body.innerHTML = output;
      console.log(intervalId);
    }, 1000);
    }, 1000);
}

function createPost(post , callback) {
  setTimeout(() => {
    posts.push( {...post, createdAt: new Date().getTime()});
    callback();
  }, 2000);
}

createPost({ title: "Post three", body: "This is post three" },getPosts);

function create4thpost(post,callback){
  setTimeout(() => {
    callback(post,getPosts);
  }, 3000);
}
create4thpost({title:'Post Four',body:'This is post four'},createPost);
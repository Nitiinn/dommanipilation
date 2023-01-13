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
  
  function createPost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push( {...post, createdAt: new Date().getTime()});
            const error = false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('something went wrong');
            }
          }, 2000);
    });

   
  }
  
  createPost({ title: "Post three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));
  
  
  function create4Post(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push( {...post, createdAt: new Date().getTime()});
            const error = false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('something went wrong');
            }
          }, 4000);
    });

   
  }
  setTimeout(() => {
    create4Post({ title: "Post four", body: "This is post four" })
      .then(() => {
        getPosts();
        setTimeout(() => {
          deletePost().catch((err) => console.log(err));
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, 5000);
  function deletePost(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if(posts.length>0)
            {
                const lastelement = posts.pop()
                resolve();
            }
            else{
                reject('array is empty now');
            }
        },1000);
    });
  }
  // const promise1 = Promise.resolve("Hello World");
  // const prommise2 = 10;
  // const promise3 = new Promise((resolve, reject) =>
  //   setTimeout(resolve, 2000, "Goodbye")
  // );

  let user = {
    name: "Nitin",
    lastUserActivityTime: new Date(2022, 12, 25).toDateString(),
  };
  
  const updateLastUserActivityTime = new Promise((resolve, reject) =>
  //1st syntax
    // setTimeout(resolve, 1000, () => {
    //   user.lastUserActivityTime = new Date().toDateString();
    // })
  //2nd syntax
    resolve(
      setTimeout(() => {
        user.lastUserActivityTime = new Date().toDateString();
      },1000)
    )
  );

  Promise.all([createPost(), updateLastUserActivityTime]).then(() => {
    console.log(posts);
    console.log(user.lastUserActivityTime);
  });
  Promise.all([deletePost(), updateLastUserActivityTime]).then(() => {
    console.log(posts);
    console.log(user.lastUserActivityTime);
  });
  
 

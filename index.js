const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postContainer = document.getElementById("posts-container");

function displayPost() {
  for (let i = 0; i < posts.length; i++) {
    postContainer.innerHTML += `
    <section class="posts">
        <div class="user-info container">
          <img src="${posts[i].avatar}" class="user-avatar" />
          <div class="user-name-loc">
            <p class="user-name">${posts[i].username}</p>
            <p class="user-location">${posts[i].location}</p>
          </div>
        </div>
        <div>
          <img src="${posts[i].post}" class="post-img" />
        </div>
        <div class="user-interaction container">
          <div class="post-icons">
            <img src="images/icon-heart.png" class="icons" id="like-btn"/>
            <img src="images/icon-comment.png" class="icons" />
            <img src="images/icon-dm.png" class="icons" />
          </div>

          <p class="likes">${posts[i].likes} likes</p>
          <p class="caption">
            <span>${posts[i].username}</span> ${posts[i].comment}
          </p>
        </div>
      </section>

      <div class="divider"></div>
    `;
  }
}

displayPost();

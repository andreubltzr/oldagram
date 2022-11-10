import { posts } from "./data.js";

function displayPost() {
  const postContainer = document.getElementById("posts-container");

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

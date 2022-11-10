import { posts } from "./data.js";

document.addEventListener("click", (e) => {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  }
});

document.addEventListener("dblclick", (e) => {
  if (e.target.dataset.img) {
    handleLikeClickImg(e.target.dataset.img);
  }
});

function handleLikeClick(postId) {
  const targetPostObj = posts.filter((post) => post.uuid === postId)[0];

  if (targetPostObj.isLiked) {
    targetPostObj.likes--;
  } else {
    targetPostObj.likes++;
  }
  targetPostObj.isLiked = !targetPostObj.isLiked;
  render();
}

function handleLikeClickImg(postId) {
  const targetPostObj = posts.filter((post) => post.uuid === postId)[0];

  if (targetPostObj.isLiked) {
    targetPostObj.likes--;
  } else {
    targetPostObj.likes++;
  }
  targetPostObj.isLiked = !targetPostObj.isLiked;
  render();
}

function displayPost() {
  let feedHtml = ``;
  posts.forEach((post) => {
    let likeIconClass = "";

    if (post.isLiked) {
      likeIconClass = "fa-solid";
    }

    feedHtml += `
    <section class="posts" id="${post.uuid}">
      <div class="user-info container">
          <img src="${post.avatar}" class="user-avatar" />
          <div class="user-name-loc">
            <p class="user-name">${post.username}</p>
            <p class="user-location">${post.location}</p>
          </div>
      </div>
      <div>
        <img src="${post.post}" class="post-img" data-img="${post.uuid}"/>
      </div>
      <div class="user-interaction container">
        <div class="post-icons">
          <i class="fa-regular fa-heart fa-xl icons ${likeIconClass}" data-like="${post.uuid}"></i>
          <i class="fa-regular fa-comment fa-xl icons"></i>
          <i class="fa-regular fa-paper-plane fa-xl icons"></i>
        </div>

        <p class="likes">${post.likes} likes</p>
        <p class="caption">
          <span>${post.username}</span> ${post.comment}
        </p>
      </div>
      </section>

      <div class="divider"></div>
    `;
  });

  return feedHtml;
}

function render() {
  document.getElementById("posts-container").innerHTML = displayPost();
}

render();

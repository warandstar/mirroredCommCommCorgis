const currentUser = {
  id: 1234,
  name: "Its Me",
};

const users = {
  1: {
    name: "Miguel",
  },
  2: {
    name: "Jong",
  },
  3: {
    name: "Kevin",
  },
  4: {
    name: "Sashu",
  },
};

const posts = [
  {
    id: "post1",
    userId: 1,
    comments: [
      {
        userId: 1,
        content: "Hello test1",
      },
    ],
  },
  {
    id: "post2",
    userId: 2,
    comments: [
      {
        userId: 2,
        content: "Hello test2",
      },
    ],
  },
];

generatePosts();
setInputFunctionality();

function setInputFunctionality() {
  const input = document.querySelector(".post-input input");
  const postBtn = document.getElementById("post-button");
  input.addEventListener("input", function (e) {
    postBtn.disabled = e.target.value.length === 0;
  });
  postBtn.addEventListener("click", function () {
    makeNewPost(input.value);
    generatePosts();
  });
}

function makeNewPost(content) {
  const newPost = {
    id: "post" + posts.length,
    userId: currentUser.id,
    content: content,
  };
  posts.push(newPost);

  document.getElementById("post-count").textContent =
    parseInt(document.getElementById("post-count").textContent) + 1;
}

function createPost(info) {
  let postContainer = document.createElement("div");
  const userInfo = users[info.userId];

  postContainer.innerHTML =
    `<div class="post">` +
    `<div class="post-content">` +
    `<p class="bold">${userInfo.name}</p>` +
    `<p>${info.content}</p>` +
    `</div>`;

  return postContainer;
}

function generatePosts() {
  const postsContainer = document.querySelector(".posts");
  postsContainer.innerHTML = ""; // clears post container

  posts.forEach(function (post) {
    const postElement = createPost(post);
    postsContainer.appendChild(postElement);
  });
}

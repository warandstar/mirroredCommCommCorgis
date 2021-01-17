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

let HOST = 'ws://localhost:3456';
let ws = new WebSocket(HOST);
ws.onopen = (event) => {
  ws.onmessage = (msg) => handleMessage(msg);
  setInputFunctionality();
};


function handleMessage(message) {
  console.log(message);
  data = JSON.parse(message.data);
  if (data.action && data.action == "chat") {
    document.querySelector(".post-container").appendChild(createPost(data));
  }
}

function setInputFunctionality() {
  const input = document.querySelector(".post-input input");
  const postBtn = document.getElementById("post-button");
  input.addEventListener("input", function (e) {
    postBtn.disabled = e.target.value.length === 0;
  });
  postBtn.addEventListener("click", function () {
    let datum = {
      text: input.value,
      user: "Miguel",
      action: "chat"
    };
    // document.querySelector(".post-container").appendChild(createPost(datum));
    ws.send(JSON.stringify(datum));
  });
}

function createPost(info) {
  let postContainer = document.createElement("div");

  postContainer.innerHTML =
    `<div class="post">` +
    `<div class="post-content">` +
    `<p class="bold">${info.user}</p>` +
    `<p>${info.text}</p>` +
    `</div>`;

  return postContainer;
}

// function generatePosts() {
//   const postsContainer = document.querySelector(".post-container");
//   postsContainer.innerHTML = ""; // clears post container

//   posts.forEach(function (post) {
//     const postElement = createPost(post);
//     postsContainer.appendChild(postElement);
//   });
// }
//by elisa!!!!!

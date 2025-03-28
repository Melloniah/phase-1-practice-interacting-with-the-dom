// Declare count globally so all functions can access it
let count = 0;

document.addEventListener("DOMContentLoaded", function () {
  let counter = document.getElementById("counter");

  function updateCounter() {
    counter.textContent = count;
  }

  // Start the timer
  let timer = setInterval(() => {
    count++;
    updateCounter();
  }, 1000);

  // Buttons
  let plusButton = document.getElementById("plus");
  let minusButton = document.getElementById("minus");

  plusButton.addEventListener("click", function () {
    count++;
    updateCounter();
  });

  minusButton.addEventListener("click", function () {
    count--;
    updateCounter();
  });

  // Like button functionality
  let likeButton = document.getElementById("heart");
  let likesList = document.querySelector(".likes");
  let likesCount = {};

  likeButton.addEventListener("click", function () {
    if (likesCount[count]) {
      likesCount[count]++;
      document.getElementById(`like-${count}`).textContent = `${count} has been liked ${likesCount[count]} times.`;
    } else {
      likesCount[count] = 1;
      let li = document.createElement("li");
      li.id = `like-${count}`;
      li.textContent = `${count} has been liked 1 time.`;
      likesList.appendChild(li);
    }
  });

  // Pause & Resume
  let pauseButton = document.getElementById("pause");
  let isPaused = false;

  pauseButton.addEventListener("click", function () {
    if (!isPaused) {
      clearInterval(timer);
      pauseButton.textContent = "resume";
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      isPaused = true;
    } else {
      timer = setInterval(() => {
        count++;
        updateCounter();
      }, 1000);
      pauseButton.textContent = "pause";
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      isPaused = false;
    }
  });

  // Commenting feature
  let commentForm = document.getElementById("comment-form");
  let commentList = document.getElementById("list");

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let commentInput = document.getElementById("comment-input");
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
      let p = document.createElement("p");
      p.textContent = commentText;
      commentList.appendChild(p);
      commentInput.value = "";
    }
  });
});

// Defining text characters for the empty and full hearts for you to use later.

// Your JavaScript code goes here!
// Provided mock server function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Constants
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Add event listeners once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".like-glyph");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.innerText = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          modal.classList.remove("hidden");
          modalMessage.innerText = error;
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

// Provided mock server function
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
function mimicServerCall(...args) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

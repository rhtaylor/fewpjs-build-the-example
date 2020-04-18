// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hidden = document.getElementById("modal");
hidden.setAttribute("class", "hidden"); 
document.addEventListener("click", function response(e){ 
  e.target.matches(".like") || e.target.matches(".like-glyph") ? fillHeart(e) : null
}) 

function fillHeart(){ 
  if (event.target.matches(".like-glyph")){ 
    event.target.setAttribute("class", "activated-heart");   
    let heart = event.target; 
    heart.innerHTML = FULL_HEART;
  } else if (event.target.matches(".like")) { 
    event.target.children[0].setAttribute("class", "activated-heart"); 
    let heart = event.target.children[0] 
    heart.innerHTML = FULL_HEART;
  }
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

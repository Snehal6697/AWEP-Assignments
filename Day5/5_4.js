var commentCounter = 1;
var likeCounter = 1;

function commentHere() {

  const newElement = document.createElement("div");
  newElement.textContent = "User Comment ..." + commentCounter; 

  
  newElement.style.background = "blue"; 
  newElement.style.color = "black";
  newElement.style.margin = "4px";

 
  const commentBox = document.querySelector("#commentBox");

 
  commentBox.appendChild(newElement);

  commentCounter++;
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}
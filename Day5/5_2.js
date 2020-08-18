function handleMouseOver() {
    var id2Element = document.querySelector(".beautify");
    id2Element.style.background = "green";
    id2Element.style.color = "Black";
  
    id2Element.innerHTML = "Hello Guys.....";
  }
  
  function handleMouseOut() {
    let id2Element = document.querySelector(".beautify");
    id2Element.style.background = "black";
    id2Element.style.color = "white";
  
    id2Element.innerHTML = "Snehal..!!!!";
  }
/*
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("title").className = "back";
      document.getElementById("roomImg").className = "front";
    } else {
      document.getElementById("title").className = "front";
      document.getElementById("roomImg").className = "back";
    }
  } 
  */
function spiceHoverOver() {
   document.getElementById("downArrow").classList.add("hover");
}
 function spiceHoverOut() {
  document.getElementById("downArrow").classList.remove("hover");
}

function herbHoverOver() {
  document.getElementById("upArrow").classList.add("hover");
}

function herbHoverOut() {
 document.getElementById("upArrow").classList.remove("hover");
}
function herbOpen(){
  document.getElementById("index").classList.add("herbs");
  document.getElementById("index").classList.add("info");
}
function spiceOpen(){
  document.getElementById("index").classList.add("spice");
  document.getElementById("index").classList.add("info");
  document.getElementById("and").onclick = infoExit;
}
function infoExit(){
  document.getElementById("index").classList.remove("spice");
  document.getElementById("index").classList.remove("herbs");
  document.getElementById("index").classList.remove("info");
}
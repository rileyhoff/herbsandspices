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
  document.getElementById("index").className = "";
}
function showDesc(el){
  ingredients.forEach(function(item,index) {
    if(el.innerHTML == item.name){
    document.getElementById("descTitle").innerHTML = item.name;
    document.getElementById("desc").innerHTML = item.info;
  } 
});
  //change to desciption page
  var body = document.getElementById("index");
  body.classList.remove("info");
  body.classList.add("desc");
  //make element active element
  var active = document.getElementsByClassName("active");
  if(active.length > 0){
    active[0].className = active[0].className.replace("active","");
    // active[0].classList.remove("active");
  }
  el.className = "active";
  // el.nextSibling.classList += " active"
}

function getNextDesc(){
  var active = document.getElementsByClassName("active");
  try{
  var next = active[0].parentElement.nextElementSibling.firstElementChild;
  showDesc(next);
  }catch(e){
    if(e instanceof TypeError ){
      console.log("no more elements in set");
    }else{
      console.log(e);
    }
  }
}

function getPrevDesc(){
  var active = document.getElementsByClassName("active");
  try{
  var prev = active[0].parentElement.previousElementSibling.firstElementChild;
  showDesc(prev);
  }catch(e){
    if(e instanceof TypeError ){
      console.log("no more elements in set");
    }else{
      console.log(e);
    }

  }
}

//populate information of each ingedient
var ingredients = [
  Tumeric = {name:"Turmeric", type:"spice", info:"Essential to curry powder, turmeric spice is a member of the ginger family. Turmeric powder has a light, musky flavor and brilliant golden-orange color, for which it is famous throughout the world."},
  Cumin = {name:"Cumin", type:"spice", info:"Aromatic and earthy, ground cumin is an essential flavor in Latin cooking, and frequently used in Indian curries and rice dishes. We grind our cumin spice weekly in small batches for a rich, pungent flavor that will bring out the best in your chilies, roasts, stews, and more."},
  Paprika = {name:"Paprika", type:"spice", info:"California paprika has a beautiful deep red color and a faint lemony topnote. It’s a great choice for garnishes, and the earthy, fruity flavor is wonderful in meat rubs and hearty dishes."},
  Nutmeg = {name:"Nutmeg", type:"spice", info:"The sweet, earthy, piney flavor of powdered nutmeg seasoning is called for in both sweet and savory dishes in cuisines worldwide. This fragrant ground nutmeg seasoning can be added to cream sauces, squash or root vegetable dishes, stewed greens, fruit pies, or as a fragrant garnish for hot beverages. "},
  Sage = {name:"Sage", type:"herb", info:"Sage is a shrubby, perennial plant that grows to about 2-3 feet tall.  Foliage is gray-green with a pebbly texture.  As it ages, it has a tendency to sprawl.  Spikes of purple flowers appear in mid-summer."},
  Thyme = {name:"Chive", type:"herb", info:"Chives belong to the same family as onion, leeks and garlic.  They are a hardy, drought-tolerant perennial growing to about 10-12 inches tall. They grow in clumps from underground bulbs and produce round, hollow leaves that are much finer than onion.  In mid-summer, they produce round, pink flowers similar in appearance to clover."},
  Mint = {name:"Mint", type:"herb", info:"While there are many types of mint that can be grown in the garden, each with its own particular flavor, peppermint (Mentha x piperita) and spearmint (Mentha spicata) are the most common. They grow from 1-3 feet tall and aggressively spread by underground rhizomes. They produce violet flowers."},
  Basil = {name:"Basil", type:"herb", info:"Perhaps the most popular and widely used culinary herb. It is a tender annual, aromatic plant with a spicy odor and flavor.  It grows 12-18 inches tall and foliage color can range from green to purple.  Foliage size can vary from large lettuce-like leaves to very small leaves, half inch in size."}
];

// var items = document.getElementsByClassName("item");
// for (var i = 0; i < items.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// } 
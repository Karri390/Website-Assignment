// Saptarshi Karmakar 5264263 COMP112 ASSIGNMENT JavaScript
// skarmakar final.js


window.addEventListener("load",imgFunc,false);
function imgFunc(){
var bigImage = document.getElementById("bigImage");
var thumbnailsHolder = document.getElementById("thumbnailsHolder");
thumbnailsHolder.addEventListener("click",function(event){
if (event.target.tagName == "IMG"){
bigImage.src = event.target.src;
}
},false);
}

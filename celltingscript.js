const menu = document.getElementById("menuharm");
const menu1 = document.getElementById("menuharm1");
const listcontainer = document.getElementById("list");
var x = window.matchMedia("(min-width: 1200px)")


menu.addEventListener('click',(e)=>{
    menu1.style.display ="inline-block";
    menu.style.display="none";
    listcontainer.style.display ="inline-block";
 });
 
 menu1.addEventListener('click',(e)=>{
     menu1.style.display ="none";
     menu.style.display="inline-block";
     listcontainer.style.display="none"; });

  function myFunction(x) {
    if (x.matches) {
        menu.style.display="none";
    } 
    else {
        menu.style.display="inline-block";
    }
  }
  x.addEventListener("onresize", (e)=>{
    menu.style.display="none";
     });
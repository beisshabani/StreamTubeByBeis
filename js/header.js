
window.onscroll = function() {myFunction()};

var header = document.getElementById("cc");


var beisOff = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > beisOff) {
    header.style.classList.add("firstmenu");
  } else {
    header.style.classList.remove("firstmenu");

    
  }
} 
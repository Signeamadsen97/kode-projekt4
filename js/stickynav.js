window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

var myArray = [1, 2, 3, 4, 5];

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    console.log(myArray);
  } else {
    navbar.classList.remove("sticky");
  }
}
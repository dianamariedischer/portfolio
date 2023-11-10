// typewriter function copied from w3
var i = 0;
var txt = "Howdy! My name is Diana and I'm a front end web developer.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// hamburger menu function from w3
function myFunction() {
  var x = document.getElementById("phoneNavLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const hamburgerResponsive = () => {
  const menuBtn = document.getElementById("menuBtn")
  var sideNav = document.getElementById("sideNav")
  // var menu = document.querySelector("menu")

  sideNav.style.right = "-250px";

  menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
console.log("begin")
});

  menuBtn.onclick = function() {
    if(sideNav.style.right == "-250px"){
      sideNav.style.right = "0";
      console.log("hello");

    }
    else {
      sideNav.style.right = "-250px";

      console.log("au revoir");

    }
  }
  var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true
});
}
export { hamburgerResponsive };

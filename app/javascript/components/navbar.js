const navbarJs = () => {
console.log("hello batard");

const infos = document.getElementById("infos");
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 100) {
    infos.style.backgroundColor = '#ebd8b7';
  } else {
    infos.style.backgroundColor = 'transparent';
  }
});
}
export { navbarJs };

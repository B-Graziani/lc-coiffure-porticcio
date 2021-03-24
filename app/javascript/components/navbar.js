const navbarJs = () => {


  const infos = document.getElementById("infos");
  document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (infos) {
      if (scroll_position > 20) {

        infos.style.backgroundColor = '#ebd8b7';
      } else {
        infos.style.backgroundColor = 'transparent';

      }
    }
  });
}
export { navbarJs };

const buttonBlogAction = () => {

const open = document.getElementById("open");
const pierre_manu = document.getElementById("pierre_manu");
const close = document.getElementById("close");

open.addEventListener( "click" , () => {
  pierre_manu.classList.add('show');
});

close.addEventListener( "click" , () => {
  pierre_manu.classList.remove('show');
});
}
export { buttonBlogAction };


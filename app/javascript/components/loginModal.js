



const loginModal = () => {

const open = document.getElementById("open");
const jean_pierre = document.getElementById("jean_pierre");
const close = document.getElementById("close");

open.addEventListener( "click" , () => {
  jean_pierre.classList.add('show');
});

close.addEventListener( "click" , () => {
  jean_pierre.classList.remove('show');
});
}
export { loginModal };














const loginModal = () => {

  const ouvert = document.getElementById("ouvert");
const jean_pierre = document.getElementById("jean_pierre");
const fermé = document.getElementById("fermé");

ouvert.addEventListener( "click" , () => {
  jean_pierre.classList.add('show');
});

fermé.addEventListener( "click" , () => {
  jean_pierre.classList.remove('show');
});
}
export { loginModal };










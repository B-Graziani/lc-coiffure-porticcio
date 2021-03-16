const newPhoto = () => {

const hola = document.getElementById("hola");
const jean_marie = document.getElementById("jean_marie");
const hole = document.getElementById("hole");

hola.addEventListener( "click" , () => {
  console.log('ca marche')
  jean_marie.classList.add('show');
});

hole.addEventListener( "click" , () => {
  console.log('ca marche plus')
  jean_marie.classList.remove('show');
});
}
export { newPhoto };



// Seccion de rating
const estrellas = document.querySelectorAll('#btn');
const resultado = document.getElementById('resultRating');

estrellas.forEach((star, index1) => {
  star.addEventListener('click', () => {
    estrellas.forEach((star, index2) => {
      // ---- ---- Active rating ---- ---- //
      index1 >= index2
        ? star.classList.add('active')
        : star.classList.remove('active');
    });
    resultado.innerHTML = `You selected ${star.value} out of 5`;
  });
});
//Display resultado rating
const submitBoton = document.getElementById('submitButton');
const seccionPrincipal = document.getElementById('seccionPrincipal');
const seccionOculta = document.getElementById('seccionOculta');

submitBoton.onclick = function() {
  seccionPrincipal.style.display = 'none';
  seccionOculta.style.display = 'block';
};
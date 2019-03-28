let home = document.querySelector('.home');
let armas = document.querySelector('#armas');
let jogar = document.querySelector('.btn-jogar');

armas.style.display = "none";

jogar.addEventListener('click', () => {
  armas.style.display = "flex";
  home.style.display = "none";
});

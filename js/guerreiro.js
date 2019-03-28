/* ------ */
/* Inicio*/
let nome = document.querySelector('#ash-ketchum');
let espadaInicio = document.querySelector('#espada-inicio');
let espadaIntro = document.querySelector('#espada-intro');

espadaInicio.style.display = "none";
espadaIntro.style.display = "none";

nome.addEventListener('click', () => {
  espadaInicio.style.display = "flex";
  espadaIntro.style.display = "flex";
});

// Aparecer o nome do Player (Guerreiro)
// -------------------------
const nomePlayer = document.querySelector('#ash-ketchum');

nomePlayer.addEventListener('click', () => {
    const player = document.querySelector('#player').value;
    document.querySelector('.nome-player').innerHTML = player;

    if (document.querySelector('#player').value == "") {
      document.querySelector('.nome-player').innerHTML = "Jogador(a)";
    }
});

/* ------ */
/* Floresta Muda*/




/* ------ */
/* Templo Ninja*/

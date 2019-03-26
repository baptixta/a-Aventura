// ----------------------------
// a Aventura -----------------
// ----------------------------
const nomePlayer = document.querySelector('#ash-ketchum');

nomePlayer.addEventListener('click', () => {
    const player = document.querySelector('#player').value;
    document.querySelector('.nome-player').innerHTML = player;

    if (document.querySelector('#player').value == "") {
      document.querySelector('.nome-player').innerHTML = "Jogador(a)";
    }
});

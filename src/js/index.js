const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const fechaTrailer = document.querySelector('.fechar-modal');
const linkDoVideo = video.src;

botaoTrailer.addEventListener('click', () => {
    modal.classList.add('aberto');
    video.setAttribute('src', linkDoVideo);
});

fechaTrailer.addEventListener('click', () => {
    modal.classList.remove('aberto');
    video.setAttribute('src', '');
 });
const principal = document.getElementById('pantalla-principal');
const  carta = document.getElementById('carta-abierta');

const cancion = new Audio('assets/Stephen Sanchez - Until I Found You [Español   Lyrics] (Video Oficial)(MP3_160K).mp3');
cancion.loop = true;

const abrirCarta  = document.getElementById('abrir-carta');
const volver = document.getElementById('volver');

abrirCarta.addEventListener('click', () =>{
    principal.classList.add('oculta');
    carta.classList.remove('oculta');

    cancion.play().catch(error =>{
        console.log("El navegador bloqueó la reproducción: ", error);
    })
})

volver.addEventListener('click', () =>{
    carta.classList.add('oculta');
    principal.classList.remove('oculta');

    cancion.pause();
    cancion.currentTime = 0;
})
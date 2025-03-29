//funcao ativa com evento de mouse
function trocaFoto(){
    document.getElementById("foto").setAttribute("src", "/Users/marcosalencar/Documents/facul/4ano/TDS/Trabalho1/img/neymar2.jpg")
}

function voltaFoto(){
    document.getElementById("foto").setAttribute("src", "/Users/marcosalencar/Documents/facul/4ano/TDS/Trabalho1/img/neymar.jpeg")
}

document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoStatus = document.getElementById("videoStatus");

    //evento de mídia
    videoPlayer.addEventListener("play", () => {
        videoStatus.textContent = "O vídeo está em reprodução.";
    });

    //evento de mídia
    videoPlayer.addEventListener("pause", () => {
        videoStatus.textContent = "O vídeo foi pausado.";
    });

    //evento de mídia
    videoPlayer.addEventListener("ended", () => {
        videoStatus.textContent = "O vídeo terminou.";
    });
});

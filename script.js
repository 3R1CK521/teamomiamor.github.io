// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const heartButton = document.getElementById("heartButton");
    const flowersSection = document.getElementById("flowersSection");
    const youtubePlayer = document.getElementById("youtubePlayer");
    const body = document.body;

    heartButton.addEventListener("click", function() {
        // Cambiar el fondo a girasoles
        body.style.backgroundImage = "url('https://st4.depositphotos.com/1006220/20351/i/450/depositphotos_203514552-stock-photo-field-blooming-sunflowers-tree-background.jpg')";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

        // Mostrar la sección de flores y el mensaje
        flowersSection.classList.remove("hidden");

        // Mostrar y reproducir el video de YouTube
        youtubePlayer.classList.remove("hidden");

        // Opcional: Ocultar el botón después de hacer clic
        heartButton.classList.add("hidden");
    });
});

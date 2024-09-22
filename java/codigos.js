var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var socialIcons = document.querySelector(".social-icons");
var smallImage = document.querySelector(".small-image");

function openModal(imageSrc) {
    modal.style.display = "block"; // Exibe o modal
    modalImg.src = imageSrc; // Coloca a imagem correta
    socialIcons.classList.add("hidden"); // Adiciona a classe que esconde os ícones
    smallImage.classList.add("hidden"); // Adiciona a classe que esconde os ícones
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Esconde o modal
    socialIcons.classList.remove("hidden"); // Mostra os ícones de redes sociais
    smallImage.classList.remove("hidden"); // Mostra a imagem pequena novamente
}

// Fechar o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none"; // Esconde o modal
        socialIcons.classList.remove("hidden"); // Mostra os ícones de redes sociais
        smallImage.classList.remove("hidden"); // Mostra a imagem pequena novamente
    }
}
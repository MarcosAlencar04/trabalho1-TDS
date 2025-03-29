document.addEventListener("DOMContentLoaded", () => {
    const dadosUsuarioDiv = document.getElementById("dadosUsuario");
    const template = document.querySelector(".usuario-template");

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.length > 0) {
        usuarios.forEach((usuario, index) => {
            const usuarioDiv = template.cloneNode(true);
            usuarioDiv.classList.remove("d-none", "usuario-template");

            usuarioDiv.querySelector(".usuario-nome").textContent = usuario.nome;
            usuarioDiv.querySelector(".usuario-email").textContent = usuario.email;
            usuarioDiv.querySelector(".usuario-dataNascimento").textContent = usuario.dataNascimento;
            usuarioDiv.querySelector(".usuario-idade").textContent = `${usuario.idade} anos`;

            dadosUsuarioDiv.appendChild(usuarioDiv);
        });
    } else {
        dadosUsuarioDiv.innerHTML = `
            <p class="text-danger">Nenhum usuário encontrado. Por favor, tente novamente.</p>
        `;
    }
});

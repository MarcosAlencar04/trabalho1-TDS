//evento de pagina carregada
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastro");

    //function declaration
    function validarFormulario(formData) {
        const { nome, dataNascimento, email, senha, confirmarSenha } = formData;

        const idade = calcularIdade(dataNascimento);
        if (idade < 18) {
            alert("Você precisa ter pelo menos 18 anos para se cadastrar.");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            return false;
        }

        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/;
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem.");
            return false;
        }
        if (!senhaRegex.test(senha)) {
            alert("A senha deve ter entre 8-20 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.");
            return false;
        }

        return true;
    }

    //function expression
    const calcularIdade = function (dataNascimento) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }

        return idade;
    };

    //arrow function
    //objeto
    const criarUsuario = (nome, email, dataNascimento, idade) => {
        return {
            nome,
            email,
            dataNascimento,
            idade,
        };
    };

    //evento de submissao de formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const inputs = Array.from(form.querySelectorAll("input"));
        const formData = {};

        inputs.forEach((input) => {
            if (input.type === "checkbox") {
                formData[input.name] = input.checked;
            } else {
                formData[input.name] = input.value;
            }
        });

        if (form.checkValidity() && validarFormulario(formData)) {
            const idade = calcularIdade(formData.dataNascimento);

            const usuario = criarUsuario(
                formData.nome,
                formData.email,
                formData.dataNascimento,
                idade
            );

            //array
            const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push(usuario);

            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            const hiddenMessage = document.getElementById("hiddenMessage");
            hiddenMessage.classList.add("active");
            hiddenMessage.textContent = "Cadastro realizado com sucesso!";
            setTimeout(() => {
                hiddenMessage.classList.remove("active");
                window.location.href = "usuarioCadastrado.html";
            }, 1500);
            
        } else{
            form.classList.add("was-validated");
        }
    });
});

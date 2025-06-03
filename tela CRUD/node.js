document.addEventListener("DOMContentLoaded", carregarFuncionarios);

function carregarFuncionarios() {
    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    const tabela = document.getElementById("tabela-funcionarios");
    tabela.innerHTML = "";

    funcionarios.forEach((f, index) => {
        const linha = `
            <tr>
                <td>${f.nome}</td>
                <td>${f.cargo}</td>
                <td>${f.jornada}</td>
                <td>${f.salario}</td>
                <td>
                    <button class="atualizar" onclick="editarFuncionario(${index})">Atualizar</button>
                    <button class="demitir" onclick="deletarFuncionario(${index})">Demitir</button>
                </td>
            </tr>
        `;
        tabela.innerHTML += linha;
    });
}

function salvarFuncionario() {
    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const jornada = document.getElementById("jornada").value;
    const salario = document.getElementById("salario").value;

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    if (editando !== null) {
        funcionarios[editando] = { nome, cargo, jornada, salario };
        editando = null;
    } else {
        funcionarios.push({ nome, cargo, jornada, salario });
    }

    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
    fecharFormulario();
    carregarFuncionarios();
}

function deletarFuncionario(index) {
    const confirmacao = confirm("Tem certeza que deseja excluir este funcionário?");
    if (!confirmacao) return;

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    funcionarios.splice(index, 1);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
    carregarFuncionarios();
}


let editando = null;
function editarFuncionario(index) {
    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    const f = funcionarios[index];
    document.getElementById("nome").value = f.nome;
    document.getElementById("cargo").value = f.cargo;
    document.getElementById("jornada").value = f.jornada;
    document.getElementById("salario").value = f.salario;
    editando = index;
    abrirFormulario();
}

function abrirFormulario() {
    document.getElementById("formulario").style.display = "flex";
}

function fecharFormulario() {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("nome").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("jornada").value = "";
    document.getElementById("salario").value = "";
    editando = null;
}

function pesquisar() {
    const termo = document.getElementById("pesquisa").value.toLowerCase();
    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    const filtrados = funcionarios.filter(f => f.nome.toLowerCase().includes(termo));
    const tabela = document.getElementById("tabela-funcionarios");
    tabela.innerHTML = "";

    filtrados.forEach((f, index) => {
        const linha = `
            <tr>
                <td>${f.nome}</td>
                <td>${f.cargo}</td>
                <td>${f.jornada}</td>
                <td>${f.salario}</td>
                <td>
                    <button class="atualizar" onclick="editarFuncionario(${index})">Atualizar</button>
                    <button class="demitir" onclick="deletarFuncionario(${index})">Demitir</button>
                </td>
            </tr>
        `;
        tabela.innerHTML += linha;
    });
}

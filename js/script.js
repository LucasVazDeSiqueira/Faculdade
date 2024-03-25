document.getElementById('enviar').addEventListener('click', function (event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var nascimento = document.getElementById('Nascimento').value;
    var email = document.getElementById('Email').value;
    var senha = document.getElementById('Senha').value; // Corrigido para 'Senha'
    var celular = document.getElementById('celular').value;
    var comentario = document.getElementById('comentario').value;

    var resultadoForm = nascimento + "<br>" + nome + "<br>" + email + "<br>" + senha + "<br>" + celular + "<br>" + comentario;

    document.getElementById('resultado').innerHTML = resultadoForm;
});

function formatarCelular() {
    var celular = document.getElementById("celular").value;
    // Remove todos os caracteres que não são números
    var numeros = celular.replace(/\D/g, '');
    // Limita o número de caracteres a 11
    var celularFormatado = numeros.substring(0, 11);
    // Atualiza o valor no campo de entrada
    document.getElementById("celular").value = celularFormatado;
}

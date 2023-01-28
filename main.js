const form = document.getElementById('form-contato');
const contato = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    attTabela();

}); 

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumerodoContato = document.getElementById('numero-telefone');

    if ((contato.includes(inputNomeContato.value))||(telefone.includes(inputNumerodoContato.value))) {
        alert(`O contato: ${inputNomeContato.value} ou ${inputNumerodoContato.value} já inserido`);
    } else {

    contato.push(inputNomeContato.value);
    telefone.push(inputNumerodoContato.value);    

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumerodoContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}

    inputNomeContato.value = '';
    inputNumerodoContato.value = '';
}

function attTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
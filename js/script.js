function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const contato = document.getElementById('contato').value;

    if (nome === '' || email === '' || contato === '') {
        alert('Todos os campos devem ser preenchidos!');
        return false;
    }
    return true;
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');
    const email = params.get('email');
    const contato = params.get('contato');

    if (nome && email && contato) {
        document.getElementById('resultado').innerHTML = `
            <p>Nome: ${nome}</p>
            <p>Email: ${email}</p>
            <p>contato: ${contato}</p>
        `;
    }
};

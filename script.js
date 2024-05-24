document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch('/', {
        method: 'POST',
        body: formData,
    }).then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        } else {
            alert('Ocorreu um erro ao enviar o formulário.');
        }
    }).catch(error => {
        console.error('Erro ao enviar formulário:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
    }).then(response => {
        if (response.ok) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        } else {
            return response.text().then(text => {
                throw new Error(text);
            });
        }
    }).catch(error => {
        console.error('Erro ao enviar formulário:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    });
});

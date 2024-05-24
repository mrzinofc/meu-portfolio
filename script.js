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
            // Remover mensagem de erro se existir
            var errorMessage = document.getElementById('form-error-message');
            if (errorMessage) {
                errorMessage.remove();
            }

            // Mostrar mensagem de sucesso
            var successMessage = document.createElement('p');
            successMessage.textContent = 'Mensagem enviada com sucesso!';
            form.insertAdjacentElement('afterend', successMessage);

            // Limpar os campos do formulário
            form.reset();
        } else {
            return response.text().then(text => {
                throw new Error(text);
            });
        }
    }).catch(error => {
        console.error('Erro ao enviar formulário:', error);

        // Mostrar mensagem de erro
        var errorMessage = document.createElement('p');
        errorMessage.textContent = 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.';
        errorMessage.id = 'form-error-message';
        form.insertAdjacentElement('afterend', errorMessage);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.getElementById('menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let contactForm = document.getElementById('contact-form');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            }
        });
    };

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Adicionando evento de envio do formulário
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        let formData = new FormData(contactForm);

        try {
            let response = await fetch('/', { // O Netlify redirecionará automaticamente os dados do formulário para o endpoint correto
                method: 'POST',
                body: formData
            });

            let data = await response.json();
            console.log(data); // Você pode fazer algo com a resposta do servidor, como exibir uma mensagem para o usuário
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            // Você pode exibir uma mensagem de erro para o usuário aqui
        }
    });
});

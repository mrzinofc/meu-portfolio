<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Função para limpar os dados de entrada
    function clean_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Recupera e limpa os dados do formulário
    $nome = clean_input($_POST["nome"]);
    $email = clean_input($_POST["email"]);
    $telefone = clean_input($_POST["telefone"]);
    $assunto = clean_input($_POST["assunto"]);
    $mensagem = clean_input($_POST["mensagem"]);

    // Validar os dados do formulário
    if (empty($nome) || empty($email) || empty($mensagem)) {
        echo "Por favor, preencha todos os campos obrigatórios.";
        exit;
    }

    // Configura o destinatário do e-mail
    $destinatario = "murilogatao00@gmail.com";

    // Monta o corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Telefone: $telefone\n";
    $corpo_email .= "Assunto: $assunto\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Evita injeção de cabeçalho
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Envia o e-mail
    if (mail($destinatario, "Novo contato via formulário", $corpo_email, $headers)) {
        // Se o e-mail foi enviado com sucesso, redireciona de volta para a página do formulário
        header("Location: obrigado.html");
        exit;
    } else {
        // Se houve um erro no envio do e-mail, exibe uma mensagem de erro
        echo "Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
    }
} else {
    // Se o formulário não foi submetido, redireciona de volta para a página do formulário
    header("Location: index.html");
    exit;
}

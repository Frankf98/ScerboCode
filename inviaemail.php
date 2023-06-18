<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $oggetto = $_POST['oggetto'];
  $messaggio = $_POST['messaggio'];

  $destinatario = "tuo@email.com";
  $messaggio_email = "Nome: $nome\n";
  $messaggio_email .= "Email: $email\n";
  $messaggio_email .= "Oggetto: $oggetto\n";
  $messaggio_email .= "Messaggio:\n$messaggio\n";

  $intestazioni = "From: $nome <$email>\r\n";
  $intestazioni .= "Reply-To: $email\r\n";

  if (mail($destinatario, $oggetto, $messaggio_email, $intestazioni)) {
    echo "Email inviata con successo.";
  } else {
    echo "Si è verificato un errore durante l'invio dell'email.";
  }
}
?>

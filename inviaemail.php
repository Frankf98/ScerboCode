<?php
// Funzione per generare un token CSRF
function generateCSRFToken() {
  if (!isset($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
  }
  return $_SESSION['csrf_token'];
}

// Funzione per verificare il token CSRF
function verifyCSRFToken($token) {
  if (!empty($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token)) {
    return true;
  }
  return false;
}

// Verifica se il metodo di richiesta è POST e valida il token CSRF
if ($_SERVER["REQUEST_METHOD"] == "POST" && verifyCSRFToken($_POST['csrf_token'])) {
  // Filtra e valida i dati inviati dal modulo
  $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $oggetto = filter_var($_POST['oggetto'], FILTER_SANITIZE_STRING);
  $messaggio = filter_var($_POST['messaggio'], FILTER_SANITIZE_STRING);

  // Rimuovi eventuali tag HTML dal messaggio
  $messaggio = strip_tags($messaggio);

  // Configura l'email
  $destinatario = "frank.xdddf@gmail.com";
  $messaggio_email = "Nome: $nome\n";
  $messaggio_email .= "Email: $email\n";
  $messaggio_email .= "Oggetto: $oggetto\n";
  $messaggio_email .= "Messaggio:\n$messaggio\n";
  $intestazioni = "From: $nome <$email>\r\n";
  $intestazioni .= "Reply-To: $email\r\n";

  // Invia l'email solo se i campi sono stati compilati correttamente
  if (!empty($nome) && !empty($email) && !empty($oggetto) && !empty($messaggio)) {
    if (mail($destinatario, $oggetto, $messaggio_email, $intestazioni)) {
      echo "Email inviata con successo.";
    } else {
      echo "Si è verificato un errore durante l'invio dell'email.";
    }
  } else {
    echo "Compila tutti i campi del modulo.";
  }
}
?>

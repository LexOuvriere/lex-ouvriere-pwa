// --- Lex Ouvrière : inscription WhatsApp ---
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('whatsapp-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numero = document.getElementById('numero').value.trim();

    // Validation simple du numéro (commence par +, puis chiffres)
    const regex = /^\+\d{7,15}$/;
    if (!regex.test(numero)) {
      alert("Entre un numéro WhatsApp valide, par exemple +22890123456.");
      return;
    }

    // Message à envoyer
    const message = encodeURIComponent("Bienvenue sur Lex Ouvrière 👷‍♂️\nInstalle notre app ici 👉 https://lexouvriere.github.io/lex-ouvriere-pwa");

    // Redirection vers WhatsApp
    const lien = `https://wa.me/${numero.replace('+', '')}?text=${message}`;
    window.open(lien, '_blank');

    // Optionnel : afficher confirmation
    alert("Lien WhatsApp ouvert. Vérifie ton téléphone !");
  });
});


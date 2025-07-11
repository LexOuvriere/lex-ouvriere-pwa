// --- Lex Ouvrière : message privé avec accès personnalisé ---
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('whatsapp-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const brut = document.getElementById('numero').value.trim();
const numero = brut.replace(/\s+/g, '').replace(/-/g, ''); // 🔧 nettoie espaces et tirets

const regex = /^\+\d{7,15}$/;

if (!regex.test(numero)) {
  alert("Entre un numéro WhatsApp valide, ex : +22890123456");
  return;
}

    if (!regex.test(numero)) {
      alert("Entrez un numéro WhatsApp valide, ex : +22890....56");
      return;
    }

    // 📦 Enregistrement du numéro dans le navigateur (localStorage)
    localStorage.setItem('whatsapp-numero', numero);

    // 💬 Message WhatsApp contenant le lien d'accès personnel
    const lienApp = `https://lexouvriere.github.io/app.html?ref=${numero}`;
    const message = encodeURIComponent(`
Bienvenue sur Lex Ouvrière 👷‍♂️

Voici votre lien personnel d’accès sécurisé :
🔐 ${lienApp}

Ce lien est privé et ne peut être partagé.
`);

    // 🚀 Redirection vers le propre WhatsApp du visiteur
    const lienWhatsApp = `https://wa.me/${numero.replace('', '')}?text=${message}`;
    window.open(lienWhatsApp, '_blank');

    alert("Vérifier votre whatsApp pour la suite 📱 !");
  });
});


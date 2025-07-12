// --- Lex Ouvrière : message privé avec accès personnalisé ---
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('whatsapp-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🧹 Nettoyer le numéro entré (espaces, tirets)
    const brut = document.getElementById('numero').value.trim();
    const numero = brut.replace(/\s+/g, '').replace(/-/g, '');

    // ✅ Vérification du format international : + suivi de 7 à 15 chiffres
    const regex = /^\+\d{7,15}$/;
    if (!regex.test(numero)) {
      alert("Entre un numéro WhatsApp valide, ex : +22890123456");
      return;
    }

    // 📦 Enregistrement du numéro dans le navigateur (localStorage)
    localStorage.setItem('whatsapp-numero', numero);

    // 🔗 Génération du lien personnel vers app.html sans le "+"
    const refParam = numero.replace('+', '');
    const lienApp = `https://lexouvriere.github.io/lex-ouvriere-pwa/app.html?ref=${refParam}`;

    // 💬 Message WhatsApp contenant le lien personnel
    const message = encodeURIComponent(`
Bienvenue sur Lex Ouvrière 👷‍♂️

Voici votre lien personnel d’accès sécurisé :
🔐 ${lienApp}

Ce lien est privé et ne doit pas être partagé.
`);

    // 🚀 Redirection vers WhatsApp avec message prérempli
    const lienWhatsApp = `https://wa.me/${refParam}?text=${message}`;
    window.open(lienWhatsApp, '_blank');

    alert("Vérifie ton WhatsApp pour la suite 📱 !");
  });
});


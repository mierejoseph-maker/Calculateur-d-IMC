// Sélection de la zone où les résultats seront affichés dans la page
const sortie = document.querySelector("#sortie");

// Fonction qui insère du contenu HTML dans la zone de sortie
function afficher(html) {
  sortie.innerHTML += html;
}

// Fonction qui calcule l'IMC à partir du poids et de la taille
function calculerImc(poids, taille) {
  const imc = poids / (taille * taille);
  let categorie;

  // Détermination de la catégorie selon la valeur de l'IMC
  if (imc < 18.5) {
    categorie = "maigreur";
  } else if (imc < 25) {
    categorie = "normal";
  } else if (imc < 30) {
    categorie = "surpoids";
  } else {
    categorie = "obesite";
  }

  // Retourne l'IMC et la catégorie correspondante
  return { imc, categorie };
}

// Fonction qui affiche un résultat IMC pour un profil donné
function afficherResultat(poids, taille) {
  const resultat = calculerImc(poids, taille);

  // Ajout d'un paragraphe avec une classe CSS selon la catégorie
  afficher(`<p class="resultat ${resultat.categorie}"> Votre IMC est de : ${resultat.imc.toFixed(1)} — ${resultat.categorie}
  </p>`);
}

// Liste de profils utilisés pour tester le calcul
const profils = [
  { poids: 48, taille: 1.62 },
  { poids: 72, taille: 1.78 },
  { poids: 84, taille: 1.7 },
  { poids: 95, taille: 1.75 },
];

// Affichage de chaque profil dans la page
profils.forEach((profil) => {
  afficherResultat(profil.poids, profil.taille);
});

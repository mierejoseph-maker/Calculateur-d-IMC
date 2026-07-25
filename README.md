# Calculateur-d-IMC

<img src="Capture d'écran 2026-07-25 023828.png" alt="calculateur d'IMC" width="600"/>

## Description

Ce projet est une petite application web en HTML, CSS et JavaScript permettant de calculer l'Indice de Masse Corporelle (IMC) à partir du poids et de la taille d'une personne.

Le site affiche ensuite la catégorie correspondante :

- Maigreur
- Normal
- Surpoids
- Obésité

Les résultats sont affichés directement dans la page web avec des couleurs différentes selon la catégorie.

## Structure du dossier

- index.html : structure HTML de la page
- style.css : styles et mise en page du site
- imc.js : logique JavaScript pour calculer et afficher l'IMC
- README.md : documentation du projet

## Fonctionnement

1. L'utilisateur fournit un poids et une taille via les données du script.
2. Le JavaScript calcule l'IMC avec la formule :
   $IMC = \frac{poids}{taille^2}$
3. Une catégorie est déterminée selon la valeur de l'IMC.
4. Le résultat est affiché dans la page avec une couleur associée à la catégorie.

## Catégories IMC

| Catégorie | Intervalle    |
| --------- | ------------- |
| Maigreur  | moins de 18,5 |
| Normal    | 18,5 à 24,9   |
| Surpoids  | 25 à 29,9     |
| Obésité   | 30 et plus    |

## Technologies utilisées

- HTML5
- CSS3
- JavaScript

## Comment exécuter le projet

1. Ouvrir le fichier index.html dans un navigateur web.
2. Le script se charge automatiquement et affiche les résultats.

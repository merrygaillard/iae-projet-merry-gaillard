---
name: mon-research-academic-sources
description: Chercher et valider des sources académiques fiables pour un concept donné, dans une langue et un niveau spécifiques.
---

# Chercher des sources académiques

## Ce que fait ce skill
Trouve et valide des sources fiables (MDN, W3Schools, Codecademy, Stack Overflow, Reddit) pour un concept informatique donné. Vérifie que les URLs fonctionnent. Vous donne une liste de sources triées par fiabilité avec leurs URLs vérifiées, prêtes pour générer une leçon.

**Livrable :** Une liste de 3–5 sources validées avec URL, titre, résumé et statut de validation.

## Ce que je fournis en entrée
Vous me donnez dans la conversation :
- **Concept** : Le sujet à rechercher (ex: « les boucles », « les variables », « les requêtes SQL »)
- **Langage** : JavaScript, Python ou SQL
- **Niveau** : débutant, intermédiaire, avancé ou bonus

Exemple : « Cherche des sources sur les boucles en JavaScript, niveau débutant »

## Étapes
1. **Rechercher** — Je cherche le concept sur MDN, W3Schools, Codecademy, Stack Overflow avec le langage et le niveau comme contexte.
2. **Évaluer** — Pour chaque source trouvée, je vérifie : l'URL fonctionne, le contenu est exact et complet, la source est réputée.
3. **Valider Reddit** — Si je trouve du contenu Reddit pertinent, je le **double-check** contre MDN/W3Schools/Codecademy. Je ne l'inclus que s'il confirme ce que les sources "traditionnelles" disent.
4. **Vérifier les URLs** — Je teste que chaque URL est accessible et n'est pas cassée.
5. **Trier** — Je classe les sources : sources "traditionnelles" d'abord (fiables), Reddit seulement si validé, forums génériques en dernier.

## Règles
- **Toujours citer avec URL** : Chaque source doit avoir une URL vérifiée et accessible.
- **Reddit : double-check obligatoire** : Une discussion Reddit ne rentre que si elle valide ce que MDN/W3Schools/Codecademy disent.
- **Pas de sources mortes** : Si une URL ne répond pas, chercher un remplacement.
- **Prioriser les sources "trad"** : MDN > W3Schools > Codecademy > Stack Overflow > Reddit validé > autres forums.
- **Français ou anglais ?** : Chercher en anglais (sources originales meilleures), noter le langage trouvé.

## Quand s'arrêter et me demander
- Je n'arrive pas à trouver 3 sources fiables pour ce concept → Je vous préviens et on cherche un concept connexe.
- Une source Reddit n'est pas validée vs "trad" sources → Je la rejette et continue.
- Le concept est trop spécialisé ou rare → Je vous le signale et propose des alternatives.
- Plus de 5 sources trouvées et très bonnes → Je vous demande lesquelles prioritariser pour la leçon.

## Format de la sortie
Une liste Markdown (ou tableau) avec 1 ligne par source :

| URL | Titre | Résumé | Validation | Reddit ? |
|-----|-------|--------|------------|----------|
| https://... | Titre de la source | Résumé court (2-3 lignes) | ✓ Valide | Non |
| https://... | Titre | Résumé | ✓ Valide | Oui (validé vs W3Schools) |

Sauvegardée dans : `outputs/academie-informatique/sources/<concept>_<langage>_<niveau>.md`

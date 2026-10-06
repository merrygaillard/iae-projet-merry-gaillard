---
name: mon-create-inventory-report
description: Générer un rapport d'inventaire (Excel) listant toutes les leçons, concepts et sources pour valider avant lancement du site.
---

# Créer le rapport d'inventaire

## Ce que fait ce skill
Produit un **fichier Excel complet** (tableau lisible) qui recense **toutes vos leçons, tous les concepts, tous les exercices, et toutes les sources** avec leurs URLs.

C'est votre **checklist de validation** avant de lancer le site. Vous pouvez vérifier :
- Que chaque source a une URL valide et accessible
- Qu'aucun concept n'est oublié
- Que la couverture est complète par langage et niveau
- Qu'il n'y a pas de doublons

**Livrable :** Un fichier Excel `inventory.xlsx` avec plusieurs onglets (résumé, leçons, exercices, sources).

## Ce que je fournis en entrée
Vous me donnez dans la conversation :
- **Demande simple** : « Crée le rapport d'inventaire »

Je génère automatiquement le rapport en scannant **toutes les leçons, exercices et quiz** que vous avez déjà créés.

Optionnel : « Crée le rapport d'inventaire. Focus sur JS et Python seulement. »

## Étapes
1. **Scanner toutes les leçons** — Lister chaque leçon (langage, niveau, titre, concepts couverts).
2. **Récupérer toutes les sources** — De chaque leçon, extraire les URLs et titres des sources.
3. **Scanner tous les exercices** — Lister chaque set d'exercices (20 questions par leçon).
4. **Scanner tous les quiz** — Lister chaque quiz final (50 questions par niveau).
5. **Organiser les données** — Regrouper par langage et niveau pour lisibilité.
6. **Générer Excel** — Créer un fichier Excel avec plusieurs onglets :
   - **Résumé** : Nombre de leçons, exercices, quiz par langage et niveau
   - **Leçons** : Chaque leçon avec ses concepts et sources
   - **Exercices** : Nombre de questions par leçon
   - **Quiz** : Quiz finaux par niveau
   - **Sources** : Toutes les URLs avec statut de validation

## Règles
- **Chaque source a une URL** — Pas de source sans lien; sinon flaggée comme « À vérifier ».
- **Pas de doublons** — Si même URL apparaît 2 fois, consolidée en 1 ligne.
- **Format des URLs** — Vérifier que chaque URL commence par http:// ou https://.
- **Niveaux complets** — Lister débutant, intermédiaire, avancé, bonus si présents.
- **Excel lisible** — Formatage clair, colonnes auto-ajustées, headers en gras.
- **Ordre logique** — Groupé par langage → par niveau → par leçon.

## Quand s'arrêter et me demander
- **Une source n'a pas d'URL** → Je la flagge « À vérifier » et vous demande une vérification manuelle.
- **L'Excel est **trop volumineux** (ex: >10 000 lignes) → Je le divise en plusieurs fichiers par langage.
- **Vous voulez un format différent** (CSV au lieu d'Excel, ou structure différente) → Je demande clarification.
- **Des URLs cassées** → Je les teste et vous signale celles qui ne répondent pas.
- **Incohérences** (ex: concept listé mais pas couvert dans aucune leçon) → Je vous les flagge pour révision.

## Format de la sortie
Un fichier Excel `inventory.xlsx` avec 5 onglets :

### Onglet 1 : **Résumé**
| Langage | Niveau | Nombre de leçons | Exercices totaux | Quiz | Concepts uniques |
|---------|--------|------------------|------------------|------|------------------|
| JavaScript | Débutant | 8 | 160 (8×20) | 1 (50Q) | 32 |
| JavaScript | Intermédiaire | 6 | 120 (6×20) | 1 (50Q) | 28 |
| Python | Débutant | 7 | 140 (7×20) | 1 (50Q) | 30 |

### Onglet 2 : **Leçons détaillées**
| Langage | Niveau | Titre leçon | Concepts | Durée est. | Nb sources | Source 1 URL | Source 1 Titre | Source 2 URL | ... |
|---------|--------|-------------|----------|-----------|-----------|--------------|----------------|--------------|-----|
| JavaScript | Débutant | Les boucles | for, while, do-while | 12 min | 3 | https://mdn.org/... | MDN — Boucles | https://w3schools.com/... | W3Schools — for loop |
| JavaScript | Débutant | Les fonctions | function, return, paramètres | 15 min | 3 | https://mdn.org/... | MDN — Fonctions | ... | ... |

### Onglet 3 : **Exercices**
| Langage | Niveau | Leçon | Nb QCM | Nb Texte à trou | Nb Texte libre | Total | Seuil réussite |
|---------|--------|-------|--------|-----------------|-----------------|-------|-----------------|
| JavaScript | Débutant | Les boucles | 10 | 5 | 5 | 20 | 15/20 |
| JavaScript | Débutant | Les fonctions | 10 | 5 | 5 | 20 | 15/20 |

### Onglet 4 : **Quiz finaux**
| Langage | Niveau | Nb questions | Points par Q | Total points | Seuil réussite (pts) | Seuil réussite (note) |
|---------|--------|-------------|-------------|-------------|----------------------|----------------------|
| JavaScript | Débutant | 50 | 2 | 100 | 75 | 15/20 |
| JavaScript | Intermédiaire | 50 | 2 | 100 | 75 | 15/20 |

### Onglet 5 : **Sources (inventaire complet)**
| URL | Titre source | Domaine | Utilisée dans (leçon) | Langage | Niveau | Statut validation | Accessible ? |
|-----|-------------|---------|----------------------|---------|--------|-------------------|-------------|
| https://mdn.org/docs/Web/JavaScript/Reference/Statements/for | MDN — for statement | mdn.org | Les boucles | JavaScript | Débutant | ✓ Validée | ✓ Oui |
| https://www.w3schools.com/js/js_loop_for.asp | W3Schools — JavaScript for Loop | w3schools.com | Les boucles | JavaScript | Débutant | ✓ Validée | ✓ Oui |
| https://stackoverflow.com/questions/... | StackOverflow — for vs while | stackoverflow.com | Les boucles | JavaScript | Débutant | ✓ Validée | ✓ Oui |

Sauvegardé dans : `outputs/academie-informatique/inventory.xlsx`

**Utilité :**
- ✓ **Human Gate G1** : Vous validez que toutes les sources sont correctes et accessibles
- ✓ **Audit trail** : Traçabilité complète de ce qui a été créé
- ✓ **Vérification de couverture** : Aucun concept oublié, tous les niveaux couverts

# Révision des Requirements — Académie Informatique

Synthèse des clarifications et décisions prises lors de la phase Deconstruct.

---

## Tableau Synthèse : Points Soulevés → Décisions

| # | Point Soulevé | Décision | Pourquoi |
|---|---|---|---|
| 1 | Passerelle Python/JavaScript : logique floue | **Supprimée.** Progression indépendante par pôle. Réussir débutant JS = accès à intermédiaire JS (pas à intermédiaire Python) | Clarté pédagogique. Chaque pôle maîtrisé avant escalade. Évite confusion utilisateur. |
| 2 | QCM final × 50Q : scoring imprécis | **Défini:** 50 questions, 2 pts/Q = 100 pts, divisé par 5 = note sur 20. ≥15/20 = passer. Refaisable, questions varient. | Standard pédagogique. Mesurable. Équitable. Variété = évite mémorisation réponses. |
| 3 | Distribution 30-35h : qui décide? | **L'IA décide les ratios.** MAX débutant + intermédiaire (prioritaires), avancé moins, bonus hors comptage (optionnel utilisateur). | Vous appreniez surtout débutant + intermédiaire. Bonus = enrichissement, pas obligation. Allocation ressources alignée avec vos objectifs. |
| 4 | MySQL vs SQL | **Changé en SQL.** "MySQL" = système; "SQL" = langage pédagogique. | SQL = cohérence avec JS + Python (langages). MySQL = implémentation future, hors scope. |
| 5 | Responsive design : scope? | **Web + tablette + mobile** optimisé (Duolingo-like). Desktop seulement = trop limitant. | Vous préférez flexibilité. Tablette + mobile obligatoires. |
| 6 | Contenu bonus : scope ou extension? | **Inclus dans scope E1.** Bonus = optionnel utilisateur, hors 30-35h. | Vous aviez dit "obligatoire proposer, optionnel suivre". E1 = complet, E3 supprimée. |
| 7 | Citations sources : format? | **URL vérifiée + accessible.** Pas juste "source", mais lien vers contenu concret. | Traçabilité. Vous validez dans tableau Excel. Sources doivent être cliquables. |
| 8 | Timers (20s QCM, etc.) | **Supprimés.** Temps infini pour répondre. | Vous prioritaire clarté > vitesse. Pas de handicap moteur/dyslexie. |
| 9 | Feedback utilisateur : mécanisme? | **Onglet "Un commentaire ?"** fin de leçon/exercice. Recueille signalement bugs/clarté. | Amélioration continu. Utilisateur contributeur, pas passif. |
| 10 | Stack technique : meilleure solution? | **Vercel + Next.js + Supabase** (gratuit tier). Non payant, privé (lien), partageable, stocke progression. | Vérifie tous vos critères : gratuit (vercel.app), facile (URL), légal (open source), privé + partageable (lien unique), persistent (Supabase). |
| 11 | Validation contenu : qui/quand? | **Post-génération :** tableau Excel de toutes notions → vous validez sources. **Post-déploiement :** vous testez chaque pôle-niveau (leçon + exercice + QCM 50Q). | Qualité > quantité. Vous = juge final. Validation par étapes (sources → contenu → UX). |
| 12 | Sources mortes : après déploiement? | **Supprimées + remplacées.** L'IA trouve source alternative sûre si notion perdue. | Contenu = vivant. Pas de liens morts. Robustesse à long terme. |
| 13 | Revalidation post-déploiement : mesure? | **Qualité + fiabilité du contenu.** Vous validez erreurs factuelles, bugs UX, fiabilité sources, accessibilité. | Vous seul gage de "bon pour apprendre". Confiance dans les données. |
| 14 | Progression : dépendances? | **Pas de dépendances inter-pôles.** Débutant = level 1 obligatoire pour tous. Progression = même pôle. | Clarté. Utilisateur ne se perd pas. Chaque pôle = standalone logiquement. |
| 15 | Barre progression : mécanique? | **Une par pôle.** Leçon + exercice associé = augmentent barre. Tous niveaux d'un pôle validés = passe au suivant. | Motivant (visual feedback). Simple. Mesurable. |

---

## Résumé des Changements Majeurs

### Suppression/Clarification
- ✅ Passerelle Python/JavaScript → Progression indépendante
- ✅ Timers → Temps illimité
- ✅ MySQL → SQL
- ✅ Niveau bonus : "proposed" → "included, optional for user"

### Ajout
- ✅ QCM final précisément défini (50Q, ≥15/20)
- ✅ Barre progression par pôle
- ✅ Onglet "Un commentaire ?"
- ✅ Tableau Excel validation post-contenu
- ✅ Gestion sources mortes (remplacement)
- ✅ Responsive web + tablette + mobile
- ✅ Stack technique décidé (Vercel + Supabase)

### Clarification
- ✅ "Illimité" en exercices = pré-générés suffisant, refaisables
- ✅ "Pas trop facile" = plusieurs notions 1× leçon, pratiquées en exercice
- ✅ "Maîtriser" = vocabulaire + syntaxe
- ✅ Revalidation utilisateur = qualité + fiabilité contenu
- ✅ Distribution 30-35h = IA choisit ratios, MAX débutant+intermédiaire

---

## Impact sur Architecture Design

Ces décisions structurent l'architecture :
- **Data model :** Pôles indépendants (JS, Python, SQL), niveaux progressifs
- **UX flow :** Débutant → QCM fin niveau → intermédiaire (même pôle)
- **Backend :** Supabase pour progression utilisateur par pôle
- **Frontend :** Barre progression + onglet feedback + responsive
- **Contenu :** Tableau Excel = source de vérité avant déploiement

---

**Prêt pour Design Phase? Les requirements sont stabilisés.**

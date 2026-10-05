# Académie Informatique — Workflow Requirements

## Goal

Un site d'apprentissage complet et fonctionnel avec 30-35 heures de leçons, exercices de fin de leçon et exercices d'entraînement illimités, couvrant JavaScript, Python et MySQL aux niveaux débutant, intermédiaire, avancé et bonus, avec un système de suivi de progression. Une "run" réussie livre un site déployé et prêt à utiliser.

## Value & Measurement

| Field | Value |
|---|---|
| Business Objective | Être plus employable, meilleur PMO/formateur, disposer d'un portfolio de compétences professionnelles |
| Desired Outcome | Maîtriser les langages informatiques, savoir piloter l'IA pour qu'elle développe, travail plus rapide et efficace |
| Measure | Taux de complétion par pôle (%) + Heures d'apprentissage par semaine |
| Baseline | 0 heures/semaine · Estimated |
| Target | Minimum 2h/semaine, objectif 4h/semaine |
| Readable When | 1 semaine après go-live |

## Metadata

| Field | Value |
|---|---|
| Workflow Name | Académie Informatique |
| Description | Créer un site d'apprentissage multilingages complet avec contenu, exercices progressifs et système de suivi |
| Trigger | Décision de structurer l'offre pédagogique en langages informatiques |
| Owner | Merry Gaillard (apprenant/formateur) |
| Lens | Individual |
| Definition Type | Goal-Driven |

---

## Inputs

- Langages à couvrir (exemple : JavaScript, Python, MySQL, optionnellement R ou autres)
- Niveaux pédagogiques (débutant, intermédiaire, avancé, optionnellement bonus/expert)
- Documentation optionnelle de l'utilisateur (ex. docs MySQL existantes)
- L'IA cherche et synthétise le contenu en open source (sites d'apprentissage, GitHub, Reddit, etc.)

---

## Context Inventory

| ID | Artifact | Used By | Status | Sensitivity | Provenance | AI Accessible | Location / Source | Key Contents |
|---|---|---|---|---|---|---|---|---|
| C1 | Documentation MySQL (optionnelle) | Tous les pôles | Needs Creation | Public | Authored | Yes | À fournir par l'utilisateur si disponible | Documentation technique MySQL |
| C2 | Sites d'apprentissage en ligne (MDN, W3Schools, etc.) | Tous les pôles | Exists | Public | External | Yes | Web public | Tutoriels, docs, exercices |
| C3 | Threads Reddit + réseaux sociaux (à vérifier 3×) | Tous les pôles | Exists | Public | External | Yes | Web public (Reddit, X, Stack Overflow) | Discussions, solutions, retours d'expérience |

---

## Acceptance Criteria

1. **AC1 (must)** — Le site a une UX fluide et claire — un utilisateur peut naviguer et comprendre quoi faire sans documentation externe
2. **AC2 (must)** — Les exercices sont progressifs — débutant ne pose pas les mêmes questions qu'avancé
3. **AC3 (must)** — Les exercices ne sont pas trop faciles — une réponse correcte demande de vraiment comprendre le concept, l'utilisateur est challenged et ne s'en lasse pas
4. **AC4** — Chaque leçon cite ses sources en bas
5. **AC5** — Le site est sécurisé — pas de faille obvious (input validation, protection contre les injections, etc.)
6. **AC6** — Le contenu est en français et facile à suivre

Reference example: Duolingo (UX et progression), mais adapté avec QCM, texte à trou et texte libre

---

## Example Scenarios

| ID | Scenario | Input | What to look for in the output | Golden Example |
|---|---|---|---|---|
| E1 | Cas typique (real) | `outputs/academie-informatique/inputs/E1-cas-typique.md` — JavaScript + Python + MySQL, niveaux débutant/intermédiaire/avancé | Le site contient 30-35h de contenu réparti entre les 3 langages et 3 niveaux; chaque exercice challenge; sources citées; UX fluide; tests AC1–AC6 | — |
| E2 | Ajouter un langage (proposed) | `outputs/academie-informatique/inputs/E2-ajouter-langage.md` — JavaScript + Python + MySQL + R, mêmes niveaux | L'IA peut scaler à 4 langages; qualité du contenu R maintenue; cohérence entre les pôles; tests AC1–AC6 et la scalabilité | — |
| E3 | Ajouter niveau bonus (proposed) | `outputs/academie-informatique/inputs/E3-ajouter-niveau-bonus.md` — JavaScript + Python + MySQL, niveaux débutant/intermédiaire/avancé/bonus | L'IA crée du contenu ultra-avancé/expert cohérent; exercices bonus sont suffisamment challenges; progression logique; tests AC1–AC6 pour le niveau bonus | — |

---

## Rules & Constraints

| ID | Type | Rule |
|---|---|---|
| R1 | Must do | Chaque exercice doit avoir une solution accessible au niveau correspondant (débutant a des indices, bonus n'a pas) |
| R2 | Must do | Types d'exercices : QCM, texte à trou, texte libre (variété obligatoire) |
| R3 | Must do | QCM : une seule réponse correcte |
| R4 | Must do | Timers : 20 secondes pour QCM, 30 secondes pour texte à trou, 60 secondes pour texte libre |
| R5 | Must do | Toutes les leçons en français |
| R6 | Must never do | Ne jamais copier du code sans l'attribuer (toujours citer la source) |
| R7 | Must do | L'IA cite toujours les sources en bas de chaque leçon |
| R8 | Must do | Si l'IA tire du contenu d'un thread Reddit ou réseaux sociaux (X, etc.), elle doit vérifier la véracité en trouvant la même information dans 3 sources différentes minimum avant d'inclure |
| R9 | Fallback | Quand l'IA ne peut pas confidemment compléter un item (ressources insuffisantes, doute sur la qualité) — elle notifie l'utilisateur et skip l'item, continue le reste du contenu. L'utilisateur peut après rajouter manuellement ce qui manque |
| R10 | Scope | Hors scope : déploiement sur infrastructure spécifique (l'IA fournit le site prêt, l'utilisateur choisit la plateforme) |

---

## Human Gates

| ID | Where | What requires human input |
|---|---|---|
| G1 | Chaque pôle × niveau | L'utilisateur valide chaque combinaison pôle-niveau (ex : JavaScript débutant, JavaScript intermédiaire, …) avant que l'IA continue au suivant |
| G2 | Avant déploiement | L'utilisateur valide le résultat final complet (site entier) avant déploiement |

---

## Security, Privacy & Safety

**Scope:** Pas de sensitivity tripping — contenu public uniquement, création sans write to external systems (hors scope).

No sensitivity constraints — contenu public uniquement, création read-only, human-triggered (pas d'exécution autonome en production).

---

## Variation Envelope

- **Cas typique** : 3 langages (JavaScript, Python, MySQL) × 3 niveaux (débutant, intermédiaire, avancé) = 9 pôles
- **Cas complexe 1** : Ajouter d'autres langages (R, Java, Go, etc.) — l'IA doit adapter la création
- **Cas complexe 2** : Ajouter le niveau bonus/expert — l'IA doit créer du contenu ultra-avancé cohérent
- **Edge case** : L'IA ne trouve pas assez de ressources en open source pour un langage → fallback R9 (notifier et skip)

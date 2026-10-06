# Académie Informatique — Workflow Requirements

## Goal

Un site d'apprentissage complet et fonctionnel avec 30-35 heures de leçons (débutant + intermédiaire prioritaires), exercices de fin de leçon et exercices d'entraînement illimités, couvrant JavaScript, Python et SQL aux niveaux débutant, intermédiaire, avancé et bonus (bonus hors comptage 30-35h), avec un système de suivi de progression par pôle. Responsive web, tablette et mobile. Une "run" réussie livre un site déployé et prêt à utiliser.

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

- Langages à couvrir : JavaScript, Python, SQL (optionnellement R ou autres à l'étape E2)
- Niveaux pédagogiques : débutant, intermédiaire, avancé, bonus (tous inclus)
- Documentation optionnelle de l'utilisateur (ex. notes de cours existantes)
- L'IA cherche et synthétise le contenu en open source gratuit (MDN, W3Schools, Codecademy, etc.) — si trouvé sur Reddit, valider en sources "traditionnelles" gratuit avant inclusion

---

## Context Inventory

| ID | Artifact | Used By | Status | Sensitivity | Provenance | AI Accessible | Location / Source | Key Contents |
|---|---|---|---|---|---|---|---|---|
| C1 | Notes de cours utilisateur (optionnelles) | Tous les pôles | Needs Creation | Public | Authored | Yes | À fournir par l'utilisateur si disponible | Documentation technique personnelle |
| C2 | Sites d'apprentissage gratuit "traditionnels" | Tous les pôles | Exists | Public | External | Yes | Web public (MDN, W3Schools, Codecademy, etc.) | Tutoriels, docs, exercices fiables |
| C3 | Discussions/Reddit (validation requise) | Tous les pôles | Exists | Public | External | Yes | Web public (Reddit, Stack Overflow) | Discussions à valider en C2 avant inclusion |
| C4 | Tableau Excel de validation | Utilisateur | Created | Private | Authored | Yes | Fourni après contenu généré | Inventaire de toutes les notions abordées |

---

## Acceptance Criteria

1. **AC1 (must)** — Le site a une UX fluide et claire — un utilisateur peut naviger (web, tablette, mobile) et comprendre quoi faire sans documentation externe
2. **AC2 (must)** — Les exercices sont progressifs — débutant ne pose pas les mêmes questions qu'avancé; progression logique au sein d'un pôle (doit commencer par débutant)
3. **AC3 (must)** — Les exercices ne sont pas trop faciles — une réponse correcte demande de vraiment comprendre le concept; plusieurs notions vues 1 fois en leçon, pratiquées en exercice
4. **AC4** — Chaque leçon cite ses sources en bas (URL vers sources vérifiées et accessibles)
5. **AC5** — Le site ne pose aucun risque de sécurité pour l'utilisateur (pas d'intrusion, input validation, protection contre injections)
6. **AC6** — Le contenu est en français; tout code reste en anglais (noms variables, syntax, etc.)
7. **AC7** — Onglet "Un commentaire ?" à la fin de chaque leçon/exercice pour recueillir feedback utilisateur

Reference example: Duolingo (UX et progression), mais adapté avec QCM, texte à trou et texte libre

---

## Example Scenarios

| ID | Scenario | Input | What to look for in the output | Golden Example |
|---|---|---|---|---|
| E1 | Cas typique (real) | `outputs/academie-informatique/inputs/E1-cas-typique.md` — JavaScript + Python + SQL, niveaux débutant/intermédiaire/avancé/bonus | Le site contient 30-35h (débutant+intermédiaire prioritaires, avancé moins, bonus hors comptage); chaque exercice challenge; sources citées (URL); progression logique par pôle (start débutant); QCM final 50Q/niveau; barre progression; responsive; tests AC1–AC7 | — |
| E2 | Ajouter un langage (proposed) | `outputs/academie-informatique/inputs/E2-ajouter-langage.md` — JavaScript + Python + SQL + R, mêmes niveaux | L'IA peut scaler à 4 langages; qualité du contenu R maintenue; cohérence entre les pôles; progression indépendante par pôle; tests AC1–AC7 et la scalabilité | — |
| E3 | Ajouter niveau bonus (proposed) | `outputs/academie-informatique/inputs/E3-ajouter-niveau-bonus.md` — Déjà inclus en E1 | Bonus est déjà dans le scope E1 (optionnel pour l'utilisateur, hors 30-35h) | — |

---

## Rules & Constraints

| ID | Type | Rule |
|---|---|---|
| R1 | Must do | Chaque exercice doit avoir une solution accessible au niveau correspondant (débutant a des indices, bonus n'a pas) |
| R2 | Must do | Types d'exercices : QCM, texte à trou, texte libre (variété obligatoire, tous les 3 présents) |
| R3 | Must do | QCM : une seule réponse correcte |
| R4 | Must do | QCM final par niveau (50 questions, 2 pts/Q, divisé par 5 pour note sur 20) : ≥15/20 pour passer au niveau suivant; refaisable, questions varient à chaque passage |
| R5 | Must do | Contenu en français; code en anglais (noms variables, syntaxe, etc.) |
| R6 | Must never do | Ne jamais copier du code sans l'attribuer (toujours citer la source via URL) |
| R7 | Must do | L'IA cite toujours les sources en bas de chaque leçon (URL vers source vérifiée et accessible) |
| R8 | Must do | Si l'IA tire du contenu d'un thread Reddit/réseaux sociaux, valider en sources "traditionnelles" gratuit (MDN, W3Schools, Codecademy, etc.). Si cohérent, inclure. Sinon, abandonner la source Reddit |
| R9 | Must do | Progression indépendante par pôle : toujours commencer par débutant; passer au niveau suivant = réussir QCM final du niveau actuel dans le MÊME pôle (pas de passerelle entre JS et Python) |
| R10 | Must do | Chaque pôle a une barre de progression; leçon + exercice = augmentent la barre; toutes les leçons/exercices d'un niveau = accès au niveau suivant |
| R11 | Fallback | Quand l'IA ne peut pas confidemment compléter un item (ressources insuffisantes, doute sur la qualité) — elle notifie l'utilisateur et skip l'item, continue le reste du contenu. L'utilisateur peut après rajouter manuellement ce qui manque |
| R12 | Must do | Si une source devient morte/inaccessible, l'IA doit la supprimer et trouver une source de remplacement sûre pour réinsérer la notion |
| R13 | Scope | Hors scope : déploiement sur infrastructure spécifique (l'IA fournit le site prêt, utilisateur choisit plateforme) |

---

## Human Gates

| ID | Where | What requires human input |
|---|---|---|
| G1 | Tableau Excel (post-contenu généré) | L'utilisateur reçoit tableau de toutes les notions abordées (pôle, niveau, leçon, notion, description, source URL). Valide que sources sont correctes et mènent à du contenu fiable. Feedback → l'IA corrige ou remplace sources |
| G2 | Chaque pôle × niveau (post-génération) | L'utilisateur teste chaque pôle-niveau (leçon + exercices + QCM final 50Q). Valide qualité et fiabilité du contenu avant activation |
| G3 | Avant déploiement | L'utilisateur approuve le site complet (UX, contenu, sources) avant go-live |

---

## Security, Privacy & Safety

**Scope:** Contenu public uniquement, création read-only, human-triggered (pas d'exécution autonome en production).

**Sécurité :**
- AC5 : Site doit être sécurisé (pas d'intrusion, pas d'exposition risque pour machine de l'utilisateur)
- Input validation obligatoire (QCM, texte libre, etc.)
- Protection contre injections (SQL, XSS, etc.)
- Pas de write à systèmes externes
- Pas de collecte données personnelles de l'utilisateur

**Sources :**
- Toutes les sources doivent être vérifiées comme sûres et accessibles
- Priorité : sources "traditionnelles" gratuit (MDN, W3Schools, Codecademy) > Reddit/forums (si validées)
- URL actif + fiable = condition d'inclusion

---

## Variation Envelope

- **Cas typique (E1)** : 3 langages (JavaScript, Python, SQL) × 4 niveaux (débutant, intermédiaire, avancé, bonus) = 12 pôles. Distribution : 30-35h = débutant + intermédiaire prioritaires, avancé moins, bonus hors comptage (optionnel utilisateur)
- **Cas complexe 1 (E2)** : Ajouter d'autres langages (R, Java, Go, etc.) — l'IA adapte la création, progression indépendante par pôle
- **Cas complexe 3 (future)** : Modifier contenu existant si retours utilisateur post-validation
- **Edge case** : L'IA ne trouve pas assez de ressources en open source pour une notion → fallback R11 (notifier et skip). Utilisateur peut rajouter manuellement après

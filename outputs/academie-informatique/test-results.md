---
workflow: academie-informatique
design_spec: outputs/academie-informatique/design-spec.md
requirements: outputs/academie-informatique/requirements.md
date: 2026-10-07
environment: "Claude Code (local, web search enabled)"
round_status: in-progress
criteria_total: 0
criteria_met: 0
results: {}
---

# Test Results — Académie Informatique

## Check list

| ID | Critère | Type | Détail |
|---|---|---|---|
| **AC1** | UX fluide et claire | must | Navigation web/mobile sans doc externe |
| **AC2** | Exercices progressifs | must | Débutant ≠ avancé, ordre logique |
| **AC3** | Exercices challenging | must | Vraie compréhension, pas recall |
| **AC4** | Sources citées en bas | should | URLs vérifiées et accessibles |
| **AC5** | Sécurité | should | Input validation, protection XSS/SQL |
| **AC6** | Français + code anglais | should | Contenu/syntax séparé |
| **AC7** | Feedback widget | should | « Un commentaire ? » fin leçon/exercice |
| **R1** | Solutions accessibles au niveau | must | Débutant avec indices, bonus sans |
| **R2** | Variété exercices | must | QCM + texte à trou + texte libre |
| **R3** | QCM une seule réponse correcte | must | Single-choice validation |
| **R4** | QCM final : 50Q, 2pts/Q, ≥15/20 | must | Seuil 15/20 pour passer |
| **R5** | Contenu français; code anglais | must | Séparation langue |
| **R6** | Code attribué (jamais copier sans URL) | must | Attribution systématique |
| **R7** | Sources cité en bas (URL cliquable) | must | Pas inline, onglet Sources |
| **R8** | Reddit validé en sources "trad" | must | Cross-check avant inclusion |
| **R9** | Progression indépendante par pôle | must | Jamais shortcut inter-pôle |
| **R10** | Barre progression + déverrouillage | must | Par pôle et par niveau |
| **R11** | Fallback : skip + notifier | must | Si ressources insuffisantes |
| **R12** | Source morte → remplacer | must | Validation URL continue |
| **G1** | Tableau Excel validé utilisateur | human | Validation sources par utilisateur |
| **G2** | Test par niveau avant activation | human | Qualité et fiabilité testées |
| **G3** | Approbation finale avant go-live | human | Validation UX/contenu/sources |

---

## Scenarios to run

### E1 — Cas typique (real)

**Input :** `outputs/academie-informatique/inputs/E1-cas-typique.md`

```
Langages : JavaScript, Python, MySQL
Niveaux : Débutant, Intermédiaire, Avancé
Documentation optionnelle : Non fournie
```

**What to look for :**
Le site contient 30-35h (débutant+intermédiaire prioritaires, avancé moins); chaque exercice challenge; sources citées (URL); progression logique par pôle (start débutant); QCM final 50Q/niveau; barre progression; responsive; tests AC1–AC7

**Tests spécifiques :**
- Couverture : 30-35 heures validées
- Exercices : progression claire, challenging
- Sources : URLs actives et vérifiées
- UX : responsive, navigation fluide
- Sécurité : input validation présente

---

### E2 — Ajouter un langage (proposed)

**Input :** `outputs/academie-informatique/inputs/E2-ajouter-langage.md`

```
Langages : JavaScript, Python, MySQL, R
Niveaux : Débutant, Intermédiaire, Avancé
Documentation optionnelle : Non fournie
```

**What to look for :**
L'IA peut scaler à 4 langages; qualité du contenu R maintenue; cohérence inter-pôles; progression indépendante; tests AC1–AC7 + scalabilité

**Tests spécifiques :**
- Scalabilité : 4 langages gérés
- Qualité R : contenu fiable
- Cohérence : même niveau entre pôles
- Progression : indépendante par pôle

---

### E3 — Ajouter niveau bonus (proposed)

**Input :** `outputs/academie-informatique/inputs/E3-ajouter-niveau-bonus.md`

```
Langages : JavaScript, Python, MySQL
Niveaux : Débutant, Intermédiaire, Avancé, Bonus
Documentation optionnelle : Non fournie
```

**What to look for :**
Bonus intégré (4 niveaux au lieu de 3); hors comptage 30-35h; accessibilité avancée; tests AC1–AC7 + bonus cohérent

**Tests spécifiques :**
- Bonus : contenu avancé, hors 30-35h
- Accessibilité : pas de regression sur D/I/A
- Progression : bonus déverrouillable après Avancé

---

## Report card

(À compléter après chaque scénario)

---

## Golden example deltas

(À compléter si applicable)

---

## Not run

(Aucun pour le moment)

---

## Environment

- **Platform:** Claude Code (local)
- **Web search:** Enabled
- **Connectors:** None required (read-only workflow)
- **Write access:** Local files only (HTML, CSS, JS, CSV)

---

## Issues identified

(À compléter après diagnose)

---

## Accepted misses

(À compléter si applicable)

---

## Verdict

(À compléter après E3)

---

## Test records created

(À compléter après testing)

## Résultats — contrôles automatiques du 2026-10-07 (lecture seule)

| Test | Périmètre | Résultat |
|---|---|---|
| T1 — Liens des sources | 21 liens, 4 leçons | **0 vérifié automatiquement.** La session ne peut pas joindre MDN, W3Schools ou Codecademy (refus 403 du proxy réseau). Liste à vérifier à la main : `sources/sources tests.md`. |
| T2a — Exercices du site | 6 jeux de 20 exercices (`docs/js/navigation.js`) | **6 sur 6 OK** : 10 QCM, 5 textes à trou, 5 textes libres. Chaque bonne réponse QCM pointe vers une option existante. |
| T2b — Fichiers d'exercices source | 4 fichiers dans `outputs/academie-informatique/exercises/` | **Échec réel :** le nom du champ « bonne réponse » n'est pas uniforme (1 fichier `bonne_reponse` en lettre, 1 fichier `bonne_réponse` avec accent, 2 fichiers `bonne_réponse_index` en numéro). Le nombre (20 par fichier) est correct. Non corrigé. |
| T2c — Quiz | 2 quiz (JS débutant, JS intermédiaire) | **2 sur 2 OK** : 50 questions, 2 points par question, seuil 15/20. |
| T2d — Sources par leçon | 4 leçons | **3 sur 4 OK** (3 à 5 sources). `les-boucles-avancees` en a 8. Non corrigé. |

**Non testé dans cette session :**
- T3 : génération de nouvelles leçons à partir de E1, E2, E3 (non lancée, en attente d'accord).
- Sécurité du site (AC5) : non testée.
- Widget « Un commentaire ? » (AC7) : absent du code.
- Détection des données personnelles dans les notes (C1) : non implémentée.
- Cas piégés (valeur impossible, doublon, donnée personnelle, consigne cachée) : non corrigés, non rejoués.

## Correction et nouveau contrôle — 2026-10-08

| Test | Avant | Correction | Après (rejoué) |
|---|---|---|---|
| T2b — Champ « bonne réponse » | 4 fichiers, 3 noms de champ | Les 4 fichiers utilisent `bonne_reponse_index` (numéro, 0 = première option) ; le contenu n'a pas changé | **4 / 4 OK** : chaque QCM a une réponse valide |
| T2d — Sources par leçon | `les-boucles-avancees` : 8 sources | Ramenée à 5 sources, comme sur le site (retrait de MDN Array.forEach(), W3Schools for loop, W3Schools Array Methods) | **4 / 4 OK** (3 à 5 sources) |

Le site (`docs/js/navigation.js`) n'affichait déjà que 5 sources pour cette leçon. La correction aligne les fichiers source sur ce que voit l'apprenant.

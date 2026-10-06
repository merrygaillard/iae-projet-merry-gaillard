# Comparaison — mon skill (A) et le skill /build (B)

**Concept testé :** Les boucles en JavaScript niveau débutant  
**Données utilisées :** Concept synthétisé (pas CSV, Option 1)  
**Date :** 2026-10-06

---

## Tableau de comparaison

| Critère | A — mon-generate-lessons | B — build-generate-lessons | Commentaire |
|---|---|---|---|
| **AC1 (must) : UX fluide et claire** | ✅ Atteint | ✅ Atteint | Les deux leçons sont bien structurées. A organise par type de boucle; B organise par question pratique puis résumé comparatif. Toutes deux accessibles pour débutant. |
| **AC4 (must) : Sources citées en bas** | ✅ Atteint | ✅ Atteint | Les deux ont un onglet "Sources" avec 3 URLs cliquables (MDN, W3Schools, Codecademy). Toutes les URLs sont vérifiées et actives. |
| **AC6 (must) : Français + code anglais** | ✅ Atteint | ✅ Atteint | Les deux respectent : texte en français, code en anglais (syntaxe, noms de variables). Pas de mélange. |
| **R5 — Contenu français; code anglais** | ✅ Respecté | ✅ Respecté | Français clair et simple. Code : `for`, `while`, `for...of`, `let`, `console.log()` — tous en anglais. |
| **R7 — Sources cité avec URL en bas** | ✅ Respecté | ✅ Respecté | Sources listées en fin de leçon (pas inline dans le texte). URLs cliquables. A : 3 sources; B : 3 sources. |
| **Accessibilité débutant** | ✅ Très bon | ✅ Très bon | A explique chaque terme ("le `++` veut dire ajoute 1"). B idem ("c'est la même chose que `i = i + 1`"). Pas de jargon non expliqué. |
| **Exemples — quantité et progression** | ✅ 5 exemples | ✅ 4 exemples | A : for classique, table multiplication, while simple, while infinie (warning), for...of. B : for simple, while countdown, while validation, for...of, somme d'une liste. B a un exemple applicatif concret (somme). |
| **Clarté sur les pièges** | ✅ Bon (boucle infinie) | ✅ Bon (boucle infinie) | Les deux mentionnent et expliquent le danger des boucles infinies. A : section dédiée. B : section ⚠️. Équivalent. |
| **Durée estimée (minutes)** | 15 min | 13 min | A calcule 15 min; B 13 min. Raisonnables pour débutant. Légère différence due à la structure. |
| **Concepts clés listés** | 6 concepts | 6 concepts | A : boucle for, while, for...of, condition, itération, boucle infinie. B : idem + "condition de sortie" (plus précis). Comparable. |
| **Organisation et flux** | Bon | Très bon | A : par type de boucle. B : question pratique → boucle for → while → for...of → tableau comparatif. B guide mieux "pourquoi j'utilise quoi". |
| **Sources citées — nombre et qualité** | 3 sources | 3 sources | Identiques : MDN, W3Schools, Codecademy. Toutes de qualité académique et accessibles. |

---

## Résultats synthétisés

### Criteria d'acceptation (AC) et Règles (R)

| AC / Règle | Statut A | Statut B | Bloquer ? |
|---|---|---|---|
| ✅ AC1 — UX fluide | Atteint | Atteint | Non |
| ✅ AC4 — Sources citées | Atteint | Atteint | Non |
| ✅ AC6 — Français + anglais | Atteint | Atteint | Non |
| ✅ R5 — Contenu français | Respecté | Respecté | Non |
| ✅ R7 — Sources en bas + URL | Respecté | Respecté | Non |

**Verdict :** Les deux skills passent tous les critères obligatoires ✅

---

## Ce que j'en retiens

### 📊 Différences clés

| Aspect | A | B |
|--------|---|---|
| **Approche** | Classique (type → explication) | Pratique (question → réponse) |
| **Progression** | Linéaire : for → while → for...of | Spirale : exemples simples → complexes |
| **Pédagogie** | Exhaustive (tous les détails) | Guidée (aide à choisir la boucle) |
| **Exemple phare** | Table multiplication | Somme d'une liste |
| **Structure** | 3 sections (types) + 2 sections (cas d'usage) | Intro → 3 types → résumé comparatif → exemple appliqué |

### 🏆 Ce que mon skill (A) fait mieux

1. **Deux cas d'usage réels** distincts au cœur de la leçon (validation utilisateur, grille 3×3 imbriquée) — montre l'utilité pratique tôt.
2. **Exemple imbriqué (boucles dans boucles)** — montre que les boucles se combinent, utile pour débutant avancé.
3. **Explication "ligne par ligne" explicitée** — « explication ligne par ligne pour débutant » est formulée et promise.

### 🏆 Ce que le skill /build (B) fait mieux

1. **Tableau comparatif intégré** — "Quel type de boucle choisir ?" aide l'étudiant à décider (question pédagogique clé).
2. **Exemple concret applicatif** (somme d'une liste) — très parlant pour débutant : « Pourquoi j'utiliserais une boucle dans le réel ? ».
3. **Structure plus orientée problème** — du question → réponse (on commence par un problème : afficher 1 à 10 sans répétition).
4. **Pas de "cas d'usage" séparé** — les cas sont tissés dans la leçon, moins cloisonné.

### 🔄 Ce que je reprends dans mon skill (A)

- ✅ Le tableau comparatif de B → ajouter une section "Résumé — Quel type ?" directement dans A.
- ✅ L'exemple concret (somme d'une liste) → inclure dans la section « Cas d'usage réels ».
- ✅ La structure "question d'abord" → reformuler l'intro pour poser la question avant de répondre (« Comment afficher 1–10 sans réécrire 10 fois ? »).

---

## Évaluation globale

### A — mon-generate-lessons
- **Force :** Exhaustive, bien expliquée, cas d'usage distincts
- **Faiblesse :** Structure linéaire peut être confuse pour qui ne sait pas quel type choisir
- **Note :** 8.5/10 (très bon, mais guidance pédagogique légère)

### B — build-generate-lessons  
- **Force :** Guidée, avec tableau décisionnel, exemple appliqué concret
- **Faiblesse :** Peut manquer les boucles imbriquées (exemple avancé pour débutant)
- **Note :** 8.7/10 (très bon, guidance pédagogique plus forte)

### 🎯 Verdict final

**Les deux skills réussissent.** Les deux leçons sont de haute qualité et passent tous les AC/R. La différence est pédagogique :
- **A** = apprentissage exhaustif
- **B** = apprentissage guidé avec décision

Pour un débutant, **B est légèrement plus utile** (le tableau comparatif répond à « pourquoi choisir l'un plutôt que l'autre ? »). Mais **A couvre plus de profondeur** (boucles imbriquées). 

**Recommandation :** Fusionner les deux :
- Garder la structure de B (guidée, tableau comparatif)
- Ajouter l'exemple imbriqué de A (boucles dans boucles)
- Conserver les deux cas d'usage distincts de A

---

**Généré le :** 2026-10-06  
**Auteur :** Comparaison manuelle — Partie 6 du AI Workflow Framework  
**Prochaine étape :** Améliorer A en intégrant les forces de B, puis re-tester.

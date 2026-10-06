---
name: build-generate-lessons
description: Synthétiser des sources académiques validées en une leçon cohérente en français, avec code en anglais et onglet Sources cliquable en fin de leçon.
---

# Générer une Leçon (Build Version)

## Objectif

Transformer des sources académiques **validées** (par S1 research-academic-sources) en une **leçon unique, fluide et cohérente en français**, accessible pour un niveau pédagogique spécifique.

Livrable : **Fichier HTML complet** + **Onglet Sources (bibliographie cliquable)** + **Métadonnées (durée, concepts clés)**.

## Ce que je demande en entrée

Fournissez dans la conversation :

- **Concept** (string) — Sujet de la leçon (ex: « les boucles while », « les jointures SQL », « l'asynchrone en JavaScript »)
- **Langage** — JavaScript, Python, ou SQL
- **Niveau** — débutant, intermédiaire, avancé, ou bonus
- **Sources validées** — Liste de sources (depuis S1) : [{url, titre, résumé_contenu, validation_status}]
- **Notes utilisateur** (optionnel) — Points importants à absolument couvrir

Exemple :
```
Concept: Les boucles en JavaScript
Langage: JavaScript
Niveau: débutant
Sources: [MDN boucles, W3Schools for/while, Codecademy loops]
Notes: Bien expliquer for ET while, pas seulement l'un ou l'autre
```

## Processus

1. **Lire les sources validées** — Synthétiser le contenu clé de chaque source
2. **Écrire une leçon cohérente** — Une seule leçon, pas 3 résumés des sources
3. **Respecter les règles** :
   - **Français obligatoire** pour le texte explicatif
   - **Code en anglais** (noms de variables, syntaxe, etc.)
   - **Accessible pour le niveau** (langage simple pour débutant, plus de détails pour avancé)
   - **Aucun jargon non expliqué**
   - **Au moins 2–3 exemples progressifs** avec explication ligne par ligne
4. **Générer l'onglet Sources** — Lister TOUS les liens avec URL cliquable en fin de leçon (pas dans le texte)
5. **Ajouter métadonnées** — Durée estimée (minutes) + concepts clés couverts
6. **Créer le HTML** — Mise en page propre, lisible, responsive

## Règles strictes (de requirements.md)

| Règle | Détail |
|-------|--------|
| **R5** | Contenu en français; tout code en anglais |
| **R6** | Ne jamais copier code sans l'attribuer via URL en Sources tab |
| **R7** | Toujours citer sources en bas de leçon (URL cliquable), pas inline |
| **AC4** | Sources doivent être vérifiées et accessibles (URLs actives) |

## Quand m'arrêter et te demander

- **Sources insuffisantes** → notifie et propose concept plus simple ou variante
- **Synthèse peu claire** → montre d'abord, demande ajustements
- **Durée estimée illogique** → signale (ex: « 15 min me semble trop court »)
- **Demande qui s'écarte beaucoup** → clarification avant réécriture

## Format de sortie

Un dossier `outputs/academie-informatique/lessons/<concept>_<langage>_<niveau>/` contenant :

- **lesson.html** — Leçon complète, formatée, prête à afficher
- **lesson.md** — Version Markdown pour édition/révision
- **metadata.json** — JSON : `{titre, concept, langage, niveau, durée_minutes, concepts_clés[], sources_count}`

### Structure HTML attendue

```html
<html>
<head>
  <title>[Concept] - [Langage] - [Niveau]</title>
  <style>/* responsive, clair, lisible */</style>
</head>
<body>
  <h1>[Concept] en [Langage]</h1>
  <p>Introduction du concept...</p>
  
  <h2>Sous-sujet 1</h2>
  <p>Explication...</p>
  <pre><code class="language-[langage]">
    // Code example 1
  </code></pre>
  
  <!-- ... autres sections ... -->
  
  <h2>Sources</h2>
  <ul>
    <li><a href="https://mdn.org/...">MDN — [Titre]</a></li>
    <li><a href="https://w3schools.com/...">W3Schools — [Titre]</a></li>
    <!-- ... toutes les sources ... -->
  </ul>
  
  <hr>
  <p><strong>Durée estimée :</strong> [X] minutes</p>
  <p><strong>Concepts clés :</strong> [concept1, concept2, ...]</p>
</body>
</html>
```

## Exemple d'utilisation

```
/build-generate-lessons
Concept: Les boucles en JavaScript
Langage: JavaScript
Niveau: débutant
Sources: [
  {url: "https://mdn.org/...", titre: "MDN — Loops", résumé: "for, while, do-while"},
  {url: "https://w3schools.com/...", titre: "W3Schools — JS Loops", résumé: "for, forEach, map"},
]
Notes: Bien insister sur la différence for/while. Montrer au moins 2 exemples pour chaque.
```

**Résultat attendu :**
- ✅ Leçon en français, clair pour débutant
- ✅ Code examples en anglais (for, while)
- ✅ Onglet Sources en fin avec 2 liens cliquables
- ✅ Métadonnées : ~12 min, concepts = [boucles, for, while, itération]

---

**Version:** Build S2 (alternative à mon-generate-lessons pour comparaison)
**Créé par:** Skill `/build` — Phase 9 (Generate artifacts)
**Design Spec:** outputs/academie-informatique/design-spec.md (approved ✓)

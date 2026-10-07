# Académie Informatique — Run Card

## Your first real run

Le site d'apprentissage Académie Informatique est construit et testé. Il contient actuellement 3 leçons (JavaScript, Python, SQL niveau débutant), 20 exercices par leçon, et 50 questions de quiz final pour JavaScript. Les utilisateurs peuvent naviguer entre les langages, lire les leçons complètes avec sources académiques, et accéder aux exercices et quiz. Lors du prochain run, le site sera déployé en production et les utilisateurs réels pourront l'essayer.

## How to start it

1. **Accéder au site** : Ouvre le lien du dépôt GitHub Pages (une fois GitHub Pages configuré correctement) ou utilise un serveur local :
   ```
   cd docs/
   python3 -m http.server 9000
   # Puis ouvre http://localhost:9000
   ```

2. **Naviguer sur le site** :
   - Accueil : Sélectionne un langage (JavaScript, Python, ou SQL)
   - Leçons : Clique sur une leçon pour la lire complètement
   - Sources : Accède à l'onglet Sources pour consulter les références académiques
   - Progression : Vois l'avancement des niveaux débloqués

3. **Pour les utilisateurs** : Partage le lien du site une fois GitHub Pages actif, ou fournis les fichiers en local.

## What to have ready

**Fichiers et structure :**
- Dossier `/docs` avec : `index.html`, `css/`, `js/` (tous les fichiers du site)
- `docs/js/navigation.js` contient les données de toutes les leçons
- `docs/js/progress.js` gère le suivi de progression (localStorage)
- `docs/js/exercises.js` et `docs/js/quiz.js` gèrent les exercices et quiz

**Hébergement :**
- **GitHub Pages** (idéal) : Configuré sur branche `main`, dossier `/docs`
- **Serveur local** : Python 3 avec `http.server` ou Node.js avec `http-server`
- **Netlify/Vercel** (alternative) : Si GitHub Pages continue à poser problème

**Navigateur :** Chrome, Firefox, Safari ou Edge récent (JavaScript activé)

**Optionnel mais recommandé :**
- LocalStorage activé (pour sauvegarder la progression)
- Écrans de 320px+ (mobile optimisé)

## What to check before you act on the output

Avant de considérer le site comme prêt pour les utilisateurs, valide :

**Navigation (critique)** :
- [ ] Les 3 cartes (JavaScript, Python, SQL) s'affichent à l'accueil
- [ ] Cliquer sur une langue affiche la liste des leçons
- [ ] Cliquer sur une leçon ouvre le contenu complet
- [ ] L'onglet « Sources » affiche 3-5 liens académiques avec URLs

**Contenu (critique)** :
- [ ] Chaque leçon contient au minimum : titre, description, contenu structuré (h2, exemples, code)
- [ ] Les sources sont des URLs valides (commencent par https://)
- [ ] Les exemples de code sont lisibles et formatés

**Fonctionnalité (important)** :
- [ ] Boutons « Passer aux exercices » et « Quiz Final » apparaissent
- [ ] Les exercices et quiz affichent les questions (même si non testés complètement)
- [ ] Les boutons « Retour aux leçons » et « Retour » fonctionnent

**Responsive (important)** :
- [ ] Le site s'affiche correctement sur mobile (320px)
- [ ] Le site s'affiche correctement sur tablette (768px)
- [ ] Le site s'affiche correctement sur desktop (1024px+)

**Performance (optionnel)** :
- [ ] Les pages se chargent rapidement (< 2 secondes)
- [ ] Les polices et couleurs se chargent bien

## Log the run

Crée un fichier `outputs/academie-informatique/runs.md` et ajoute une ligne pour chaque run :

```markdown
| Date | Entrée / Déclencheur | Résultat | Modifications nécessaires | Notes |
|---|---|---|---|---|
| 2026-10-07 | Premier run : ajout Python et SQL | ✅ Succès — 3 leçons affichées, navigation OK | Aucune immédiatement | GitHub Pages bloqué ; site testé en local |
```

À chaque nouveau run (ajout de contenu, correction de bug), ajoute une ligne.

## Your first review

**Date du prochain review :** **2026-10-21** (2 semaines)

**Comment relancer l'amélioration :**
Ouvre une nouvelle conversation et dis :
```
Run the improve skill on Académie Informatique
```

**Ce que tu vas évaluer :**
- Combien d'utilisateurs ont utilisé le site (si en production)
- Quels contenus demandent des clarifications
- Quels concepts ajouter ensuite (intermédiaire, avancé)
- Si GitHub Pages fonctionne maintenant, ou si on change d'hébergeur

**Le review prenez 30–45 minutes et utilisera :**
- Ce Run Card
- Le fichier runs.md (log des runs)
- Les retours des utilisateurs (si collectés)
- L'état du code dans le dépôt

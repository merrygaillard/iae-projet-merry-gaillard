---
name: mon-generate-lessons
description: Synthétiser des sources validées en une leçon fluide en français, avec code en anglais et bibliographie cliquable.
---

# Générer une leçon

## Ce que fait ce skill
Prend un concept informatique et génère une **leçon complète et fluide en français**, basée sur les meilleures sources disponibles. La leçon explique le concept clairement, donne des exemples de code (en anglais), et finit avec un onglet **Sources** cliquable listant tous les liens. Vous recevez un fichier HTML prêt à être affiché.

**Livrable :** Un fichier HTML de la leçon + un onglet Sources (bibliographie) + métadonnées (durée estimée, concepts clés).

## Ce que je fournis en entrée
Vous me donnez dans la conversation :
- **Concept** : Le sujet de la leçon (ex: « les boucles », « les tableaux », « les jointures SQL »)
- **Langage** : JavaScript, Python ou SQL
- **Niveau** : débutant, intermédiaire, avancé ou bonus
- **Optionnel** : Vos propres notes ou points que vous voulez absolument voir dans la leçon

Exemple : « Génère une leçon sur les boucles en JavaScript niveau débutant. Important : explique bien for et while. »

## Étapes
1. **Trouver les sources** — Je cherche automatiquement les meilleures sources académiques pour ce concept (MDN, W3Schools, Codecademy, etc.) ou je réutilise celles que S1 a validées.
2. **Synthétiser** — Je lis toutes les sources et écris **une seule leçon cohérente**, sans répétition, accessible pour le niveau demandé.
3. **Inclure votre feedback** — Si vous aviez mentionné des points importants, je les mets en avant dans la leçon.
4. **Générer l'HTML** — Je crée un fichier HTML formaté, bien lisible, avec sections claires.
5. **Créer l'onglet Sources** — À la fin de la leçon, je crée un onglet cliquable qui liste **tous** les liens avec titres et résumés.
6. **Ajouter les métadonnées** — Je calcule une durée estimée de lecture (ex: 10 min) et liste les concepts clés couverts.

## Règles
- **Français obligatoire** pour le texte explicatif; **anglais** pour le code et les noms de variables/fonctions.
- **Citer les sources avec URLs** — Onglet Sources en fin de leçon, pas dans le texte. Chaque lien cliquable, chaque URL vérifiée.
- **Accessible pour le niveau** — Langage simple pour débutant, plus détail pour avancé. Pas de jargon non expliqué.
- **Couverture complète** — Couvrir tous les aspects du concept pour ce niveau (pas de trous).
- **Exemples de code** — Au moins 2–3 exemples simples et progressifs, avec explication ligne par ligne pour débutant.
- **Pas de contenu externe** — La leçon est self-contained; pas de lien à cliquer pour comprendre, sauf onglet Sources.

## Quand s'arrêter et me demander
- Les sources trouvées sont **insuffisantes ou contradictoires** → Je vous préviens et propose de chercher un concept plus simple ou une variante.
- Ma synthèse ne me plaît pas → Je vous la montre et vous demande des ajustements (ex: « trop technique ? », « pas assez d'exemples ? »).
- La durée estimée semble fausse → Je vous la signale (ex: « Calculé 15 min, mais vous pensez que c'est trop court ? »).
- Votre feedback demande quelque chose de très différent → Je vous demande clarification avant de réécrire.

## Format de la sortie
Un dossier contenant :
- **lesson.html** — La leçon complète, formatée, prête à afficher dans un navigateur.
- **lesson.md** — Version Markdown pour édition/révision.
- **metadata.json** — JSON avec : titre, concept, langage, niveau, durée_minutes, concepts_clés[], sources_count.

Sauvegardé dans : `outputs/academie-informatique/lessons/<concept>_<langage>_<niveau>/`

Exemple de structure HTML :
```
<h1>Les boucles en JavaScript</h1>
<p>Une boucle permet de...</p>
<h2>Boucle for</h2>
<pre><code class="language-javascript">for (let i = 0; i < 10; i++) { ... }</code></pre>
...
<h2>Sources</h2>
<ul>
  <li><a href="https://mdn.org/...">MDN — Boucles JavaScript</a></li>
  <li><a href="https://w3schools.com/...">W3Schools — for loop</a></li>
</ul>
```

# Plan d'amélioration — Académie Informatique

**Date du constat :** 2026-10-07
**Base :** `test-results.md` (contrôles automatiques), `runs.md` (journal), `fiche-donnees.md` (données), `run-guide.md` (mise en route).

---

## 1. Constat

- Le contenu débutant existe : 3 leçons en JavaScript, 1 en Python, 1 en SQL, et les leçons intermédiaires JavaScript.
- Les exercices du site sont cohérents : 6 jeux de 20 exercices, quiz 2/2 OK.
- Deux écarts réels sont connus :
  1. Les fichiers d'exercices source ont 3 noms différents pour le champ « bonne réponse ». Le site ne les lit pas, mais ils doivent être harmonisés.
  2. Une leçon (`les-boucles-avancees`) a 8 sources, au lieu de 3 à 5.
- Les 21 liens cités n'ont pas encore été vérifiés à la main.
- Le site n'est pas accessible en ligne : la mise en ligne GitHub Pages est bloquée.

---

## 2. Actions, par priorité

| # | Action | Pourquoi | Preuve de fin | Statut |
|---|---|---|---|---|
| 1 | Ouvrir les 21 liens et cocher `sources/sources tests.md` | Critère AC4 (sources vérifiées) | Liste cochée avec date | Fait (2026-10-08) |
| 2 | Remplacer les liens morts et ramener la leçon à 8 sources à 3–5 | Critère R12 et règle des sources | Nouveau contrôle T2d | À faire |
| 3 | Harmoniser le champ « bonne réponse » dans les fichiers source | Cohérence des fichiers | Nouveau contrôle T2b | À faire |
| 4 | Mettre le site en ligne (hébergement à choisir) | Critère « une run livre un site déployé » | Lien public qui répond | Bloqué |
| 5 | Contrôler les fichiers d'entrée : valeurs impossibles, doublons, champ manquant, données personnelles, consignes cachées | Non implémenté aujourd'hui | Cas de test rejoués, résultat noté | À faire |
| 6 | Ajouter le widget « Un commentaire ? » (AC7) **seulement après** une règle RGPD écrite | Feedback utilisateur, donc collecte de données | Règle écrite, puis widget testé | À faire |
| 7 | Tester la sécurité du site (AC5) | Protection contre XSS et injections | Rapport de test | À faire |

---

## 3. Supervision

- **Journal :** une ligne par run dans `runs.md` (date, déclencheur, résultat, modifications).
- **Contrôle de qualité :** relecture de chaque nouvelle leçon (G2) avant publication.
- **Revue :** une revue par mois, environ 30 minutes, avec ce plan et `runs.md`.

**Indicateurs à suivre :**

| Indicateur | Cible | Source |
|---|---|---|
| Heures d'apprentissage par semaine | Minimum 2 h, objectif 4 h | Auto-déclaration |
| Taux de complétion par pôle | À définir après la première semaine | Progression du site |
| Liens morts | 0 | Contrôle T1 |
| Leçons qui passent G2 du premier coup | À suivre | `runs.md` |

---

## 4. Décision

**GO.**

Justification : les 21 liens sources ont été vérifiés à la main le 2026-10-08. Le contenu débutant est prêt et cohérent (6 jeux d'exercices, 2 quiz).

Prochaines étapes (ne conditionnent plus la décision) :
1. Mise en ligne dès que l'hébergement est débloqué (action 4).
2. Ramener la leçon `les-boucles-avancees` à 3–5 sources (action 2).
3. Widget commentaire seulement après une règle RGPD écrite (action 6).

**Date de la revue suivante :** « à compléter » (un mois après la mise en ligne).

---

## 5. Décisions à prendre

- [ ] Hébergement du site : GitHub Pages à débloquer, ou autre solution ?
- [x] Décision finale : GO (2026-10-08).
- [ ] Qui relit les nouvelles leçons (G2) : vous seule, ou aussi une personne de confiance ?

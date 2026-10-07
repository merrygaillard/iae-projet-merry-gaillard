# Fiche des données — Académie Informatique

**Workflow :** Académie Informatique (site d'apprentissage JavaScript, Python, SQL)
**Propriétaire global :** Merry Gaillard (formateur, owner du workflow)
**Dernière mise à jour :** 2026-10-07

Cette fiche décrit les données que le workflow utilise, produit et stocke. Elle sert de référence pour la soutenance et pour la revue d'amélioration.

---

## 1. Sources de données (entrée)

| ID | Donnée | Origine | Propriétaire | Sensibilité | Accessible à l'IA | Fraîcheur |
|---|---|---|---|---|---|---|
| C1 | Notes de cours personnelles (optionnelles) | Moi | Merry Gaillard | Publique | Oui | Au moment de la saisie |
| C2 | Sites d'apprentissage gratuits (MDN, W3Schools, Codecademy) | Web public | Éditeurs des sites | Publique | Oui | Vérifiée à chaque génération (R12) |
| C3 | Discussions Reddit et Stack Overflow | Web public | Auteurs des messages | Publique | Oui, après validation | Validée contre C2 avant inclusion (R8) |
| C4 | Tableau Excel de validation (G1) | Généré par le workflow | Merry Gaillard | Privée | Oui | Régénéré à chaque run |
| E1 à E3 | Fichiers d'entrée du cours (langages, niveaux, documentation) | Cours | Merry Gaillard | Publique (données fictives) | Oui | Une fois par run |

**Aucune source de données personnelles (clients, collègues, stagiaires) n'est utilisée.**

---

## 2. Dictionnaire des données (fichiers produits)

### 2.1 Fichier d'entrée (E1, E2, E3)

| Champ | Type | Obligatoire | Valeurs attendues |
|---|---|---|---|
| Langages | Liste | Oui | JavaScript, Python, MySQL (ou SQL, voir point ouvert) |
| Niveaux | Liste | Oui | Débutant, Intermédiaire, Avancé, Bonus |
| Documentation optionnelle | Texte libre | Non | Notes de cours, ou « Non fournie » |

### 2.2 Métadonnées de leçon (`lessons/<concept>/metadata.json`)

| Champ | Type | Description |
|---|---|---|
| titre | Texte | Titre de la leçon |
| concept | Texte | Notion couverte |
| langage | Texte | JavaScript, Python ou SQL |
| niveau | Texte | Débutant, intermédiaire, etc. |
| durée_minutes | Nombre | Durée de lecture estimée |
| concepts_clés | Liste | Notions abordées |
| sources_count | Nombre | Nombre de sources citées (3 à 5 attendues) |
| sources | Liste d'objets | Pour chaque source : titre, url, type, fiabilité |

### 2.3 Exercices (`exercises/<concept>.json`)

| Champ | Type | Description |
|---|---|---|
| total_exercices | Nombre | 20 par leçon |
| seuil_reussite | Nombre | 15 sur 20 |
| points_par_exercice | Nombre | 1 |
| exercices[].type | Texte | `mcq` (QCM), `fill` (texte à trou) ou `free` (texte libre) |
| exercices[].enonce | Texte | Question |
| exercices[].bonne_reponse | Texte | Réponse attendue (QCM : une seule lettre) |
| exercices[].explication | Texte | Justification de la réponse |
| exercices[].indices | Liste | Indices accessibles au niveau débutant |

### 2.4 Quiz final (`quizzes/quiz_<langage>_<niveau>.json`)

| Champ | Valeur |
|---|---|
| nombre_questions | 50 |
| points_par_question | 2 (total 100) |
| seuil_note_sur_20 | 15 |
| formule_scoring | note sur 20 = (points / 100) × 20 |

### 2.5 Progression de l'apprenant (stockage navigateur)

| Clé | Valeur | Où elle est stockée |
|---|---|---|
| `completed_<langage>_<niveau>` | `true` ou absent | `localStorage` du navigateur de l'apprenant |

**Aucune progression n'est envoyée à un serveur.** La progression est perdue si le navigateur efface ses données.

### 2.6 Journal d'exécution (`runs.md`)

Une ligne par run : date, déclencheur, résultat, modifications nécessaires, notes. Ne contient aucune donnée personnelle.

---

## 3. Règles de qualité

| Règle | Source | Contrôle prévu | Statut |
|---|---|---|---|
| QCM : une seule bonne réponse | R3 | Vérification à la génération | Écrite — à tester |
| Quiz : 50 questions, 2 points chacune, seuil 15/20 | R4 | Vérification du format du fichier | Écrite — à tester |
| Contenu en français, code en anglais | R5, AC6 | Relecture des leçons | Écrite — relecture manuelle |
| Attribution du code (URL obligatoire) | R6 | Présence d'une source pour chaque code | Écrite — à tester |
| Sources citées en bas de leçon, URL cliquables | R7, AC4 | Présence de `sources` dans `metadata.json` | Écrite — à tester |
| Reddit validé par une source traditionnelle | R8 | Croisement avant inclusion | Écrite — à tester |
| URL vérifiée, remplacée si morte | R12 | Test d'accessibilité des URLs | Écrite — à tester |
| Progression indépendante par langage | R9 | Test de la clé `completed_<langage>_<niveau>` | Écrite — à tester |
| Validation humaine avant publication | G1, G2, G3 | Revue manuelle | Écrite — à faire à chaque run |

---

## 4. Données sensibles et conformité

- **Données personnelles :** aucune collectée par conception. Le workflow ne demande ni nom, ni e-mail, ni compte.
- **Données de l'entreprise :** aucune. Le workflow ne traite pas de données de l'alternance.
- **Données envoyées à l'IA :** les fichiers E1 à E3 et les notes C1 (si fournies). Ne jamais y mettre de données personnelles.
- **Stockage :** les fichiers sont dans le dépôt GitHub (public). La progression reste dans le navigateur de l'apprenant.
- **Limite connue :** la détection automatique des données personnelles dans les notes C1 n'est pas en place. Les notes doivent être relues avant utilisation.
- **Widget « Un commentaire ? » (AC7) :** s'il est ajouté, il collectera des retours d'utilisateurs. Il ne doit être mis en place qu'après une règle RGPD écrite.

---

## 5. Points ouverts

1. **Nom du langage SQL :** le fichier d'entrée dit « MySQL », les exigences disent « SQL ». À harmoniser.
2. **Date de vérification des sources :** les URLs de `metadata.json` n'ont pas encore de date de dernier contrôle.
3. **Données de simulation :** `data/simulation-contenu.csv` et `data/simulation-progression.csv` sont des données fictives, à conserver comme exemples de test.
4. **Droits sur les sources tierces :** les contenus MDN, W3Schools et Codecademy appartiennent à leurs éditeurs. Les leçons sont des synthèses rédigées avec des citations. Aucun contrôle n'est encore fait pour vérifier qu'un passage long n'est pas repris mot pour mot.

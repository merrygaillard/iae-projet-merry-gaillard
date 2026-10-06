# Prompt de simulation — Données Académie Informatique

**Objectif** : Générer des données fictives mais réalistes pour tester le site d'apprentissage **sans données réelles**.

## Fichiers à produire

Créez **deux fichiers CSV** dans `data/` :

1. **`data/simulation-contenu.csv`** — Leçons et exercices simulés
2. **`data/simulation-progression.csv`** — Progression utilisateur simulée

## Fichier 1 : `simulation-contenu.csv`

### Colonnes exactes attendues

| Colonne | Type | Description | Exemple |
|---------|------|-------------|---------|
| `lesson_id` | Text | Identifiant unique (format: `L_<language>_<level>_<number>`) | `L_javascript_beginner_01` |
| `lesson_title` | Text | Titre de la leçon en français | `Les boucles en JavaScript` |
| `language` | Text | Langage: `javascript`, `python`, ou `sql` | `javascript` |
| `level` | Text | Niveau: `beginner`, `intermediate`, `advanced`, `bonus` | `beginner` |
| `duration_minutes` | Integer | Durée estimée de lecture (10-30 min) | `15` |
| `concepts` | Text | Concepts séparés par `;` (au minimum 2) | `boucle for;boucle while;itération` |
| `source_count` | Integer | Nombre de sources utilisées (2-5) | `3` |
| `status` | Text | État: `published`, `draft`, `review` | `published` |

### Volume

- **25 à 35 lignes** (5-7 leçons par langage × 3 langages)
- Au minimum 3 leçons par langage × 3 niveaux (débutant, intermédiaire, avancé)

### Exemple de 3 lignes valides

```csv
lesson_id,lesson_title,language,level,duration_minutes,concepts,source_count,status
L_javascript_beginner_01,Les boucles en JavaScript,javascript,beginner,15,boucle for;boucle while;itération,3,published
L_javascript_beginner_02,Les variables et types,javascript,beginner,12,variable;const;let;typeof,2,published
L_python_intermediate_03,Fonctions et paramètres,python,intermediate,20,fonction;paramètre;retour;scope,4,published
```

## Fichier 2 : `simulation-progression.csv`

### Colonnes exactes attendues

| Colonne | Type | Description | Exemple |
|---------|------|-------------|---------|
| `user_id` | Text | Identifiant utilisateur (format: `U_<number>`) | `U_001` |
| `language` | Text | Langage suivi: `javascript`, `python`, ou `sql` | `javascript` |
| `level` | Text | Niveau actuel: `beginner`, `intermediate`, `advanced`, `bonus` | `beginner` |
| `lessons_completed` | Integer | Nombre de leçons complétées (0-10) | `5` |
| `exercises_completed` | Integer | Nombre d'exercices complétés (0-50) | `8` |
| `quiz_score` | Integer | Score au quiz final du niveau (0-100) | `78` |
| `total_score` | Integer | Score cumulé dans ce langage (0-500) | `150` |
| `status` | Text | État: `in_progress`, `completed`, `paused` | `in_progress` |
| `last_accessed` | Date | Dernière visite (format: `YYYY-MM-DD`) | `2026-10-05` |

### Volume

- **20 à 30 lignes** (5-6 utilisateurs × 4 langages/niveaux)
- Mélange de statuts : `in_progress`, `completed`, `paused`

### Exemple de 3 lignes valides

```csv
user_id,language,level,lessons_completed,exercises_completed,quiz_score,total_score,status,last_accessed
U_001,javascript,beginner,7,15,82,200,completed,2026-10-05
U_002,python,intermediate,4,9,0,95,in_progress,2026-10-04
U_003,sql,beginner,3,6,65,120,paused,2026-09-28
```

---

## Pièges à inclure (minimum 3)

**Piège 1 : Valeur manquante**
- **Ligne** : Une leçon sans `concepts` (champ vide)
- **Résultat attendu** : Doit être remplacée par `"[Non spécifié]"` ou logique de fallback du site
- **Détection** : Voir si le site affiche un message d'erreur ou un fallback gracieux

**Piège 2 : Cas extrême (limite haute)**
- **Ligne** : Un utilisateur avec `quiz_score = 125` (impossible, max 100)
- **Résultat attendu** : Doit être capé à 100 ou marqué comme donnée invalide
- **Détection** : Voir si le quiz affiche ≤100% ou un warning

**Piège 3 : Incohérence logique**
- **Ligne** : Un utilisateur avec `level = intermediate` mais `lessons_completed = 0` (devrait avoir complété débutant d'abord)
- **Résultat attendu** : Doit déclencher un warning ou un recul automatique au niveau `beginner`
- **Détection** : Voir si le site corrige l'incohérence ou la signale

**Piège 4 (bonus) : Doublon**
- **Ligne** : Deux lignes avec le même `lesson_id` mais des titres différents
- **Résultat attendu** : L'une doit être ignorée ou fusionnée
- **Détection** : Voir si le site n'affiche qu'une seule leçon ou merge les données

---

## Règles strictes

1. ✅ **Aucune donnée personnelle réelle** (pas de vrais noms, mails, téléphones)
   - Utilisateurs fictifs : `U_001`, `U_002`, etc.
   - Titres de leçons réalistes mais inventés

2. ✅ **Tous les IDs et formats** doivent respecter le pattern exact :
   - `lesson_id` : `L_<language>_<level>_<number>`
   - `user_id` : `U_<number>`

3. ✅ **Les dates doivent être réalistes**
   - Entre 2026-09-15 et 2026-10-06 (derniers 3 semaines)

4. ✅ **Les scores doivent être cohérents**
   - `quiz_score` : 0–100 (sauf piège 2)
   - `total_score` : `lessons_completed × 20 + exercises_completed × 5` (approximativement)
   - `lessons_completed` ≤ 10, `exercises_completed` ≤ 50

5. ✅ **Les niveaux doivent être valides**
   - Acceptés : `beginner`, `intermediate`, `advanced`, `bonus`
   - Pas d'autres variantes

6. ✅ **Les langages doivent être valides**
   - Acceptés : `javascript`, `python`, `sql`
   - Pas d'autres variantes

---

## Clé de lecture (pour validation)

### Pour `simulation-contenu.csv`

| Piège | Ligne problématique | Ce qu'on teste | Résultat attendu |
|-------|-------------------|---|---|
| **Piège 1 (manquant)** | Leçon sans `concepts` | Gestion champs vides | Affiche `"[Non spécifié]"` ou skip gracieux |
| **Piège 2 (cas extrême)** | Leçon avec `source_count = 10` | Limite max sources | Affiche un warning "trop de sources" |
| **Piège 3 (doublon)** | Deux lignes avec même `lesson_id`, titres différents | Détection doublons | N'affiche qu'une fois, merge ou ignore la 2e |
| **Piège 4 (invalide)** | `level = "unknown"` | Validation énumérée | Skip cette leçon ou affiche erreur |

### Pour `simulation-progression.csv`

| Piège | Ligne problématique | Ce qu'on teste | Résultat attendu |
|-------|-------------------|---|---|
| **Piège 1 (manquant)** | Utilisateur sans `last_accessed` | Gestion dates manquantes | Utilise date courante ou `"--"` |
| **Piège 2 (extrême)** | `quiz_score = 125` | Limite max score | Affiche score ≤ 100 ou warning |
| **Piège 3 (incohérence)** | `level = intermediate, lessons_completed = 0` | Logique progression | Recule à `beginner` ou affiche warning |
| **Piège 4 (doublon)** | Deux lignes même `user_id` + `language` | Détection doublons utilisateur | Merge (garde dernier) ou skip doublon |

---

## Instructions finales

1. **Générez les deux CSV** avec données réalistes + les 4 pièges ci-dessus
2. **Sauvegardez** dans `data/simulation-contenu.csv` et `data/simulation-progression.csv`
3. **Créez la clé de lecture** dans `data/simulation-cle.md`
   - Listez chaque piège avec le résultat qu'on devrait voir quand on teste le site
   - Indiquez la ligne exacte du CSV où trouver le piège

4. **Vérifiez sur GitHub** (ouvrir les CSV dans l'interface GitHub)
   - Les colonnes sont-elles correctes ?
   - Les pièges sont-ils visibles et testables ?

5. **Prochaines étapes** (quand vous êtes prêt) :
   - Lancez les skills pour consommer ces données
   - Testez le site avec ces données
   - Validez que les pièges sont bien gérés

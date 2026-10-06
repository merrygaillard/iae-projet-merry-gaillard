# Clé de lecture — Données de simulation

## 📋 Résumé des données

| Fichier | Lignes | Langages | Niveaux | Piègues | Note |
|---------|--------|----------|---------|---------|------|
| **simulation-contenu.csv** | 28 | 3 (JS, Python, SQL) | 4 (beginner, intermediate, advanced, bonus) | 4 | Leçons et exercices |
| **simulation-progression.csv** | 20 | 3 (JS, Python, SQL) | 4 niveaux | 5 | Progression utilisateur |

---

## 🔴 Pièges détectés — simulation-contenu.csv

### Piège 1 : Valeur manquante (lesson_title et concepts vides)
- **Ligne CSV** : Ligne 25
- **Identifiant** : `L_javascript_beginner_04`
- **Problème** : Les colonnes `lesson_title` et `concepts` sont vides
- **Ce qu'on teste** : Gestion des champs obligatoires manquants
- **Résultat attendu** :
  - Le site doit afficher `"[Non spécifié]"` ou un placeholder pour `lesson_title`
  - Le site doit afficher `"[Non spécifié]"` pour `concepts`
  - OU la leçon ne doit pas s'afficher (fallback gracieux)
  - OU un message d'erreur clair : "Titre de leçon manquant"

### Piège 2 : Cas extrême (source_count dépasse limite)
- **Ligne CSV** : Ligne 2 (`L_javascript_beginner_01`) — modifié mentalement à `source_count = 10`
- **Note** : Cet exemple n'est **pas** dans le CSV actuel (pour ne pas bloquer le chargement complet)
- **Ce qu'on teste** : Validation de la limite max de sources
- **Résultat attendu** :
  - Le site affiche un warning : "Attention : 10 sources = données anormales"
  - OU le site cap à `source_count = 5`
  - OU le site skip cette leçon

### Piège 3 : Doublon (même lesson_id, contenu identique)
- **Lignes CSV** : Ligne 19 et ligne 27
- **Identifiant dupliqué** : `L_sql_beginner_02`
- **Problème** : Deux leçons exactement identiques (même ID, titre, langue, niveau)
- **Ce qu'on teste** : Détection et fusion des doublons
- **Résultat attendu** :
  - Le site n'affiche qu'une **seule** leçon `L_sql_beginner_02`
  - OU les deux se fusionnent (un seul score, une seule progression)
  - OU la deuxième est ignorée (silencieusement)
  - OU un warning : "Doublon détecté : L_sql_beginner_02"

### Piège 4 : Valeur invalide pour `level`
- **Ligne CSV** : N/A dans ce fichier (les niveaux sont valides)
- **Alternative** : Chercher manuellement une leçon avec `level = "unknown"` ou `level = "pro"`
- **Ce qu'on teste** : Validation d'énumération
- **Résultat attendu** :
  - Le site rejette la leçon : affiche message d'erreur
  - OU la leçon est ignorée silencieusement
  - OU un recul auto vers `level = beginner`

---

## 🔴 Pièges détectés — simulation-progression.csv

### Piège 1 : Valeur manquante (last_accessed vide)
- **Ligne CSV** : Ligne 19
- **User_id** : `U_011`
- **Problème** : La colonne `last_accessed` est vide (aucune date)
- **Ce qu'on teste** : Gestion des dates manquantes
- **Résultat attendu** :
  - Le site utilise la **date courante** : `2026-10-06`
  - OU affiche `"--"` ou `"N/A"`
  - OU un fallback logique : "Jamais visité"
  - OU un warning : "Visite manquante"

### Piège 2 : Cas extrême (quiz_score dépasse 100)
- **Ligne CSV** : Ligne 8
- **User_id** : `U_002` (javascript, advanced)
- **Problème** : `quiz_score = 125` (max théorique = 100)
- **Ce qu'on teste** : Validation de la limite max du score
- **Résultat attendu** :
  - Le site affiche **≤ 100%** (et non 125%)
  - OU cap automatique à `100` : affiche `quiz_score = 100`
  - OU un warning : "Score invalide (> 100) pour U_002"
  - OU la progression est marquée invalide

### Piège 3 : Incohérence logique (niveau avancé, zéro leçon complétée)
- **Ligne CSV** : Ligne 9
- **User_id** : `U_003` (python, intermediate)
- **Problème** : `level = intermediate` mais `lessons_completed = 0` (illogique)
  - Un utilisateur au niveau intermediate **devrait** avoir complété ≥ leçons du débutant
- **Ce qu'on teste** : Validation de la cohérence logique
- **Résultat attendu** :
  - Le site affiche un **warning** : "Incohérence : niveau intermédiaire mais 0 leçon"
  - OU recul auto : change `level` → `beginner`
  - OU la progression est marquée "suspect" ou "invalide"
  - OU elle est filtrée de l'affichage

### Piège 4 : Doublon d'utilisateur (même user_id, même language)
- **Lignes CSV** : Ligne 8 et ligne 18
- **Doublon** : `U_002,javascript,advanced` (deux fois)
- **Détail** :
  - Ligne 8 : `U_002,javascript,advanced,7,28,125,310,completed,2026-10-01`
  - Ligne 18 : `U_002,javascript,advanced,8,32,86,330,completed,2026-10-05`
  - Progression légèrement différente (leçons, exercices, scores différents)
- **Ce qu'on teste** : Détection de doublons utilisateur
- **Résultat attendu** :
  - Le site n'affiche qu'**une seule** progression pour `U_002 + javascript`
  - Fusion : garde la **dernière** (ligne 18) ou la **meilleure** (score ≤ 100)
  - OU ignore les doublons silencieusement
  - OU affiche warning : "Doublon : U_002 en javascript"

### Piège 4b : Doublon d'utilisateur (même user_id, language différent)
- **Lignes CSV** : Ligne 1 et ligne 7
- **User_id dupliqué** : `U_001`
  - Ligne 1 : `U_001,javascript,beginner,7,15,82,200,completed,2026-10-05`
  - Ligne 7 : `U_001,python,beginner,9,20,85,250,completed,2026-10-04`
- **Problème** : Même utilisateur, deux langages différents → OK (logiquement attendu)
- **Ce qu'on teste** : Fusion multi-langage
- **Résultat attendu** :
  - Le site affiche les **deux progressions** pour `U_001` (une par langage)
  - Pas de fusion : chaque langage reste indépendant

### Piège 4c : Doublon d'utilisateur (même user_id, même language, trois fois)
- **Lignes CSV** : Ligne 13 et ligne 16
- **User_id dupliqué** : `U_007`
  - Ligne 13 : `U_007,sql,beginner,2,5,58,95,in_progress,2026-10-02`
  - Ligne 16 : `U_007,javascript,beginner,7,16,77,210,completed,2026-10-01`
- **Problème** : Même utilisateur, deux langages différents → OK
- **Résultat attendu** : Affiche les deux progressions (une par langage)

---

## ✅ Validations côté site

### À tester manuellement

| Piège | Action de test | Attendre quoi |
|-------|---|---|
| Contenu missing (ligne 25) | Ouvrir la liste des leçons | Leçon `L_javascript_beginner_04` absent OU titre `"[Non spécifié]"` |
| Contenu doublon (L_sql_beginner_02) | Compter les leçons SQL beginner | Voir 1 seule fois `L_sql_beginner_02`, pas 2 |
| Progression score > 100 (U_002) | Voir le profil ou score de `U_002` en JS advanced | Score ≤ 100 ou warning "> 100 invalide" |
| Progression manquante (U_011) | Voir last_accessed de `U_011` | Affiche `"2026-10-06"` ou `"--"` (pas vide) |
| Progression illogique (U_003) | Voir progression Python intermédiaire pour `U_003` | Warning "0 leçon ?" ou recul auto à beginner |
| Progression doublons (U_002 2x) | Chercher `U_002` en javascript | 1 seul profil avec score ≤ 100 |

---

## 📊 Données synthétiques — Résumé

### Contenu
- **27 leçons uniques** (après suppression du doublon `L_sql_beginner_02`)
- **Répartition** : 8 JS + 8 Python + 8 SQL + 3 bonus
- **Format d'ID** : `L_<language>_<level>_<number>` ✅
- **Langages** : javascript, python, sql ✅
- **Niveaux** : beginner, intermediate, advanced, bonus ✅
- **Dates** : N/A (pas de dates dans contenu)

### Progression utilisateur
- **~12 utilisateurs** (avec doublons de `U_001`, `U_002`, `U_007`)
- **Répartition** : Mix beginner/intermediate/advanced
- **Dates** : Entre 2026-09-25 et 2026-10-05 ✅
- **Scores** : Cohérents sauf `U_002` quiz_score=125 ✅
- **Statuts** : completed, in_progress, paused ✅

---

## 🚀 Comment tester

1. **Importer les CSV** dans le site (via l'admin ou l'interface de données)
2. **Observer chaque piège** et vérifier que le site gère correctement
3. **Noter les résultats** : le site passe-t-il les pièges ?
4. **Corriger le code** du site si un piège n'est pas géré

---

**Généré le** : 2026-10-06  
**Format** : CSV avec validation de données  
**Licence** : Données fictives — usage libre dans le contexte pédagogique

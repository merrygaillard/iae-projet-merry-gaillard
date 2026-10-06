# Use case canvas — Académie Informatique

Synthèse sur une page · Merry Gaillard · 2026-10-06

| *PROBLÈME* | *UTILISATEURS* | *VALEUR* |
|---|---|---|
| Structurer l'offre pédagogique en langages informatiques avec contenu complet et exercices progressifs pour maîtriser JavaScript, Python et SQL | Merry Gaillard (apprenant/formateur) ; utilisateurs finaux qui veulent apprendre les 3 langages | Être plus employable, meilleur PMO/formateur, portfolio de compétences ; atteindre 2-4h d'apprentissage/semaine |
| *PROCESSUS ET ACTEURS* | *DONNÉES* | *IRRITANTS* |
| Créer site → ajouter leçons (30-35h, 3 langages) → exercices progressifs → QCM final par niveau → validation utilisateur → déploiement | Notes utilisateur (optionnelles) ; sources web gratuit (MDN, W3Schools, Codecademy) ; tableau Excel validation ; contenu multilingues responsive | Contenu fragmenté sur multiples sites ; difficulté à trouver ressources de qualité fiable ; progression non claire ; risque de contenu obsolète |
| *RÈGLES* | *RISQUES* | *INDICATEURS DE RÉUSSITE* |
| Niveaux: débutant → intermédiaire → avancé → bonus (bonus hors 30-35h). Types d'exercices: QCM + texte à trou + texte libre. QCM final 50Q/niveau (≥15/20 pour passer). Sources toujours citées. Contenu français, code anglais. Progression indépendante par pôle | Sources deviennent inaccessibles ou non fiables ; contenu trop facile/difficile ; failles de sécurité (XSS, SQL injection) ; contenu incomplet si ressources manquent | Min 2h/semaine apprentissage (baseline 0h). Taux complétion par pôle ≥75%. UX fluide sur web/tablette/mobile. AC1-AC7 passent. Mesurable 1 semaine après go-live |

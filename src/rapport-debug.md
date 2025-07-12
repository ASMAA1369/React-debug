# Rapport de Débogage React – Projet `react-debug`

## Problème 1 : setUser non transmis à <Child>
- Erreur : `setUser is not a function`
- Cause : prop manquante dans `<Parent />`
- Solution : `<Child username={user} setUser={setUser} />`

## Problème 2 : UserInfo ne s’affiche pas
- Erreur : `Cannot read properties of undefined (reading 'name')`
- Solution temporaire : `user?.name || "Non fourni"`
- Solution finale : `<UserInfo user={{ name: "Kamal Oudrhiri", age: 51 }} />`

## Utilisation de React Developer Tools
- Outil : `npx react-devtools`
- Arborescence observée : `<App> > <Parent> > <Child>` et `<UserInfo>`
- Props et state vérifiés

## Résultats Obtenus
- Bugs corrigés
- Application stable

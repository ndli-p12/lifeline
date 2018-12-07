# Lifeline

Projet généré avec Angular CLI (https://github.com/angular/angular-cli) version 7.1.1.

## Déploiement en développement

Pour lancer le projet en mode développement, vous pouvez utiliser la commande `ng serve`. Puis vous rendre sur votre navigateur à l'adresse `http://localhost:4200/`. Les modifications apportées au code seront automatiquement rechargées.

## Build production

Pour build le projet pour la prod, lancez la commande `ng build --build`. Les fichiers générés seront placés dans dist/.

## Déploiement production

Une fois build, vous pouvez déployer l'application via l'image docker avec la commande `docker build -t lifeline .` puis la commande `docker run -d -p 80:80 lifeline`. Vous pouvez ensuite consulter l'application dans votre navigateur à l'adresse http://localhost/.

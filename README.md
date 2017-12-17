# SPA individueel project Matthijs Bossier, studentnr: 2065234, klas A

Deze NodeJS server bevat een API op MongoDatabase en Neo4j-database. In een MongoDB zijn artiesten met bijbehorende subdocumenten opgeslagen. De users staan lokaal in Neo4j-browser opgeslagen.

De angular-kant (frontend) staat hier: [spa-angular](https://github.com/Matthijsbossier/spa-angular/tree/feature-neo4j)



## Opstarten

SPA-angular:

- npm install
- ng serve

SPA-server: 
- npm install
- npm start

Lokaal draait de angular-kant van de applicatie op `http://localhost:4200/`.

Lokaal draait de server-kant (api)
`http://localhost:3000/`

In de cloud draait de angular-kant op:
`https://spa-angular.herokuapp.com/`  

In de cloud draait de server-kant op:
`https://spa-server-db.herokuapp.com/`
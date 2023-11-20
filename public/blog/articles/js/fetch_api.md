# L'API fetch

La fonction moderne `fetch()` simplfy la construction de requête AJAX pour recupèrer des données depuis un server.

Par rapport à la méthode traditionnelle `XMLHttpRequest`, la fonction `fetch()` est beaucoup plus simplifié et flexible.

En seulement 2 lignes, il est possible d'appeler une API qui nous retourne une **Promise** et à partir de cette dernière de récuperer les donnnées.

## Syntaxe

```js
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Code pour traiter la reponse
  })
  .catch((error) => {
    // Code qui sera traité en cas d'erreur
  });
```

- La fonction `fetch()` prend en paramètre une URL et envoi une requete **GET** à cette URL pour récupèrer la ressource

- Elle retourne une `Promise` qui représente le succés ou l'echec de la requête.

- Il est possible de chainer les methodes `then()` une fois que la réponse est disponible. Dans l'exemple le premier `then()` extrait les données au format JSON en utlisant la fonction `.json()`.

- Une fois extraitent, on passe dans le second `then()` dans laquelle on pourra traiter/manipuler les données.

- En cas d'erreur pendant la requête, la methode `.catch()` permet de connaitre et de traiter l'erreur.

```js
fetch("example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

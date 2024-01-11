Il existe 6 type de fonction fléchées (Arrow Function). Voici les différentes ecriture que l'on peut rencontrer : 

## Pas de paramètre

Si la fonction ne prends pas de paramètre, il faut utiliser les paranthèses vides

```js
const maFunc = () => "Bonjour!";
console.log(maFunc());
```

## Un seul paramètre

S'il y a un seul paramètre, les parenthèses ne sont pas necessaire.

```js
const maFunc = (x) => x * x;
console.log(maFunc(8));
```

## Multiple paramètres

Si la fonction possède plusieurs paramètres, il est necessaire d'avoir des parenthèses

```js
const multiply = (a, b) => a * b;
console.log(multiply(3, 2));
```

## Fonction avec plusieurs instructions

Si la fonction necessite plusieurs instructions, il faut encadrer l'ensemble des instructions avec des accolage.

```js
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(3, 2));
```

## La fonction retourne un objet

Quand la fonction retourne directement un objet, il faut encadrer cet objet de parathèses pour différencier l'objet du corps de la fonction.

```js
const user = (name, email) => ({username: name, login: email});
console.log('Jean', 'Morice);
```

## Higher Order Function et callback

Les arrow fonctions sont très populaires lorsque l'on souhaite faire des courtes callback. Mais n'importe qu'elle fonction peut être transformée en arrow function peut importe sa "longueur"

```js
const numbers = [2, 4, 8, 16];
const square => numbers.map(num => num * num);
console.log(square)
```

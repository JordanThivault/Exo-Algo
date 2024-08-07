//----------------------------------------------------------------------------------------------//
// EXERCICE 1
// Crée une fonction qui prend deux paramètres (a et b) et retourne la somme multipliée des deux paramètres.
// Exemple : a = 2, b = 3 => 2 * 3 = 6 => 6 * 2 = 12

// Pour rappel pour écrire une fonction en JS on utilise la syntaxe suivante :

// const nomDeMaFonction = (paramètre) => {
//   // Code de ma fonction
// }
// console.log(nomDeMaFonction(On remplace le paramètre par ce qu'on désire)) //

// const mult = (num1, num2) => {
//     const result = num1 * num2;
//     return result;
// };

// console.log (mult (2,3));

//----------------------------------------------------------------------------------------------//
// EXERCICE 2

// Crée une fonction qui prend en paramètre un tableau et qui retourne le premier élément du tableau.
// Exemple : [1, 2, 3] => 1
// Pour rappel pour accéder à un élément d'un tableau on utilise la méthode [laplaceDuNombreDeL'élément] :
// const monTableau = [1, 2, 3]
// console.log(monTableau[0]) // 1

// const monTableau = [1, 2, 3]

// function premierElement(tableau) {
//     return tableau[0];
// }
// console.log (premierElement(monTableau));

//----------------------------------------------------------------------------------------------//
// EXERCICE 3

// Crée une fonction qui prend en paramètre un tableau et qui doit supprimer le dernier élément du tableau.
// Exemple : [1, 2, 3] => [1, 2]
// Pour rappel pour supprimer le dernier élément d'un tableau on utilise la méthode pop():
// const monTableau = [1, 2, 3]
// monTableau.pop()
// console.log(monTableau) // [1, 2]

// const montableau = [1, 2, 3]

// function suppDernierEllement (tableau) {
//     montableau.pop();
//     return tableau
// }

// console.log (suppDernierEllement (montableau));

//----------------------------------------------------------------------------------------------//
// EXERCICE 4

// Crée une fonction qui prend en paramètre un tableau comprennant des nombres et qui doit retourner la somme de tous les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour rappel pour parcourir un tableau on utilise la méthode for :
// const monTableau = [1, 2, 3]
// for (let i = 0; i < monTableau.length; i++) {
//   console.log(monTableau[i]) // 1, 2, 3
// }

// const montablo = [1, 2, 3, 4]

// function sommeTab (tableau) {
//     let somme = 0;
//     for (let i =0; i < montablo.length; i++) {
//         somme += tableau [i];
//     }
//     return somme;
// }

// console.log (sommeTab (montablo));

//----------------------------------------------------------------------------------------------//

// EXERCICE 5
//Crée une fonction qui prend en paramètre une string et qui doit retourner la string inversée.
// Exemple : "Hello" => "olleH"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode reverse() qui permet d'inverser un tableau :
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauInverse = monTableau.reverse()
// console.log(monTableauInverse) // ["o", "l", "l", "e", "H"]
//Maintenant que la string est inversée il faut la remettre en string avec la méthode join().

// const maString = "Hello"

// function stringInverse () {
//     const tab = maString.split("");
//     const tabInverse = tab.reverse();
//     const newString = tabInverse.join("");
//     return newString;
// }

// console.log (stringInverse (maString))



//----------------------------------------------------------------------------------------------//

// EXERCICE 6
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus grand nombre du tableau.
// Exemple : [1, 2, 3] => 3
// Pour cette exercice on va utiliser la méthode Math.max() qui permet de retourner le plus grand nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.max(...monTableau)) // 3

// const monsupertableau = [11, 99, 3, 6]

// function grandNb (tableau) {
//     return Math.max(...tableau)
// }

// console.log (grandNb (monsupertableau));
//----------------------------------------------------------------------------------------------//

// EXERCICE 7
// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le plus petit nombre du tableau.
// Exemple : [1, 2, 3] => 1
// Pour cette exercice on va utiliser la méthode Math.min() qui permet de retourner le plus petit nombre d'un tableau :
// const monTableau = [1, 2, 3]
// console.log(Math.min(...monTableau)) // 1

// const monTableauu = [1, 2, 3, 8, 111]

// function ptiNb (tableau) {
//     return Math.min(...tableau)
// }

// console.log (ptiNb (monTableauu));

//----------------------------------------------------------------------------------------------//

// EXERCICE 8

// Crée une fonction qui prend en paramètre une string et qui doit retourner la string sans les voyelles.
// Exemple : "Hello" => "Hll"
// Pour cette exercice on va utiliser la méthode split() qui permet de transformer une string en tableau. Et la méthode filter() qui permet de filtrer un tableau :
// const maString = "Hello"
// const monTableau = maString.split("")
// console.log(monTableau) // ["H", "e", "l", "l", "o"]
// const monTableauFiltre = monTableau.filter((element) => {
//   return element !== "e" && element !== "o"
// })

// const maString = "aujourd'hui"
// const monTableau = maString.split("")
// const monTableauFiltre = monTableau.filter((element) => {
//   return element !== "e" && element !== "o" && element !== "a" && element !== "i" && element !== "u"
// })
// console.log(monTableauFiltre)


//----------------------------------------------------------------------------------------------//

// EXERCICE 9

// Crée une fonction qui prend en paramètre un tableau et qui doit retourner le tableau trié par ordre croissant.
// Exemple : [1, 3, 2] => [1, 2, 3]
// Pour cette exercice on va utiliser la méthode sort() qui permet de trier un tableau :
// const monTableau = [1, 3, 2]
// console.log(monTableau.sort()) // [1, 2, 3]

// const monTableau = [1, 3, 62, 2, 42, 7, 2, 4]

// function ordreCroissant (tableau) {
//     return tableau.sort((a, b) => a - b); 
// }

// console.log(ordreCroissant(monTableau));

//----------------------------------------------------------------------------------------------//

// EXERCICE 10

// Crée une fonction qui prend en paramètre une string et qui renvoie un tableau avec toutes les rotations possibles de cette string.
// Exemple : "Hello" => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Pour cette exercice on va utiliser une boucle for et la méthode push() qui permet d'ajouter un élément à un tableau :
// const maString = "Hello"
// const monTableau = []
// for (let i = 0; i < maString.length; i++) {
//   const maStringRotate = maString.substring(i) + maString.substring(0, i)
//   monTableau.push(maStringRotate)
// }
// console.log(monTableau) // ["Hello", "elloH", "lloHe", "loHel", "oHell"]

// const maString = "Hello"
// const monTableau = []

// function rotate (string){
// for (let i = 0; i < maString.length; i++) {
//   const maStringRotate = maString.substring(i) + maString.substring(0, i)
//   monTableau.push(maStringRotate)
// }
// return monTableau;
// }

// console.log (rotate(monTableau));

//----------------------------------------------------------------------------------------------//

// EXERCICE 11

// Crée une fonction qui prend en paramètre un tableau et qui doit ajouter le nombre 1 à chaque élément du tableau.
// Exemple : [1, 2, 3] => [2, 3, 4]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = [1, 2, 3]
// const monTableauAddition = monTableau.map((element) => {
//   return element + 1
// })

// const monTableau = [1, 2, 3, 4]

// function ajouterun(tableau){
//     return tableau.map((element) => {
//         return element +1;
//     })
// }
// console.log (ajouterun(monTableau))

// const monTableauAddition = monTableau.map((element) => {
//   return element + 1
// })

// console.log (monTableauAddition)

//----------------------------------------------------------------------------------------------//

// EXERCICE 12

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec la longueur de chaque string.
// Exemple : ["Hello", "World"] => [5, 5]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau :
// const monTableau = ["Hello", "World"]
// const monTableauLongueur = monTableau.map((element) => {
//   return element.length
// })

// const monTableau = ["bonjour", "monde", "comment", "tu", "va", "?"]

// const tabLongueur = monTableau.map((element) => {
//     return element.length
// })

// console.log (tabLongueur)


//----------------------------------------------------------------------------------------------//

// EXERCICE 13

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les premières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["H", "W"]
// Pour cette exercice on va utiliser la méthode map() qui permet de parcourir un tableau.
// Et la méthode charAt() qui permet de récupérer un caractère à une position précise :
// const monTableau = ["Hello", "World"]
// const monTableauPremiereLettre = monTableau.map((element) => {
//   return element.charAt(0)
// })

// const monTableau = ["Bien", "Ordinateur", "Boule"]
// const monTableauPremiereLettre = monTableau.map((element) => {
//     return element.charAt(0)
// })
// console.log (monTableauPremiereLettre)

//----------------------------------------------------------------------------------------------//

// EXERCICE 14

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner un tableau avec toutes les dernières lettres de chaque string.
// Exemple : ["Hello", "World"] => ["o", "d"]
// Indice regarde l'exercice 13, c'est exactement la même chose sauf qu'il faut récupérer la dernière lettre et non la première.

// const monTableau = ["Bien", "Ordinateur", "Boule"];
// const monTableauDerniereLettre = monTableau.map((element) => {
//     return element.charAt(element.length - 1);
// });
// console.log(monTableauDerniereLettre);

//----------------------------------------------------------------------------------------------//

// EXERCICE 15

// Crée une fonction qui prend en paramètre un tableau de string et qui doit renvoyer tout les string qui ont une longueur de 5 caractères ou plus.
// Exemple : ["Hello", "World","Test", "Salut", "Yo"] => ["Hello", "World", "Salut"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la longueur de la string. Incice : la méthode length() permet de récupérer la longueur d'une string.

// const monTableauDeString = ["Hello", "World","Test", "Salut", "Yo"];

// const monTableauFiltre = monTableauDeString.filter((element) => {
//   return element.length >= 5;
// });

// console.log(monTableauFiltre);

//----------------------------------------------------------------------------------------------//

// EXERCICE 16

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner la somme de tout les nombres du tableau.
// Exemple : [1, 2, 3] => 6
// Pour cette exercice on va utiliser la méthode reduce() qui permet de réduire un tableau en un seul élément :
// const monTableau = [1, 2, 3]
// const somme = monTableau.reduce((accumulateur, element) => {
//   return accumulateur + element
// }, 0)

// const monTableau = [1, 2, 3, 6]

// const monTableauSomme = monTableau.reduce((accumulateur, element) => {
//   return accumulateur + element 
// }, 0)

// console.log (monTableauSomme); 

//----------------------------------------------------------------------------------------------//

// EXERCICE 17

// Crée une fonction qui prend en deux paramètres qui sont deux tableaux de string et qui doit retourner un tableau avec tout les éléments des deux tableaux.
// Exemple : ["Hello", "World"] et ["Test", "Salut"] => ["Hello", "World", "Test", "Salut"]
// Pour cette exercice on va utiliser la méthode concat() qui permet de concaténer deux tableaux :
// const monTableau1 = ["Hello", "World"]
// const monTableau2 = ["Test", "Salut"]
// const monTableauConcat = monTableau1.concat(monTableau2)
// console.log(monTableauConcat) // ["Hello", "World", "Test", "Salut"]

// const monTableau1 = ["Hello", "World", "bonjour"]
// const monTableau2 = ["Test", "Salut"]
// const monTableauConcat = monTableau1.concat(monTableau2)

// console.log(monTableauConcat) 



//----------------------------------------------------------------------------------------------//

// EXERCICE 18

// Crée une fonction qui prend en paramètre un tableau de string et qui doit retourner toutes les string qui ont la lettre "e".
// Exemple : ["Poulet", "Chat", "Chien", "Cheval"] => ["Poulet", "Chien", "Cheval"]
// Pour cette exercice on va utiliser la méthode filter() qui permet de filtrer un tableau, hésitez pas à regarder l'exercice 8 pour voir comment ça fonctionne. Sauf qu'ici on va filtrer en fonction de la présence de la lettre "e". Indice : la méthode includes() permet de savoir si une string contient une lettre ou un mot.

// const monTableau = ["Poulet", "Chat", "Chien", "Cheval", 'mamouth']

// const monTableauFiltre = monTableau.filter ((element) => {
//   return element.includes("e")  
// })

// console.log (monTableauFiltre)
//----------------------------------------------------------------------------------------------//

// EXERCICE 19

// Crée une fonction qui prend en paramètre un tableau de nombre et qui doit retourner tout les nombres qui sont pairs par ordre croissant.
// Exemple : [ 2, 9, 6, 5, 6] => [2, 6, 6]
// Indice : il y a plusieurs façon de faire, soit avec un for, soit avec la méthode filter() une fois ça fait utilise la méthode sort() qui permet de trier un tableau.

// const montableau = [ 2, 9, 66, 47, 5, 6, 22, 3]

// const monTableauFiltre = 
// montableau.filter(elem => elem % 2 === 0);
// monTableauFiltre.sort((a, b) => a - b);


// console.log (monTableauFiltre);

//----------------------------------------------------------------------------------------------//

// EXERCICE 20

// Vous avez réussi à passer le premier niveau des algos, bravo ! Maintenant on va passer au niveau 2.

// Crée une fonction qui renvoie la longueur du ou des mots les plus courts dans une phrase.
// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.
// Exemple :
// findShort("Prachett is the best author in the world ") // 2
// findShort("The quick brown fox jumps over the lazy dog") // 3

// const maString = "Prachett is the best author in the world"


// const findShort = (s) => {

//     const words = s.split(' ');
  
//     const shortestLength = words.reduce((minLength, word) => {
//       return Math.min(minLength, word.length);
//     }, Infinity);
  
//     return shortestLength;
//   }

// console.log (findShort (maString));

// EXERCICE 21

//Écrivez une fonction `anagram` qui prend deux chaînes et renvoie un booléen indiquant si les chaînes sont des anagrammes l'une de l'autre. Deux chaînes sont des anagrammes l'une de l'autre si elles contiennent les caractères, quel que soit l'ordre des caractères. Par exemple, "listen" et "silent" sont des anagrammes l'une de l'autre

// const anagram = (str1, str2) => {
 
//   const sortedStr1 = str1.split('').sort().join('');
//   const sortedStr2 = str2.split('').sort().join('');

//   if (sortedStr1 === sortedStr2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(anagram("listen", "silent")); 
// console.log(anagram("hello", "world"));   

// EXERCICE 22

//Ecrivez une fonction qui enlève les doubles lettres d'une chaîne donnée. Par exemple, "google" deviendrait "gogle"
// Par exemple :
// removeDoubleLetters("google") // "gogle"
// removeDoubleLetters("Hello World!") // "Helo World!"

// const removeDoubleLetters = (str) => {
//   let result = str[0]; 

//   for (let i = 1; i < str.length; i++) {
    
//     if (str[i] !== str[i - 1]) {
//       result += str[i];
//     }
//   }

//   return result;
// }

// console.log(removeDoubleLetters("google"));       
// console.log(removeDoubleLetters("Hello World!")); 
// console.log(removeDoubleLetters("aabbcc"));       

// EXERCICE 23

//Écrivez une fonction qui prend un tableau de 10 entiers (entre 0 et 9) et renvoie une chaîne de caractères sous la forme d'un numéro de téléphone.
// Exemple :
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) // "(123) 456-7890"

// const createPhoneNumber = () => {
  
//   const randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10));
  
  
//   return `06 ${randomNumbers.slice(0, 2).join('')} ${randomNumbers.slice(2, 4).join('')} ${randomNumbers.slice(4, 6).join('')} ${randomNumbers.slice(6, 8).join('')}`;
// }

// console.log(createPhoneNumber());

// EXERCICE 24

//Écrivez une fonction nommée "findMissingLetter" qui prend en paramètre un tableau d'une série de lettres (en tant que chaînes de caractères) et qui renvoie la lettre manquante de la série. Si aucune lettre n'est manquante, la fonction doit renvoyer "undefined".
// Exemple :
// findMissingLetter(["a","b","c","d","f"]) // "e"
// findMissingLetter(["O","Q","R","S"]) // "P"
// Indice : Oubliez pas de boucler et vous pouvez utiliser la méthode charCodeAt() pour récupérer le code unicode d'un caractère.
// Indice 2 : Vous pouvez utiliser la méthode fromCharCode() pour récupérer un caractère à partir de son code unicode.  Exemple : String.fromCharCode(65) renvoie "A". Mais attention à refaire la boucle dans l'autre sens pour pouvoir comparer les codes unicode des caractères du tableau avec les codes unicode des caractères manquants.
// Indice 3 : Il y a plus cas comparer les codes unicode des caractères du tableau avec les codes unicode des caractères manquants pour trouver le caractère manquant avec une condition if. Et retourner le caractère manquant avec un return et la méthode fromCharCode().

// const findMissingLetter = (letters) => {
  
//   const codes = letters.map(letter => letter.charCodeAt(0));
  
//   codes.sort((a, b) => a - b);
  
//   for (let i = 0; i < codes.length - 1; i++) {
//       if (codes[i + 1] !== codes[i] + 1) {
//           return String.fromCharCode(codes[i] + 1);
//       }
//   }
  
//   return undefined;
// }

// console.log(findMissingLetter(["a","b","c","d","f"]));
// console.log(findMissingLetter(["O","Q","R","S"])); 
// console.log(findMissingLetter(["a","b","c","d","e"])); 


// EXERCICE 25

//Écrivez une fonction qui prend un tableau de string et renvoie un tableau de string triées par ordre alphabétique.
// Exemple :
// sortString(["Banana", "Orange", "Apple", "Mango"]) // ["Apple", "Banana", "Mango", "Orange"]
// sortString(["lait", "beurre", "fromage", "yaourt"]) // ["beurre", "fromage", "lait", "yaourt"]

// const sortString = (arr) => {
//     return arr.sort();
// }

// console.log (sortString (["Banana", "Orange", "Apple", "Mango"]))
// console.log (sortString (["lait", "beurre", "fromage", "yaourt"]))

// EXERCICE 26
// Écris une fonction qui étant donné deux angles d'un triangle renvoie la mesure du troisième angle.
// ( Rappel : la somme des trois angles d'un triangle est toujours égale à 180 degrés )
// Exemple :
// otherAngle(30, 60) // 90
// otherAngle(60, 60) // 60
// Indice : Pour trouver le troisième angle, tu dois soustraire la somme des deux angles donnés à 180 degrés.

// const otherAngle = (angle1, angle2) => {
//     return 180 - (angle1 + angle2);
// };

// EXERCICE 27
// Écris une fonction qui peut déterminer si une année est une année bissextile ou non. Elle doit renvoyer true si c'est le cas, sinon false.
// ( Rappel : Une année bissextile est une année contenant 366 jours au lieu de 365. Elle est donc plus longue qu'une année normale. Une année bissextile a lieu tous les 4 ans. )
// Exemple :
// isLeapYear(2020) // true
// isLeapYear(2021) // false
// Indice : Pour savoir ça tu peux utiliser le modulo. Si une année est divisible par 4 et que le reste de la division est égal à 0, alors c'est une année bissextile.

// function isLeapYears(year) {
//     if (year % 4 === 0 ) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLeapYears(2020));

// EXERCICE 28

// Voici un example de tableau d'animaux. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renvoie un nouveau tableau qui lui même contient deux sous-tableaux. Le premier sous-tableau doit contenir les animaux domestiques et le second les animaux sauvages. Les animaux domestiques doivent être triés par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé.
// Exemple :
// sortAnimals(animals) // [["Cat", "Dog", "Donkey", "Pigeon", "Turtle"], ["Eagle", "Monkey", "Panda", "Crocodile"]]
// Indice : Oubliez pas que tu peux créer des variables qui contiennent des tableaux vides et que tu peux ajouter des éléments à un tableau avec la méthode push(). Mais vu que tu dois analyser le tableau d'animaux pour le trier, tu dois utiliser une boucle et faire des conditions if pour savoir si l'animal est domestique ou sauvage. Et tu dois trier les animaux domestiques par ordre alphabétique et les animaux sauvages par ordre alphabétique inversé. Pour trier un tableau par ordre alphabétique tu peux utiliser la méthode sort(). Pour trier un tableau par ordre alphabétique inversé tu peux utiliser la méthode reverse().


// const sortAnimals = (animals) => {
//     let domesticAnimals = [];
//     let wildAnimals = [];
//     const domesticList = ["Cat", "Dog", "Donkey", "Pigeon", "Turtle"];
//     for (let animal of animals) {
//         if (domesticList.includes(animal)) {
//             domesticAnimals.push(animal);
//         } else {
//             wildAnimals.push(animal);
//         }
//     }
//     domesticAnimals.sort();
//     wildAnimals.sort().reverse();
//     return [domesticAnimals, wildAnimals];
// }

// const animals = ["Dog", "Cat", "Eagle", "Panda", "Monkey", "Donkey", "Crocodile", "Turtle", "Pigeon"];
// console.log(sortAnimals(animals));

// EXERCICE 29

// Un employé de théatre souhaite obtenir la liste de tous les sièges de sa salle principal. Dans la salle les places sont réparties comme suit :
// - Il y a 26 colonnes de sièges, numérotées de "1" à "26".
// - Chaque colonne contient 100 sièges, numérotés de "1" à "100".

// Complète la function theatreSieges() qui doit renvoyer un tableau où chaque sous-tableau répertorie les positions des siègnes dans une rangée.
// Exemple  du résultat attendu :
// [
// ["1-1", "1-2", "1-3", ..., "1-99", "1-100"],
// ["2-1", "2-2", "2-3", ..., "2-99", "2-100"],
// ["3-1", "3-2", "3-3", ..., "3-99", "3-100"],
// ...
// ["26-1", "26-2", "26-3", ..., "26-99", "26-100"]
// ]

// Indice : Tu dois utiliser deux boucles imbriquées pour créer les sous-tableaux. La première boucle doit parcourir les colonnes et la seconde boucle doit parcourir les sièges de chaque colonne.

// const theatreSieges = () => {
//     const result = [];

//     for (let col = 1; col <= 26; col ++) {
//         const rangee = [];

//         for (let siege = 1; siege <= 100; siege ++) {
//             rangee.push(`${col}-${siege}`);
//         }
//         result.push(rangee);
//     }
//     return result;
// }

// console.log(theatreSieges());

// EXERCICE 30

/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.

["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/
//Indice : Tu dois utiliser une boucle for pour parcourir le tableau et une condition if pour savoir si notre équipe a gagné, perdu ou fait match nul. Et tu dois ajouter les points de chaque match à une variable score qui doit être initialisée à 0. Et tu dois retourner la variable score à la fin de la fonction.

// const calculerScore = (result) => {

//     let score = 0; 

//     for (let i = 0; i < result.length; i++) {
//         let [notreScore, autreScore] = result[i].split(':').map(Number);
//         if (notreScore > autreScore) {
//             score += 3;
//         } else if (notreScore === autreScore) {
//             score += 1;
//         }
//     }
//     return score; 
// }

// const resultats = ["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"];
// console.log(calculerScore(resultats));

// EXERCICE 31

/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/



// EXERCICE 32

// Écris une fonction generatedCharacter qui crée de manière aléatoires des personnages donjon et dragon avec une classe et des noms de personnages. La fonction doit renvoyer un tableau de personnages.



//----------------------------------------------------------------------------------------------//

// EXERCICE 33

// Implémenter la fonction filterDuplicate qui prend un tableau en paramètre et qui doit renvoyer un tableau sans doublons.

// Exemple du résultat attendu :
// filterDuplicate([1, 2, 2, 3, 4, 4, 5]) // [1, 2, 3, 4, 5]



// EXERCICE 34

// Écrivez une fonction judgeFaces qui prend un tableau de grimaces représentées par des chaînes de caractères Emoji en entrée et renvoie un objet avec les scores pour chaque type de grimace. Vous devez utiliser la méthode map et la méthode reduce

// Exemple du résultat attendu :
// judgeFaces(["😀", "😂", "😄", "😂", "😁", "😂", "😄", "😀"]) // { '😀': 10, '😁': 4, '😂': 9, '😃': 0, '😄': 2 }


// EXERCICE 35

// Ecrivez une fonction qui prend en paramètre un tableau de lettre et qui doit retourner un mot formé par ces lettres.
// Exemple : ["H", "e", "l", "l", "o"] => "Hello"

// EXERCICE 36

//  // Écrivez une fonction cartes qui génère un jeu de 52 cartes à jouer. Chaque carte est représentée par une chaîne, avec la valeur de la carte suivie de sa couleur. Elles sont représentées par les caractères suivants : ♠, ♥, ♦, ♣. Les valeurs des cartes sont représentées par les chaînes suivantes : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A. La fonction doit renvoyer un tableau de chaînes, avec chaque chaîne représentant une seule carte.

// Exemple :

// [  "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠", "A♠",  "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", "A♥",  "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦", "A♦",  "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣", "A♣"]

// Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
// lui-même contenant deux sous-tableaux :
// Le premier contient uniquement des devs web seniors
// Le second ne contient que des data analysts seniors
// (Étant donné qu'une personne est senior si elle a 5 ans d'expérience ou plus)

// const persons = [
//   { name: 'Mary', experience: 2, job: 'web dev' },
//   { name: 'Tony', experience: 6, job: 'data analyst' },
//   { name: 'John', experience: 2, job: 'data analyst' },
//   { name: 'Jane', experience: 6, job: 'web dev' },
//   { name: 'Maggie', experience: 2, job: 'web dev' },
//   { name: 'Leonardo', experience: 2, job: 'data analyst' },
//   { name: 'Carla', experience: 4, job: 'data analyst' },
//   { name: 'Mickael', experience: 7, job: 'web dev' },
//   { name: 'Penelope', experience: 7, job: 'web dev' },
//   { name: 'Homer', experience: 5, job: 'data analyst' },
//   { name: 'Leonardo', experience: 2, job: 'data analyst' },
//   { name: 'Carla', experience: 4, job: 'web dev' },
//   { name: 'Lisa', experience: 3, job: 'web dev' },
//   { name: 'Millie', experience: 5, job: 'data analyst' },
//   { name: 'Penelope', experience: 7, job: 'web dev' },
// ];

// const filterTabSeniorAndAnalyst = (arrayPersons) => {
// const seniorDav = []
// const seniorData = []

//  for (let i = 0; i < arrayPersons.length; i++){
//    const person = arrayPersons[i];

//    if (person.experience >= 5 && person.job === "web dev") {
//     seniorDav.push(person)
//    }
//    if (person.experience >= 5 && person.job === "data analyst"){
//     seniorData.push(person)
//    }
//  }
// return [seniorDav, seniorData];
// };

// console.log (filterTabSeniorAndAnalyst(persons));
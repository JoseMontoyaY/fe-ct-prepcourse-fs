/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   arrayOfArrays = [];
   for (let key in objeto) {
      arrayOfArrays.push([key,objeto[key]]);
   }
   return arrayOfArrays
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   charactersCounted = {};
   for (let index = 0; index < string.length; index++) {
      if (charactersCounted.hasOwnProperty(string[index])) {
         charactersCounted[string[index]]=charactersCounted[string[index]]+1;
      } else {
         charactersCounted[string[index]] = 1;
      }
   } 
   return charactersCounted
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var lowerString = ""
   var upperString = ""
   for (let index = 0; index < string.length; index++) {
      if (string[index]===string[index].toUpperCase()) {
         upperString = upperString+string[index];
      } else {
         lowerString = lowerString+string[index];
      }
   }
   return upperString+lowerString
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabraInvertida = ""
   for (let index = 0; index < frase.length; index++) {
      palabraInvertida = frase[index]+palabraInvertida;
   }
   fraseInvertida = palabraInvertida.split(" ").reverse().join(" ")
   return fraseInvertida
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numInvertido = parseInt(numero.toString().split("").reverse().join(""))

   if (numero===numInvertido) {
      return "Es capicua"
   } else {
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newString = ""
   for (let index = 0; index < string.length; index++) {
      if (string[index]=== "a" || string[index]==="b" || string[index]==="c") {
         continue
      } else {
         newString = newString+string[index];
      }
   }
   return newString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a,b){
      return a.length - b.length
   })
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var longArray = [];
   var shortArray = [];
   var commonNums = [];
   if (array1>array2) {
      longArray = array1
      shortArray = array2
   } else {
      longArray = array2
      shortArray = array1
   }
   for (let index = 0; index < longArray.length; index++) {
      if (shortArray.includes(longArray[index])) {
         commonNums.push(longArray[index])
      }
   }
   return commonNums
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

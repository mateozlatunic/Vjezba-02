
// -------------------------------------- Zadaci za Vjezbu II ------------------------------------------------- //

// 1. Preokreni string - Ovo smo rijesili, ali ako mozes bolje - napravi bolje
// INPUT - f(abc); -> OUTPUT - cba

/*
function xy(unos){
   let rijec=unos.split("").reverse().join("");
   return rijec;
}
console.log(xy("yoBdooooG"));
*/

//  ILI

/*
function x (unos){
   let y="";
   for(let i=unos.length-1; i>=0; i--){
      y+=unos[i];
   }
   return y;
}
console.log(x("yob"));
*/
// -------------------------------------------------------------------------------------- //


// 2. Je li string palindrom?
// INPUT - f(ana); -> OUTPUT - true

/*
function isPalindrom(string) {
   const reversedString = string.split("").reverse().join("");
   if (string === reversedString){
      return true;
   }
 }
 console.log(isPalindrom("ANA"));
*/

//   ILI
/*
function palindrom(unos){
   let nap=unos;
   let sup=unos.split("").reverse().join("");
   if(nap==sup){
      return true;
   }
}
console.log(palindrom("ANA"));
*/

// --------------------------------------------------------------------------------------- //

// 3. Makni odredeno slovo iz stringa
// INPUT - f(abcdefghd, d); -> OUTPUT - (abcefgh)

 /*
 ->  'replace(/ +/g, '')' ova linija koda koristi metodu replace niza u kombinaciji
     s regularnim izrazom da ukloni sve razmake u nizu.

 ->   '/ +/' je regularni izraz koji traži jedan ili više uzastopnih razmaka.
      + označava da se razmak mora pojaviti jedan ili više puta.

 ->   g na kraju izraza označava "globalno" pretraživanje, što znači da će se traženi izraz
      tražiti u cijelom nizu, a ne samo u prvom pojavljivanju.

->    Kad se ta linija koda izvrši, svi razmaci u nizu bit će zamijenjeni praznim stringom,
      a funkcija će vratiti novi niz bez razmaka.
*/

/*
function remove(str, slovo) {
   // koristimo metodu split da pretvorimo string u niz
   // zatim koristimo metodu join da spojimo elemente niza u novi string
   // pritom koristimo metodu replace da uklonimo sva pojavljivanja traženog slova
   return str.split(slovo).join('').replace(/ +/g, '');
 }
 
 // primjer poziva funkcije
 let rez = remove("dalamalakala","a");
 console.log(rez); // izlaz: abcefgh
*/

// --------------------------------------------------------------------------------------- //

// 4. Makni vise odredenih slova
// INPUT - f(abcdefghd, [c, d]); -> OUTPUT - (abefgh)

/*
-> Ova linija koda koristi metode filter i join niza da ukloni sve znakove navedene
   u nizu letters iz stringa.

-> filter metoda vraća novi niz koji sadrži sve elemente koji ispunjavaju uvjet definiran u
   funkciji koju smo joj predali.

-> 'char => !letters.includes(char)' je lambda funkcija koja provjerava nalazi li se trenutni znak
   (char) u nizu letters. Ako se ne nalazi, vraća true, a ako se nalazi, vraća false.

-> '!letters.includes(char)' koristi 'includes' metodu da provjeri nalazi li se trenutni znak u nizu letters,
   a ! ispred toga invertira logičku vrijednost rezultata, tako da se funkcija vraća true ako znak nije pronađen
   u nizu letters.

-> Nakon filtriranja, join metoda spaja sve preostale znakove u novi string bez razmaka.

-> Kad se ta linija koda izvrši, svi znakovi u nizu letters bit će uklonjeni, a funkcija će
   vratiti novi niz bez tih znakova.
*/

/*
function removeLetters(str, letters) {
   // koristimo metodu split da pretvorimo string u niz
   // zatim koristimo metodu filter da uklonimo sva pojavljivanja traženih slova
   // pritom koristimo metodu join da spojimo elemente niza u novi string
   return str.split('').filter(char => !letters.includes(char)).join('');
 }
 
 // primjer poziva funkcije
 let result = removeLetters('abcdefghd', ['a', 'd', 'e']);
 console.log(result); // izlaz: abefgh
 */
 
// --------------------------------------------------------------------------------------- //

// 5. Ispisi slova koja se ponavljaju
// INPUT - f(abbcdeefff); -> OUTPUT - (bcdef)

/*

-> indexOf je ugrađena metoda u JavaScriptu koja se koristi za pronalaženje pozicije prvog
   pojavljivanja određene vrijednosti u nizu ili stringu.

-> Njegova sintaksa je 'stringOrArray.indexOf(searchValue, fromIndex)' gdje:
+  'stringOrArray' je niz ili string u kojem se vrši pretraživanje
+  'searchValue' je vrijednost koju tražimo
+  'fromIndex' (opcionalni parametar) označava poziciju od koje se počinje pretraživati

*/

/*
function findDuplicateLetters(str) {
   let result = '';
   for (let i = 0; i < str.length; i++) {
     if (str.indexOf(str[i]) !== i && result.indexOf(str[i]) === -1) {
       result += str[i];
     }
   }
   return result;
 }
 console.log(findDuplicateLetters('mara')); 
*/

// --------------------------------------------------------------------------------------- //

// 6. Pretrazi rijec u recenici
// INPUT - f(Ne pada mi nista pametno na pamet, na); -> OUTPUT - (true)

/*
-> Funkcija searchWord ima dva parametra: sentence koji predstavlja rečenicu u kojoj tražimo riječ,
   i word koja predstavlja riječ koju tražimo.

-> Unutar funkcije, koristimo metodu includes() na sentence stringu kako bismo provjerili postoji li word
   u rečenici. Metoda includes() vraća true ako se traženi string nalazi u zadanom stringu, inače vraća false. 
*/

/*
function searchWord(sentence, word) {
   return sentence.includes(word);
 }

const sentence = "Ne pada mi nista pametno na pamet, na";
const word = "na";
const isWordInSentence = searchWord(sentence, word);
console.log(isWordInSentence); // true
*/

// --------------------------------------------------------------------------------------- //

// 7. Prvo i zadnje slovo prebaci iz malog u veliko ili iz velikog u malo
// INPUT - f(I dalje mi ne pada mi nista pametno na pamet); -> OUTPUT - (i dalje ... na pameT)

/*
function changeFirstAndLastLetter(sentence) {
   const firstLetter = sentence[0];
   const lastLetter = sentence[sentence.length - 1];
   const middleSentence = sentence.slice(0, -1);
   const newFirstLetter = firstLetter === firstLetter.toLowerCase() ? firstLetter.toUpperCase() : firstLetter.toLowerCase();
   const newLastLetter = lastLetter === lastLetter.toLowerCase() ? lastLetter.toUpperCase() : lastLetter.toLowerCase();
   return newFirstLetter + middleSentence + newLastLetter;
 }

const sentence = "I dalje mi ne pada mi nista pametno na pamet";
const newSentence = changeFirstAndLastLetter(sentence);
console.log(newSentence); // "i dalje mi ne pada mi nista pametno na pameT"
*/

// ============================== BONUS: Vjezba za kolokvij ============================== //
// 1. Implementirajte funkciju koja prima polje stringova i vraća najkraći string:
// INPUT = ["aaa", "bbbb", "cc", ""] -> OUTPUT = f(INPUT) //"cc"

/*
function najkraciString(polje) {
   let najkraci = null;
   for (let i = 0; i < polje.length; i++) {
     let trenutni = polje[i];
     if (trenutni.length > 0 && (najkraci === null || trenutni.length < najkraci.length)) {
       najkraci = trenutni;
     }
   }
   return najkraci;
 }
console.log(najkraciString(["abcd", "ab"]));
*/

// --------------------------------------------------------------------------------------- //

// 2. Implementirajte funkciju koja prima polje stringova i vraća najveci string:
// INPUT = ["aaa", "bbbb", "cc", ""] -> OUTPUT = f(INPUT) //"bbbb"
/*
function najveciString(polje) {
   let najveci = null;
   for (let i = 0; i < polje.length; i++) {
     let trenutni = polje[i];
     if (trenutni.length > 0 && (najveci === null || trenutni.length > najveci.length)) {
       najveci = trenutni;
     }
   }
   return najveci;
 }
console.log(najveciString(["abcd", "ab"]));
*/

// --------------------------------------------------------------------------------------- //

// 3. Implementirajte funkciju koja prima polje i vraća polje u kojemu se nalaze podaci koji se
//    pojavljuju točno jednom:
// INPUT = [1, 2, 1, 3, 1, 4, 1, 5, "a", "a", "b", "c"]
// OUTPUT = f(INPUT) //[1, 2, 3, 4, 5, "a", "b", "c"]
/*
function ukloniDuplikate(polje) {
   return polje.filter(function (vrijednost, index, polje) {
     return polje.indexOf(vrijednost) === index && typeof vrijednost !== "number";
   });
 }
 console.log(ukloniDuplikate(['a','a','b']));
 */
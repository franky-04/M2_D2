/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
i principali titpi di dato in js sono:
string    -> serve a dichiarare variabili che conterranno testo
number    -> per variabili che conterranno numeri di qualsiasi tipo
boolean   -> per variabili che conterranno solo due valori associati a true e false
undefined -> per indicare che la variabile è stata dichiarata ma non inizializzata 
null      -> per indicare l'assenza di valore

altri tipi di dato sono BigInt per rappresentare numeri molto grandi e Symbol e Object ed Array

*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
 

/* SCRIVI QUI LA TUA RISPOSTA 
Un ogetto javascript è un tipo di dato che al suo interno contiene delle proprieta ognuna col un valore, ecco un esempio di ogetto vuoto:
let obj = {}; 
let obj = {
    prop1: "ciao",
    prop2: 19
}
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//let x = 12; let y = 20; let somma = 0; somma = x + y;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let nome = "Giancarlo"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//
// 4 - x
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "John";
let name2 = "john";

if (name1 !== name2) console.log("stringhe diverse");

console.log(name1.toLowerCase() === name2.toLowerCase());

/* SCRIVI QUI LA TUA RISPOSTA */

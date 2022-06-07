/*
Snack 3
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

/*symbols 
> <
``
&&
*/

//My array of names
const myArray = ["Michele", "Fabio", "Roberto", "Giovanni", "Simone", "Chiara"];

//I have create a new array where i'll push names
const newArray = [];

//i have created 2 numbers, one min and one max
const min = 1;
const max = 5;

//I try to search through the index of names between the minimum index and the maximum index.
myArray.forEach((element, index , myArray) => {
    // console.log(myArray);
    if(index > min && index < max){
        newArray.push(element);
    }
})
//i'll stamp my newArray with the names includeds between 1 and 5
console.log(newArray);
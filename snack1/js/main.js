/*
Consegna esercizio:
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

/*symbols 
> <
``
*/

//I'll go to create an array of elements
const containerBikes = [
{
    nome: "triban",
    peso: 4,
},
{
    nome: "van rysel",
    peso: 3,
},
{
    nome: "3T",
    peso: 9,
},
{
    nome: "protek bikes gravel",
    peso: 2,
},
{
    nome: "btwin",
    peso: 5,
},
];

const containerLightBike = document.querySelector(".containerBikes");

//I use the destructuring property to extrapolate the keys I need to read
let {nome, peso} = containerBikes[3];
console.table(containerBikes);

let lightBike={
    nome,
    peso,
};
//for loop
for(let i = 1 ; i<containerBikes.length; i++){
    //object with keys name and weight
    const bici = containerBikes[i];

    //condition for my lightBike
    if(lightBike.peso > bici.peso){
        lightBike=bici
    };

    const template = `<div class="col 12">
                        <h1>${nome}</h1>
                        <h2>${peso}</h2>                 
                      </div>
                     `

    containerLightBike.innerHTML = template; 
}
//I print to see if the result is correct
console.log(lightBike)




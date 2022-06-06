/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/
/*symbols 
> <
``
*/

//array emptym,where I will put names and fouls suffered
const containerEmptyFotball =[];

//array with football club
const containerFootballClub = [
    {
        nome: "Inter" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Milan" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Roma" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Lazio" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Spezia" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Verona" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Atalanta" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Chievo" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Cesena" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Juventus" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Cosenza" ,
        puntiFatti :0,
        falliSubiti:0,
    },
    {
        nome: "Fiorentina" ,
        puntiFatti :0,
        falliSubiti:0,
    },
];
console.table(containerFootballClub);

//For loop
for(let i = 0; i<containerFootballClub.length; i++){

    const puntiFatti = Math.floor(Math.random() * 10);
    const falliSubiti = Math.floor(Math.random() * 10);
    // console.log("Punti:", puntiFatti);
    // console.log("Falli:",falliSubiti);

    containerFootballClub[i] ={
        ...containerFootballClub[i],
        puntiFatti,
        falliSubiti,
    }
}
console.table(containerFootballClub);
/*
Snack 4
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: ‘Marco’, id: 213, grades: 78 },
    { name: ‘Paola’, id: 110, grades: 96 },
    { name: ‘Andrea’, id: 250, grades: 48 },
    { name: ‘Gaia’, id: 145, grades: 74 },
    { name: ‘Luigi’, id: 196, grades: 68 },
    { name: ‘Piero’, id: 102, grades: 50 },
    { name: ‘Francesca’, id: 120, grades: 84 },
  ];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. 
    Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/


/*symbols 
> <
``
&&
*/


let students = [
    {
        nome: "Marco",
        id: "213",
        grades: 78,
    },
    {
        nome: "Paola",
        id: "110",
        grades: 96 ,
    },
    {
        nome: "Andrea",
        id: "250",
        grades: 48,
    },
    {
        nome: "Gaia",
        id: "145",
        grades: 74,
    },
    {
        nome: "Luigi",
        id: "196",
        grades: 68,
    },
    {
        nome: "Piero",
        id: "102",
        grades: 50,
    },
    {
        nome: "Francesca",
        id: "120",
        grades: 84,
    },
];

//I'll create new array with map and toUpperCase
const newStudentsMap = students.map((student, i, students) => {
    return student.nome.toUpperCase();
})
console.table(newStudentsMap);



//I'll create new array students with grades > 70
const newStudentsFilter = students.filter((student) => {
return student.grades > 70;
})
console.table(newStudentsFilter);

//I'll create new array with grades > 70 && id > 120.
const bestStudents = students.filter ((student) =>{
return student.grades > 70 && +student.id > 120;
})
console.table(bestStudents);
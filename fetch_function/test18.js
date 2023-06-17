fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })

// -----------------------------------

fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    .then((response) => {
        console.log(response) })

// -----------------------------------

let t
fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        t = data
    })

// console.log(t)
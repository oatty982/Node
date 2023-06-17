let url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'
let d
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        d = data
        console.log(data);
    }).catch(err =>{
        console.log('incompete fetch :' + err)
    })
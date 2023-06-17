let url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'
let d

function addTag(label, content) {
    let p = document.createElement('p')
    p.innerText = `${label} : ${content}`
    document.body.appendChild(p)
}

// (async () => {
//     try {
//         const resp = await fetch(url)
//         d = await resp.json()
//         console.log(d)
//     }catch(err) { console.error('incompete fetch :' + err) }
// }) ()

(async () => {
    try {
        const resp = await fetch(url)
        d = await resp.json()
        for(let key in d)
            addTag(key, d[key])
    }catch(err) { console.error('incompete fetch :' + err) }
}) ()

// for(let key in d)
//     console.log(key, d[key])
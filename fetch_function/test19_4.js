let url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'
let d

(async () => {
    try {
        const resp = await fetch(url)
        d = await resp.json()
        console.log(d)
    }catch(err) { console.error('incompete fetch :' + err) }
}) ()
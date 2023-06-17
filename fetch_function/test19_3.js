let url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'
let d

async function runFetch() {
    try {
        const resp = await fetch(url)
        const data = await resp.json()
        d = data
        console.log(data)
    }catch(err) { console.error('incompete fetch :' + err) }
}

runFetch()
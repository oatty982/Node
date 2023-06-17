function showText(text, time) {
    return new Promise( rs => {
        setTimeout(() => {
           console.log(text) 
           rs()
        }, time);
    })
}

showText('1', 1000)
.then ( () => showText('2', 1000) )
.then ( () => showText('3', 1000) )
.then ( () => showText('4', 1000) )
.then ( () => console.log('Done') )
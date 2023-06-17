function showText(text, time) {
    return new Promise( (rs ,rj) => {
        setTimeout(() => {
           console.log(text) 
           rs()
        }, time);
    })
}

showText('1', 1000)
.then ( () => { return showText('2'), 1000})
.then ( () => { return showText('3'), 1000})
.then ( () => console.log('4'))
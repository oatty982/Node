const os = require('os');

tmem = os.totalmem();
fmem = os.freemem();
console.log(`Total Ram - ${tmem} and Free Memory - ${fmem}` );
console.log(`Usage - ${tmem - fmem}`);
console.log(os.hostname());
 
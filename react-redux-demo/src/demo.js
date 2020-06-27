const { uniqueNamesGenerator, starWars } = require('unique-names-generator');
 
const randomName = uniqueNamesGenerator({ dictionaries: [starWars] ,length:1}); // big_red_donkey
 
console.log(randomName);
const fs = require('fs')
const util = require('util')
let charSet;
fs.readFile('char-set.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  charSet = parseCharacterSet(data)
  console.log(util.inspect(encode('Hi, Booleaners!', 4)))
  // Expected console output => '391482053320201710061910232458'
})
const encode = (string, key) => {
  let number;
  return string.split('').map(char => { 
    number = (parseInt(charSet[char]) + key) % 99; 
    console.log('charSet[char] :'+charSet[char]);
 
   return number.toString().padStart(2, '0') }).join('')
}
const parseCharacterSet = (data) => {
  let result = data.split('\n').map(pair => pair.split(', '));
result.forEach(splitPair => result[splitPair[0]] = splitPair[1]);
for (const aResult of result) {
  console.log('result[0] :' + aResult[0]+' result[1] :' + aResult[1]);
}
 
  return result
}



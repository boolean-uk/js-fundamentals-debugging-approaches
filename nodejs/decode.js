const fs = require("fs");
const util = require("util");
let charSet;
fs.readFile("char-set.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const chunk = (array, chunk_size) => {
    let chunks = [];
    while (array.length) {
      chunks.push(array.splice(0, chunk_size));
    }
    console.log("chunk :" + chunks);
    return chunks;
  };

  const parseCharacterSet = (data) => {
    let result =  data.split('\n').map(pair => pair.split(', '));
    for (const aResult of result) {
      console.log('result[0] :' + aResult[0]+' result[1] :' + aResult[1]);
    }
    return result;
  }
  const invert = (value) => {
    let newObj = {};
    for (const key in charSet) {
    
        if( key === value ) {
          newObj=charSet[value][0];
       }
       
    }
    return newObj;
  }
  const decode = (string, key) => {
    return chunk(string.split(''),2)
      .map((pair) => {
        let cipherPair = parseInt(pair.join(''));
        console.log('cipherPair',cipherPair);
        let number = (99 + (cipherPair - key)) % 99;
        console.log("number:" + number);
        return invert(number.toString());
      }).join('');
  };
  charSet = parseCharacterSet(data);
  console.log(util.inspect(decode("391482053320201710061910232458", 4)));
  // Expected console output => 'Hi, Booleaners!'
});

const fs = require("fs");
const util = require("util");
let charSet;

const encode = (string, key) => {
	return string
		.split("")
		.map((char) => {
			let number = (parseInt(charSet[char]) + key) % 99;
			return ("" + number).padStart(2, "0");
		})
		.join("");
};

const parseCharacterSet = (data) => {
	debugger;
	let result = {};
	data.split("\n")
		.map((pair) => pair.split(/(?<=.{1}),/g))
		.forEach((splitPair) => (result[splitPair[0]] = splitPair[1]));
	return result;
};

fs.readFile("./char-set.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	charSet = parseCharacterSet(data);
	console.log(util.inspect(encode("Hi, Booleaners!", 4), false, null, true));
	// Expected console output => '391482053320201710061910232458'
});

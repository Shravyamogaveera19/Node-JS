// console.log(arguments);
// console.log(require("module").wrapper);

//module.exports
const C = require("./testmodule1");
const calc1 = new C();
console.log(calc1.add(2, 5));

//exports
//const calc2 = require("./testmodule2");
const { multiply } = require("./testmodule2");
console.log(multiply(2, 5));

//Caching
require("./testmodule3")();
require("./testmodule3")();
require("./testmodule3")();
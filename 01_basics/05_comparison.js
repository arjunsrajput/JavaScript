console.log(2>1) //true
console.log(2<1) //false
console.log(2>=1) //true
console.log(2<=1) //false
console.log(2==1) //false
console.log(2!=1) //true

console.log("2">1) //true
console.log("02">1) //true
// Normal check
console.log("2"==2) //true convert string into number and then compare dont compare datatype compare only value
// Strict check: Compare values as well as datatypes
console.log("2"===2) //false

//Avoid these conversions
console.log(null>0) //false
console.log(null<0) //false
console.log(null>=0) //true
console.log(null<=0) //true
console.log(null==0) //false

console.log(undefined>0) //false
console.log(undefined<0) //false
console.log(undefined>=0) //false
console.log(undefined<=0) //false
console.log(undefined==0) //false

console.log(undefined==null) //true



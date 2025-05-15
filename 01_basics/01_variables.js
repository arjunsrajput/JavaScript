const accountId=12334
let accountEmail="arjun@gmail.com"
var accountPass="12345"
accountCity="Indore"
// (prefer not to use var bcz of issue of block scope and functional scope)
// accountId=55 //not allowed
// console.log(accoundId);
accountEmail="sara@gmail.com"
accountPass="999999"
accountCity="Ujjain"
let accountState;
console.table([accountId,accountEmail,accountPass,accountCity,accountState])

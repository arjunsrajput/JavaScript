const score=100
const temp=null //empty
let marks; //undefined by default

const id=Symbol('123')
const newId=Symbol('123')
console.log(id==newId); //false

//bigInteger

const bigInt=43453434343434345533n //just append n at the end(n is not necessary)
console.log(bigInt);

const heros=["Shaktiman","Naagraj","JuniorJi"] //Array defined
console.log(heros); //PrintArray

let objs={
    name : "arjun",   //object are defined in curly braces and can be stored in var and they are stored in the form of key-value pair
    age : 100
}

const myFun=function(){
    console.log("hello Duniya");
    
}
console.log(typeof id );
console.log(typeof bigInt);
console.log(typeof heros);
console.log(typeof objs);
console.log(typeof myFun);



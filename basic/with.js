//"use strict"

let sampleValue = 10;

let sampleObj = {

    name : "Hong",

    age : 22,

    value : "hi i'm value"

}

function doSomething(value) {

    with(value) {

        console.log(name); //Hong  -> 직접 객체 내부의 프로퍼티에 직접 접근이 가능

    }

}
console.log(doSomething(sampleObj));

//Strict mode code may not include a with statement
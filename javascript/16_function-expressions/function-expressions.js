console.log(sayHi1)
// console.log(sayHi2)

function sayHi1() {
    console.log("hi1")
}

let sayHi2 = function() {
    console.log("hi2")
}

sayHi1()
sayHi2()

console.log(sayHi1)
console.log(sayHi2)

let copyFunc = sayHi1
copyFunc()
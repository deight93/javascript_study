
let sum = (a, b) => a + b;
/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/
console.log(sum(1, 2))

let double = n => n * 2
console.log(double(10))

let sayHi = () => console.log("hi")
sayHi();

let age = 20
let welcome = (age < 18) ?
    () => console.log("hi") :
    () => console.log("hello");

welcome()

sum = (a, b) => {
    result = a + b;
    return result;
}
console.log(sum(20, 30))

console.log('meow'.repeat(3))

'use strict';
let message = "hello";
message = 1;

//num
let n = 123;
n = 12.235;

// Infinity는 어떤 숫자보다 더 큰 특수 값, 무한대(∞)를 나타냅니다.
console.log(1/0);
console.log(Infinity);

// NaN
// NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값입니다. 부정확하거나 정의되지 않은 수학 연산을 사용하면 계산 중에 에러가 발생하는데, 이때 NaN이 반환됩니다.
console.log("temp"/2);

//bigint
const bigInt = 12345561231231231231231231232312344353425234234234234234234234n;
console.log(bigInt)

//str
let str = "h";
let str2 = 'h2';
let phrase = `temp ${str}`

let myName = '김동환';
console.log(`하이 ${myName}`)
console.log(`결과임 ${1 + 2}`)

//bool
let tempChecked1 = true
let tempChecked2 = false
let isGreater = 4 > 1
console.log(isGreater)

// null
/*
자바스크립트의 null은 자바스크립트 이외 언어의 null과 성격이 다릅니다. 다른 언어에선 null을 '존재하지 않는 객체에 대한 참조’나 '널 포인터(null pointer)'를 나타낼 때 사용합니다.
하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용합니다.
*/
let tempNull = null;

// undefined
/*
undefined 값도 null 값처럼 자신만의 자료형을 형성합니다.
undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당됩니다.
*/
let age;
console.log(age);
age = 100;
console.log(age);
age = undefined;
console.log(age)

// typeof
console.log(typeof 1)
console.log(typeof "str")
console.log(typeof(true));


// let year = prompt('ECMAScript-2015', '')
// if (year < 2015) {
//     alert("too small")
// } else if (year > 2015) {
//     alert("too big")
// } else {
//     alert("yes")
// }

// let cond = (year == 2015)
// if (cond) {
//     alert("yes2")
//     alert("true2")
// } else if (year > 2015) {
//     alert("too big")
// } else {
//     alert("no2")
// }

let age = prompt('input age', '')
// let accessAllowed

// if (age > 18) {
//     accessAllowed = true
// } else {
//     accessAllowed = false
// }

// let accessAllowed = (age > 18) ? true : false

// alert(accessAllowed)

let message = (age < 3) ? 'baby hi' :
    (age < 18) ? 'h2' :
    (age < 100) ? 'hello' :
    "too old or another input"

alert( message )

if (age < 3) {
    message = 'baby hi';
  } else if (age < 18) {
    message = 'h2';
  } else if (age < 100) {
    message = 'hello';
  } else {
    message = 'too old or another input';
  }
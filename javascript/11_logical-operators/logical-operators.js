// alert( true || true )
// alert(false || true)
// alert( true || false)
// alert(false||false)

// if (1 || 0) {
//     alert( 'truthly')
// }

// let hour = 9
// isWeekend = false

// if (hour < 10 || hour > 18 || isWeekend) {
//     alert('not opentime')
// }

// console.log( 1 || 0 )
// console.log( null || 1 )
// console.log( null || 0 || 1)
// console.log( undefined || null || 0 )

// let firstName = "", lastNmae = "", nickname = "temp"

// console.log(firstName || lastNmae || nickname || "익명")


console.log( true && true )
console.log( false && true )
console.log( true && false )
console.log( false && false )

let hour = 12
let minute = 30

if (hour == 12 && minute == 30) {
    console.log('now 12:30')
}

if (1 && 0) {
    console.log("not work")
}

console.log( 1 && 0 )
console.log( 1 && 5 )

console.log( null && 5 )
console.log( 0 && "temp" )

console.log( 1 && 2 && null && 5 )
console.log( 1 && 2 && 5 )

console.log( !true )
console.log( !0 )

console.log( !!"non-empty-string" )
console.log( !!null )

console.log( Boolean("non-empty-string") )
console.log( Boolean(null) )

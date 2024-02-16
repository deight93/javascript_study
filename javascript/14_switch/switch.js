// let a = 2 + 2

// switch (a) {
//     case 3:
//         console.log("up")
//         // break
//     case 4:
//         console.log("ok")
//         // break
//     case 5:
//         console.log("down")
//         // break
//     default:
//         console.log("unknown")
// }


// let a = "1"
// let b = 0

// switch (+a) {
//     case b + 1:
//         console.log("execute")
//         console.log(`${a} ${b + 1}`)
//         break
//     default:
//         console.log("not work")
//         console.log(`${a} ${b + 1}`)
// }


// let a = 5

// switch (a) {
//     case 4:
//         console.log("correct")
//         break

//     case 3:
//     case 5:
//         console.log("incorrect")
//         console.log("repeat math class")
//         break
    
//     default:
//         console.log("weird result")

// }



let arg = prompt("input")

switch (arg) {
    case '0':
    case '1':
        alert('0 or 1')
        break
    case '2':
        alert('2')
        break
    case 3:
        alert('not work')
        break
    default:
        alert('unknown')
}
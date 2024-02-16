// let i = 0
// while (i < 3) {
//     console.log( i )
//     i++
// }

// let i = 3
// while (i) {
//     console.log( i )
//     i--
// }

// let i = 0

// do {
//     console.log(i)
//     i++
// } while (i > 3)

// let i
// let i = 0
// for  (; i < 3;) {
//     console.log(i++)
// }

// let sum = 0
// while (true) {
//     let value = +prompt("input number", '')
//     if (!value) break
//     sum += value
// }
// alert(sum)

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue
//     alert(i)
// }


outer: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`${i} ${j}`, '')
        if (!input) break outer
    }
}
alert('success')















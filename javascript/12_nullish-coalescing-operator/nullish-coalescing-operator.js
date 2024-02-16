let a = null, b = "a"
let x = (a !== null && a !== undefined) ? a : b
x = a ?? b

let firstName = null
let lastName = null
let nickname = undefined

console.log(firstName ?? lastName ?? nickname ?? "unknown")

// let height = 0
// console.log(height || 100)
// console.log(height ?? 100)



let height = null
let width = null

let area = (height ?? 100) * (width ?? 50)
console.log(area)

let xx
// xx = 1 && 2 ?? 3
xx = (1 && 2) ?? 3
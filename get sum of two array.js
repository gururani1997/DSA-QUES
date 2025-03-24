let arr1 = [1, 2, 3, 4]
let arr2 = [6]
arr1 = parseInt(arr1.join(""))
arr2 = parseInt(arr2.join(""))

let sum = arr1 + arr2
let digits = Array.from(String(sum))
console.log(digits)

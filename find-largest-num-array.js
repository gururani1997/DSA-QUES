let arr = [15, 2, 3, 44, 5,6,96,12]

let gts = arr.reduce((acc, red) => {
  if (acc > red) return acc
  else return red
}, 0)

console.log(gts)

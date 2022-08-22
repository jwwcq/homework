let arr = []
for (let i = 1; i <= 100; i++) {
    arr.push(i)
}
let sum = arr.reduce(function (arr, item) {
    return arr += item
}, 0)
console.log(sum);
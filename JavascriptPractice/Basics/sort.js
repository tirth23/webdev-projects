console.log([6, -2, 2, -7].sort())

function mysort(a, b) {
    if (a > b) {
        return 1
    } else if (b > a) {
        return -1
    } else {
        return 0
    }
}
console.log([6, -2, 2, -7].sort(mysort))
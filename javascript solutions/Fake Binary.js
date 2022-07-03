// 8kyu
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    x = x.split('')
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            console.log(i)
            x[i] = 0
        } else {
            x[i] = 1
        }
    }
    return x.join('')
}
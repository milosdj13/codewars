// 8kyu

// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
// Goodluck :)
// Check my other katas:
// Alphabetically ordered
// Case-sensitive!
// Not prime numbers




function nearestSq(n) {
    if (Math.sqrt(n) % 1 == 0) return n
    let lower = Math.trunc(Math.sqrt(n))
    let higher = lower + 1
    console.log()
    return higher ** 2 - n < n - lower ** 2 ? higher ** 2 : lower ** 2
}

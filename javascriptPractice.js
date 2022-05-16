///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7kyu
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
    return (a + b).toString(2)
}


// 2
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
    // range (1, 100)
    // (99+1)*(101)/2 = 50*101
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}


// 3
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    //  The Math.ceil() function always rounds a number up to the next largest integer.
    return Math.ceil(year / 100)
}


// 4
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    return name.charAt(0).toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`
}


// 5
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1
// result = 61000

// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
function past(h, m, s) {
    return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000
}


// 6
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {

    let arr = s1.concat(s2).split('')
    // transformating to Set to get DISTINCTED values
    let set = new Set(arr)

    return Array.from(set).sort().join('')     //   1 line solution also work
    // return Array.from(new Set(s1.concat(s2).split(''))).sort().join('')
}


// 7
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    return numbers.reduce((pre, cur) => pre + cur ** 2, 0)
}


// 8
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"
const numberToString = num => num.toString()


// 9
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
const even_or_odd = number => number % 2 == 0 ? "Even" : "Odd"



// 10
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    let min = Math.min(...numbers)
    let found = false
    let solution = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== min || found) {
            solution.push(numbers[i])
        } else {
            found = true
        }
    }
    return solution
}
// good solution, not mine
// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));



// 11
// Task
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
function SeriesSum(n) {
    let sum = 0;
    let div = 1;
    for (let i = 0; i < n; i++) {
        sum = sum + 1 / div
        div = div + 3
    }
    return sum.toFixed(2)
}


// 12
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
const makeNegative = num => num > 0 ? -num : num




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6kyu
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 13
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
function createPhoneNumber(numbers) {
    let solution = ``
    for (let i = 0; i < numbers.length; i++) {
        if (i === 0) {
            solution += `(${numbers[i]}`
        } else if (i === 2) {
            solution += `${numbers[i]}) `
        } else if (i == 5) {
            solution += `${numbers[i]}-`
        } else {
            solution += `${numbers[i]}`
        }
    }
    return solution
}



// 14
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
function narcissistic(value) {
    let arr = value.toString().split('')
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** arr.length
    }

    if (sum === value) {
        return true
    } else {
        return false
    }
}



// 15
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
const alphabetPosition = text => text.toLowerCase().split('').filter((el) => el >= "a" && el <= "z").map((el) => el.charCodeAt(0) - 96).join(' ')




// 16
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag(str) {

    str = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join("")

    if (str.length >= 140 || str < 1) {
        return false
    }
    return "#" + str
}




// 17
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
function toCamelCase(str) {
    if (str.length < 1) {
        return ''
    }
    if (str.indexOf("-") != -1) {
        str = str.split("-")
    } else {
        str = str.split("_")
    }

    str = str.map((word, index) => {
        if (index == 0) {
            return word
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }).join('')

    return str
}




// 18
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))
}




// 19
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
function persistence(num) {
    let arr = num.toString().split("")
    let solution = 0;

    while (arr.length > 1) {
        let result = 1;
        for (let i = 0; i < arr.length; i++) {
            result *= arr[i]
        }
        arr = result.toString().split("")
        solution++
    }
    return solution;
}






// 20
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
function cockroachSpeed(s) {
    return Math.trunc(s * 1000 * 100 / 60 / 60)
}





// 21
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
    return s.split('').map((el, ind) => el.toUpperCase() + el.repeat(ind).toLowerCase() + "-").join('').slice(0, -1)
}




// 22
// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153
// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.
function isNarcissistic(n) {
    let sum = 0
    let arr = n.toString().split('')
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** arr.length
    }
    return sum === n ? true : false
    // one line solution, must have index in order to get arr.length
    // return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
}




// 23
// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
function main(verb, noun) {
    return verb + noun
}













///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                    // 5kyu
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////













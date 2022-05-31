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





// 24
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
function minMax(arr) {
    let min = arr[0]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    return [min, max]
    // 1 row solution === ...arr means it goes in whole array and checks for min/max
    // return [Math.min([...arr]), Math.max([...arr])];
}





// 25
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.split('').filter(el => el != "!").join('')
}




// 26
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending) {
    return str.endsWith(ending) ? true : false
}




// 27
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return [i, j]
            }
        }
    }
    return 0;
}




// 28
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
function expandedForm(num) {
    return num.toString().split('').reverse().map((el, index) => {
        if (el != '0') {
            return `${el * (10 ** index)} + `
        }
    }).reverse().join('').slice(0, -3)
}




// 29
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
        if (count % 2 == 1) {
            return arr[i]
        }
    }
    return 0;
}





// 30
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
    return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40
}




// 31
// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.
var min = function (list) {
    return Math.min(...list)
}

var max = function (list) {
    return Math.max(...list)
}





// 32
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
function count(string) {
    const count = {}

    string.split('').forEach(el => {
        count[el] = count[el] ? (count[el] + 1) : 1
    })
    return count;
}




// 33
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
const smash = words => words.join(" ")




// 34
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
function findNb(m) {
    let sum = 0;
    let count = 1;
    while (m > sum) {
        sum = sum + Math.pow(count, 3)
        count++
    }
    if (sum == m) {
        return count - 1
    }
    return -1
}










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5kyu
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 35
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
    if (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) {
        return true
    }
    return false
}



// 36
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
function greet(name, owner) {
    return 'Hello '.concat(name === owner ? 'boss' : 'guest')
}



// 37
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
const binaryArrayToNumber = arr => {
    return arr.reverse().map((el, index) => el * 2 ** index).reduce((sum, cur) => sum + cur, 0)
};




// 38
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid.Write a function to help Bob with this calculation.class Kata {
class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }
}




// 39
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
const areaOrPerimeter = function (l, w) {
    return l === w ? l * w : (l + w) * 2
};




// 40
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
function descendingOrder(n) {
    return Number(n.toString().split('').sort().reverse().join(''))
}



// 41
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
var isSquare = function (n) {
    return n == parseInt(Math.sqrt(n)) ** 2 ? true : false
}



// 42
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior(data) {
    return data.map(el => {
        if (el[0] >= 55 && el[1] > 7) {
            return "Senior"
        }
        return 'Open'
    })
}




// 43
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {
    numbers = numbers.split(" ").sort((a, b) => a - b)
    return `${numbers[numbers.length - 1]} ${numbers[0]}`
}



// 44
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount(n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}


// 45
// Implement a function which multiplies two numbers.
function multiply(a, b) {
    return a * b
}





// 46
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string) {
    let regex = /([a-z])(?!.*\1)/g;
    return (string.match(regex)).length === 26
}





// 47
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN(pin) {
    return pin.split("").filter(el => !isNaN(el) && el != "\n").length === pin.length && (pin.length == 4 || pin.length == 6)
}





// 48
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s) {
    return s.split(' ').map(el => el.length).sort((a, b) => a - b)[0]
}




// 49
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {
    return array.map(el => -el)
}





// 50
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// Return True if yes, False otherwise :)
function hero(bullets, dragons) {
    return bullets >= dragons * 2
}






// 51
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
const quarterOf = (month) => {
    if (month < 4) return 1
    if (month < 7) return 2
    if (month < 10) return 3
    return 4

}





// 52
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
function likes(names) {
    if (names.length == 0) return "no one likes this"
    if (names.length == 1) return `${names[0]} likes this`
    if (names.length == 2) return `${names[0]} and ${names[1]} like this`
    if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}






// 53
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
    return arr.filter((el, index) => index % 2 == 0)
}






// 54 
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
function nbYear(p0, percent, aug, p) {
    let count = 0

    while (p0 < p) {
        // trunc because we dont consider 1.3 people valid number of people, its only 1
        p0 += Math.trunc(p0 * (percent / 100) + aug)
        count++
    }
    return count
}




// 55
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
function towerBuilder(nFloors) {
    let arr = new Array(nFloors)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = " ".repeat((nFloors * 2 - (1 + i * 2)) / 2) + "*".repeat(1 + i * 2) + " ".repeat((nFloors * 2 - (1 + i * 2)) / 2)
    }
    return arr
}




// 56
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
function twoSort(s) {
    return s.sort().shift().split('').join('***')
}




// 57
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
function testEven(n) {
    return n % 2 == 0
}






// 58
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}






// 59
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str) {
    let arr = str.toLowerCase().split('')
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return false
            }
        }
    }
    return true
}




//60 
// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions
// Information
// Messi goal scoring statistics:
// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5

// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals




// 61
function removeUrlAnchor(url) {
    return url.split('#')[0]
}

















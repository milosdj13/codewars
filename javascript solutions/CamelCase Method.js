// 6 kyu


// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)



String.prototype.camelCase = function () {
    return this.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('')
}
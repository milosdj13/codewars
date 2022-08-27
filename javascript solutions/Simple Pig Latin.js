// 5kyu

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str) {
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "!" || arr[i] == "?" || arr[i] == ".") {
            continue
        } else {
            let first = arr[i].charAt(0)
            arr[i] = arr[i].slice(1).concat(first).concat("ay")
        }
    }
    return arr.join(' ')
}


// 7kyu

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
	let arr = [];
	num = num.toString().split("");
	for (let i = 0; i < num.length; i++) {
		arr.push(num[i]);
		if (num[i] % 2 === 1 && num[i + 1] % 2 === 1) {
			arr.push("-");
		}
	}
	return arr.join("");
}

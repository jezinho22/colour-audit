// let myString = "This is <my tricky searchable string";

// var match = myString.match(/[a]/gi);
// var firstIndex = myString.indexOf(match[0]);
// var lastIndex = myString.lastIndexOf(match[match.length - 1]);

// console.log(match);
// console.log(firstIndex);
// console.log(lastIndex);

// let str = "Please locate where 'locate' occurs!";
// console.log(str.indexOf("locate")); // -1 if not found
// console.log(str.lastIndexOf("locate")); // -1 if not found
// console.log(str.indexOf("locate", 15));

// console.log(str.search("locate"));
// console.log(str.search(/locate/));

let text = `.side { width: 30%;
}
.content {
    width: 70%;
    background-color: #ddd333;
    color: #fff;
}
th {
    border: 1px solid #eee;
    color: #fff;
}
td {
}
<tr><td style="color:rgb(242, 195, 160)"></td><td style="color:rgb(242, 195, 160)"></td><td style="color:rgb(161, 180, 242)"></td></tr>
<tr><td style="color:hsl(26, 76%, 79%)"></td><td style="color:hsl(26, 76%, 79%)"></td><td style="color:hsl(226, 76%, 79%)"></td></tr>
`;
// console.log(text.match("ain"));
// console.log(text.match(/ain/));
// console.log(text.match(/ain/g)); // global search for ain
// console.log(text.match(/ain/gi)); // global ignoring case

// let myText = "This is me: looking, searching for a string";
// console.log(myText.search(/\:/));
// i = 0;
// for (i = 0; i < 20; i++) {
// 	console.log(myText.substring(19 - i, 19));
// 	h = myText.substring(19 - i, 19).search(/\:/);
// 	console.log(h);
// }
// console.log(text.lastIndexOf(" ", matchesArray[1].index));

// get all results for regex
const iterator = text.matchAll(
	/(\#[a-z0-9 A-Z]{6}|\#[a-z 0-9 A-Z]{3})|(rgb\(\s*(25[0-5]|2[0-4]\d|1[0-9]\d?|[1-9]\d?|0)\s*,\s*(25[0-5]|2[0-4]\d|1[0-9]\d?|[1-9]\d?|0)\s*,\s*(25[0-5]|2[0-4]\d|1[0-9]\d?|[1-9]\d?|0)\)\s*)/g
);

// convert outcome to array
let myArray = Array.from(iterator);
// get list of unique values
const uniques = new Set(myArray);
console.log(myArray[0]);

let counter = 0;
let colourCount = {};
// loop through unique values
for (item of uniques) {
	counter = 0;
	//compare value to regex results, and count each match
	for (i = 0; i < myArray.length; i++) {
		if (myArray[i] == item) {
			counter += 1;
		}
		// store in object
		colourCount[item] = counter;
	}
}
console.log(colourCount);

// More research needed - why does the value clear, the console restart,
// and variables reset? How do you then read the file?

// let userFilePath, userFile;
// console.log("Hello there");
// function getFile() {
// 	console.log("hiya");
// 	userFilePath = document.getElementById("file-selector").value;
// 	console.log(userFilePath);
// }
let myFile = `				<table>
<thead>
	<th style="color:black">Colour</th>
	<th style="color:yellowgreen">Peek</th>
	<th style="color:green">Location</th>
</thead>
<tbody>
	<tr><td style="color:#f2c3a0"></td><td style="border: 1px solid #f2c3a0"></td><td style="background-color:#a1b4f2"></td></tr>
	<tr><td style="color:hsl(26, 76%, 79%)"></td><td style="color:hsl(26, 76%, 79%)"></td><td style="color:hsl(226, 76%, 79%)"></td></tr>
	<tr><td style="color:rgb(242, 195, 160)"></td><td style="color:rgb(242, 195, 160)"></td><td style="color:rgb(161, 180, 242)"></td></tr>
	<tr><td style="color:hwb(26 63% 5%)"></td><td style="color:hsl(26, 76%, 79%)"></td><td style="color:hsl(226, 76%, 79%)"></td></tr>
	<tr><td style="color:rgb(242, 195, 160)"></td><td style="color:rgb(242, 195, 160)"></td><td style="color:rgb(161, 180, 242)"></td></tr>
</tbody>
</table>
`;
// console.log(file.length);
// let finds = "buttock Buttock bollock buttock jez jez jiminy";
// console.log(finds.match(/ock/));

// function findThem() {
// 	let haystack = "I learned to play the Ukulele in Lebanon.";
// 	let needle = "le";
// 	let pos = 0; // Position Ref
// 	let result = []; // Final output of all index's.
// 	let hayStackLower = haystack.toLowerCase();

// 	// Loop to check all occurrences
// 	while (hayStackLower.indexOf(needle, pos) != -1) {
// 		result.push(hayStackLower.indexOf(needle, pos));
// 		pos = hayStackLower.indexOf(needle, pos) + 1;
// 	}

// 	console.log("Final ", result); // Returns all indexes or empty array if not found
// }
// findThem("5");

// Function to validate the hexadecimalColor_code
// Regex to check valid hexadecimalColor_code
let regex = new RegExp(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/);
let regexString = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/;
//rgb: (/^rgb\((\d+),(\d+),(\d+)\)$/)

let keywords_color_regex = new RegExp(/^[a-z]*$/);
let hex_color_regex = new RegExp(/(#[0-9a-fA-F]{6}|[0-9a-fA-F]{3})?/);
let rgb_color_regex =
	/^rgb\(\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])%?\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])%?\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])%?\s*\)$/;
let rgba_color_regex =
	/^rgba\(\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])%?\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])%?\s*,\s*(0|[1-9]\d?|1\d\d?|2[0-4]\d|25[0-5])%?\s*,\s*((0.[1-9])|[01])\s*\)$/;
let hsl_color_regex =
	/^hsl\(\s*(0|[1-9]\d?|[12]\d\d|3[0-5]\d)\s*,\s*(0|[1-9]\d?|100)%\s*,\s*(0|[1-9]\d?|100)%\s*\)/;

// lots of loops needed

function isValidHexaCode(file) {
	console.log("Regex running");

	// Return true if the file matched the ReGex
	let found = regex.exec(file);
	console.log(file[found.index - 1]);
	console.log(found[0]);
	console.log(file.indexOf(regexString, 0));
	// console.table(found);
}
isValidHexaCode(myFile);

// make this list lowercase
let colorList = [
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisque",
	"Black",
	"BlanchedAlmond",
	"Blue",
	"BlueViolet",
	"Brown",
	"BurlyWood",
	"CadetBlue",
	"Chartreuse",
	"Chocolate",
	"Coral",
	"CornflowerBlue",
	"Cornsilk",
	"Crimson",
	"Cyan",
	"DarkBlue",
	"DarkCyan",
	"DarkGoldenRod",
	"DarkGrey",
	"DarkGreen",
	"DarkKhaki",
	"DarkMagenta",
	"DarkOliveGreen",
	"Darkorange",
	"DarkOrchid",
	"DarkRed",
	"DarkSalmon",
	"DarkSeaGreen",
	"DarkSlateBlue",
	"DarkSlateGrey",
	"DarkTurquoise",
	"DarkViolet",
	"DeepPink",
	"DeepSkyBlue",
	"DimGray",
	"DodgerBlue",
	"FireBrick",
	"FloralWhite",
	"ForestGreen",
	"Fuchsia",
	"Gainsboro",
	"GhostWhite",
	"Gold",
	"GoldenRod",
	"Grey",
	"Green",
	"GreenYellow",
	"HoneyDew",
	"HotPink",
	"IndianRed",
	"Indigo",
	"Ivory",
	"Khaki",
	"Lavender",
	"LavenderBlush",
	"LawnGreen",
	"LemonChiffon",
	"LightBlue",
	"LightCoral",
	"LightCyan",
	"LightGoldenRodYellow",
	"LightGrey",
	"LightGreen",
	"LightPink",
	"LightSalmon",
	"LightSeaGreen",
	"LightSkyBlue",
	"LightSlateGrey",
	"LightSteelBlue",
	"LightYellow",
	"Lime",
	"LimeGreen",
	"Linen",
	"Magenta",
	"Maroon",
	"MediumAquaMarine",
	"MediumBlue",
	"MediumOrchid",
	"MediumPurple",
	"MediumSeaGreen",
	"MediumSlateBlue",
	"MediumSpringGreen",
	"MediumTurquoise",
	"MediumVioletRed",
	"MidnightBlue",
	"MintCream",
	"MistyRose",
	"Moccasin",
	"NavajoWhite",
	"Navy",
	"OldLace",
	"Olive",
	"OliveDrab",
	"Orange",
	"OrangeRed",
	"Orchid",
	"PaleGoldenRod",
	"PaleGreen",
	"PaleTurquoise",
	"PaleVioletRed",
	"PapayaWhip",
	"PeachPuff",
	"Peru",
	"Pink",
	"Plum",
	"PowderBlue",
	"Purple",
	"Red",
	"RosyBrown",
	"RoyalBlue",
	"SaddleBrown",
	"Salmon",
	"SandyBrown",
	"SeaGreen",
	"SeaShell",
	"Sienna",
	"Silver",
	"SkyBlue",
	"SlateBlue",
	"SlateGrey",
	"Snow",
	"SpringGreen",
	"SteelBlue",
	"Tan",
	"Teal",
	"Thistle",
	"Tomato",
	"Turquoise",
	"Violet",
	"Wheat",
	"White",
	"WhiteSmoke",
	"Yellow",
	"YellowGreen",
];

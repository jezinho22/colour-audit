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
<tr><td style="color:rgb(0, 195, 160)"></td><td style="color:rgb(100, 195, 160)"></td><td style="color:rgb(200, 180, 242)"></td></tr>
<tr><td style="color:hsl(100, 76%, 79%)"></td><td style="color:hsl(200, 76%, 79%)"></td><td style="color:hsl(300, 76%, 79%)"></td></tr>
`;

const iterator = text.matchAll(
	(\#[a-z0-9 A-Z]{6}|\#[a-z 0-9 A-Z]{3})|(rgb\(\s*(25[0-5]|2[0-4]\d|1[0-9]\d?|[1-9]\d?|0)\s*,\s*(25[0-5]|2[0-4]\d|1[0-9]\d?|[1-9]\d?|0)\s*,\s*(25[0-5]|2[0-4]\d|1[0-9]\d?|[1-9]\d?|0)\)\s*)|(hsl\(\s*(0|[1-9]\d?|[12]\d\d|3[0-5]\d)\s*,\s*(0|[1-9]\d?|100)%\s*,\s*(0|[1-9]\d?|100)%\s*\))/g
);
//something still wrong with added hsl regex - try without and then add bit by bit
let myArray = Array.from(iterator);
// get list of unique values
const uniques = new Set(myArray);
for (item of myArray) {
	console.log(item[0]);
}
// which means there is a problem with the counting function
    
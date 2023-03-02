// More research needed - why does the value clear, the console restart,
// and variables reset? How do you then read the file?

// let userFilePath, userFile;
// console.log("Hello there");
// function getFile() {
// 	console.log("hiya");
// 	userFilePath = document.getElementById("file-selector").value;
// 	console.log(userFilePath);
// }
let file = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="colour-audit.js"></script>
		<script>
			console.log("Working?");
		</script>
		<style>
			body {
				width: 100%;
				margin: 0px;
			}
			.build {
				border: 1px solid #ffffff;
				padding: 10px;
			}
			footer {
			}
			main {
				display: flex;
				flex-flow: row nowrap;

				min-height: 300px;
			}
			.side {
				width: 30%;
			}
			.content {
				width: 70%;
			}
			th {
				border: 1px solid black;
				color: ;
			}
			td {
			}
			@media (max-width: 400px) {
				main {
					flex-direction: column;
				}
				.side {
					width: 100%;
				}
				.content {
					width: 100%;
				}
			}
		</style>
		<title>Colour audit</title>
	</head>
	<body>
		<header class="build">
			<h1 class="build">Colour audit</h1>
			<p>
				Audit your css colours: How many have you used? How consistent
				are they? Where are they?
			</p>
		</header>
		<main>
			<div class="side build">
				side
				<form>
					<!-- could also make a drag and drop surface -->
					<input
						type="file"
						id="file-selector"
						accept=".jpg, .jpeg, .png" />
					<button id="submitButton" onclick="getFile()">
						Submit
					</button>
				</form>
			</div>
			<div class="content build">
				content
				<table>
					<thead>
						<th>Colour</th>
						<th>Peek</th>
						<th>Location</th>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		</main>
		<footer class="build">footer</footer>
	</body>
</html>
`;
console.log(file.length);
let finds = "buttock Buttock bollock buttock jez jez jiminy";
console.log(finds.match(/ock/));

function findThem() {
	let haystack = "I learned to play the Ukulele in Lebanon.";
	let needle = "le";
	let pos = 0; // Position Ref
	let result = []; // Final output of all index's.
	let hayStackLower = haystack.toLowerCase();

	// Loop to check all occurrences
	while (hayStackLower.indexOf(needle, pos) != -1) {
		result.push(hayStackLower.indexOf(needle, pos));
		pos = hayStackLower.indexOf(needle, pos) + 1;
	}

	console.log("Final ", result); // Returns all indexes or empty array if not found
}
findThem("5");

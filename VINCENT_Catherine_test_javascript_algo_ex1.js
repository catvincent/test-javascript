//array of 9 boxes out of 9 : first dimension
var to_verity = new Array(9);
// second dimention
for ( let i = 0; i < 9; i++ )
{
    to_verity[i] = new Array(9);
}

// read the given 9 length array 
// and fill in the to_verify array with its content
function f11 (arr) {
	for ( let i = 0; i < 9; i++ ) {
		const myArray = arr[i].split(" ");
		for ( let j = 0; j < 9; j++ ) {
			to_verity[i][j] = myArray[j];
		}
	}
}

// draw 9 rows x 9 columns html table 
// and display to_verify array content into it
function f12 () {
	let htmlTable ="<table>";
	for ( let i = 0; i < 9; i++ ) {
		htmlTable += "<tr>";
		for ( let j = 0; j < 9; j++ ) {
			htmlTable = htmlTable + "<td> " + to_verity[i][j] + " </td>";
		}
		htmlTable += "</tr>";
	}
	htmlTable += "</table>";
	document.getElementById('maGrille').innerHTML = htmlTable;
}

var output = "";
for (var i = 0; i < 6; i++) {
	for (var j = 0; j < 4; j++) {
		output += i * j + " ";
	}
	output += "<br>";
}

document.getElementById("table").innerHTML = output;
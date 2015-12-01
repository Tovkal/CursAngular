function checkYear(year) {
	if (parseInt(year) && parseInt(year) == new Date().getFullYear()) {
		alert("Ese es el año actual");
	} else {
		alert("Ese no es el año actual");
	}
}
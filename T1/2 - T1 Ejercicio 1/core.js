/*// (1+3+6+8+4)/5 = 4,4
var total = 0;
for (var i = 0; i < 5; i++) {
	var numero = prompt("Introduce un número");
	if (parseInt(numero)) {
		total += parseInt(numero);
	}
}

alert("La suma total es:" + total/5);

// Ejercicio 2

// (1+3+6+8+4)/5 = 4,4
var numeros = [];
for (var i = 0; i < 5; i++) {
	var numero = prompt("Introduce un número");
	if (parseInt(numero)) {
		numeros.push(parseInt(numero));
	}
}

var total = 0;
for (var i = 0; i < numeros.length; i++) {
	total += numeros[i];
}

alert("La suma total es:" + total/5);*/

// Ejercicio 3
function cambiarImagen(obj){
	switch(obj.id) {
		case "boton1":
		document.getElementById("imagen").setAttribute('src', 'http://www.arearural.es/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/patatas_de_siembra_1_2.jpg');
		break;
		case "boton2":
		document.getElementById("imagen").setAttribute('src', 'http://buyersguide.caranddriver.com/media/assets/submodel/6912.jpg');
		break;
		case "boton3":
		document.getElementById("imagen").setAttribute('src', 'data:image/jpeg;base64,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');
		break;
		default:
		break;
	}
}
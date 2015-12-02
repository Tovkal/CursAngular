app.value('porcentajeDescuento', 0.8);

app.factory('calculoDescuento', function(porcentajeDescuento) {
	return function(numero) {
		return numero * porcentajeDescuento;
	};
});
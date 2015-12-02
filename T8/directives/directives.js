app.directive('mensaje', function() {
	return function(scope, element, attrs) {
		var opciones = scope.$eval(attrs.mensaje);
		var resultado = opciones.caracter + opciones.texto +
			opciones.caracter;
		element.text(resultado);
	};
});

app.directive('eliminaLetra', function() {
	return function(scope, element, attrs) {
		element.text(element.text().replace(attrs.eliminaLetra, ''));
	};
});

app.directive('descuento', function(calculoDescuento) {
	return function(scope, element, attrs) {
		var precio = scope.$eval(attrs.descuento);
		var precioDescuento = calculoDescuento(precio);
		element.html(precioDescuento);
	};
});

app.directive('factorial', function(CalculadoraService) {
	return {
		link: function(scope, element, attrs) {
			scope.original = attrs.factorial;
			scope.result = CalculadoraService.factorial(attrs.factorial).valueOf();
		},
		restrict: 'E',
		template: "<span>Factorial de {{original}} = {{result}}</span>"
	};
});
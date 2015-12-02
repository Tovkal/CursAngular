app.controller('ContadorController', function($scope, maritrini) {
	$scope.cont = maritrini;
	$scope.incrementarContador = function() {
		$scope.cont.num++;
	};
});

app.controller('CalculadoraController', function($scope, CalculadoraService) {
	$scope.calcularCuadrado = function() {
		$scope.respuesta = CalculadoraService.cuadrado($scope.num);
	};

	$scope.calcularCubo = function() {
		$scope.respuesta = CalculadoraService.cubo($scope.num);
	};
});
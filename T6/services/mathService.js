app.service('MathService', function() {
	this.suma = function(a, b) {
		return a + b;
	};
	this.resta = function(a, b) {
		return a - b;
	};
	this.multiplicacion = function(a, b) {
		return a * b;
	};
	this.division = function(a, b) {
		return a / b;
	};
});

app.service('CalculadoraService', function(MathService) {
	this.cuadrado = function(a) {
		return MathService.multiplicacion(a, a);
	};
	this.cubo = function(a) {
		return MathService.multiplicacion(MathService.multiplicacion(a, a), a);
	};
});
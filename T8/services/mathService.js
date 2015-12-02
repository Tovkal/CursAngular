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
	this.factorial = function(a) {
		var f = [new BigNumber("1"), new BigNumber("1")];
		var i = 2;

		function factorial(n) {
			if (typeof f[n] != 'undefined')
				return f[n];
			var result = f[i - 1];
			for (; i <= n; i++)
				f[i] = result = result.multiply(i.toString());
			return result;
		}
		return factorial(a);

	};
});
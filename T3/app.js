// var app = angular.module('app', []);

// app.config(['$controllerProvider',
// 	function($controllerProvider) {
// 		$controllerProvider.allowGlobals();
// 	}
// ]);

// function OcultarController($scope) {
// 	$scope.oculto = true;

// 	$scope.cambioColor = function() {
// 		$scope.oculto = !$scope.oculto;
// 	};
// }

// function SumarController($scope) {
// 	$scope.operando1 = 0;
// 	$scope.operando2 = 0;

// 	$scope.valores = [1, 2, 3, 4, 5];
// 	$scope.sumar = function() {
// 		return $scope.operando1 + $scope.operando2;
// 	};
// }

var app = angular.module('app', []);
var app2 = angular.module('appatata', []);

app.controller('OcultarController', OcultarController);
app.controller('SumarController', SumarController);
app2.controller('MainController', MainController);

function OcultarController($scope) {
	$scope.oculto = true;

	$scope.cambioColor = function() {
		$scope.oculto = !$scope.oculto;
	};
}

function SumarController($scope) {
	$scope.valores = [1, 2, 3, 4, 5];
	$scope.sumar = function() {
		return $scope.operando1 + $scope.operando2;
	};
}

function MainController($scope) {
	$scope.oculto = true;

	$scope.entraMouse = function($event) {
		console.log("Entra el raton");
	};

	$scope.saleMouse = function($event) {
		console.log("Sale el raton");
	};

	$scope.clickMouse = function($event) {
		console.log("Click en la coodenadas (x:" + $event.clientX + ", y:" + $event.clientY + ")");
	};
}
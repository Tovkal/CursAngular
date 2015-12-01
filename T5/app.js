angular.module('app', []);
angular.module('app').controller('TemarioController', function($scope) {
	$scope.temas = [{
		nombre: "Tema 1",
		capitulos: [{
			nombre: 'Capitulo 1.1'
		}, {
			nombre: 'Capitulo 1.2'
		}]
	}, {
		nombre: "Tema 2",
		capitulos: [{
			nombre: 'Capitulo 2.1'
		}, {
			nombre: 'Capitulo 2.2'
		}]
	}, ];
});

angular.module('app').controller('CallbackController', function($scope) {
	$scope.tareas = [{
		id: 1,
		desc: "Hacer la compra"
	}, {
		id: 2,
		desc: "Sacar al perro"
	}, {
		id: 3,
		desc: "Recoger la ropa"
	}, {
		id: 4,
		desc: "Arreglar ordenador"
	}];

	$scope.eliminarTarea = function(index) {
		$scope.tareas.splice(index, 1);
	};
});
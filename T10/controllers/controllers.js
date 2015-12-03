app.controller('TiempoController', function($scope, $http) {
	$scope.getTiempo = function() {
		$scope.estado = "Cargando...";
		$http.get("http://api.openweathermap.org/data/2.5/weather?q=" +
				$scope.ciudad + ",es&units=metric&lang=es&APPID=f3b29072300b6b4e88ea2d4319b0b231")
			.then(function(response) {console.log("success");
				console.log(response);
				$scope.temperatura = parseInt(response.data.main.temp_max);
				$scope.icono = response.data.weather[0].icon;
				console.log(response.data.weather[0].icon);
				console.log(response.data.weather[0]);
				$scope.descripcion = response.data.weather[0].description;
				$scope.latitud = parseFloat(response.data.coord.lat);
				$scope.longitud = parseFloat(response.data.coord.lon);
			}, function(response) {
				console.log("Error:");
				console.log(response);
				//función que se ejecuta cuando obtenemos error
			});
	};
});
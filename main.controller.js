angular.module('AngularBasic')
    .controller('MainController', function($scope, $http){
        this.test = "Hola Mundo";
        $scope.name = 'Gato';
        $scope.name2 = 'perro';
        $scope.showp = false;
        $scope.city = '';
        $scope.cities = ['Medellin', 'Bogota', 'NewYork'];
        $scope.currentWeather = {};
        $scope.currentDate = new Date();
        $scope.money = 3000;
        $scope.phone = 321312443;
        $scope.getBanana = getWheather;
        //Promise


        function getWheather (){
         $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.city +'&appid=2de143494c0b295cca9337e1e96b00e0')
         .then(function(response){
             $scope.currentWeather = response.data;
         }, function(error){
             console.log(error);
         });
        }

    });
// Define the `phonecatApp` module
var pizzaApp = angular.module('pizzaApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
pizzaApp.controller('PizzaListController', function PizzaListController($scope) {
  $scope.pizzas = [
    {
      name: 'Papa John\'s',
      snippet: 'Fat just got fatter with Papa John\'s',
      price: 100000002
    }, {
      name: 'Papa Gino\'s',
      snippet: 'The Next, Next Generation pizza table.',
      price: 120
    }, {
      name: 'Pizza Hut',
      snippet: 'The Next, Next pizza slice.',
      price: 1200
    }, {
      name: 'Domino\'s',
      snippet: 'Gimme dat pizza, bitch.',
      price: 10002
    }
  ];
});

/*
// Define the `PhoneListController` controller on the `phonecatApp` module
pizzaApp.controller('PizzaListController', function PizzaListController($scope, $http) {
  console.log("hey1");
  $http.get("./pizza.json").then(function(response) {
    console.log("hey2");
    $scope.pizzas = response.data;
  });
  
});
*/
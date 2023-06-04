(function () {
    'use strict';

    angular.module('LunchCheck', [])    
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.textValue = '';
        $scope.placeholderText = 'Enter something';
        $scope.buttonClicked = function() {
          console.log('Button clicked!');
          var itemList = $scope.textValue.split(',');
          var itemCount = 0;
          for (var i = 0; i < itemList.length; i++) {
            if (itemList[i].trim() !== '') {
              itemCount++;
            }
          }
      
          if (itemCount === 0) {
            $scope.message = 'Please enter data first';
          } else if (itemCount <= 3) {
            $scope.message = 'Enjoy!';
          } else {
            $scope.message = 'Too much!';
          }
        };  
    }
})();
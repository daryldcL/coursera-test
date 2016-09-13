(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope)
{
  $scope.message = "";
  $scope.checkIfTooMuch = function(){
    SetMessageAndColor();
  };

  function SetMessageAndColor()
  {
    if(!$scope.lunchItems)
    {
      $scope.message = "Please enter data first";
      SetColors("red");
      return;
    }

    var items = $scope.lunchItems.split(",");

    if(items.length > 3)
    {
      $scope.message = "Too Much!";
    }
    else {
      $scope.message = "Enjoy!";
    }

    SetColors("green");
  };

  function SetColors(color)
  {
    $scope.messageColor = {"color": color};
    $scope.textBoxBorderColor = {"border-color": color};
  }
};

})();

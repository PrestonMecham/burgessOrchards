// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("homeCtrl", function($scope) {

  // VARIABLES
  // ============================================================

  $scope.myInterval = 60000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
      {
        image: "../assets/img/carousel/01.jpg",
        id: "01"
      },
      {
        image: "../assets/img/carousel/02.jpg",
        id: "02"
      },
      {
        image: "../assets/img/carousel/03.jpg",
        id: "03"
      },
      {
        image: "../assets/img/carousel/04.jpg",
        id: "04"
      },
    ];
    var currIndex = 0;

  // FUNCTIONS
  // ============================================================


});

// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("adminCtrl", function($scope, $state, $rootScope) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================

  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      var aac;
      if (aac = toState && toState.params && toState.params.autoActivateChild) {
          $state.go(aac);
      }
  });

});
